const workflowCategories = [
  {
    title: "Project Setup",
    tools: [
      ["Project Setup From Excel", "Uses the standard project setup workbook to populate project information and create or update the required Revit setup content. The result is a prepared project with the specified families, materials, wall types, worksets, levels, and plan views where applicable."],
    ],
  },
  {
    title: "Views and Sheet Creation",
    tools: [
      ["Create Plan Views and Sheets", "Uses selected source views, levels, view types, templates, and sheet settings to build the standard plan-view set. The resulting views are named, assigned the appropriate template, placed on newly created sheets, and arranged using the established layout."],
      ["Create Sheets", "Takes a title block and reviewed sheet information such as sheet number and name. It creates the selected sheets after showing the proposed list so the entries can be checked before committing."],
      ["Duplicate Elevation Views", "Takes selected elevation views plus the desired view type, template, and naming information. It creates the requested duplicates and applies the selected view settings to the new elevation views."],
      ["Set Sheet Titles", "Takes selected sheets and a CSV containing view names, titles, and architectural references. It matches the placed views by name, then updates their Title on Sheet and Arch Ref values."],
    ],
  },
  {
    title: "Schedules",
    tools: [
      ["Duplicate Schedules", "Takes a base schedule and reads the unique Part Numbers found on Generic Models in the project. It creates a filtered copy of the schedule for each part number while skipping schedule names that already exist."],
    ],
  },
  {
    title: "Callouts",
    tools: [
      ["Create Wall Plan Callouts", "Takes walls selected in a plan view along with a callout type, view template, and name suffix. It creates cropped plan callouts around those walls and avoids creating another callout when the matching wall comment has already been used."],
      ["Create Wall Elevation Callouts", "Takes walls selected in an elevation or section view and the desired callout view settings. It creates cropped wall-elevation callouts, applies the selected template, and avoids duplicate callouts for matching wall comments."],
      ["Create Wall Embed Plan Callouts", "Takes selected walls and creates partial top-embed plan callouts around them. The resulting views are named from the wall information and prepared with the intended crop and annotation settings."],
    ],
  },
  {
    title: "Sections",
    tools: [
      ["Create Unit Section Cuts", "Takes a selected curtain wall, a section view type and template, and the unit panel families to process. It previews and creates one cross-section at the selected unit conditions, using the supplied vertical padding and section-head placement settings."],
    ],
  },
  {
    title: "Rotate Crops",
    tools: [
      ["Rotate Crops by View Template", "Takes a view template and a checked list of matching plan views. It rotates and refits the crop regions so the selected wall orientation is presented consistently in those views."],
      ["Rotate Current Crop 90° Counterclockwise", "Uses the active plan view as its input. It rotates that view’s crop region 90 degrees counterclockwise and refits the crop around the visible content."],
      ["Rotate Current Crop 180°", "Uses the active plan view as its input. It turns the crop region 180 degrees and refits it to the view content."],
      ["Rotate Current Crop 90° Clockwise", "Uses the active plan view as its input. It rotates that view’s crop region 90 degrees clockwise and refits the crop around the visible content."],
    ],
  },
  {
    title: "Dimensioning Grids and Levels",
    tools: [
      ["Dimension Grids in Current Floor Plan", "Takes the active floor plan and a selected dimension style. It groups visible parallel grids by direction and places dimension strings across every valid group in that view."],
      ["Dimension Grids in Selected Floor Plans", "Takes a selected dimension style and a checked list of floor plans. It applies the grid-dimensioning logic to each chosen view, with a preview available before processing the full selection."],
      ["Dimension Grids and Levels in Elevations", "Takes elevation views selected by view template plus chosen grid and level dimension styles. It dimensions the visible grids and levels when at least two valid references are present in a view."],
    ],
  },
  {
    title: "Dimensioning Floor Plans",
    tools: [
      ["Dimension One Wall in Plan", "Takes one selected curtain wall in the active plan view along with dimension styles and adjustable offsets. It previews and creates the selected R.O., FD, DLO, module, glass, door-opening, and related unit dimensions using only the visible wall components."],
      ["Dimension All Walls in Plan Views", "Takes a view template, a checked list of matching plan views, and the desired dimension settings. It previews one selected view, then applies the single-wall plan-dimensioning logic to the visible curtain walls in all approved views."],
      ["Dimension Embeds on One Wall in Plan", "Takes one selected curtain wall and the desired embed dimension styles and offsets. It places overall and center-reference dimensions for the visible embeds hosted by that wall."],
      ["Dimension Parapets in Plan", "Takes a selected parapet curtain wall and the required dimension styles. It creates centerline, rough-opening, net-panel, and panel-joint dimensions from the visible parapet components."],
      ["Dimension Outriggers", "Takes a selected curtain wall and dimension settings for the rough opening, frame, and module locations. It places the corresponding plan dimensions across the outrigger wall condition."],
      ["Dimension Panels", "Takes a selected curtain wall containing panel families and the desired dimension styles. It places panel-width, centerline, and overall rough-opening dimensions using the visible panel references."],
      ["Add Text Below Dimensions", "Takes the target dimension elements and a standard note value. It adds the required text beneath those dimensions without rebuilding the dimension strings."],
    ],
  },
  {
    title: "Dimensioning Elevations",
    tools: [
      ["Dimension One Wall in Elevation", "Takes one curtain wall in the active elevation or section plus chosen dimension groups, styles, and offsets. It previews and creates the selected R.O., FD, DLO, mullion, glass, door, grid, and level dimensions using references visible in that view."],
      ["Dimension All Walls in Elevation Views", "Takes a view template, checked elevation or section views, and the desired dimension settings. It previews one view, then applies the single-wall elevation logic to each visible curtain wall in the approved views."],
    ],
  },
  {
    title: "Dimensioning Sections",
    tools: [
      ["Dimension One Wall in Section", "Takes a selected curtain wall in the active section and the desired styles for frame, DLO, glass, door, system-face, rough-opening, stack, and level dimensions. It places the valid dimension groups around that wall condition."],
      ["Dimension All Walls in Sections", "Takes section views selected by view template and the desired dimension styles. It applies the section-dimensioning setup to every valid visible wall in those views."],
    ],
  },
  {
    title: "Tagging",
    tools: [
      ["Tag Infills in Current Elevation", "Takes the active elevation, a Material Tag family and type, and either a center or bottom-right placement option. It previews and tags visible untagged infills, using adjustable paper-space offsets for bottom-right placement."],
      ["Tag Infills by Elevation Template", "Takes an elevation view template, checked matching views, a Material Tag family and type, and the desired placement option. It previews one view and then places the infill tags in all approved views while skipping elements already tagged."],
      ["Tag Doors in Current Elevation", "Takes the active elevation and a selected door tag type. It finds visible infills whose IsDoor value is checked and places their tags at the center of each door."],
      ["Tag Units in Current View", "Takes the target elevation view or views and a selected unit tag type. It places centered tags on the qualifying unit instances found in those views."],
      ["Tag Walls by View Template", "Takes a floor-plan view template, checked matching views, a wall tag type, and an adjustable offset. It places tags on the visible curtain walls in each selected view."],
      ["Tag Doors in Floor Plans by View Template", "Takes a floor-plan view template and the desired door tag type. It finds the visible doors in matching views and places the selected tags at the intended plan-view locations."],
      ["Tag Glass in Floor Plans by View Template", "Takes a floor-plan view template and the desired glass tag type. It tags qualifying visible glass elements in the matching floor plans using the established placement direction."],
      ["Tag Embeds by View Template", "Takes a view template, matching views, and an embed tag type. It finds visible elements marked as embeds and places their tags with the configured offset."],
      ["Tag Embeds in Current View", "Takes the active view and an embed tag type. It tags the qualifying visible embed elements at calculated positions in that view."],
    ],
  },
  {
    title: "Details",
    tools: [
      ["Create Drafting Views from DWGs", "Takes a folder of DWG details plus the desired drafting-view type and view template. It creates or reuses the drafting-view type, imports the drawings into new drafting views, and applies the chosen template."],
      ["Renumber Details on Selected Sheets", "Takes a checked list of sheets and reviews the viewports placed on them. It assigns clean, sequential detail numbers on each selected sheet without relying on a sheet-number prefix."],
      ["Create Elevation Detail Bubbles", "Takes visible mullions in an elevation and the available matching drafting details. It places reference detail bubbles at the applicable mullion conditions so the view points to the correct drafting detail."],
      ["Create Plan Detail Bubbles", "Takes visible mullions in a plan view and the available matching drafting details. It places the corresponding reference detail bubbles at the valid plan conditions."],
      ["Create Embed Plan Detail Bubbles", "Takes visible embeds or anchors in selected plan views and the matching detail references. It places reference bubbles at the applicable embed locations."],
      ["Create Section Detail Bubbles", "Takes visible mullion conditions in a section view and the matching drafting details. It creates reference detail bubbles that direct the section to the appropriate detail views."],
      ["Turn Detail Layers On or Off", "Takes a view template and a named DWG layer. It changes that imported layer’s visibility in the template so the setting carries through to views controlled by that template."],
    ],
  },
  {
    title: "Colorize",
    tools: [
      ["Color Mullions", "Uses the active view and colors Generic Model mullion families so different mullion types can be checked visually. Running the tool again restores the original view graphics, and a legend identifies the color assignments."],
      ["Color Units by System", "Uses the active view and groups visible units by their System value. It assigns a temporary color to each system and displays a legend explaining which system each color represents."],
    ],
  },
  {
    title: "Data Assignment",
    tools: [
      ["Assign Unit System Values", "Reads system information from the host curtain walls or roofs and applies it to their related units and components. The result is consistent System data on the project elements used for tagging, scheduling, and color checking."],
      ["Assign Adaptive Unit System Values", "Reads the system value associated with adaptive units and their related glass, mullions, and louvers. It writes the matching system information onto those adaptive components for consistent project data."],
      ["Set Unit Bites", "Processes unit families across the project and reads the applicable glass-offset values from their surrounding mullions. It writes those values into the corresponding infill and door bite parameters, while listing any family condition that is too ambiguous to change safely."],
      ["Assign Glass Marks", "Finds qualifying glass instances and groups them by their relevant size and configuration. It assigns consistent glass mark values and reports the marks applied."],
      ["Assign Component Marks", "Finds glass, backpans, louvers, regular panels, adaptive panels, and unit instances. It assigns the appropriate Mark or Panel ID values so those components can be identified consistently in schedules and documentation."],
      ["Assign Labor Unit Numbers", "Reads unit size, lite count, door conditions, and infill types such as glass, backpan, and shadowbox. It combines those inputs into the appropriate labor or sales unit number for each qualifying unit."],
      ["Assign Glazed-In Panel IDs", "Finds the relevant glass and backpan elements in glazed-in panel conditions. It assigns consistent ID values so those panels and infills can be tracked separately."],
      ["Assign Unit Mark Numbers", "Collects unit data and generates standardized mark numbers while ignoring configured non-identifying parameters. It writes the marks to the units and prepares the associated mark-number information for the project workbook."],
      ["Place Extrusion's Section Properties", "Takes selected extrusion section-property drafting views, a base sheet, a viewport type, and layout settings. It creates or reuses sheets as needed and places the views into an organized grid while skipping views that are already placed."],
    ],
  },
  {
    title: "Clean and View Graphics",
    tools: [
      ["Prepare Template for Outside Work", "Processes annotation family names, annotation type names, and material names in the current project. It removes the CS naming so the template can be issued for non-CSE use without renaming the original family files on disk."],
      ["Clean Current Elevation", "Uses the active elevation or section view and applies the established cleanup rules to its visible model content. The result is a cleaner documentation view with unwanted categories or elements hidden as appropriate."],
      ["Clean Elevations by View Type", "Takes a view template and a checked list of matching elevation or section views. It applies the same cleanup rules across the selected views instead of processing them one at a time."],
      ["Clean Sections by View Template", "Takes a section view template and finds the section views using it. It applies the intended section cleanup settings across those matching views."],
      ["Move Level Heads Left in Current View", "Takes elevation or section views associated with a selected view template. It makes the left-side level bubbles visible and standardizes which end of each level displays its head."],
      ["Move Levels Left by View Template", "Takes a view template and an adjustable left offset, then finds the visible levels in the matching views. It previews and moves the view-specific level ends left of the wall content so the heads and labels do not overlap the units."],
    ],
  },
  {
    title: "Exporting",
    tools: [
      ["Export Schedules to Excel", "Takes a checked list of Revit schedules and a selected Excel or macro-enabled workbook. It exports each schedule to its own worksheet while preserving the workbook as the destination file."],
      ["Export Glass Pricing", "Reads the project’s glass-mark schedule and groups the pricing data by its required identifiers. It writes the results into the selected pricing workbook using separate, appropriately named worksheets."],
    ],
  },
  {
    title: "Family Management",
    tools: [
      ["Batch Load Families", "Takes source and target family folders and processes the applicable RFA files as a batch. It loads the selected family content into the target families and reports which files succeeded, were skipped, or need review."],
      ["Batch Load Multiple Generic Model Families", "Takes a folder containing several Generic Model families and a folder of target families. It loads the source families into each applicable target family as nested content and saves the updated family files."],
      ["Batch Load One Generic Model Family", "Takes one source Generic Model family and a folder of target families. It loads that single family into each applicable target and saves the processed files."],
      ["Batch Load Parameters and Formulas", "Takes a shared-parameter file and a folder of Revit families. It adds or updates the configured parameters and formulas across the family set, then reports files that could not be processed."],
      ["Load One Instance Parameter into Families", "Takes one shared parameter and a folder of family files. It adds that parameter as an instance parameter to each compatible family and saves the processed files."],
      ["Load One Parameter into Curtain Panel Families", "Takes one shared parameter and a folder of Curtain Panel families. It adds the parameter using the appropriate Curtain Panel family settings and saves the processed files."],
      ["Load One Parameter into Generic Model Families", "Takes one shared parameter and a folder of Generic Model families. It adds the parameter using the appropriate Generic Model family settings and saves the processed files."],
      ["Clear Family Update Backlog", "Takes a family folder that has been batch processed. It clears the generated backup and log backlog so the folder is ready for another controlled update run."],
      ["Add Descriptions", "Takes a parts CSV and selected drafting views whose names correspond to part numbers. It matches the records and writes the catalogue description into each view’s Part Description parameter."],
    ],
  },
  {
    title: "Importing",
    tools: [
      ["Create General Notes Page", "Takes the project setup workbook and the required Revit legend or sheet destinations. It imports project information, wind criteria, system descriptions, deflection criteria, abbreviations, and related note content into the General Notes setup."],
      ["Create General Notes Parts", "Takes project-specific parts data, manufacturer catalogue data, and the associated part-image folder. It builds or refreshes organized Revit legends containing matched part numbers, descriptions, graphic tables, and available reference images."],
      ["Create PNGs from Excel", "Takes the manufacturer parts workbook and a destination image folder. It creates PNG reference images from the applicable Excel content for use by the General Notes and parts legends."],
    ],
  },
  {
    title: "CAD and DWG Standards",
    tools: [
      ["Set DWG Line Weights by Layer", "Takes a detail view template and the configured DWG layer-to-graphics mapping. It assigns the intended line weights and related graphic settings to imported CAD layers so details display consistently in Revit."],
    ],
  },
  {
    title: "Adaptive Panels",
    tools: [
      ["Place Adaptive Panels", "Takes the selected adaptive-panel placement geometry and the appropriate three-, four-, or five-point family type. It places the matching adaptive panels using the available point configuration and reports conditions that cannot be resolved."],
    ],
  },
];

const workflowToolDemos = {
  "Project Setup From Excel": {
    src: "assets/tool-demos/project-setup-from-excel.mp4?v=2",
    poster: "assets/tool-demos/project-setup-from-excel-poster.jpg",
    label: "Project Setup From Excel workflow demonstration",
    caption: "Excel-to-Revit project setup workflow",
  },
  "Create Plan Views and Sheets": {
    src: "assets/tool-demos/create-plan-views-and-sheets.mp4",
    poster: "assets/tool-demos/create-plan-views-and-sheets-poster.jpg",
    label: "Create Plan Views and Sheets workflow demonstration",
    caption: "Automated plan view and sheet creation workflow",
  },
  "Duplicate Elevation Views": {
    src: "assets/tool-demos/duplicate-elevation-views.mp4",
    poster: "assets/tool-demos/duplicate-elevation-views-poster.jpg",
    label: "Duplicate Elevation Views workflow demonstration",
    caption: "Automated elevation view duplication workflow",
  },
  "Create Sheets": {
    src: "assets/tool-demos/create-sheets.mp4",
    poster: "assets/tool-demos/create-sheets-poster.jpg",
    label: "Create Sheets workflow demonstration",
    caption: "Automated sheet-series creation workflow",
  },
  "Dimension Grids in Current Floor Plan": {
    src: "assets/tool-demos/dimension-grids-current-floor-plan.mp4",
    poster: "assets/tool-demos/dimension-grids-current-floor-plan-poster.jpg",
    label: "Dimension Grids in Current Floor Plan workflow demonstration",
    caption: "Automated current-plan grid dimensioning workflow",
  },
  "Dimension One Wall in Plan": {
    src: "assets/tool-demos/single-wall-plan-view.mp4",
    poster: "assets/tool-demos/single-wall-plan-view-poster.jpg",
    label: "Dimension One Wall in Plan workflow demonstration",
    caption: "Automated single-wall plan dimensioning workflow",
  },
  "Tag Infills in Current Elevation": {
    src: "assets/tool-demos/tag-infills-current-elevation.mp4",
    poster: "assets/tool-demos/tag-infills-current-elevation-poster.jpg",
    label: "Tag Infills in Current Elevation workflow demonstration",
    caption: "Automated current-elevation infill tagging workflow",
  },
};

const workflowIndex = document.querySelector("[data-workflow-index]");
const workflowTotal = document.querySelector("[data-workflow-total]");

if (workflowTotal) {
  const totalTools = workflowCategories.reduce((total, category) => total + category.tools.length, 0);
  workflowTotal.textContent = `${totalTools} ${totalTools === 1 ? "Tool" : "Tools"}`;
}

if (workflowIndex) {
  workflowCategories.forEach((category, categoryIndex) => {
    const item = document.createElement("article");
    item.className = "workflow-index-item";
    const number = String(categoryIndex + 1).padStart(2, "0");
    const triggerId = `workflow-trigger-${number}`;
    const panelId = `workflow-panel-${number}`;
    const toolLabel = `${category.tools.length} ${category.tools.length === 1 ? "tool" : "tools"}`;

    const tools = category.tools.map(([name, description], toolIndex) => {
      const demo = workflowToolDemos[name];
      const demoMarkup = demo ? `
        <figure class="workflow-tool-demo">
          <video class="workflow-demo-video" autoplay muted loop playsinline preload="metadata" poster="${demo.poster}" aria-label="${demo.label}">
            <source src="${demo.src}" type="video/mp4" />
            <a href="${demo.src}">Watch the ${name} demonstration</a>
          </video>
          <figcaption>${demo.caption}</figcaption>
        </figure>` : "";

      return `
        <article class="workflow-tool-card${demo ? " has-demo" : ""}">
          <span class="workflow-tool-number">${number}.${String(toolIndex + 1).padStart(2, "0")}</span>
          <h3>${name}</h3>
          <p>${description}</p>
          ${demoMarkup}
        </article>`;
    }).join("");

    item.innerHTML = `
      <button class="workflow-index-trigger" id="${triggerId}" type="button" aria-expanded="false" aria-controls="${panelId}">
        <span class="workflow-index-number">${number}</span>
        <span class="workflow-index-title">${category.title}</span>
        <span class="workflow-index-count">${toolLabel}</span>
      </button>
      <div class="workflow-index-panel" id="${panelId}" role="region" aria-labelledby="${triggerId}" hidden>
        <div class="workflow-tool-grid">${tools}</div>
      </div>`;
    workflowIndex.appendChild(item);
  });

  const closeWorkflow = (item) => {
    if (!item) return;
    item.classList.remove("is-open");
    item.querySelector(".workflow-index-trigger").setAttribute("aria-expanded", "false");
    item.querySelector(".workflow-index-panel").hidden = true;
  };

  workflowIndex.addEventListener("click", (event) => {
    const trigger = event.target.closest(".workflow-index-trigger");
    if (!trigger) return;
    const selected = trigger.closest(".workflow-index-item");
    const wasOpen = selected.classList.contains("is-open");
    closeWorkflow(workflowIndex.querySelector(".workflow-index-item.is-open"));
    if (wasOpen) return;

    selected.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    selected.querySelector(".workflow-index-panel").hidden = false;

    requestAnimationFrame(() => requestAnimationFrame(() => {
      const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height || 0;
      const top = selected.getBoundingClientRect().top + window.scrollY - headerHeight;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? "auto" : "smooth" });
    }));
  });

  const demoVideos = workflowIndex.querySelectorAll(".workflow-demo-video");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    demoVideos.forEach((video) => video.pause());
  } else if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.35 });

    demoVideos.forEach((video) => videoObserver.observe(video));
  }
}
