# James Watts Portfolio

A responsive GitHub Pages portfolio focused on BIM, preconstruction, facade systems, technical communication, automation, and visualization.

## Main pages

- `index.html` — home page, About, Experience, Portfolio, Services, and Contact sections
- `bim-coordination.html` — 3D Modeling portfolio and project index
- `facade-design-manual.html` — facade design portfolio category
- `automation.html` — automation portfolio category
- `documentation.html` — Logistics & Proposals portfolio category
- `visualization.html` — visualization portfolio category

## Main editing files

- `swiss-theme.css` — current Athletics typography, colors, grids, spacing, and responsive layout
- `style.css` — original/base styling and shared IFC presentation rules
- `script.js` — section expansion, navigation behavior, contact fasteners, and IFC interaction controls
- `project-index.js` — project names, locations, project details, image counts, and project-index interactions

## Assets

- `assets/James-Watts-Resume.pdf` — downloadable resume
- `assets/project-index/` — project image folders used by `project-index.js`
- `assets/logistics-proposal/` — selected Logistics & Proposals sheets
- `assets/contact-fasteners-layout/` — contact-section fastener artwork
- `assets/fonts/` — Athletics Sans font family
- `assets/models/` — source IFC files and optimized Fragment models

## IFC viewer workflow

The site displays prepared `.frag` models so visitors do not need to parse full IFC files in the browser. The viewer source is `src/ifc-viewer.js`, and Vite builds the browser bundle as `assets/ifc-viewer-app.js`.

The four home-page models are embedded through:

- `ifc-home-01.html`
- `ifc-home-02.html`
- `ifc-home-03.html`
- `ifc-home-04.html`

The interactive 3D Modeling page uses `ifc-viewer.html`, `ifc-viewer-02.html`, and `ifc-hidden-line-spin.html`.

To rebuild available IFC sources and the viewer bundle:

```text
pnpm install
pnpm run build:ifc
```

`scripts/convert-ifc.mjs` controls the IFC-to-Fragments conversion. Keep `assets/ifc/fragments-worker.mjs` with the built viewer files.

## Publishing

The production site is deployed from the `main` branch through GitHub Pages.
