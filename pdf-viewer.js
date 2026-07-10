const viewer = document.querySelector("[data-pdf-viewer]");

if (viewer) {
  const pdfUrl = viewer.dataset.pdfSrc;
  const pagesContainer = document.querySelector("#bim-pdf-pages");
  const loadingMessage = document.querySelector("#bim-pdf-loading");
  const fallback = document.querySelector("#bim-pdf-fallback");

  const pdfJsUrl =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@6.1.200/build/pdf.min.mjs";
  const pdfWorkerUrl =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@6.1.200/build/pdf.worker.min.mjs";

  let pdfDocument = null;
  let renderTimer = 0;

  const showFallback = () => {
    if (loadingMessage) loadingMessage.hidden = true;
    if (pagesContainer) pagesContainer.hidden = true;
    if (fallback) fallback.hidden = false;
  };

  const renderPages = async () => {
    if (!pdfDocument || !pagesContainer) return;

    pagesContainer.innerHTML = "";
    pagesContainer.hidden = false;

    const availableWidth = Math.max(
      280,
      Math.min(pagesContainer.clientWidth, 1500)
    );
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
      const page = await pdfDocument.getPage(pageNumber);
      const baseViewport = page.getViewport({ scale: 1 });
      const cssScale = availableWidth / baseViewport.width;
      const renderViewport = page.getViewport({
        scale: cssScale * pixelRatio,
      });

      const pageElement = document.createElement("article");
      pageElement.className = "bim-pdf-page";

      const canvas = document.createElement("canvas");
      canvas.width = Math.floor(renderViewport.width);
      canvas.height = Math.floor(renderViewport.height);
      canvas.style.width = `${Math.floor(baseViewport.width * cssScale)}px`;
      canvas.style.height = `${Math.floor(baseViewport.height * cssScale)}px`;

      pageElement.append(canvas);
      pagesContainer.append(pageElement);

      await page.render({
        canvasContext: canvas.getContext("2d", { alpha: false }),
        viewport: renderViewport,
      }).promise;
    }

    if (loadingMessage) loadingMessage.hidden = true;
  };

  const initializeViewer = async () => {
    try {
      const pdfjsLib = await import(pdfJsUrl);
      pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

      const loadingTask = pdfjsLib.getDocument({
        url: pdfUrl,
        isEvalSupported: false,
      });

      pdfDocument = await loadingTask.promise;
      await renderPages();

      window.addEventListener("resize", () => {
        window.clearTimeout(renderTimer);
        renderTimer = window.setTimeout(async () => {
          if (loadingMessage) {
            loadingMessage.hidden = false;
            loadingMessage.textContent = "Resizing portfolio…";
          }

          try {
            await renderPages();
          } catch (error) {
            console.error("PDF resize rendering failed:", error);
          }
        }, 220);
      });
    } catch (error) {
      console.error("PDF viewer failed to initialize:", error);
      showFallback();
    }
  };

  initializeViewer();
}
