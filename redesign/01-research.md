# Stage 1 — Research

Evidence labels: **O** = observed, **I** = inference. File references are repo-relative unless noted.

---

## 1. Fluent 2

Researched 2026-11-05 at https://fluent2.microsoft.design/ (an Astro site). Method: decoded the sidebar data in the `Nav` island props, read `Nav.B_q3F_uB.js` and `const.1_JMXzLC.js` on `fluent2websitecdn.azureedge.net`, `/sitemap-0.xml` (131 URLs) and the public Algolia index `fluent2-microsoft`.

**Top-level IA (O).** The header has **no section links**: only logo, search (Algolia DocSearch), theme toggle and "Employee sign-in". The whole IA is **one left sidebar, the same on every page**:

- Get started (`/get-started/whatisnew`, `/design`, `/develop`)
- Design language (`/design-principles`, `/color`, `/elevation`, `/iconography`, `/layout`, `/material`, `/motion`, `/shapes`, `/typography`)
- UX frameworks and guidelines (`/accessibility`, `/content-design`, `/design-tokens`, `/handoffs`, `/onboarding`, `/wait-ux`)
- Working with AI (`/responsible-AI`, `/ai-harm`)
- Content engineering
- Web tokens (`/color-tokens`)
- **Components**, which carries the platform switcher

The home page links the four platform entry points: `/components/web/react`, `/components/ios`, `/components/android`, `/components/windows`.

**Platform separation (O).**

- URL scheme: `/components/{platform}/core/{component}/usage`. Platform keys: `web/react`, `ios`, `android`, `windows`, `react-native` (the last one requires login).
- Each platform has **its own component list**: Web ≈50, iOS 12, Android 5. Windows has none and only links out to WinUI.
- "Web components" is a sub-library filter (React | Web components) on the Web overview grid, not a platform of its own.

**Component pages (O).**

- **Separate pages per platform. No shared component page and no in-page platform switch.** Examples: `/components/web/react/core/button/usage`, `/components/ios/core/button/usage`, `/components/android/core/button/usage`.
- Each platform page has its own native guidance (iOS: "Follow native patterns"; Android links to Material).
- Only "usage" pages exist. Code is external (Storybook / GitHub), and `/code` returns 404.
- **No cross-links** between a component's platform pages.

**Shared vs platform-specific (O).**

- Design language, UX guidelines and AI pages are single, platform-neutral pages.
- Where they differ by platform they use **in-page tabs**. Example: `/typography` has a Web / Windows / macOS / iOS / Android type ramp. `/get-started/develop` has React / Web Components / iOS / Android / Windows tabs that can follow the saved platform (`data-sync-with-platform`).

**Switcher behaviour (O).**

- A dropdown at the top of the sidebar's Components group (Web / iOS / Android / Windows). Only the Components group changes; other groups stay.
- Choosing a platform saves `localStorage.library` and goes to the **platform overview** (`location.href = "/components/" + lib`). It does **not** keep you on the same component.
- Precedence for the active platform: **URL → localStorage → default (React)**.

**Partial coverage (O).** A component that is missing on a platform is simply **left out** of that platform's list and grid. No disabled entries, no "not available" notes; a guessed URL returns 404. There is a separate `/component-roadmap` page.

**Other (O).**

- No breadcrumbs.
- Platform overview pages have a Resources block (Figma kit, repo) plus a filterable card grid.
- One global search index; results are grouped by platform (`lvl0` = Web / iOS / Android), so "button" returns three Button pages side by side.
- "Preview" badges on sidebar items.

**Takeaways for WARP (I).**

- Fluent confirms the target model: shared design language + fully independent per-platform component trees, with a platform-scoped sidebar group, URL-first platform state and localStorage memory.
- Two gaps WARP can avoid cheaply:
  1. The switcher drops you on the overview. **Keep the user on the same component/page when it exists.**
  2. There are no cross-platform links. **Add "Also on iOS · Android".**
- Search grouped by platform is the minimum viable answer for three parallel trees.

---

## 2. Prototype (Figma Make) — shell features

Source: `src/App.tsx`, `src/index.css`, screenshots. Raw notes: [_notes-prototype.md](_notes-prototype.md).

| Feature | Prototype behaviour | Iteration |
|---|---|---|
| Header: logo + "warp" + divider + "Docs" | fixed 68px bar, backdrop blur, brand → home | **1** (logo + "Docs" label); blur/visual styling later |
| Header: search trigger "Search documentation ⌘K" | opens modal | **1**, via VitePress local search (already has ⌘K) |
| Header: Changelog link | → What's new | **1** |
| Header: About DS link | → Foundation › About DS | **1** |
| Header: "Get started" primary button | → Get started | **1** |
| Header: GitHub | not in the prototype (in the brief) | **1** (existing `socialLinks`) |
| Sidebar: shared sections as uppercase accordions (Get Started, Foundation, About Warp) | collapsible, closed by default, active item `aria-current` | **1** (VitePress `collapsed` groups); uppercase styling later |
| Sidebar: nested branches collapsible | depth indentation 0–3 | **1** |
| Sidebar: "PLATFORM" label + select + platform tree | custom listbox; `aria-haspopup=listbox`, `role=option`, `aria-selected`, Esc closes. **No arrow keys, no focus management.** | **1**, with full keyboard support (listbox pattern) |
| Platform select ↔ URL sync | platform page in URL → select updates; default `web` | **1** |
| Platform change behaviour | navigates to the **first page of the platform**; choice not remembered | **1**, changed: same component if it exists, else the platform index; remember the last choice |
| Sidebar footer "All systems operational" | filler | **Drop** |
| Mobile drawer | ≤820px: hamburger, slide-in sidebar, scrim, "Documentation" heading + close | **1**, via VitePress local-nav "Menu" drawer (switcher included) |
| Breadcrumbs (Docs / section / parent) | above the title | **Later** (visual/article layout) |
| Eyebrow (section name) above H1 | uppercase small label | **Later** |
| Lede + meta ("Updated…", "4 min read") | under H1 | **Later** (meta is filler) |
| Right TOC "On this page" + "Give feedback" | sticky | TOC exists in VitePress today (**keep**); feedback link **later** |
| "Where to go next" cards | next two pages | **Later** |
| "Was this page helpful? Yes/No" | no backend | **Later** (needs an endpoint/analytics decision) |
| "Edit this page ↗" | footer | **Keep** (VitePress `editLink` already exists) |
| Prev / Next pagination | footer | **Keep** (VitePress default; scoped per tree, see plan) |
| Code block with Copy | dark block | **Keep** (VitePress has copy); styling later |
| Callout / numbered steps | article components | **Later** |
| Home: hero, "Explore the system" 3 cards, Quick links 2×2, dark "Collaborate" band | sidebar visible on home | **Later** (home redesign). Iteration 1 only fixes the home card links. |
| Visual tokens (neutral greys, Inter, black accent) | Tailwind | **Later**, translated to Warp tokens / UnoCSS |

---

## 3. Miro vs prototype vs Fluent 2 — disagreements

| Topic | Miro | Prototype | Fluent 2 | Recommendation |
|---|---|---|---|---|
| **"Using AI" placement** | Top-level section ("Using AI": Agent Skills, Figma Make, Replit) | Under Get Started, labelled "AI" (Claude, Figma Make, Replit) | "Working with AI" is a top-level design-language group (responsible AI, not tooling) | **Get Started › Using AI** (`/get-started/ai/`). It is onboarding/tooling (how-to), and the Suggestion box asks for "skills and mcp in getting started". Label "Using AI"; children "Agent skills" (not "Claude" — vendor-neutral, matches Miro). |
| **Behaviour (Dos and don'ts) page** | Separate page: Overview, Usage, **Behaviour**, Code, A11y | Dropped: Overview, Usage, Code, A11y | Usage only | **A section of Usage**, not a page. Current Do/Don't content already lives in `usage.md` (11 pages use `<DoDont>`); a separate page would be empty for most components. Revisit with page templates. |
| **Pattern pages** | Usage, "Code?" | Usage, Code | n/a | `/{platform}/patterns/{name}/{overview,usage,code,accessibility}` using whatever exists. Code is optional. |
| **"Designing for AI" (Foundation)** | present | missing | Working with AI group | Keep in the IA as **backlog**. No page in iteration 1 (no content). |
| **"About DS" location** | under Foundation (Design Language) | under Foundation; header "About DS" links to it | n/a | `/foundations/about/` with the current Mission/Values/Principles content. The header "About DS" points there. |
| **Get Started › Design children** | Getting access / set up → Warp in Figma, Multibrand, Custom components, Migrate from Fabric; Resources; Required reading | Getting access / set up, Resources, Required reading (leaves) | n/a | Miro, using the existing 4 pages. Resources / Required reading become **backlog** (no content; see §4 "no empty structure"). |
| **Get Started › Web: Migration → From React/Vue** | present | missing | n/a | Backlog (no content). Migrate from Fabric exists. |
| **Platform Foundation for iOS / Android** | "..." (same shape as Web) | mirrors Web (General design guidelines, Resources, Semantic tokens) | none (platform tabs on shared pages) | Create a platform Foundation **only where content exists** (Web: CSS classes, customization, dark mode, keyboard, font weights). iOS/Android get Foundation when content is written. |
| **Platform switch target** | n/a | first page of the platform | platform overview | **Same component/page if it exists**, else nearest (same component overview → platform components index → platform home). |
| **Header nav** | n/a | Changelog, About DS, Get started CTA | none (sidebar only) | Prototype header (per brief) + GitHub; Components/Patterns/Foundations leave the header. |
| **Cross-platform links** | "common touch points" opt-in | none | none | Component pages show "Available on: Web · iOS · Android", generated from the manifest. |

---

## 4. Diátaxis lens

Diátaxis compass: action + acquisition = **tutorial**; action + application = **how-to**; cognition + application = **reference**; cognition + acquisition = **explanation**. Guidance used here (from `/how-to-use-diataxis/`): "Don't create empty structures", "work one step at a time", let the structure emerge from improvements. I applied it as a lens only.

| Section / page set | Types held today | Where types mix (split candidates, later) |
|---|---|---|
| Get started › Designers | How-to (Warp in Figma, migrate) + explanation (multibrand) | `designing-for-multibrand` mixes explanation with Figma steps |
| Get started › Developers › Web | How-to + reference (install, CDN, config) + explanation; 1244 words | `developers/web/index.md` is three things in one: setup how-to, config reference, rationale. Candidate for setup / reference / explanation split. |
| Get started › iOS / Android | How-to (install) | Android flagged placeholder text |
| Mission, values, principles | Explanation | Fine; becomes Foundation › About DS |
| Foundations (tokens, typography, elevation, motion, illustrations, brands) | Explanation + reference (token tables) | `typography`, `elevation`: explanation + token reference + web class names on one page. Candidate: explanation (shared) + reference (per platform). |
| Foundations › Data visualization (24 pages) | Explanation (intro, colour), reference (tokens), how-to (Figma library) | "Tokens & CSS" sub-tree is web reference inside shared explanation. Split candidate. |
| Foundations › CSS classes (124 pages) | Pure reference (Tailwind-style utility docs) | Clean reference, but web-only. Moves to Web › Foundation. |
| Foundations › Accessibility / Keyboard | Explanation + how-to (playbook, plugins) | `keyboard/shortcuts` = how-to for developers inside foundations |
| Foundations › Dark mode | Explanation + per-framework how-to | Already split by page; framework pages go to Web |
| Component overview | Explanation (what it is) + live example | 33/41 embed web live examples. Shared intro vs web demo is the seam for native seeding. |
| Component usage | Explanation + guidance (do/don't); 18/41 are stubs | Behaviour (Do/Don't) is a candidate sub-type, kept as a section |
| Component accessibility | Explanation + reference (keyboard tables, ARIA) | Mostly web reference. Platform-specific by nature. |
| Elements code page | **Reference (API) + how-to (usage) + accessibility + examples** in one page via 5 `@include`s | Biggest mixing point. Candidate: Code (how-to + examples) / API (reference). Not touched in iteration 1. |
| iOS / Android code pages | Reference (syntax, parameters) + examples | Fine |
| Help / Collaborate | How-to (request, report) + reference (FAQ) | `authoring-guide` is contributor reference |
| Blog | Release notes (none of the four types; news) | Fine |

Implications for iteration 1:

1. **No empty placeholder pages for Miro leaves without content.** That covers Resources, Required reading, Using AI children, Colors › Primitives, UX writing, Language support, Designing for AI, and iOS/Android Foundation. They go to the backlog; see plan Q1.
2. Section index pages are allowed: they are navigation, not empty structure.
3. The page set per component stays as it is: overview / usage / (styling) / code / accessibility.

---

## 5. VitePress feasibility

Source: VitePress v1 docs (`vuejs.github.io/vitepress/v1/`) and the installed 1.6.4 source (`node_modules/vitepress/dist/...`). `vitepress.dev` now documents 2.0 alpha; I flag the differences where they matter.

### 5a. Platform-scoped sidebar + switcher that follows the URL

**Facts.**

- `themeConfig.sidebar` as an object: keys are sorted by number of `/` (deepest first), and the first key where `'/' + page.relativePath` `startsWith(key)` wins (`theme-default/support/sidebar.js` `getSidebar`). Keys must end with `/`.
- `useSidebar()` (exported from `vitepress/theme`) exposes `sidebar`, `sidebarGroups`, `hasSidebar`, `isOpen`, `open`/`close`.
- `VPSidebar.vue` renders `<slot name="sidebar-nav-before"/>`, `<VPSidebarGroup :items=…/>`, `<slot name="sidebar-nav-after"/>`.
- `VPSidebarGroup.vue` is not in the public `vitepress/theme` exports, but the package `exports` field allows `./dist/*`. So `import VPSidebarGroup from 'vitepress/dist/client/theme-default/components/VPSidebarGroup.vue'` resolves.

**Options.**

1. **Config per tree + slots.** Config `sidebar` = the tree the page belongs to: `'/web/'`, `'/ios/'`, `'/android/'` → that platform tree; `'/'` → shared tree. A layout-slot component renders the *other* part with the same `VPSidebarGroup`:
   - on platform pages, `sidebar-nav-before` = shared tree + switcher;
   - on shared pages, `sidebar-nav-after` = switcher + the remembered platform tree.

   Native behaviour stays: active highlighting, collapse, mobile drawer, and **prev/next scoped to the current tree**. One internal import.
2. **Override `VPSidebar.vue` via `vite.resolve.alias`.** Documented ("Overriding internal components"), with the caveat that names may change between minor releases. Copying about 100 lines gives full layout control but forks a component.
3. **Fully custom sidebar** (`sidebar: false` + own layout). Loses drawer/local-nav integration. Too much.

**Recommendation: option 1.** It uses public slots plus one `./dist/*` import of `VPSidebarGroup`. VitePress is pinned to exact `1.6.4` in `package.json`, which limits drift. Fallback if the internal import breaks on upgrade: option 2.

**Switcher state.** URL first (platform segment); else `localStorage['warp-docs-platform']`; else `web`. On shared pages the server renders the Web tree, and the client swaps to the remembered tree in `onMounted`. That is a brief swap only on shared pages for non-Web users. Acceptable for iteration 1.

### 5b. Extending header and sidebar without forking the theme

Confirmed `Layout.vue` slots:

- **All layouts:** `layout-top/bottom`, `nav-bar-title-before/after`, `nav-bar-content-before/after`, `nav-screen-content-before/after`.
- **Doc layout:** `sidebar-nav-before/after`, `doc-top/bottom/before/after/footer-before`, `aside-top/bottom/outline-before/outline-after/ads-*`.
- **404:** `not-found`.

Mapping:

- "Docs" label → `nav-bar-title-after`.
- Changelog / About DS → `themeConfig.nav`.
- Get started CTA → `nav-bar-content-after`, or a nav item with a custom class.
- GitHub → `socialLinks`.
- Search → built-in `VPNavBarSearch`.
- Mobile header links → automatic in `VPNavScreen`.
- Switcher → `sidebar-nav-*`.

No alias overrides needed.

### 5c. Client-side redirects on GitHub Pages

Facts:

- GitHub Pages serves `foo.html` for `/foo`.
- A custom `404.html` is served for missing paths. VitePress always emits `404.html`; for unknown URLs the client renders the theme `NotFound`, i.e. the `not-found` slot.
- `router.onBeforeRouteChange(to)` and `router.onBeforePageLoad(to)` can return `false` to cancel.
- **popstate (back/forward) skips `onBeforeRouteChange`** but does call `onBeforePageLoad`.
- `router.go()` uses `pushState` (no replace option in 1.6.4).
- `buildEnd(siteConfig)` gets `outDir` and `pages`. Writing extra files there is feasible but not a documented use; files in `public/` are copied verbatim.
- `rewrites` are 1:1 and create **no** redirect from the source path.
- Unconfirmed: GitHub Pages may 301 `/foo` → `/foo/` when both `foo.html` and `foo/` exist. Avoid that layout.

| Option | How | SEO | Flash | Search index | Build cost | Handles in-app (SPA) nav | Handles hard load |
|---|---|---|---|---|---|---|---|
| A. Stub pages | `buildEnd` writes `<old>.html` / `<old>/index.html`: `<meta http-equiv="refresh" content="0;url=…">`, `<link rel="canonical" href="https://warp-ds.github.io/docs/new">`, `<meta name="robots" content="noindex">`, `location.replace(new + search + hash)` | Good: canonical + 200 + noindex; Google treats an instant meta refresh like a redirect | None (tiny HTML, JS fires before paint) | Not VitePress pages → not in local search or sitemap | ~650 tiny files, negligible | **No**: the SPA router fetches the old page chunk, fails, shows 404 | **Yes** |
| B. Router hook | `onBeforeRouteChange` + `onBeforePageLoad` consult the map, `return false` + `router.go(new)` | No SEO value (crawlers hard-load) | None | n/a | lazy-loaded JSON (~40 kB raw) | **Yes** | First load runs `go()` before mount, so it works too, but only after the JS bundle loads (slower than A) |
| C. 404 fallback | `not-found` slot component looks up the normalised path and calls `location.replace` | Poor: crawler sees a 404 status | 404 UI flashes until the JS runs | n/a | none | n/a | Yes, for anything A doesn't cover (`/foo/` vs `/foo`, typos of known shapes) |

**Recommendation: A + B + C from one `redirect-map.json`.** A is the primary mechanism (hard loads, SEO, bookmarks, external links). B catches stale in-app links and `llms.txt` consumers navigating inside the SPA. C is a cheap safety net for URL variants. The map is loaded with a dynamic `import()` only when the path matches an old-prefix regex, so normal navigation pays nothing.

### 5d. Local search across three parallel trees

- Local search (MiniSearch) supports `detailedView`, `miniSearch.options` (`extractField`, `tokenize`, `processTerm`), `miniSearch.searchOptions` (default `fuzzy:0.2, prefix:true, boost {title:4,text:2,titles:1}`).
- It also supports a `_render(src, env, md)` hook: `env.relativePath` is the source path, returning `''` skips the page, and a custom `_render` must honour `search:false` itself.
- No built-in scoping UI. In 1.6.4, doc IDs include `base`.

Options:

1. **Label results by platform**: in `_render`, prefix the rendered H1 (which becomes the result title) with "Web ›", "iOS ›" or "Android ›" when `relativePath` starts with a platform folder.
2. Scope with `searchOptions.filter` by ID prefix (functions are serialised to the client). Needs a UI to choose the scope, i.e. an override of `VPLocalSearchBox`.
3. Boost the current platform. Not supported without a custom box.

**Recommendation:** option 1 in iteration 1, which matches Fluent's grouped results. A platform filter (option 2) goes in the backlog.

### 5e. Optional shared snippets

`<!--@include: path-->`:

- supports `{start,end}` line ranges and `<!-- #region name -->` regions (heading-anchor includes are 2.x only);
- resolves relative to the real source file, or from `srcDir` with an `@` prefix;
- reads with `fs`, so folders excluded via `srcExclude` (or outside `srcDir`) work;
- strips frontmatter only for whole-file includes;
- **fails silently on a missing file**;
- does not rebase relative links inside the included content (2.x feature).

**Recommendation:** a non-routed `docs/_shared/` folder in `srcExclude`, included with `@/_shared/...` paths (depth-independent). Opt-in, plus a build-time check that every include resolves, because a missing include fails silently. See plan §6.

---

## 6. Coverage matrix (manifest + inventory, 2026-11-05)

Columns: El = Elements, R = React, R19 = React 19, Vue; shared pages: o = overview, u = usage (★ = in-progress stub), s = styling, a = accessibility. **Platforms after split** follow the rule "a platform lists only what it has code for", with the pattern exception in the plan.

| Component | El | R | R19 | Vue | iOS | And | Shared pages | Platforms after split |
|---|---|---|---|---|---|---|---|---|
| alert | x | x | x | x | x | x | o u a | Web iOS Android |
| badge | x | x | | x | x | x | o u s a | Web iOS Android |
| box | x | x | | x | x | x | o u a | Web iOS Android |
| breadcrumbs | x | x | | x | | | o u s a | Web |
| broadcast | | | | | x | | o u★ | iOS |
| button | x | x | x | x | x | x | o u★ a | Web iOS Android |
| button-group | | | | x | x | | o u★ | Web (legacy-only) iOS |
| button-pill | | | | | x | | o u★ | iOS |
| callout | x | x | | x | x | x | o u a | Web iOS Android |
| card | x | x | | x | | | o u★ | Web |
| checkbox | x | x | | x | x | x | o u a | Web iOS Android |
| combo-box | x | x | | | | | o u★ | Web |
| confirmation-dialog | | | | | x | | o u a | iOS |
| date-picker | x | | x | | x | x | o u s a | Web iOS Android |
| divider | | | | | x | x | o u★ | iOS Android |
| expandable | x | x | | x | x | x | o u★ | Web iOS Android |
| icons | x | | x | | x | x | o u★ s a | Web iOS Android |
| link | x | | x | | | x | o u s a | Web Android |
| logo | x | | | | x★ | x | o u a | Web iOS Android |
| modal | x | x | | x | x | x | o u a | Web iOS Android |
| page-indicator | x | | x | | x | x | o u a | Web iOS Android |
| pagination | x | x | | | | | o u★ a | Web |
| pill | x | x | | x | x | x | o u★ | Web iOS Android |
| popover | x | x | | x | | x | o u★ | Web Android |
| radio | x | x | | x | x | x | o u a | Web iOS Android |
| radio-buttons | | x | | x | | | o u★ | Web (legacy-only) |
| range-slider | x | | x | | x | x | o u a | Web iOS Android |
| select | x | x | | x | x | x | o u a | Web iOS Android |
| slider | x | x | x | x | x | x | o u a | Web iOS Android |
| snackbar | x | | | | x | x | o u a | Web iOS Android |
| spinner | | | | | x | x | o u★ | iOS Android |
| steps | x | x | | x | x | x | o u★ | Web iOS Android |
| switch | x | x | | x | x | x | o u★ | Web iOS Android |
| tabs | x | x | | x | x | x | o u a | Web iOS Android |
| text | | | | | x | x | o u★ | iOS Android |
| text-area | x | x | | x | x | | o u a | Web iOS |
| text-field | x | x | | x | x | x | o u a | Web iOS Android |
| toast (deprecated) | x | | x | | x | x | o u a | iOS only (Web/Android archived → Snackbar); **see plan Q5** |
| tooltip | x | x | | x | x | x | o u a | Web iOS Android |
| utilities | | | | x | | | o u★ | Web (legacy-only) |
| **Pattern: empty-states** | | | | | x | x | o u a | Web (design pages, no code) iOS Android |

Totals after split: **Web 33 components + 1 pattern** (186 pages), **iOS 32 + 1** (86 pages), **Android 28 + 1** (77 pages). Web components with no Elements implementation (legacy code only): button-group (Vue), radio-buttons (React, Vue), utilities (Vue). Components that exist only on native: broadcast, button-pill, confirmation-dialog (iOS); divider, spinner, text (iOS + Android).

Toast deprecation, checked against source on 2026-11-05:

- **Android:** `WarpToast.kt` has `@Deprecated("Use WarpSnackbar instead.")`.
- **iOS:** `Sources/Components/Toast/Toast.swift` has **no** deprecation marker.
- **Elements:** `packages/toast/toast.ts` has no deprecation marker. Only our docs say it is deprecated.
