const projectIndexData = [
  { name: "200 Mission", address: "200 Mission St · San Francisco, CA" },
  { name: "405 Industrial", address: "405 Industrial Rd · San Carlos, CA" },
  { name: "Samuel Merritt University", address: "Oakland, CA" },
  { name: "Stanford Bridge", address: "Stanford, CA" },
  { name: "490 South Mathilda", address: "490 S Mathilda Ave · Sunnyvale, CA" },
  { name: "777 Airport Boulevard", address: "777 Airport Blvd · Burlingame, CA" },
  { name: "ACLS", address: "California" },
  { name: "888 Ross", address: "California" },
  { name: "IQHQ Aventine", address: "San Diego, CA" },
  { name: "City of Hope", address: "California" },
  { name: "1389 Moffett Park", address: "Sunnyvale, CA" },
  { name: "Project 63", address: "California" },
  { name: "Project Nomar North", address: "California" },
  { name: "Project Nomar South", address: "California" },
  { name: "Pier 70A", address: "San Francisco, CA" },
  { name: "Moffett Towers Building 6", address: "Sunnyvale, CA" },
  { name: "The Ranch Lot Studios", address: "California" },
  { name: "Joint Venture Cancer Center", address: "California" },
  { name: "UNLV", address: "Las Vegas, NV" },
  { name: "UCSD Discovery", address: "La Jolla, CA" },
  { name: "UNR Mathewson", address: "Reno, NV" },
  { name: "Saint Francis High School", address: "Mountain View, CA" },
  { name: "UCSF Benioff Parking Structure", address: "San Francisco, CA", slug: "ucsf-benioff-parking-structure", images: 3 },
  { name: "UCSC Heller Housing", address: "Santa Cruz, CA", slug: "ucsc-heller-housing", images: 3 },
  { name: "East County Services Center", address: "Contra Costa County, CA", slug: "east-county-services-center", images: 3 },
  { name: "Sonoma Government Center", address: "Santa Rosa, CA", slug: "sonoma-government-center", images: 3 },
  { name: "UCB Heathcock", address: "Berkeley, CA", slug: "ucb-heathcock", images: 3 },
  { name: "SFO Guardrail", address: "San Francisco International Airport", slug: "sfo-guardrail", images: 3 },
  { name: "SFO Icebox", address: "San Francisco International Airport", slug: "sfo-icebox", images: 3 },
  { name: "SFUSD", address: "San Francisco, CA", slug: "sfusd", images: 3 },
  { name: "STEM - Mission College", address: "Santa Clara, CA", slug: "stem-mission-college", images: 3 },
  { name: "Gilead Technical Development Center", address: "Foster City, CA", slug: "gilead-technical-development-center", images: 3 },
  { name: "Workday Meeting Center", address: "Pleasanton, CA", slug: "workday-meeting-center", images: 3 },
  { name: "West Valley College", address: "Saratoga, CA", slug: "west-valley-college", images: 3 },
  { name: "SFO Cargo", address: "San Francisco International Airport", slug: "sfo-cargo", images: 3 },
  { name: "Sutter MOB", address: "Northern California", slug: "sutter-mob", images: 3 },
  { name: "Millbrae Yards Phase II", address: "Millbrae, CA", slug: "millbrae-yards-phase-ii", images: 3 },
  { name: "SLAC - National Accelerator Lab", address: "Menlo Park, CA", slug: "slac-national-accelerator-lab", images: 3 },
  { name: "San Quentin Rehabilitation Center", address: "San Quentin, CA", slug: "san-quentin-rehabilitation-center", images: 3 },
  { name: "Stanford Atrium", address: "Stanford, CA", slug: "stanford-atrium", images: 3 },
  { name: "YMCA - Redwood City", address: "Redwood City, CA", slug: "ymca-redwood-city", images: 3 },
  { name: "SSF Wellness", address: "South San Francisco, CA", slug: "ssf-wellness", images: 3 }
];

const projectIndexList = document.querySelector("[data-project-index]");

if (projectIndexList) {
  const imageMarkup = (project) => {
    if (!project.slug || !project.images) return "";

    return Array.from({ length: project.images }, (_, index) => {
      const number = String(index + 1).padStart(2, "0");
      return `
        <figure class="project-index-image">
          <img src="assets/project-index/${project.slug}/image-${number}.jpg" alt="${project.name} project view ${index + 1}" loading="lazy" decoding="async" />
        </figure>`;
    }).join("");
  };

  projectIndexData.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = "project-index-item";
    article.dataset.projectOrder = String(index);

    const panelId = `project-panel-${index + 1}`;
    const buttonId = `project-trigger-${index + 1}`;
    const gallery = imageMarkup(project);

    article.innerHTML = `
      <button class="project-index-trigger" id="${buttonId}" type="button" aria-expanded="false" aria-controls="${panelId}">
        <span class="project-index-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="project-index-title">${project.name}</span>
        <span class="project-index-address">${project.address}</span>
      </button>
      <div class="project-index-panel" id="${panelId}" role="region" aria-labelledby="${buttonId}" hidden>
        <div class="project-index-panel-inner ${gallery ? "has-images" : "no-images"}">
          ${gallery ? `<div class="project-index-gallery">${gallery}</div>` : ""}
          <div class="project-index-details">
            <div><span>Project</span><strong>${project.name}</strong></div>
            <div><span>Location</span><strong>${project.address}</strong></div>
            <div><span>Scope</span><strong>BIM modeling · coordination · technical documentation</strong></div>
            <div><span>Media</span><strong>${project.images ? `${project.images} selected project views` : "Project summary"}</strong></div>
          </div>
        </div>
      </div>`;

    projectIndexList.appendChild(article);
  });

  const closeItem = (item) => {
    if (!item) return;
    item.classList.remove("is-open");
    item.querySelector(".project-index-trigger").setAttribute("aria-expanded", "false");
    item.querySelector(".project-index-panel").hidden = true;
  };

  const scrollItemToTop = (item) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.setTimeout(() => {
          const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height || 0;
          const top = item.getBoundingClientRect().top + window.scrollY - headerHeight;
          const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? "auto" : "smooth" });
        }, 0);
      });
    });
  };

  projectIndexList.addEventListener("click", (event) => {
    const trigger = event.target.closest(".project-index-trigger");
    if (!trigger) return;

    const selectedItem = trigger.closest(".project-index-item");
    const wasOpen = selectedItem.classList.contains("is-open");
    closeItem(projectIndexList.querySelector(".project-index-item.is-open"));

    if (wasOpen) return;

    selectedItem.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    selectedItem.querySelector(".project-index-panel").hidden = false;
    scrollItemToTop(selectedItem);
  });
}
