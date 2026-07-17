# Revit/Dynamo - Apply DWG sublayer overrides to VIEW TEMPLATES
# Revit 2025 / Dynamo Python
#
# IN[0]: template_filter
#        Examples: CS Details 6" or Details
#
# IN[1]: gray_layers
#        DWG layer names to override with the RGB value below
#        Accepts multiline, comma-separated, or semicolon-separated text
#
# IN[2]: off_layers
#        DWG layer names to turn OFF completely
#        Accepts multiline, comma-separated, or semicolon-separated text
#
# IN[3]: on_layers
#        DWG layer names to turn ON and reset to No Override
#        Clears color, pattern, weight, halftone, transparency, and
#        other category graphic overrides stored in the view template
#        Accepts multiline, comma-separated, or semicolon-separated text
#
# Processing order: GRAY, OFF, ON
# Therefore, ON wins if a layer is accidentally listed in both OFF and ON.

import clr
import re
import traceback

clr.AddReference("RevitAPI")
clr.AddReference("RevitServices")

from Autodesk.Revit.DB import *
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager
from System import Convert

doc = DocumentManager.Instance.CurrentDBDocument


# ------------------------------------------------------------
# SETTINGS
# ------------------------------------------------------------

GRAY_RED = 180
GRAY_GREEN = 180
GRAY_BLUE = 180


# ------------------------------------------------------------
# HELPERS
# ------------------------------------------------------------

def to_list_text(text):
    output = []

    if not text:
        return output

    for raw in re.split(r"[\r\n,;]+", str(text)):
        name = raw.strip()

        if not name or name.startswith("#"):
            continue

        output.append(name)

    return output


def variants(name):
    output = set()

    if not name:
        return output

    output.add(name)

    # Account for DETL/DELT spelling variations.
    if "DETL-" in name.upper():
        output.add(re.sub("DETL-", "DELT-", name, flags=re.IGNORECASE))

    if "DELT-" in name.upper():
        output.add(re.sub("DELT-", "DETL-", name, flags=re.IGNORECASE))

    return output


def expand_names(names):
    output = set()

    for name in names:
        for variant_name in variants(name):
            output.add(variant_name)

    return output


def name_key(name):
    if not name:
        return ""

    return str(name).strip().upper()


def element_id_value(element_id):
    try:
        return element_id.IntegerValue
    except:
        try:
            return element_id.Value
        except:
            return str(element_id)


def find_templates(filter_text):
    all_templates = [
        view
        for view in FilteredElementCollector(doc).OfClass(View)
        if view.IsTemplate
    ]

    if not filter_text or not str(filter_text).strip():
        return []

    filter_value = str(filter_text).strip().lower()

    exact_matches = [
        view
        for view in all_templates
        if view.Name and view.Name.lower() == filter_value
    ]

    if exact_matches:
        return exact_matches

    return [
        view
        for view in all_templates
        if view.Name and filter_value in view.Name.lower()
    ]


def get_all_import_instances():
    return list(FilteredElementCollector(doc).OfClass(ImportInstance))


def get_import_name(import_instance):
    try:
        if import_instance.Name:
            return import_instance.Name
    except:
        pass

    try:
        parameter = import_instance.get_Parameter(
            BuiltInParameter.IMPORT_SYMBOL_NAME
        )

        if parameter and parameter.AsString():
            return parameter.AsString()
    except:
        pass

    try:
        import_type = doc.GetElement(import_instance.GetTypeId())

        if import_type and import_type.Name:
            return import_type.Name
    except:
        pass

    try:
        return "<Unnamed Import {}>".format(
            element_id_value(import_instance.Id)
        )
    except:
        return "<Unnamed Import>"


def get_sublayers(import_instance):
    output = []

    try:
        category = import_instance.Category
    except:
        category = None

    if not category:
        return output

    try:
        subcategories = category.SubCategories
    except:
        subcategories = None

    if subcategories is None:
        return output

    try:
        iterator = subcategories.ForwardIterator()
        iterator.Reset()

        while iterator.MoveNext():
            subcategory = iterator.Current

            try:
                output.append((subcategory.Name, subcategory))
            except:
                pass
    except:
        pass

    return output


def make_gray_color():
    red = Convert.ToByte(GRAY_RED)
    green = Convert.ToByte(GRAY_GREEN)
    blue = Convert.ToByte(GRAY_BLUE)

    return Color(red, green, blue)


def verify_gray_override(template_view, category):
    applied_settings = template_view.GetCategoryOverrides(category.Id)
    applied_color = applied_settings.ProjectionLineColor

    actual_red = int(applied_color.Red)
    actual_green = int(applied_color.Green)
    actual_blue = int(applied_color.Blue)

    if (
        actual_red != GRAY_RED or
        actual_green != GRAY_GREEN or
        actual_blue != GRAY_BLUE
    ):
        raise Exception(
            "Color verification failed. Revit reports RGB {}-{}-{}".format(
                actual_red,
                actual_green,
                actual_blue
            )
        )

    return "RGB {}-{}-{}".format(
        actual_red,
        actual_green,
        actual_blue
    )


def apply_gray(template_view, category, gray_color):
    # Gray layers are also made visible.
    template_view.SetCategoryHidden(category.Id, False)

    # Preserve existing pattern and line weight overrides.
    override_settings = template_view.GetCategoryOverrides(category.Id)
    result = override_settings.SetProjectionLineColor(gray_color)

    if result is not None:
        override_settings = result

    template_view.SetCategoryOverrides(category.Id, override_settings)

    return verify_gray_override(template_view, category)


def apply_off(template_view, category):
    template_view.SetCategoryHidden(category.Id, True)
    return template_view.GetCategoryHidden(category.Id)


def apply_on(template_view, category):
    # First clear every category graphic override by replacing the
    # current settings with a new, empty OverrideGraphicSettings object.
    template_view.SetCategoryOverrides(
        category.Id,
        OverrideGraphicSettings()
    )

    # Category visibility is stored separately, so explicitly turn it on.
    template_view.SetCategoryHidden(category.Id, False)

    return not template_view.GetCategoryHidden(category.Id)


# ------------------------------------------------------------
# MAIN
# ------------------------------------------------------------

try:
    template_filter = IN[0] if len(IN) > 0 else ""
    gray_text = IN[1] if len(IN) > 1 else ""
    off_text = IN[2] if len(IN) > 2 else ""
    on_text = IN[3] if len(IN) > 3 else ""

    gray_names = expand_names(to_list_text(gray_text))
    off_names = expand_names(to_list_text(off_text))
    on_names = expand_names(to_list_text(on_text))

    gray_name_keys = set(name_key(name) for name in gray_names)
    off_name_keys = set(name_key(name) for name in off_names)
    on_name_keys = set(name_key(name) for name in on_names)

    templates = find_templates(template_filter)

    if not templates:
        OUT = {
            "Error": "No view templates found matching '{}'".format(
                template_filter
            )
        }
    else:
        gray_color = make_gray_color()
        import_instances = get_all_import_instances()

        gray_targets = []
        off_targets = []
        on_targets = []
        seen_categories = set()

        # Find matching DWG sublayers across all imports.
        for import_instance in import_instances:
            import_name = get_import_name(import_instance)

            for layer_name, subcategory in get_sublayers(import_instance):
                category_key = (
                    import_name,
                    layer_name,
                    element_id_value(subcategory.Id)
                )

                if category_key in seen_categories:
                    continue

                seen_categories.add(category_key)
                layer_key = name_key(layer_name)
                target = (import_name, layer_name, subcategory)

                if layer_key in gray_name_keys:
                    gray_targets.append(target)

                if layer_key in off_name_keys:
                    off_targets.append(target)

                if layer_key in on_name_keys:
                    on_targets.append(target)

        gray_found_keys = set(name_key(item[1]) for item in gray_targets)
        off_found_keys = set(name_key(item[1]) for item in off_targets)
        on_found_keys = set(name_key(item[1]) for item in on_targets)

        gray_missing = sorted([
            name for name in gray_names
            if name_key(name) not in gray_found_keys
        ])

        off_missing = sorted([
            name for name in off_names
            if name_key(name) not in off_found_keys
        ])

        on_missing = sorted([
            name for name in on_names
            if name_key(name) not in on_found_keys
        ])

        on_wins_conflicts = sorted([
            name for name in on_names
            if name_key(name) in off_name_keys
        ])

        TransactionManager.Instance.EnsureInTransaction(doc)

        per_template_results = []
        total_gray_applied = 0
        total_off_applied = 0
        total_on_applied = 0
        all_failures = []

        for template in templates:
            gray_applied_here = []
            off_applied_here = []
            on_applied_here = []
            failed_here = []

            # 1. Apply the gray color and make those layers visible.
            for import_name, layer_name, subcategory in gray_targets:
                try:
                    verified_color = apply_gray(
                        template,
                        subcategory,
                        gray_color
                    )

                    gray_applied_here.append(
                        "{} :: {} -> {}".format(
                            import_name,
                            layer_name,
                            verified_color
                        )
                    )
                    total_gray_applied += 1
                except Exception as gray_error:
                    failure_message = "GRAY failed: {} :: {} - {}".format(
                        import_name,
                        layer_name,
                        str(gray_error)
                    )
                    failed_here.append(failure_message)
                    all_failures.append(
                        "{} :: {}".format(template.Name, failure_message)
                    )

            # 2. Turn OFF the requested layers.
            for import_name, layer_name, subcategory in off_targets:
                try:
                    if apply_off(template, subcategory):
                        off_applied_here.append(
                            "{} :: {}".format(import_name, layer_name)
                        )
                        total_off_applied += 1
                    else:
                        raise Exception(
                            "Revit reports that the layer is still visible."
                        )
                except Exception as off_error:
                    failure_message = "OFF failed: {} :: {} - {}".format(
                        import_name,
                        layer_name,
                        str(off_error)
                    )
                    failed_here.append(failure_message)
                    all_failures.append(
                        "{} :: {}".format(template.Name, failure_message)
                    )

            # 3. Clear overrides and turn ON the requested layers last,
            #    so ON wins conflicts with GRAY or OFF.
            for import_name, layer_name, subcategory in on_targets:
                try:
                    if apply_on(template, subcategory):
                        on_applied_here.append(
                            "{} :: {}".format(import_name, layer_name)
                        )
                        total_on_applied += 1
                    else:
                        raise Exception(
                            "Revit reports that the layer is still hidden."
                        )
                except Exception as on_error:
                    failure_message = "ON failed: {} :: {} - {}".format(
                        import_name,
                        layer_name,
                        str(on_error)
                    )
                    failed_here.append(failure_message)
                    all_failures.append(
                        "{} :: {}".format(template.Name, failure_message)
                    )

            per_template_results.append({
                "Template": template.Name,
                "GrayAppliedCount": len(gray_applied_here),
                "OffAppliedCount": len(off_applied_here),
                "OnAppliedCount": len(on_applied_here),
                "GrayApplied": gray_applied_here,
                "OffApplied": off_applied_here,
                "OnApplied": on_applied_here,
                "Failures": failed_here
            })

        TransactionManager.Instance.TransactionTaskDone()

        OUT = {
            "RequestedColor": "RGB {}-{}-{}".format(
                GRAY_RED,
                GRAY_GREEN,
                GRAY_BLUE
            ),
            "TemplateFilter": template_filter,
            "TemplatesMatched": [template.Name for template in templates],
            "GrayRequestedList": sorted(list(gray_names)),
            "OffRequestedList": sorted(list(off_names)),
            "OnRequestedList": sorted(list(on_names)),
            "GrayMatchingImportSubcategoriesCount": len(gray_targets),
            "OffMatchingImportSubcategoriesCount": len(off_targets),
            "OnMatchingImportSubcategoriesCount": len(on_targets),
            "GrayAppliedAndVerifiedCountTotal": total_gray_applied,
            "OffAppliedCountTotal": total_off_applied,
            "OnAppliedCountTotal": total_on_applied,
            "GrayMissing": gray_missing,
            "OffMissing": off_missing,
            "OnMissing": on_missing,
            "OnWinsOverOffConflicts": on_wins_conflicts,
            "Failures": all_failures,
            "PerTemplateResults": per_template_results,
            "Note": (
                "Processing order is GRAY, OFF, ON. The ON input clears "
                "all category graphic overrides and then turns the layer on."
            )
        }

except Exception as ex:
    try:
        TransactionManager.Instance.ForceCloseTransaction()
    except:
        pass

    OUT = {
        "Error": str(ex),
        "Traceback": traceback.format_exc()
    }
