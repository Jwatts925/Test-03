# James Watts Portfolio

A responsive GitHub Pages portfolio for James Watts, focused on BIM, preconstruction, facade systems, technical communication, and automation.

## Files

- `index.html` — website content and structure
- `style.css` — responsive visual design
- `script.js` — mobile navigation, reveal effects, and dynamic footer year
- `assets/James-Watts-Resume.pdf` — downloadable résumé

## Publish with GitHub Pages

1. Upload all files and the `assets` folder to the root of your GitHub repository.
2. Open the repository's **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder, then save.

## Add project images

Create an `assets/images` folder and replace each `.project-visual` placeholder in `index.html` with an image, for example:

```html
<img src="assets/images/project-name.jpg" alt="Description of the project" />
```

Update the related project title, description, and link in the same card.


## Portfolio category pages

The four capability cards on the home page now link to:

- `bim-coordination.html`
- `automation.html`
- `documentation.html`
- `visualization.html`

Keep these HTML files in the repository root beside `index.html`.


## BIM portfolio PDF

The BIM & Coordination page now embeds:

`assets/bim-coordination-portfolio.pdf`

Upload your BIM portfolio PDF to the `assets` folder using that exact filename.


## Scrollable BIM portfolio

The BIM & Coordination page now displays optimized WebP renders of all
30 PDF pages in a clean scrolling reader without the browser PDF toolbar
or thumbnail sidebar.

The source PDF remains available at:

`assets/bim-coordination-portfolio.pdf`

The rendered pages are stored in:

`assets/bim-portfolio-pages/`


## BIM Master Pages PDF viewer

The BIM & Coordination page now loads a single PDF:

`assets/bim-masterpages.pdf`

The viewer is rendered with `pdf-viewer.js` and does not require the former
`assets/bim-portfolio-pages/` image folder. It includes a clean scrolling
layout, page counter, and Open PDF fallback button.


## Optimized IFC model viewers

The two embedded viewers load prepared That Open Fragments files instead of
parsing the full IFC files in every visitor's browser:

- `assets/models/TEST-IFC.frag`
- `assets/models/IFC-02.frag`

The original `.ifc` files remain the editable source models and can still be
offered as downloads. The prepared files provide the same interactive geometry
with much faster startup, especially on phones.

When either source IFC changes, rebuild the prepared models and the shared
viewer bundle from the repository root:

```text
pnpm install
pnpm run build:ifc
```

`scripts/convert-ifc.mjs` controls which IFC files are converted. The viewer
source is `src/ifc-viewer.js`; Vite publishes the shared browser bundle to
`assets/ifc-viewer-app.js`. Keep `assets/ifc/fragments-worker.mjs` alongside it.

Each model must be activated with its top-left button before it captures the
mouse wheel. Click the same button again to return to normal page scrolling.
