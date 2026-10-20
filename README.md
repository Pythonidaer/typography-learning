# Typography Learning

Browse 1,950 Google Fonts families by type, compare font faces, and learn typography with live controls.

Website: https://type-study-johnny.codefolio-work.chatgpt.site

Static application files are in `dist/`. Serve the repository root with `python3 -m http.server 8000` and open `http://localhost:8000/dist/`.

Includes independently toggleable font explanations, controls, beginner lessons, family details, comparisons, and browser-local favorites. Google font previews require internet access. Catalogue snapshot: 2026-10-16.

Design instructions are in `AGENTS.md`, `WEBSITE_DESIGN_BASELINE.md`, and `DESIGN_DECISIONS.md`. Website UI must never use emoji.


## Navigation and vocabulary

The shared header is sticky with a frosted background, adapting the current design-practice reference. At compact widths, its hamburger opens an opaque dropdown. Escape, outside clicks, and focus leaving the header close it.

Vocabulary: https://pythonidaer.github.io/typography-learning/vocabulary.html

The vocabulary page includes 43 terms across six topics, search, and practice links that configure the font library. Definitions remain readable without JavaScript; search and menu enhancement require it.

GitHub Pages deploys dist/ through .github/workflows/deploy-pages.yml on relevant pushes to main. Set Settings > Pages > Source to GitHub Actions.

## Resources

https://pythonidaer.github.io/typography-learning/resources.html

All 17 curated articles are grouped into four parts: concepts and vocabulary, choosing and pairing fonts, history of print and web typography, and typography on modern websites. The page includes short descriptions, reading notes, and full source URLs.

## Typography roadmap

Open https://pythonidaer.github.io/typography-learning/roadmap/ or choose **Roadmap** in the menu. This imports the approved ChatGPT Site version as a separate page within this website. Its CSS, diagram sizing, connections, fullscreen mobile modals, and compact close control are preserved. The roadmap has no search, list view, progress, next-topic actions, or zoom toolbar. Native pinch zoom and automatic sizing remain.

The roadmap uses its own assets in `dist/roadmap/`; it does not load the catalogue stylesheet. Its design rules are in `dist/roadmap/ROADMAP_DESIGN_RULES.md`. Shared navigation links connect all four pages without replacing either page’s styles.

## Choosing Type roadmap

https://pythonidaer.github.io/typography-learning/roadmap/choosing-type.html

Choose **Roadmap**, then **Choosing Type**. The additional roadmap follows the six-stage workflow from Jonathan Z. White's freeCodeCamp article, with 24 independently authored supporting lessons, practical examples, exercises, and further-reading links. The original vocabulary roadmap remains available beside it. Both use the approved diagram geometry, navigation, and topic-panel styles. Sources and scope are recorded in `dist/roadmap/CHOOSING_TYPE.md`.
