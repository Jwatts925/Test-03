const logisticsProjects = [
  {
    name: "SFO Cargo",
    slug: "sfo-cargo",
    location: "San Francisco, CA",
    pageCount: 16,
    assetBase: "assets/logistics-proposal/sfo-cargo",
  },
  {
    name: "SLAC",
    slug: "slac",
    location: "Menlo Park, CA",
    pageCount: 16,
    assetBase: "assets/logistics-proposal/slac",
  },
  {
    name: "SSF Wellness",
    slug: "ssf-wellness",
    location: "South San Francisco, CA",
    pageCount: 4,
    assetBase: "assets/logistics-proposal/ssf-wellness",
  },
];

const waterproofingProjects = [
  {
    name: "CCSF",
    slug: "ccsf",
    location: "San Francisco, CA",
    pageCount: 15,
    assetBase: "assets/waterproofing/ccsf",
  },
  {
    name: "SSF Wellness",
    slug: "ssf-wellness",
    location: "South San Francisco, CA",
    pageCount: 56,
    assetBase: "assets/waterproofing/ssf-wellness",
  },
];

const renderProjectIndex = (indexElement, projects, idPrefix, sheetType) => {
  if (!indexElement) return;

  projects.forEach((project, index) => {
    const triggerId = `${idPrefix}-${project.slug}-trigger`;
    const panelId = `${idPrefix}-${project.slug}-panel`;
    const sheets = Array.from({ length: project.pageCount }, (_, pageIndex) => {
      const page = pageIndex + 2;
      const pageLabel = String(page).padStart(2, "0");
      const source = `${project.assetBase}/page-${pageLabel}.webp`;

      return `
        <a class="logistics-sheet" href="${source}" target="_blank" rel="noopener" aria-label="Open ${project.name} ${sheetType} page ${page}">
          <img src="${source}" alt="${project.name} ${sheetType} page ${page}" loading="lazy" decoding="async" />
        </a>`;
    }).join("");

    const article = document.createElement("article");
    article.className = "project-index-item";
    article.innerHTML = `
      <button class="project-index-trigger" id="${triggerId}" type="button" aria-expanded="false" aria-controls="${panelId}">
        <span class="project-index-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="project-index-title">${project.name}</span>
        <span class="project-index-address">${project.location}</span>
      </button>
      <div class="project-index-panel" id="${panelId}" role="region" aria-labelledby="${triggerId}" hidden>
        <div class="project-index-panel-inner logistics-panel-inner">
          <div class="logistics-sheet-gallery">
            <div class="logistics-sheet-grid">${sheets}</div>
          </div>
        </div>
      </div>`;

    indexElement.appendChild(article);
  });

  const closeItem = (item) => {
    if (!item) return;
    item.classList.remove("is-open");
    item.querySelector(".project-index-trigger")?.setAttribute("aria-expanded", "false");
    const panel = item.querySelector(".project-index-panel");
    if (panel) panel.hidden = true;
  };

  const scrollItemToTop = (item) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height || 0;
        const top = item.getBoundingClientRect().top + window.scrollY - headerHeight;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? "auto" : "smooth" });
      });
    });
  };

  indexElement.addEventListener("click", (event) => {
    const trigger = event.target.closest(".project-index-trigger");
    if (!trigger) return;

    const selectedItem = trigger.closest(".project-index-item");
    const wasOpen = selectedItem.classList.contains("is-open");
    closeItem(indexElement.querySelector(".project-index-item.is-open"));

    if (wasOpen) return;

    selectedItem.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    selectedItem.querySelector(".project-index-panel").hidden = false;
    scrollItemToTop(selectedItem);
  });
};

renderProjectIndex(
  document.querySelector("[data-logistics-index]"),
  logisticsProjects,
  "logistics",
  "logistics plan",
);

renderProjectIndex(
  document.querySelector("[data-waterproofing-index]"),
  waterproofingProjects,
  "waterproofing",
  "waterproofing diagram",
);
