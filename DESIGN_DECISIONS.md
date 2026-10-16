# Type Study design decisions

Governing reference: Pythonidaer/design-practice main WEBSITE_DESIGN_BASELINE.md (GitHub blob 4ed9dae66685cc8eafbf9556d01788b6c4f6f124), read through GitHub on 2026-10-16. Full reference preserved locally. Implemented in Type Study only; the reference repository is unchanged.

Audience and primary task: a beginner browsing typography types and comparing fonts.

| Decision | Reason | Alternative | Check |
| --- | --- | --- | --- |
| Plain task title, Fonts and typography | Identify the subject immediately; remove oversized slogan and redundant eyebrows | A branded slogan if later requested | Source review passed; visual wrapping pending |
| White, charcoal, neutral gray; Arial UI | Remove beige/orange default and keep font specimens visually primary | An intentionally chosen branded palette | Contrast and source checks; rendered review pending |
| Category specimens retain their own example faces | Aa is instructional content demonstrating classifications | Text labels alone | Source retains five categories and all families |
| Font specimens remain parallel two-column items, one column on mobile | Comparable data warrants repeated structure | A dense table for metadata-only tasks | CSS source check; visual review pending |
| No emoji on websites | Explicit user-wide preference | No emoji exceptions assumed | UI source scan passed |
| Text actions replace Unicode arrows and star controls | No approved saved-font icon mapping; labels communicate save state | A deliberately approved SVG mapping | UI source scan and JS syntax passed |
| Exact Johnny UI close SVG, centralized | Preserve the existing approved geometry and icon-only accessible close control | Another explicitly approved family | Retrieved from design-lab johnny-icons.js blob 30b0dff6566203d499556bfd93b0305d60012cbb |
| Dedicated dialog controls row | Reserve focus outline clearance before content | More spacing only when required by actual geometry | 6px row padding, 24px content gap, 44px target; visual review pending |
| Comparison actions sit above the results | Keep contextual actions in normal reading flow without floating shadow panel | Floating bar only if navigation testing demonstrates need | Source placement checked |
| Two navigation actions remain inline | Two destinations fit the task without a drawer | Drawer for a larger navigation structure | Responsive CSS reviewed; device testing pending |

Spacing uses shared alignment edges and 16/24/32/40px major gaps; 12/20/26px retained in existing specimen controls where their density calls for it. Outer content width is 1400px with fluid gutters. Mobile order: title, classifications, learning toggles and lessons, search and controls, compare actions, results. Native modal dialogs retain Escape dismissal and browser focus containment.

Verification limits: JavaScript syntax and source assertions do not establish rendered layout correctness. Browser control skill unavailable; no browser preview or device verification claimed. Publication status is checked separately.
