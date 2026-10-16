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
