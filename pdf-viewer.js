
const viewer = document.querySelector("[data-pdf-viewer]");

if (viewer) {
  const pdfUrl = viewer.dataset.pdfSrc;
  const pagesContainer = document.querySelector("#bim-pdf-pages");
  const loadingMessage = document.querySelector("#bim-pdf-loading");
  const fallback = document.querySelector("#bim-pdf-fallback");
  const currentPageOutput = document.querySelector("#bim-pdf-current-page");
  const totalPagesOutput = document.querySelector("#bim-pdf-total-pages");

  const pdfJsUrl =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@6.1.200/build/pdf.min.mjs";
  const pdfWorkerUrl =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@6.1.200/build/pdf.worker.min.mjs";

  let pdfDocument = null;
  let renderTimer = 0;

  const showFallback = () => {
    loadingMessage.hidden = true;
    pagesContainer.hidden = true;
    fallback.hidden = false;
  };

  const renderDocument = async (pdfjsLib) => {
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
      pageElement.dataset.pdfPage = String(pageNumber);

      const canvas = document.createElement("canvas");
      canvas.width = Math.floor(renderViewport.width);
      canvas.height = Math.floor(renderViewport.height);
      canvas.style.width = `${Math.floor(baseViewport.width * cssScale)}px`;
      canvas.style.height = `${Math.floor(baseViewport.height * cssScale)}px`;

      const label = document.createElement("div");
      label.className = "bim-pdf-page-label";
      label.textContent = `Page ${String(pageNumber).padStart(2, "0")} / ${String(
        pdfDocument.numPages
      ).padStart(2, "0")}`;

      pageElement.append(canvas, label);
      pagesContainer.append(pageElement);

      await page.render({
        canvasContext: canvas.getContext("2d", { alpha: false }),
        viewport: renderViewport,
      }).promise;
    }

    loadingMessage.hidden = true;
    totalPagesOutput.textContent = String(pdfDocument.numPages).padStart(2, "0");
    updateCurrentPage();
  };

  const updateCurrentPage = () => {
    const pageElements = Array.from(
      pagesContainer.querySelectorAll("[data-pdf-page]")
    );

    if (!pageElements.length) return;

    const viewportCenter = window.innerHeight * 0.5;
    let closestPage = pageElements[0];
    let closestDistance = Number.POSITIVE_INFINITY;

    pageElements.forEach((pageElement) => {
      const bounds = pageElement.getBoundingClientRect();
      const center = bounds.top + bounds.height * 0.5;
      const distance = Math.abs(center - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestPage = pageElement;
      }
    });

    currentPageOutput.textContent = String(
      Number(closestPage.dataset.pdfPage || 1)
    ).padStart(2, "0");
  };

  const rerender = () => {
    window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(async () => {
      if (!pdfDocument) return;

      try {
        loadingMessage.hidden = false;
        loadingMessage.textContent = "Resizing portfolio…";
        await renderDocument();
      } catch (error) {
        console.error("PDF resize rendering failed:", error);
      }
    }, 220);
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
      totalPagesOutput.textContent = String(pdfDocument.numPages).padStart(2, "0");

      const renderWithLibrary = async () => {
        pagesContainer.innerHTML = "";
        pagesContainer.hidden = false;

        const availableWidth = Math.max(
          280,
          Math.min(pagesContainer.clientWidth, 1500)
        );
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

        for (
          let pageNumber = 1;
          pageNumber <= pdfDocument.numPages;
          pageNumber += 1
        ) {
          const page = await pdfDocument.getPage(pageNumber);
          const baseViewport = page.getViewport({ scale: 1 });
          const cssScale = availableWidth / baseViewport.width;
          const renderViewport = page.getViewport({
            scale: cssScale * pixelRatio,
          });

          const pageElement = document.createElement("article");
          pageElement.className = "bim-pdf-page";
          pageElement.dataset.pdfPage = String(pageNumber);

          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(renderViewport.width);
          canvas.height = Math.floor(renderViewport.height);
          canvas.style.width = `${Math.floor(baseViewport.width * cssScale)}px`;
          canvas.style.height = `${Math.floor(baseViewport.height * cssScale)}px`;

          const label = document.createElement("div");
          label.className = "bim-pdf-page-label";
          label.textContent = `Page ${String(pageNumber).padStart(
            2,
            "0"
          )} / ${String(pdfDocument.numPages).padStart(2, "0")}`;

          pageElement.append(canvas, label);
          pagesContainer.append(pageElement);

          await page.render({
            canvasContext: canvas.getContext("2d", { alpha: false }),
            viewport: renderViewport,
          }).promise;
        }

        loadingMessage.hidden = true;
        updateCurrentPage();
      };

      await renderWithLibrary();

      window.addEventListener("scroll", updateCurrentPage, { passive: true });

      window.addEventListener("resize", () => {
        window.clearTimeout(renderTimer);
        renderTimer = window.setTimeout(async () => {
          loadingMessage.hidden = false;
          loadingMessage.textContent = "Resizing portfolio…";

          try {
            await renderWithLibrary();
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
