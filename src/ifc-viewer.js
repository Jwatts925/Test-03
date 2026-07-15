import * as THREE from "three";
import * as OBC from "@thatopen/components";

const container = document.querySelector("#viewer-container");
const loading = document.querySelector("#viewer-loading");
const loadingTitle = document.querySelector("#loading-title");
const loadingDetail = document.querySelector("#loading-detail");
const loadingProgress = document.querySelector("#loading-progress");
const errorPanel = document.querySelector("#viewer-error");
const errorMessage = document.querySelector("#viewer-error-message");
const fitButton = document.querySelector("#fit-model");
const resetButton = document.querySelector("#reset-view");
const fullscreenButton = document.querySelector("#fullscreen-view");

if (!(container instanceof HTMLElement)) throw new Error("Viewer container was not found.");

const modelId = document.body.dataset.modelId;
const fragmentsSource = document.body.dataset.fragmentsSrc;
if (!modelId || !fragmentsSource) throw new Error("The prepared model source was not configured.");

let world;
let fragments;
let bounds;
let homeSphere = null;
const isMobile = window.matchMedia("(max-width: 680px), (pointer: coarse)").matches;

function setProgress(value, detail) {
  const normalized = Number.isFinite(value)
    ? Math.max(0, Math.min(1, value > 1 ? value / 100 : value))
    : 0.08;
  loadingProgress.style.width = `${Math.max(8, normalized * 100)}%`;
  if (detail) loadingDetail.textContent = detail;
}

function showError(error) {
  console.error(error);
  loading.classList.add("is-hidden");
  errorPanel.hidden = false;
  errorMessage.textContent = error instanceof Error
    ? error.message
    : "An unknown viewer error occurred.";
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
    setProgress(0.18 + (received / contentLength) * 0.58, "Downloading prepared model");
  }

  const bytes = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

fitButton.addEventListener("click", () => fitModel(true).catch(showError));
resetButton.addEventListener("click", () => resetView().catch(showError));
fullscreenButton.addEventListener("click", async () => {
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

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) fullscreenButton.textContent = "Full Screen";
});

(async () => {
  loadingTitle.textContent = "Preparing model viewer…";
  setProgress(0.08, "Starting 3D engine");

  const components = new OBC.Components();
  world = components.get(OBC.Worlds).create();
  world.scene = new OBC.SimpleScene(components);
  world.scene.setup();
  world.scene.three.background = new THREE.Color("#ffffff");
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

  setProgress(0.14, "Starting optimized model worker");
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
    if (!("isLodMaterial" in material) || !material.isLodMaterial) {
      material.polygonOffset = true;
      material.polygonOffsetUnits = 1;
      material.polygonOffsetFactor = Math.random();
    }
  });

  bounds = components.get(OBC.BoundingBoxer);
  loadingTitle.textContent = "Loading optimized model…";
  setProgress(0.18, "Downloading prepared model");
  const bytes = await downloadPreparedModel(fragmentsSource);

  setProgress(0.78, "Opening prepared geometry");
  await fragments.core.load(bytes, {
    modelId,
    camera: world.camera.three,
    onProgress(event) {
      const progress = Number(event?.progress ?? event);
      if (!Number.isFinite(progress)) return;
      const normalized = progress > 1 ? progress / 100 : progress;
      setProgress(0.78 + Math.min(1, normalized) * 0.16, "Opening prepared geometry");
    },
  });

  setProgress(0.95, "Fitting model to view");
  await fragments.core.update(true);
  homeSphere = getModelSphere();
  if (homeSphere) {
    await world.camera.controls.fitToSphere(homeSphere, false);
    await fragments.core.update(true);
  }

  setProgress(1, "Ready");
  loadingTitle.textContent = "Model ready";
  window.setTimeout(() => loading.classList.add("is-hidden"), 220);
})().catch(showError);
