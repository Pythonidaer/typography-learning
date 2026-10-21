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
| Shared navigation with compact dropdown | User requested the current design-practice navigation, superseding the original inline-only decision | Drawer if explicitly requested later | Navigation state checks passed; rendered testing pending |

Spacing uses shared alignment edges and 16/24/32/40px major gaps; 12/20/26px retained in existing specimen controls where their density calls for it. Outer content width is 1400px with fluid gutters. Mobile order: title, classifications, learning toggles and lessons, search and controls, compare actions, results. Native modal dialogs retain Escape dismissal and browser focus containment.

Verification limits: JavaScript syntax and source assertions do not establish rendered layout correctness. Browser control skill unavailable; no browser preview or device verification claimed. Publication status is checked separately.

## Shared dropdown navigation and vocabulary page (2026-10-16)

Reference inspected on GitHub: design-practice dist/index.html selects navigation-contact.css and navigation-v5.js. Their blobs are 3627364484599d490e1e7ca5bc95504039e38587 and 5151fe2c7b66d9ebbeb3073612278d3c584701c1. The current implementation is a nonmodal mobile dropdown, not the older side drawer in a stale local checkout.

| Decision | Reason | Alternative | Check |
| --- | --- | --- | --- |
| Sticky 68px header, 14px backdrop blur, increasing opacity after 8px of scroll | Match the requested reference while maintaining text contrast | Fully opaque header for browsers without backdrop-filter | Scroll-state test and fallback CSS passed; rendered review pending |
| Opaque full-width dropdown below the header at 1080px and below | Match the current reference and keep menu text readable | Side drawer was superseded by this request | Open/close, Escape, outside click/focus, breakpoint inert state tested |
| Reference's three-bar hamburger morphs into a cross | Explicitly requested matching reference control; intentional project-specific exception to Johnny UI geometry for navigation only | Saved Johnny UI icons for non-reference controls | CSS copied from reference; 44px target; accessible name and state tested |
| No overlay or body scroll lock for this nonmodal disclosure | Keep normal document reading and focus movement | Modal focus containment applies to font dialogs only | Focus exiting the header closes the dropdown; hidden links are inert |
| Shared navigation.js and navigation.css on both pages | Single owner for behavior and appearance | Independent implementations would drift | Local script and link checks passed |
| Static vocabulary page with search and six topic groups | Learn terms without opening font dialogs or loading the catalogue | Long ungrouped glossary | 43 terms, unique IDs, source links, search targets, and practice links checked |
| Practice links configure the existing library controls | Connect definitions to exploration without duplicating a preview system | Separate glossary playground | Query values validated and clamped; source checks passed |

Vocabulary uses short original definitions, with further reading from Google Fonts Knowledge, Monotype's anatomy glossary, and MDN CSS documentation. The menu uses no emoji or substitute text glyphs. No font catalogue or saved-favorite data was changed.

Verification: all JavaScript syntax checks passed. Navigation state tests exercised open, close, Escape, outside-click dismissal, focus departure, breakpoint changes, and scroll styling. Both HTML pages passed local link/script and unique-ID checks. Browser control is unavailable, so mobile Safari layout, blur rendering, transitions, enlarged-text behavior, and focus geometry remain unverified visually.

## Resources page (2026-10-16)

Added all 16 articles from the requested reading path, grouped into concepts/vocabulary, choosing/pairing, print-to-web history, and modern implementation. Short original descriptions explain why each article is useful. Historical notes and author-opinion caveats travel with the relevant links. Full URLs wrap on mobile, and external articles consistently open in a new tab with a visible notice. Shared navigation includes Resources on all three pages, with the current page identified.

Decision: use a numbered reading list with plain rules and spacing, keeping the established typography and header. Alternative: cards or a separate reading tracker, neither needed for the requested reference page. Verification: all 16 unique article URLs and local navigation targets checked; rendered layout remains unverified because browser control is unavailable.

## Roadmap integration (2026-10-17)

Added Roadmap to the existing menu on the catalogue, vocabulary, and resources pages, and imported the user-approved roadmap under `dist/roadmap/`. The roadmap’s approved `roadmap.css` and `navigation.css` are copied unchanged and kept separate from the parent page styles. Changes inside the imported page are limited to navigation labels and same-site URL paths. The compact graph, 43 source vocabulary terms, fit-to-width geometry, connector styles, information-only fullscreen mobile modal, and small close control are retained.

Validation: CSS hash parity with the approved source; JavaScript syntax; local route and anchor checks; current navigation state and deployment workflow coverage. Rendered desktop, tablet, and iOS feedback remains for user review; no visual changes are claimed from source checks alone.

## Desktop roadmap topic panel (2026-10-17)

At widths above 700px, the roadmap’s topic dialog now fills the viewport height at the right edge, with a 600px reading width and a lightly darkened 25% black overlay. Opening and closing have no slide or fade transition. Mobile retains its existing fullscreen modal. Existing native dialog keyboard, backdrop dismissal, and focus-return behavior remain. This is limited to the roadmap; catalogue dialogs are unchanged. Source checks passed; rendered larger-screen confirmation remains pending.

## Roadmap navigation and footer cleanup (2026-10-17)

Moved Roadmap to the final navigation position on all four pages, preserving existing navigation styles. Removed the repeated Type Study heading and vocabulary-source sentence from the roadmap footer, retaining its design rules link. The previously added immediate desktop right-side topic panel remains intact; mobile and diagram styles are unchanged.

## Choosing Type roadmap (2026-10-19)

Added Jonathan Z. White's freeCodeCamp article to the choosing/pairing resource group, increasing the reading list to 17 articles. Added a separate Choosing Type roadmap selected through a local two-link navigation on both roadmap pages. Main navigation retains Roadmap as its last item.

Decision: share the existing diagram renderer, stylesheet, navigation, and dialog implementation. Reason: preserve the approved diagram and reading-panel design while changing the learning content. Alternative: create a separate visual system or overwrite the vocabulary roadmap; neither serves this request. The renderer now accepts optional per-topic source labels and group links, with existing vocabulary defaults retained.

Content: six stages follow the article's workflow; 24 supporting lessons, examples, and practice tasks are authored for Type Study. Source scope and design exceptions are recorded in dist/roadmap/CHOOSING_TYPE.md. Historical tool references in the article are noted on the resource page.

Verification: JavaScript syntax, HTML links and anchors, unique topic IDs, topic completeness, resource numbering, graph bounds, and fit geometry checked. The original roadmap has six groups and 43 terms. The new roadmap has six groups and 24 supporting topics. Local browser testing could not run because Chromium was unavailable and its download failed; native iOS/pinch-zoom review remains separate from source checks.

## Choosing Type article (2026-10-21)

Added dist/choosing-type.html from Johnny’s five pages of reading notes, with clarifications, resources, open questions, and the proposed font assessment and comparison gallery at the bottom. Single-column prose uses the existing shared header and neutral palette; article-specific CSS controls reading width and long URL wrapping. Alternative: extend the roadmap dialogs with the whole article; a separate reading page supports section links and longer content. Each of the six main Choosing Type stage references now opens its matching article anchor. Supporting lessons and approved roadmap geometry/styles are retained. The resource-list entry and roadmap introduction also link to the article. The original freeCodeCamp source remains credited and linked.

Verification: unique HTML IDs and 108 local links/assets/anchors passed across the site. A runtime renderer check confirmed all six main-stage article destinations and retained all 30 Choosing Type nodes. JavaScript syntax and diff whitespace checks passed. Playwright could not launch because browser executables are absent; rendered layout and native iOS behavior remain unverified.

## Choosing Type article writing profile (2026-10-21)

Scope: dist/choosing-type.html. User requested the toolkit’s Mailchimp writing, voice, and tone guidance for this page. Audience: beginners choosing fonts for a design. Task: understand the workflow and try a concrete next step. Voice: knowledgeable, considerate, plain, and approachable. Tone: conversational, respectful, instructional, and restrained; no forced humor or exaggerated encouragement. US English, sentence-case headings, natural contractions, serial commas, and numerals follow the selected mechanics profile. Preserve full visible resource URLs per user preference.

Source snapshot: Pythonidaer/llm-instruction-toolkit main 6a8ce54a5ebdcd0ae53351728e67d1d108f0bda6, design/content-and-tone/{best-practices,project-questions,mailchimp-tone-voice,mailchimp-writing-goals-principles,mailchimp-grammar-mechanics}.md. This adopts the writing guidance, not Mailchimp’s identity.

Applied: front-loaded reader actions, shorter explanations, consistent terms, definitions for font family, hierarchy, specimens, modular scale, line height, fallback, and CSS. Resource descriptions state their use. Proposed assessment and gallery remain explicitly future ideas. Alternative: add a playful brand voice; the immediate learning task benefits from direct guidance. Existing navigation, styles, resources, IDs, and roadmap destinations remain intact. Review this profile when the article audience or task changes; check comprehension with a beginner and review wrapping on mobile.
