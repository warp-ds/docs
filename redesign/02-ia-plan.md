# Stage 2 — IA plan (for approval)

Inputs: [00-preparation.md](00-preparation.md), [01-research.md](01-research.md). Generated companions:

- [02-content-mapping.md](02-content-mapping.md) / [content-mapping.csv](content-mapping.csv): every current page → new URL(s)
- [redirect-map.json](redirect-map.json): 654 entries
- Generator: [scripts/build-mapping.mjs](scripts/build-mapping.mjs). It re-runs on a fresh `main` and validates that every baseline URL is kept or redirected, that no redirect target is unplanned, that there are no redirect chains, and that no `foo.md` sits next to a `foo/` directory.

Nothing under `docs/` has been changed.

---

## 1. Final IA tree and URL scheme

All URLs are relative to `base: /docs/`, with `cleanUrls`. **Bold** = new page. *Italic* = in the Miro IA but not created in iteration 1 (no content yet → backlog; see Q1).

```
/                                   Home (layout: home; only card links change in iteration 1)

── SHARED (top of sidebar, always visible) ─────────────────────────────────────────
Get started                         /get-started/
├─ Design                           /get-started/design/                    ← NEW index ("Getting access / set up")
│  ├─ Warp in Figma                 /get-started/design/warp-in-figma/
│  ├─ Designing for multibrand      /get-started/design/designing-for-multibrand/
│  ├─ Building custom components    /get-started/design/custom-components/
│  ├─ Migrate from Fabric           /get-started/design/migrate-from-fabric/
│  └─ *Resources* · *Required reading*
├─ Web                              /get-started/web/                       (was developers/web/ = "Getting access / set up")
│  ├─ Building custom components    /get-started/web/custom-components/
│  ├─ Migrate from Fabric           /get-started/web/migrate-from-fabric/
│  └─ *Migration from React/Vue* · *Resources* · *Required reading*
├─ iOS                              /get-started/ios/
├─ Android                          /get-started/android/
└─ *Using AI*                       /get-started/ai/  (Agent skills, Figma Make, Replit; Q1/Q2)
Foundation (Design Language)        /foundations/
├─ About DS                         /foundations/about/                     (was get-started/mission-values-principles/)
├─ Tokens                           /foundations/tokens/{intro,overview}/   (cross-platform: brand × Figma/Web/iOS/Android table)
├─ Typography · Elevation · Motion · Illustrations · Brands · Accessibility
├─ Dark mode                        /foundations/dark-mode/ (+ /figma/)
├─ Data visualization (24 pages)    /foundations/data-visualization/…
└─ *Design principles* · *Colors › Primitives* · *Icons* · *UX writing* · *Language support* · *Designing for AI*
About Warp                          /about/                                 ← NEW index
├─ Help
│  ├─ FAQ                           /about/help/faq/
│  ├─ Support                       /about/help/support/
│  │  └─ How to contribute: Doc authoring guide   /about/help/authoring-guide/
│  ├─ Requests: New component       /about/help/requests/new-component/
│  │            Component changes   /about/help/requests/component-changes/
│  └─ Report bugs                   /about/help/report-bugs/
├─ What's new                       /about/whats-new/  · posts /about/whats-new/{yyyy}/{slug}
└─ Platform coverage                /about/platform-coverage                ← NEW (generated; replaces 2 status pages)

── PLATFORM (switcher: Web · iOS · Android) ─────────────────────────────────────────
Web                                 /web/                                   ← NEW index
├─ Foundation                       /web/foundations/                       ← NEW index
│  ├─ CSS classes (124)             /web/foundations/css-classes/{page}
│  ├─ Customization                 /web/foundations/customization/
│  ├─ Dark mode                     /web/foundations/dark-mode/ (Elements) · /web/foundations/dark-mode/react (legacy)
│  ├─ Keyboard                      /web/foundations/keyboard/{navigation,shortcuts}/
│  ├─ Font weights                  /web/foundations/font-weights/
│  └─ *Resources (Templates, Skills, Plugins, Storybook)* · *Semantic tokens*
├─ Components                       /web/components/                        (DsOverview platform=web)
│  └─ {name}  overview · usage · [styling] · code · [accessibility]
│             code = Elements; legacy tabs: code-react · code-react-19 · code-vue
└─ Patterns                         /web/patterns/  → empty-states/{overview,usage,accessibility}
iOS                                 /ios/                                   ← NEW index
├─ Components                       /ios/components/  → {name}/ overview* · usage* · code · [accessibility]
└─ Patterns                         /ios/patterns/    → empty-states/{overview*,usage*,code}
Android                             /android/  (same shape as iOS)
                                    * = seeded copy, frontmatter seeded: true
```

**Component page set** (resolves Miro vs prototype): `overview` (anatomy, variants, example) · `usage` (design guidelines **including the Behaviour / Do-Don't section**; no separate Behaviour page) · `styling` (Web only, where it exists today: badge, breadcrumbs, date-picker, icons, link) · `code` · `accessibility`. Sidebar order: Overview, Usage, Styling, Code, Accessibility.

**Web code pages are flat siblings** (`code`, `code-react`, `code-react-19`, `code-vue`), not `code/` + `code/react`. Reason: GitHub Pages may 301 `/code` to `/code/` when both `code.html` and `code/` exist, and flat siblings also keep the `@include` depth unchanged (§5). Only `code` appears in the sidebar; the legacy pages are reached through tabs on the Code page and through search (labelled "Web › … (legacy)").

**Folders:** sources live where they are served (`docs/web/components/button/overview.md`). **No `rewrites`.** With rewrites, links to the old source path still pass the dead-link check but 404 at runtime, and authors would have to think in two path systems.

---

## 2. Header + sidebar spec

### 2.1 Header

| Element | Spec | VitePress mechanism |
|---|---|---|
| Logo + "Docs" | existing `logo`; "Docs" label after the title, with a divider | `nav-bar-title-after` slot → `NavDocsLabel.vue` |
| Search | local search, ⌘K / Ctrl K, results labelled by platform | built-in `VPNavBarSearch` + `search.options._render` |
| Changelog | → `/about/whats-new/` | `themeConfig.nav` |
| About DS | → `/foundations/about/` | `themeConfig.nav` |
| Get started (primary button) | → `/get-started/`; hidden below 768px (shown in the mobile nav screen instead) | `nav-bar-content-after` + `nav-screen-content-after` → `NavCta.vue` (Warp button classes) |
| GitHub | existing | `socialLinks` |
| Appearance toggle | keep (dark mode exists today) | default |
| Removed from header | Get started / Foundations / Components / Patterns / What's new links | they move to the sidebar |

### 2.2 Sidebar

1. **Shared tree** (always first): Get started · Foundation (Design Language) · About Warp. Groups are `collapsed: true` and auto-expand around the active page.
2. Divider + "Platform" label + **PlatformSwitcher**.
3. **Platform tree** for the selected platform: Overview (`/{p}/`) · Foundation (Web only for now) · Components · Patterns. Each component is a collapsed group with its pages.

Mechanism (research §5a, option 1):

```js
sidebar: {
  '/web/': webTree,
  '/ios/': iosTree,
  '/android/': androidTree,
  '/': sharedTree,
}
```

Platform keys match first (more `/` segments). A `SidebarComposer.vue` registered in two slots renders the complementary part with the internal `VPSidebarGroup` (imported via the `vitepress/dist/*` export):

| Page type | Native sidebar (config) | `sidebar-nav-before` | `sidebar-nav-after` |
|---|---|---|---|
| Platform page `/ios/…` | iOS tree | shared tree + switcher | — |
| Shared page | shared tree | — | switcher + selected platform tree |
| Home | none (home layout) | — | — |

Prev/next and active highlighting work natively and stay **within the current tree**.

### 2.3 Platform switcher behaviour

| Rule | Behaviour |
|---|---|
| Source of truth | **URL.** On `/web|ios|android/…` the switcher shows that platform. |
| Remembering | Visiting any platform page writes `localStorage['warp-docs-platform']`. |
| Shared pages | Show the remembered platform (default **Web**). Changing the switcher **only swaps the tree** (no navigation) and stores the choice. The SSR output renders Web; the client swaps after mount (no hydration mismatch). |
| Platform pages | Changing the switcher **navigates** to the equivalent page: same component + same page kind → same component overview → `/{p}/components/` → `/{p}/`. The lookup uses the new manifest. |
| Accessibility | WAI-ARIA listbox pattern: trigger `button[aria-haspopup=listbox][aria-expanded][aria-controls]` labelled "Platform"; popup `ul[role=listbox][tabindex=-1][aria-activedescendant]`; options `li[role=option][aria-selected]`. Keys: ↓/↑/Enter/Space open and move, Home/End, type-ahead, Enter selects, **Escape closes and returns focus to the trigger**, Tab closes. Click outside closes. A visually hidden `aria-live="polite"` region announces "Showing iOS navigation". Focus ring uses Warp focus tokens. |
| Styling | Warp semantic tokens via UnoCSS classes / CSS vars; no hardcoded colours. |

### 2.4 Mobile

VitePress's local nav "Menu" button opens the `VPSidebar` drawer, which includes the slot content, so the switcher and both trees work in the drawer. The header hamburger opens `VPNavScreen` (Changelog, About DS, Get started CTA, GitHub). Desktop behaviour is unchanged. The prototype's single-drawer layout is a later visual iteration.

### 2.5 Component-level touch points

- `<ComponentsStatus />` (on 264 pages today, so the tag stays) is re-implemented as **PlatformAvailability**: "Available on: **Web** · iOS · Android". Links go to the same page kind on the other platform (fallback: overview), the current platform is marked with `aria-current`, and missing platforms are left out (Fluent rule). On Web Code pages it also lists the frameworks (Elements; React, React 19, Vue marked *legacy*).
- `<FrameworkTabs />` (on 150 framework pages, so the tag stays) is re-implemented as **Web code tabs**: `Elements | React (legacy) | React 19 (legacy) | Vue (legacy)`, from the manifest. It renders nothing on native Code pages, and still visually hides the preceding H2.
- `seeded: true` frontmatter → a notice in the `doc-before` slot: "This page was seeded from the Web documentation and is pending review for iOS."

---

## 3. Content mapping

Full table: **[02-content-mapping.md](02-content-mapping.md)** (518 rows + 14 new pages). Totals:

| Action | Pages |
|---|---|
| move | 415 |
| move + seed | 48 |
| move + copy | 3 |
| keep (URL unchanged) | 35 |
| replace | 4 |
| archive | 7 |
| drop | 6 |

### 3.1 Rules

| Content | Rule |
|---|---|
| Component `overview/usage/styling/accessibility`, component has any web code | `git mv` → `/web/components/{c}/…` |
| `frameworks/elements.md` | `git mv` → `/web/components/{c}/code` |
| `frameworks/{react,react-19,vue}.md` | `git mv` → `/web/components/{c}/code-{fw}` (legacy) |
| Web component without Elements (button-group, radio-buttons, utilities) | **new** `code.md`: "No Elements implementation yet" note + legacy tabs; frontmatter `elements: false` |
| `frameworks/{ios,android}.md` | `git mv` → `/{p}/components/{c}/code` |
| Native `overview` / `usage` for a component that is also on Web | **seeded copy** (§3.2); skipped when the source is an in-progress stub |
| Native accessibility | **not created** unless the content is native already (only `confirmation-dialog/accessibility`, iOS-only; verify against `warp-ios` before publishing) |
| Native-only components (broadcast, button-pill, confirmation-dialog, divider, spinner, text) | `git mv` to the first native platform; copy to the second where the component exists on both. In-progress `usage` stubs are dropped and redirected to the overview. |
| Pattern `empty-states` | design pages `git mv` → `/web/patterns/empty-states/` (no web code; guidance covers web, see Q4); iOS/Android get code + seeded overview/usage |
| Co-located assets (`*.vue` examples, `placeholder.svg`, `iconNames.data.js`) | move with the Web pages; `placeholder.svg` is copied to native folders for native-only components |
| `docs/public/**` images | **unchanged** (served at the same URLs) |
| `components/index.md`, `patterns/index.md` | replaced by `/{p}/components/` and `/{p}/patterns/` indexes (`<DsOverview platform=…>`) |
| `DsFrameworkStatus.md` ×2 | replaced by `/about/platform-coverage` (a Vue table generated from the manifest; ends the manual drift) |
| Toast | Web + Android pages archived → redirects to Snackbar; iOS `code` kept (Q5) |
| `pre-migrating.md` (orphan, stale) | archive → redirect to `/get-started/web/migrate-from-fabric/` |
| `get-started/developers/web/web-components.md` (one-line pointer) | drop → redirect to `/get-started/web/` |

"Archive" means `git mv` to `archive/` at the repo root: outside `srcDir`, not built, and easy to restore. History is kept.

### 3.2 iOS / Android seeding strategy

| Option | What | Pros | Cons |
|---|---|---|---|
| A. Code-only | Native components get only `code` (+ native-only design pages) | Fast; nothing unverified | Native devs bounce to Web for design guidance, which recreates "frameworks mixed together" |
| **B. Seed platform-agnostic parts (recommended)** | Copy `overview` and non-stub `usage` from the shared page, strip web-only parts, mark `seeded: true` + notice | Every platform page set is complete from day one; flagged for review; independent from then on | Seeded text may still contain web-isms → mitigated by a seed report |
| C. Full copy incl. accessibility | Copy all shared pages to all platforms | Fastest | Copies web behaviour/a11y claims to native, which breaks the "verify against source" rule |
| D. Include shared snippets | Native pages `<!--@include:-->` shared fragments | No duplication | Couples platforms, against the decided content model; one shared snippet per page is opt-in only |

**Seeding mechanics (B).** A migration script:

1. strips `<style-isolate>…</style-isolate>`, `<…-example …>` elements, `<ThemeSwitcher />`, raw `<w-*>` blocks, and `<script setup>` blocks with relative imports;
2. keeps headings, prose, images, `<DoDont>`;
3. adds frontmatter `seeded: true`, `seededFrom: /web/components/{c}/{page}`, `seededAt: <date>`;
4. writes `redesign/seed-report.md`, listing every seeded line that mentions Elements / web component / React / Vue / CSS / class / attribute / slot / prop / hover / keyboard, for human review.

No accessibility pages are seeded.

### 3.3 Current `foundations/` page by page

| Page | Decision | Why |
|---|---|---|
| tokens/intro, tokens/overview | **Shared** | intro has a brand × Figma/Web/iOS/Android table; overview is images |
| typography, elevation, motion, illustrations, brands, accessibility | **Shared** | design language. Elevation and typography contain some CSS class names → flagged for a later explanation/reference split. |
| dark-mode/index, dark-mode/figma | **Shared** | |
| dark-mode/elements, dark-mode/react | **Web › Foundation** (React = legacy) | framework how-to |
| data-visualization/** (24) | **Shared** | "Tokens & CSS" sub-tree flagged for a later split |
| css-classes/** (124) | **Web › Foundation** | UnoCSS utility reference |
| customization | **Web › Foundation** | "Component Customization Philosophy" (Elements/CSS) |
| font-weights | **Web › Foundation** | "…in Web Browsers" |
| keyboard/navigation, keyboard/shortcuts | **Web › Foundation** ("General web design guidelines") | shortcuts uses `data-w-keyboardinteraction`, `w-button`, `sr-only` |

---

## 4. Redirects

- **Draft map:** [redirect-map.json](redirect-map.json), 654 entries. It covers:
  - all 483 changed old URLs;
  - `/components/{c}`, `/components/{c}/`, `/components/{c}/frameworks(/)` for all 40 components and the pattern;
  - guessable section roots (`/help/`, `/collaborate/`, `/blog/posts/`, `/get-started/designers/`, `/get-started/developers/`, `/foundations/css-classes/`, `/foundations/keyboard/`).
- Keys use the old clean URL form (index pages with a trailing slash). At runtime, lookups normalise by stripping `base`, `.html` and a trailing slash, so both variants hit.
- **Mechanism (research §5c): A + B + C from one map.** In Stage 3 the map is copied to `docs/.vitepress/redirects.json`.
  - **A.** `buildEnd` writes a stub per key (`<old>.html`, or `<old>/index.html` for slash keys). The stub contains `<meta http-equiv="refresh" content="0;url=/docs/new">`, `<link rel="canonical" href="https://warp-ds.github.io/docs/new">`, `<meta name="robots" content="noindex">`, `<script>location.replace('/docs/new'+location.search+location.hash)</script>` and a visible link. It refuses to overwrite a real page (build error).
  - **B.** `enhanceApp({ router })`: `onBeforeRouteChange` + `onBeforePageLoad`. If the path matches `^/(components|patterns|blog|help|collaborate|pre-migrating|get-started/(designers|developers)|foundations/(css-classes|customization|font-weights|keyboard|dark-mode/(elements|react)))`, the hook lazily imports the map, calls `router.go(target + hash)` and returns `false`. Targets are never keys, which the generator validates, so there are no loops.
  - **C.** A `not-found` slot component does the same lookup and calls `location.replace`.
- Search and sitemap: stubs are not VitePress pages, so they are not indexed and not listed. `llms.txt` lists new URLs only.

---

## 5. Tooling changes

| Item | Change |
|---|---|
| Manifest | `docs/.vitepress/platform-manifest.json`. Shape: `{ "web": { "components": { "button": { "title": "Button", "pages": ["overview","usage","code","accessibility"], "code": ["elements","react","react-19","vue"], "seeded": [] } }, "patterns": {…} }, "ios": {…}, "android": {…} }`. Generated, sorted, committed. |
| `scripts/generate-frameworks.js` | Replaced by `scripts/generate-manifest.js`, which scans `docs/{web,ios,android}/{components,patterns}/*/*.md`. Code = `code.md` (+ `elements:false` frontmatter → no Elements) and `code-*.md`; seeded = frontmatter. `pnpm generate-frameworks` becomes an alias of `pnpm generate-manifest` for muscle memory. |
| `scripts/update-framework-status.js` | Deleted (the status page is generated at render time). |
| Sidebar | `sidebar-generator.js` → `sidebar/platform.js` (per-platform tree from the manifest + `sidebar/web-foundations.js`) and `sidebar/shared.js` (Get started, Foundation, About Warp). `sidebar-foundations.js` is split into shared and Web. |
| `.husky/pre-commit` | Regenerate the manifest when staged files match `^docs/(web\|ios\|android)/(components\|patterns)/`. |
| `ComponentsStatus.vue` / `FrameworkTabs.vue` | Rewritten (§2.5); parse `/{platform}/{components\|patterns}/{name}/{page}`. |
| `DsOverview.vue` | `platform` prop; globs `../{web,ios,android}/{components,patterns}/*/placeholder.svg`; links `/{p}/{type}/{slug}/overview`; framework chips only on Web. |
| `bootExamples.js` | Import paths → `../web/components/…`; drop Toast. |
| `posts.data.js` + blog Vue files | Move with the blog; glob `/about/whats-new/*/*.md`. |
| `config.js` | New nav, sidebar map, slots registration, `srcExclude: ['_shared/**']`, `search.options._render` (platform label + honour `search:false`), `buildEnd` (redirect stubs). Keep `ignoreDeadLinks` for `/docs`-prefixed links (0 in Markdown today) and add the post-build link check below. |
| Theme `index.js` | Register `SidebarComposer`, `PlatformSwitcher`, `NavDocsLabel`, `NavCta`, `SeededNotice`, redirect router hooks, `not-found` redirect. |
| New `scripts/check-site.mjs` | After `pnpm build`: (1) every `redirect-map` key resolves to a built page; (2) every `<a href>` in `dist/**/*.html` that points inside `/docs/` resolves to a built page/stub/asset; (3) every `@include` in `docs/**` resolves (they fail silently otherwise). Wired as `pnpm check:site`. |
| CI docs review | `docs-review.yml` path filters → `docs/{web,ios,android}/**`; `review-docs.mjs` component path helpers → per-platform. |
| `CLAUDE.md` | Rewrite "Content Structure" (new tree), "Framework Manifest System" → "Platform manifest", "Adding a New Component" (per platform; code page naming; seeding flag; manifest command). |
| warp-docs skills | **Not changed** (listed in 00 §4.1); backlog. |

---

## 6. Optional shared-snippet convention

- **Folder:** `docs/_shared/` in `srcExclude`, so it is not routed and not indexed. Layout: `_shared/{components|patterns|foundations}/{name}/{topic}.md`, e.g. `_shared/components/button/anatomy.md`. Optional regions inside: `<!-- #region variants -->`.
- **Opt-in:** a page writes `<!--@include: @/_shared/components/button/anatomy.md-->` (or `…md#variants`). The `@` means the source root, so the path does not depend on page depth.
- **Rules:**
  - No page is required to use it.
  - The generator and sidebar ignore `_shared`.
  - Snippets must be platform-agnostic (no code, no behaviour claims) and must not contain relative links, because those are not rebased in 1.6.4.
  - `check:site` fails the build on an unresolved include.
- Iteration 1 creates the folder with a `README.md`, but **no page uses it yet**.

---

## 7. Stage 3 implementation plan

The build stays green after every step. Each step is one logical change, done with scripts in `redesign/scripts/` that re-run on a fresh `main`.

| # | Step | Done when… |
|---|---|---|
| 1 | **Redirect + check infrastructure with an empty map.** `buildEnd` stub writer, router hooks, `not-found` fallback, `scripts/check-site.mjs`, `srcExclude` + `_shared/README.md`. | `pnpm build` green; `pnpm check:site` passes on the current tree (0 broken internal anchors other than those already known, listed in the report); lint clean |
| 2 | **Shared sections move**: get-started, help, collaborate → about, blog → about/whats-new, mission → foundations/about, pre-migrating archive, web-components drop. `git mv`, link rewrite script, config sidebars updated, home / get-started / foundations cards updated, redirect entries for these URLs enabled. | build + `check:site` green; old shared URLs redirect (stub present in `dist`) |
| 3 | **Web Foundation split**: css-classes, customization, font-weights, keyboard, dark-mode/{elements,react} → `/web/foundations/`; shared Foundation sidebar trimmed; temporary `/web/` sidebar key with the Web Foundation tree. | same checks |
| 4 | **Component + pattern migration** (one script): `git mv` web pages, framework pages, native code pages; generate legacy-only Web `code.md`; seed native overview/usage (+ `seed-report.md`); copy native-only pages; archive Toast (Web/Android); move `.vue`/svg assets; rewrite all internal links via the redirect map; fix `bootExamples.js`; confirm the `@include` depth for `web/components/{c}/code.md` (same depth as before). | build green; `check:site` 0 unresolved includes; every Elements code page renders its included sections (spot-check 3 in `dist`) |
| 5 | **Manifest + sidebar generation**: `generate-manifest.js`, `platform-manifest.json`, `sidebar/{shared,platform,web-foundations}.js`, delete old generator, status script and old manifest; husky hook; platform + components/patterns index pages; `/about/platform-coverage`; `DsOverview` platform prop. | every page reachable from its tree; manifest regenerates identically; husky hook fires on a test staged file |
| 6 | **Navigation shell**: header (nav, `NavDocsLabel`, `NavCta`), `SidebarComposer`, `PlatformSwitcher` (listbox, keyboard, live region, localStorage), `ComponentsStatus` → availability, `FrameworkTabs` → Web code tabs, `SeededNotice`, search `_render` labels. | the dev-server checklist (§7.1) passes |
| 7 | **Full redirect map on**: copy the final `redirect-map.json` to `.vitepress/redirects.json`. | `check:site` reports 654/654 keys resolve; old deep URL loads the new page by hard load **and** by in-app navigation |
| 8 | **Docs + CI**: `CLAUDE.md`, `docs-review.yml`, `review-docs.mjs` paths; `pnpm check`. | lint clean; the `test:review-docs` suite passes |
| 9 | **Verification + report**: baseline comparison (dead links, warnings, build time), browser checks, `redesign/03-iteration-1-report.md`. | report written; all changes left uncommitted |

### 7.1 Browser checklist (step 6/9)

- Each top-level section.
- Switcher on Web, iOS and Android pages, and on a shared page (tree swap only, remembered after reload).
- A component on all three platforms (Button): switching keeps you on the same page kind.
- A single-platform component (Breadcrumbs → Web only; Confirmation dialog → iOS only): switching falls back to the components index.
- `/docs/components/button/frameworks/ios` → `/docs/ios/components/button/code`, by hard load and via an in-app link.
- Mobile drawer (≤768px) contains shared tree + switcher + platform tree.
- Keyboard: Tab to the switcher, ↓ opens, arrows/Home/End/type-ahead, Enter selects, Esc returns focus; VoiceOver announces role, label, expanded/selected state and the live message.

---

## 8. Risks and open questions

### 8.1 Open questions (each with a recommended answer)

| # | Question | Recommendation |
|---|---|---|
| **Q1** | Miro leaves that have no content (Resources, Required reading, Using AI children, Colors › Primitives, UX writing, Language support, Designing for AI, Design principles, iOS/Android Foundation, Web Resources / Semantic tokens): create placeholder pages, or leave them out until written? | **Leave them out** (Diátaxis: no empty structure; empty pages repeat the "dead end" pain point). They are tracked in the backlog with their planned URLs. |
| **Q2** | "Using AI": top level (Miro) or under Get started (prototype)? And should iteration 1 ship an index page? | **Get started › Using AI** at `/get-started/ai/`. Ship it only if you can point me at real content (e.g. whether `github.com/warp-ds/warp-docs-skills` may be linked publicly, and the existing `llms.txt` / `llms-full.txt`). Otherwise backlog with Q1. |
| **Q3** | Seed native overview/usage from the shared pages (option B), or code-only native pages (A)? | **B**, with the `seeded: true` flag, visible notice and seed report; no native a11y pages until checked against the platform source. |
| **Q4** | Empty states has iOS/Android code but no web code. Should Web list it? | **Yes**: patterns are design guidance first ("Code?" in Miro), and the usage page already covers web placements. The Web pattern has no Code page. Components keep the strict "only if code exists" rule. |
| **Q5** | Toast: our docs say deprecated, but only Android's source marks it deprecated; `warp-ios` and Elements `toast.ts` do not. | **Archive Web + Android Toast → Snackbar; keep iOS Toast Code page** (no deprecation claim) until the iOS team confirms. If you'd rather follow the docs everywhere, the generator switches with one line. |
| **Q6** | Web components with only legacy code (button-group, radio-buttons, utilities): list them on Web? | **Yes**, with a generated Code page ("No Elements implementation yet") + legacy tabs, so old URLs have a real target and the gap is visible. |
| **Q7** | Blog URLs: move to `/about/whats-new/{yyyy}/{slug}` (66 redirects) or keep `/blog/` URLs under About Warp in the sidebar? | **Move**. The redirect machinery makes it cheap, and the URL then matches the IA. |
| **Q8** | Icons is a Foundation item in Miro but a component on 4 frameworks today. | **Keep Icons as a platform component** in iteration 1 (the icon gallery is Elements-driven). Foundation › Icons (shared icon language) goes to the backlog. |
| **Q9** | Land as one PR or several? | **One PR from this branch**, built as the 9 commits in §7, so reviewers can review the scripts and spot-check moves. It needs a short freeze on `docs/components/**` edits on `main` while it's open (the scripts re-run if needed). |

### 8.2 Risks

| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| Internal `VPSidebarGroup` import breaks on a VitePress upgrade | Low (version pinned) / medium | Isolated in `SidebarComposer.vue`; fallback = alias override (research §5a option 2); note in CLAUDE.md |
| A moved `@include` silently renders nothing | Medium / high (Elements code pages) | Same depth kept; `check:site` include check; `dist` spot-checks |
| Seeded native pages contain web-only claims | Medium / medium | Strip rules + seed report + visible notice + `seeded` flag in the manifest for follow-up |
| Merge conflicts with ongoing docs PRs (64 commits landed recently) | High / medium | Scripted, re-runnable migration; short freeze; rebase by re-running |
| Platform-tree swap on shared pages for iOS/Android users | Certain / low | Only on shared pages; tree area only; later: render after mount with a skeleton |
| Duplicate search hits (×3) | Certain / low | Platform labels in titles; filter UI in the backlog |
| Old URLs in external tools / skills | Certain / low | Stubs + router hook + 404 fallback; skills listed for later update |
| GitHub Pages `/foo` vs `/foo/` redirect quirk | Low / medium | Flat Web code pages; generator collision check |

---

## 9. Later-iteration backlog

1. **Visual redesign** (prototype / Fluent polish): home page (hero, Explore cards, Quick links, Collaborate band), article layout (breadcrumbs, eyebrow, lede, wider measure, Warp-token typography), header styling (blur, right-aligned search), single mobile drawer, sidebar uppercase section headers.
2. **Diátaxis restructuring**: split `get-started/web` (setup / config reference / explanation); split the Elements code page into Code (how-to + examples) and API (reference); typography/elevation/dataviz tokens → shared explanation + per-platform reference; page-type templates and frontmatter.
3. **Content for the Miro leaves** (Q1): Resources, Required reading (per discipline), Using AI (Agent skills, Figma Make, Replit, MCP, `llms.txt`), Colors › Primitives, Design principles, UX writing, Language support, Designing for AI, iOS/Android Foundation, Web Resources (Templates, Skills, Plugins, Storybook), Semantic tokens, Migration from React/Vue.
4. **Native page review**: replace seeded text, write native accessibility pages from `warp-ios` / `warp-android` source, remove the `seeded` flags.
5. **Versioning per component** (package version, changelog link, status badges) and the Toast/Snackbar lifecycle.
6. **Native previews** (screenshots or a Replit/Appetize-style preview).
7. **What's new automation** (release notes from package changelogs).
8. **Search**: platform filter / boosting; dedupe legacy code pages.
9. **Update the warp-docs skills/plugins** (`warp-docs-skills`, `audit-run`, `warp-docs-audit`) and the "Toast deprecated" memory link to the new paths.
10. **Feedback widget** ("Was this page helpful?") once an analytics endpoint is chosen.
11. Remove the legacy React/Vue tabs when those packages are sunset.
