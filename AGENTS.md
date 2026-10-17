# Type Study project instructions

Read WEBSITE_DESIGN_BASELINE.md and DESIGN_DECISIONS.md before design changes. This is Pythonidaer/typography-learning, published through GitHub Pages. design-practice is a reference project, not this website. Deployable source is in dist/.

Never use emoji in website UI. Do not use Unicode arrows, stars, or other text glyphs as substitute icons. Use clear action text when no approved icon mapping exists. The dialog close control uses the exact approved Johnny UI SVG, centralized in dist/icons.js.

Use plain descriptive headings, unpadded visible numbering, and visible keyboard focus with reserved space. Preserve all learning features and their independent toggles.

Shared navigation lives in dist/navigation.js and dist/navigation.css. Preserve the reference-matching nonmodal dropdown, sticky frosted header, and opaque menu. The reference hamburger geometry is an intentional project-specific exception; keep dialog icons in icons.js. Vocabulary is dist/vocabulary.html with its own search enhancement.

Roadmap lives in dist/roadmap/ and intentionally keeps its own approved CSS and navigation assets. Read dist/roadmap/ROADMAP_DESIGN_RULES.md before editing it. Do not apply the catalogue stylesheet or refactor its current styles as part of integration work. Keep Roadmap in the navigation on every page.
