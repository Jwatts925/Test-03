const logisticsIndex = document.querySelector("[data-logistics-index]");

if (logisticsIndex) {
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

  logisticsIndex.addEventListener("click", (event) => {
    const trigger = event.target.closest(".project-index-trigger");
    if (!trigger) return;

    const selectedItem = trigger.closest(".project-index-item");
    const wasOpen = selectedItem.classList.contains("is-open");
    closeItem(logisticsIndex.querySelector(".project-index-item.is-open"));

    if (wasOpen) return;

    selectedItem.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    selectedItem.querySelector(".project-index-panel").hidden = false;
    scrollItemToTop(selectedItem);
  });
}
