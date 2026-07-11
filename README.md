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


## Interactive IFC test viewer

The BIM & Coordination page now embeds `ifc-viewer.html`, which loads:

- `assets/models/TEST-IFC.ifc`
- `assets/ifc-viewer-app.js`
- `assets/ifc-viewer.css`
- `assets/ifc/web-ifc.wasm`
- `assets/ifc/web-ifc-mt.wasm`
- `assets/ifc/fragments-worker.mjs`
- `assets/worker.mjs`

The viewer uses That Open Components and Web IFC. Keep all of these files in their exact paths when uploading to GitHub Pages.


## Current IFC model

The interactive viewer now loads the uploaded TEST-IFC model from:

`assets/models/TEST-IFC.ifc`


## Interactive IFC models

The BIM page now displays two models:

- `assets/models/TEST-IFC.ifc`
- `assets/models/IFC-02.ifc`

Each model must be activated with its top-left button before it captures the mouse wheel. Click the same button again to return to normal page scrolling.
