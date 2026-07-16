import * as THREE from "three";
import * as OBC from "@thatopen/components";

const container = document.querySelector("#viewer-container");
const loading = document.querySelector("#viewer-loading");
const loadingProgress = document.querySelector("#loading-progress");
const errorPanel = document.querySelector("#viewer-error");
const errorMessage = document.querySelector("#viewer-error-message");
const fitButton = document.querySelector("#fit-model");
const resetButton = document.querySelector("#reset-view");
const fullscreenButton = document.querySelector("#fullscreen-view");
const hideButton = document.querySelector("#hide-selected");
const isolateButton = document.querySelector("#isolate-selected");
const showAllButton = document.querySelector("#show-all");
const sectionButton = document.querySelector("#place-section");
const clearSectionButton = document.querySelector("#clear-section");
const propertiesPanel = document.querySelector("#properties-panel");
const propertiesTitle = document.querySelector("#properties-title");
const propertiesContent = document.querySelector("#properties-content");
const closePropertiesButton = document.querySelector("#close-properties");

if (!(container instanceof HTMLElement)) throw new Error("Viewer container was not found.");

const modelId = document.body.dataset.modelId;
const fragmentsSource = document.body.dataset.fragmentsSrc;
if (!modelId || !fragmentsSource) throw new Error("The prepared model source was not configured.");

const isMobile = window.matchMedia("(max-width: 680px), (pointer: coarse)").matches;
const isHiddenLinePresentation = document.body.dataset.viewMode === "hidden-line-spin";
const ORANGE = new THREE.Color("#ff8a5b");
let world;
let fragments;
let bounds;
let homeSphere = null;
let highlighter = null;
let hider = null;
let clipper = null;
let selectedMap = {};
let sectionPlacementArmed = false;
let propertyRequest = 0;
let hoverTimer = null;
let hoverInFlight = false;
let presentationFrame = 0;

const HIDDEN_LINE_SURFACE = new THREE.Color("#e4e5e2");
const HIDDEN_LINE_INK = new THREE.Color("#26343a");

function setProgress(value) {
  if (!(loadingProgress instanceof HTMLElement)) return;
  const normalized = Number.isFinite(value)
    ? Math.max(0, Math.min(1, value > 1 ? value / 100 : value))
    : 0.08;
  loadingProgress.style.width = `${Math.max(8, normalized * 100)}%`;
}

function showError(error) {
  console.error(error);
  loading?.classList.add("is-hidden");
  if (errorPanel instanceof HTMLElement) errorPanel.hidden = false;
  if (errorMessage instanceof HTMLElement) {
    errorMessage.textContent = error instanceof Error
      ? error.message
      : "An unknown viewer error occurred.";
  }
}

function styleHiddenLineMaterial(material) {
  if (!isHiddenLinePresentation || !material) return;
  if ("isLodMaterial" in material && material.isLodMaterial) {
    material.lodColor = HIDDEN_LINE_INK.clone();
    material.lodOpacity = 0.82;
  } else if (material.color?.copy) {
    material.color.copy(HIDDEN_LINE_SURFACE);
    material.opacity = 1;
    material.transparent = false;
    material.side = THREE.DoubleSide;
    material.depthWrite = true;
  }
  material.needsUpdate = true;
}

function startPresentationSpin() {
  if (!world?.camera?.controls || presentationFrame) return;
  const controls = world.camera.controls;
  const rotationSpeed = (Math.PI * 2) / 24;
  let previousTime = performance.now();

  const rotate = (time) => {
    const elapsed = Math.min(0.05, Math.max(0, (time - previousTime) / 1000));
    previousTime = time;
    controls.rotate(rotationSpeed * elapsed, 0, false);
    presentationFrame = window.requestAnimationFrame(rotate);
  };

  presentationFrame = window.requestAnimationFrame(rotate);
}

function cloneModelIdMap(map) {
  return Object.fromEntries(
    Object.entries(map || {}).map(([id, localIds]) => [id, new Set(localIds)]),
  );
}

function selectionCount(map = selectedMap) {
  return Object.values(map).reduce((total, ids) => total + ids.size, 0);
}

function setSelectionControls(enabled) {
  if (hideButton instanceof HTMLButtonElement) hideButton.disabled = !enabled;
  if (isolateButton instanceof HTMLButtonElement) isolateButton.disabled = !enabled;
}

function clearSelectionState() {
  selectedMap = {};
  setSelectionControls(false);
  propertiesPanel?.classList.add("is-collapsed");
}

function getAttributeValue(attribute) {
  if (attribute && typeof attribute === "object" && "value" in attribute) return attribute.value;
  return attribute;
}

function propertyRow(label, value) {
  if (!(propertiesContent instanceof HTMLElement)) return;
  if (value === undefined || value === null || value === "") return;
  const row = document.createElement("div");
  row.className = "property-row";
  const term = document.createElement("span");
  term.textContent = label;
  const detail = document.createElement("strong");
  detail.textContent = String(value);
  row.append(term, detail);
  propertiesContent.append(row);
}

async function renderProperties(map) {
  if (isMobile || !(propertiesContent instanceof HTMLElement)) return;
  const request = ++propertyRequest;
  const entries = Object.entries(map);
  if (!entries.length) return;
  const [selectedModelId, localIds] = entries[0];
  const firstLocalId = [...localIds][0];
  const model = fragments?.list?.get(selectedModelId);
  if (!model || firstLocalId === undefined) return;

  propertiesPanel?.classList.remove("is-collapsed");
  propertiesContent.replaceChildren();
  if (propertiesTitle instanceof HTMLElement) {
    propertiesTitle.textContent = selectionCount(map) > 1 ? `${selectionCount(map)} Elements` : "Selected Element";
  }
  propertyRow("Model", selectedModelId);
  propertyRow("Local ID", firstLocalId);

  try {
    const [data] = await model.getItemsData([firstLocalId], { attributesDefault: true });
    if (request !== propertyRequest || !data) return;
    const fields = [
      ["Name", "Name"],
      ["Object Type", "ObjectType"],
      ["Predefined Type", "PredefinedType"],
      ["Tag", "Tag"],
      ["Global ID", "GlobalId"],
      ["Description", "Description"],
    ];
    for (const [label, key] of fields) propertyRow(label, getAttributeValue(data[key]));
  } catch (error) {
    console.warn("Selected element properties were unavailable.", error);
  }
}

function getModelSphere() {
  bounds.list.clear();
  bounds.addFromModels();
  const box = bounds.get();
  bounds.list.clear();
  if (box.isEmpty()) return null;
  const sphere = new THREE.Sphere();
  box.getBoundingSphere(sphere);
  sphere.radius *= 0.84;
  return sphere;
}

async function fitModel(animated = true) {
  if (!world?.camera?.controls) return;
  const sphere = getModelSphere();
  if (!sphere) return;
  await world.camera.controls.fitToSphere(sphere, animated);
  await fragments.core.update(true);
}

async function resetView() {
  if (!world?.camera?.controls || !homeSphere) return;
  await world.camera.controls.fitToSphere(homeSphere, true);
  await fragments.core.update(true);
}

async function downloadPreparedModel(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Prepared model request failed (${response.status}).`);
  const contentLength = Number(response.headers.get("content-length"));
  if (!response.body || !Number.isFinite(contentLength) || contentLength <= 0) {
    return new Uint8Array(await response.arrayBuffer());
  }
  const reader = response.body.getReader();
  const chunks = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.byteLength;
    setProgress(0.18 + (received / contentLength) * 0.58);
  }
  const bytes = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

function armSectionPlacement(armed) {
  sectionPlacementArmed = armed;
  container.classList.toggle("is-placing-section", armed);
  sectionButton?.classList.toggle("is-active", armed);
  if (sectionButton instanceof HTMLButtonElement) sectionButton.textContent = armed ? "Click Model" : "Section";
  if (highlighter) {
    if (armed) highlighter.clear("hover").catch(() => {});
    highlighter.enabled = !armed;
  }
}

function scheduleHover(event) {
  if (!highlighter || sectionPlacementArmed || event.buttons !== 0) return;
  if (hoverTimer !== null) window.clearTimeout(hoverTimer);
  hoverTimer = window.setTimeout(async () => {
    hoverTimer = null;
    if (hoverInFlight || !highlighter?.enabled) return;
    hoverInFlight = true;
    try {
      await highlighter.highlight("hover", true, false);
    } catch (error) {
      console.warn("Hover preview was unavailable.", error);
    } finally {
      hoverInFlight = false;
    }
  }, 70);
}

async function initializeDesktopTools(components) {
  const OBF = await import("@thatopen/components-front");
  components.get(OBC.Raycasters).get(world);

  highlighter = components.get(OBF.Highlighter);
  highlighter.setup({
    world,
    selectMaterialDefinition: { color: ORANGE, opacity: 1, transparent: false, renderedFaces: 0 },
  });
  highlighter.multiple = "none";
  highlighter.styles.set("hover", {
    color: ORANGE,
    opacity: 0.42,
    transparent: true,
    renderedFaces: 0,
  });
  highlighter.events.select.onHighlight.add((map) => {
    selectedMap = cloneModelIdMap(map);
    setSelectionControls(selectionCount() > 0);
    renderProperties(selectedMap);
  });
  highlighter.events.select.onClear.add(clearSelectionState);

  hider = components.get(OBC.Hider);
  clipper = components.get(OBC.Clipper);
  clipper.setup({ color: ORANGE, opacity: 0.24, size: 1.5 });
}

fitButton?.addEventListener("click", () => fitModel(true).catch(showError));
resetButton?.addEventListener("click", () => resetView().catch(showError));
fullscreenButton?.addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      fullscreenButton.textContent = "Full Screen";
    } else {
      await document.documentElement.requestFullscreen();
      fullscreenButton.textContent = "Exit Full Screen";
    }
  } catch (error) {
    showError(error);
  }
});

hideButton?.addEventListener("click", async () => {
  if (!hider || !selectionCount()) return;
  await hider.set(false, selectedMap);
  await highlighter?.clear("select");
});
isolateButton?.addEventListener("click", async () => {
  if (hider && selectionCount()) await hider.isolate(selectedMap);
});
showAllButton?.addEventListener("click", async () => {
  if (!hider) return;
  await hider.set(true);
  await fragments?.core?.update(true);
});
sectionButton?.addEventListener("click", () => {
  if (clipper) armSectionPlacement(!sectionPlacementArmed);
});
clearSectionButton?.addEventListener("click", () => {
  if (!clipper) return;
  clipper.deleteAll();
  armSectionPlacement(false);
  if (clearSectionButton instanceof HTMLButtonElement) clearSectionButton.disabled = true;
});

container.addEventListener("pointerup", (event) => {
  if (!sectionPlacementArmed || event.button !== 0 || !clipper) return;
  window.setTimeout(async () => {
    try {
      clipper.deleteAll();
      const plane = await clipper.create(world);
      if (plane && clearSectionButton instanceof HTMLButtonElement) clearSectionButton.disabled = false;
    } catch (error) {
      console.warn("A section plane could not be placed at that point.", error);
    } finally {
      armSectionPlacement(false);
    }
  }, 0);
});
container.addEventListener("pointermove", scheduleHover);
container.addEventListener("pointerleave", () => {
  if (hoverTimer !== null) window.clearTimeout(hoverTimer);
  hoverTimer = null;
  highlighter?.clear("hover").catch(() => {});
});

closePropertiesButton?.addEventListener("click", () => propertiesPanel?.classList.add("is-collapsed"));
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && fullscreenButton instanceof HTMLButtonElement) fullscreenButton.textContent = "Full Screen";
});

(async () => {
  setProgress(0.08);
  const components = new OBC.Components();
  world = components.get(OBC.Worlds).create();
  world.scene = new OBC.SimpleScene(components);
  world.scene.setup();
  world.scene.three.background = new THREE.Color(isHiddenLinePresentation ? "#f7f6f2" : "#ffffff");
  world.renderer = new OBC.SimpleRenderer(components, container);
  world.renderer.showLogo = false;
  world.renderer.three.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2));
  world.camera = new OBC.OrthoPerspectiveCamera(components);
  await world.camera.controls.setLookAt(12, 10, 12, 0, 0, 0);
  components.init();

  const grid = components.get(OBC.Grids).create(world);
  if (grid?.three) grid.three.visible = false;
  const resize = () => {
    world.renderer?.resize();
    world.camera?.updateAspect();
  };
  new ResizeObserver(resize).observe(container);
  window.addEventListener("resize", resize, { passive: true });

  setProgress(0.14);
  fragments = components.get(OBC.FragmentsManager);
  const workerUrl = new URL(/* @vite-ignore */ "./ifc/fragments-worker.mjs", import.meta.url).href;
  fragments.init(workerUrl, isMobile ? { maxWorkers: 2 } : undefined);
  fragments.core.settings.graphicsQuality = isMobile ? 0 : 1;
  world.camera.controls.addEventListener("update", () => fragments.core.update());
  fragments.list.onItemSet.add(async ({ value: model }) => {
    model.useCamera(world.camera.three);
    world.scene.three.add(model.object);
    await fragments.core.update(true);
  });
  fragments.core.models.materials.list.onItemSet.add(({ value: material }) => {
    styleHiddenLineMaterial(material);
    if (!("isLodMaterial" in material) || !material.isLodMaterial) {
      material.polygonOffset = true;
      material.polygonOffsetUnits = 1;
      material.polygonOffsetFactor = Math.random();
    }
  });

  bounds = components.get(OBC.BoundingBoxer);
  if (!isMobile && !isHiddenLinePresentation) await initializeDesktopTools(components);
  setProgress(0.18);
  const bytes = await downloadPreparedModel(fragmentsSource);
  setProgress(0.78);
  await fragments.core.load(bytes, {
    modelId,
    camera: world.camera.three,
    onProgress(event) {
      const progress = Number(event?.progress ?? event);
      if (!Number.isFinite(progress)) return;
      const normalized = progress > 1 ? progress / 100 : progress;
      setProgress(0.78 + Math.min(1, normalized) * 0.16);
    },
  });

  setProgress(0.95);
  await fragments.core.update(true);
  homeSphere = getModelSphere();
  if (homeSphere) {
    await world.camera.controls.fitToSphere(homeSphere, false);
    await fragments.core.update(true);
  }
  if (isHiddenLinePresentation) {
    for (const [, material] of fragments.core.models.materials.list) styleHiddenLineMaterial(material);
    await fragments.core.update(true);
    startPresentationSpin();
  }
  setProgress(1);
  window.setTimeout(() => loading?.classList.add("is-hidden"), 220);
})().catch(showError);
