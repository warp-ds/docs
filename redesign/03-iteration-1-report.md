# Iteration 1 report: IA split + navigation shell

Date: 2026-11-05 · Branch `redesign/ia-platform-split` (base `641e231`) · Committed locally as 4 commits after the decisions in §6. **Not pushed.** `redesign/` itself is left untracked.

The plan was approved with the recommended answers to Q1–Q9. Q2 ("Using AI") had no content to point to, so it stays in the backlog.

## 1. What changed

### Content (scripted, re-runnable)

`redesign/scripts/build-mapping.mjs` → `content-mapping.csv` + `redirect-map.json`, then `redesign/scripts/migrate.mjs`. The migration script needs a clean `docs/` and re-runs on a fresh `main`.

| | Count |
|---|---|
| Pages moved with `git mv` (history kept) | 466 |
| Seeded iOS/Android overview/usage pages (`seeded: true`) | 90 |
| Native-only pages copied to the second platform | 3 |
| Generated Web `code.md` for components without Elements (button-group, radio-buttons, utilities) | 3 |
| Archived to `archive/docs/` (Toast Web + Android ×6, `pre-migrating.md`; also unused `patterns/utils.js`) | 7 (+1 asset) |
| Dropped (native-only in-progress usage stubs ×5, `web-components.md`) | 6 |
| Co-located assets moved (`*.vue` examples, `placeholder.svg`, `iconNames.data.js`) | 58 |
| Internal links rewritten (Markdown links, raw `href`, script card `href:`) | 519 |
| New index pages (`/web/`, `/ios/`, `/android/`, `/web/foundations/`, `/{ios,android}/{components,patterns}/`, `/get-started/design/`, `/about/`) | 10 |

Result:

- Built pages: 518 → **610** (+ `404.html`).
- **Web:** 33 components + 1 pattern.
- **iOS:** 32 + 1.
- **Android:** 28 + 1.
- **Shared:** Get started, Foundation (Design Language) incl. `/foundations/about/`, About Warp (help, what's new, platform coverage).
- **Web Foundation:** CSS classes (124), customization, dark mode, keyboard, font weights.

### Tooling

- `scripts/generate-manifest.js` → `docs/.vitepress/platform-manifest.json`. Per platform and item: `pages`, `seeded`, Web `frameworks`. Output is Biome-formatted.
  - `pnpm generate-manifest`; `pnpm generate-frameworks` is kept as an alias.
- Removed: `scripts/generate-frameworks.js`, `scripts/update-framework-status.js`, `frameworks-manifest.json`, `sidebar-generator.js`, `sidebar-foundations.js`, both `DsFrameworkStatus.md`.
- Sidebars: `docs/.vitepress/sidebar/{shared,platform,foundation-items,web-foundation-items}.js`.
- `.husky/pre-commit` regenerates the manifest when `docs/{web,ios,android}/{components,patterns}/**/*.md` is staged.
- **Redirects** (one map, `docs/.vitepress/redirects.json`, 654 entries):
  - `build/redirect-stubs.js` writes stub pages in `buildEnd`. Each stub has meta refresh, `location.replace` (keeps query and hash), canonical and `noindex`. The build fails on overwrite, chains, or keys the client rule doesn't cover.
  - Router hooks (`onBeforeRouteChange` + `onBeforePageLoad`, so back/forward is covered) load the map lazily.
  - `RedirectNotFound.vue` is the 404 fallback.
- `scripts/check-site.mjs` (`pnpm check:site`): checks redirect stubs and targets, every internal `<a href>` in `dist`, and every `@include`.
- `config.js`: new nav, sidebar map, `srcExclude: ['_shared/**']`, search `_render` that prefixes result titles with "Web ›", "iOS ›" or "Android ›" (and honours `search: false`), and `buildEnd`.
- `docs/_shared/README.md`: the opt-in snippet convention. No page uses it.
- CI docs review is now per platform:
  - `.github/workflows/docs-review.yml` paths;
  - `scripts/review-docs.mjs`: Web requires overview/usage/accessibility, native requires overview/code;
  - `.github/codex/scripts/component-issues.cjs` + README;
  - test fixtures. `pnpm test:review-docs`: 54/54.
- `CLAUDE.md`: new Content Structure, Platform Manifest System, Adding a New Component, commands.

### Navigation shell

- **Header:**
  - logo + "Docs" (`NavDocsLabel.vue`, `nav-bar-title-after`);
  - local search (⌘K);
  - Changelog → `/about/whats-new/`;
  - About DS → `/foundations/about/`;
  - "Get started" button (`NavCta.vue`, also in the mobile nav screen);
  - GitHub;
  - dark-mode toggle.
- **Sidebar:** `SidebarComposer.vue` sits in the `sidebar-nav-before/after` slots and reuses VitePress's internal `VPSidebarGroup`.
  - Platform pages: shared tree + switcher, then the platform tree.
  - Shared pages: shared tree, then the switcher + the remembered platform tree.
  - Active state and prev/next stay native, scoped to the current tree.
- **`PlatformSwitcher.vue`:** WAI-ARIA listbox.
  - Trigger: `aria-haspopup="listbox"`, `aria-expanded`, `aria-controls`, labelled "Platform <value>". Popup: `role="listbox"` with `aria-activedescendant`; options with `aria-selected`.
  - Keys: ↑/↓, Home/End, type-ahead, Enter/Space. Escape closes and returns focus. Tab closes. Focus leaving the switcher closes it.
  - `aria-live` announcement ("Showing iOS navigation"). Ids come from SSR-stable `useId()`.
  - State lives in `composables/platform.js`. The URL is the source of truth, then `localStorage['warp-docs-platform']`, then Web.
  - On platform pages, switching navigates to the same component and page kind, falling back to the component overview, then the components index.
  - On shared pages, switching swaps the tree only.
- `ComponentsStatus.vue` → "Available on: Web · iOS · Android" chips linking to the equivalent page; the current platform has `aria-current`. Web Code pages also show framework badges (Elements released, React/Vue legacy).
- `FrameworkTabs.vue` → Web Code tabs: Elements | React (legacy) | React 19 (legacy) | Vue (legacy). It renders nothing on native pages. Semantics changed from the old (incorrect) `role="tab"` links to `nav` + `aria-current`.
- `DsOverview.vue` takes a `platform` prop; framework filter chips only show on Web.
- `PlatformCoverage.vue` → `/about/platform-coverage`, generated from the manifest (replaces the manually maintained, drifted matrices).
- `SeededNotice.vue` (`doc-before` slot): "Pending iOS review" notice on seeded pages.

## 2. Verification

### Build vs Stage 0 baseline

| | Baseline | Now |
|---|---|---|
| `pnpm build` | pass, 20.6 s | **pass, 24.3 s** (+92 pages, +654 stubs) |
| Dead links reported | 0 | **0** |
| Asset warnings ("didn't resolve") | 14 | **12** (the 2 `stars-background.svg` warnings are gone after the Footer fix, §6) |
| Chunk-size / unused-import warnings | 1 / 1 | **1 / 1** (same; `radio-buttons/Example.vue` path moved) |
| `pnpm lint:check` | clean | **clean** (97 files); `biome check .` (lint + format) also clean |
| `pnpm check:site` | — | **654/654 redirects resolve to built pages; 0 broken internal links (1,265 HTML files, 613 targets); 0 unresolved includes** |
| `pnpm test:review-docs` | 54/54 | **54/54** |
| Manifest regeneration | — | idempotent |

### Browser checks

Script: `redesign/scripts/browser-check.mjs`. It uses playwright-core installed in `/tmp`, outside the repo, to drive the local Chrome headless. Logs: `browser-check-dev.log`, `browser-check-prod.log`. Screenshots: `redesign/screenshots/{dev,prod}/`.

- **`pnpm dev`: 45/45 passed.**
- **Production build (`pnpm serve`): 44/45.** The one failure is pre-existing; see below.

What I checked and saw:

- **Every top-level section** renders with the shell: `/`, `/get-started/` (+ design), `/foundations/` (+ about), `/about/` (+ whats-new, platform-coverage), `/web/`, `/ios/`, `/android/`, and the platform component/pattern indexes.
- **Header** contains the Docs label, Search ⌘K, Changelog, About DS, GitHub and the Get started button.
- **iOS page sidebar:**
  - Groups read Get started | Foundation (Design Language) | About Warp | [switcher "iOS"] | iOS | Components | Patterns.
  - The active item is "Code".
- **Component on all three platforms (Button):**
  - Switching iOS → Android → Web on `…/button/code` keeps the page each time (`/docs/android/components/button/code`, then `/docs/web/components/button/code`).
  - Web code tabs read Elements, React (legacy), React 19 (legacy), Vue (legacy).
  - Availability reads Web (current) · iOS · Android.
- **Single-platform components:**
  - Breadcrumbs (Web only) → iOS lands on `/docs/ios/components/`.
  - Confirmation dialog shows "iOS" only, and → Android lands on `/docs/android/components/`.
- **Shared page** (`/foundations/typography/`): switching to Android swaps the tree with no navigation. After a reload the switcher still shows Android.
- **Seeded notice** on `/ios/components/alert/overview`: "Pending iOS review…".
- **Keyboard and ARIA:**
  - Trigger: `haspopup=listbox`, `expanded=false`, accessible name "Platform Web" (verified after SSR + hydration in the production build).
  - ArrowDown opens the list and focuses the listbox; the active option is the selected one; `expanded` becomes true.
  - ArrowDown/End/Home/type-ahead give iOS, Android, Web, Android.
  - Escape closes, returns focus to the trigger and doesn't navigate.
  - Tab closes the list.
  - Space then ↓ then Enter selects iOS and navigates to the same page; the live region reads "Showing iOS navigation".
- **Redirects:**
  - In-app link to `/docs/components/button/frameworks/ios#syntax` → `/docs/ios/components/button/code#syntax`. Back returns to `/docs/web/`.
  - Hard load of `/docs/components/button/frameworks/ios` → `/docs/ios/components/button/code`. In production this is the stub page; in dev, the 404 fallback.
  - Also verified: `/blog/` → `/about/whats-new/`; `/components/toast/overview` → `/web/components/snackbar/overview`; `/foundations/css-classes/margin` → `/web/foundations/css-classes/margin`; `/get-started/developers/web/` → `/get-started/web/`.
- **Search:** "button overview" returns results titled "iOS › Button group - Overview", "Web › Button group - Overview", "Android › Button - Overview", and so on.
- **Mobile (390×844):**
  - The "Menu" drawer contains the shared sections, the switcher and the Android tree.
  - Switching in the drawer keeps the page (Android → iOS on Button/code).
  - The hamburger nav screen has the Get started button.
- **The one production failure** (still the only one after the §6 follow-ups) is Vue "Hydration completed but contains mismatches" on pages with live web examples (e.g. `/web/components/{alert,button,breadcrumbs}/overview`) and on the What's new index. **Pre-existing:** I built the untouched baseline (`641e231`) in a temporary worktree and got the identical warning on the same pages (`/components/{alert,button,breadcrumbs}/overview`, `/blog/`). The switcher pages are clean in both builds. Not caused by the shell; not fixed.

### Not verified

- Real GitHub Pages behaviour (custom `404.html` for a project site under `/docs/`, `/foo` vs `/foo/`). The stubs avoid relying on either.
- VoiceOver announcements. ARIA roles, states and the live region were checked programmatically, but not with a screen reader.
- The docs-review workflow in a real PR.

## 3. Deviations from the plan, and why

1. **One scripted pass instead of 9 step commits.** You asked for no commits, so the steps were executed by `migrate.mjs` plus the tooling changes, with build/checks run at checkpoints and at the end. The scripts are re-runnable, so splitting into commits later is mechanical.
2. **Chrome styling uses the docs theme variables (`--vp-c-*`), not `--w-s-*` Warp tokens.** On this site the Warp tokens follow the example theme switcher (brand, light or dark for live examples), not the site's dark-mode toggle. Using them in the chrome would break dark mode. The `--vp-c-*` variables are already mapped to Warp brand colours in `custom.css`. No hardcoded colours were added.
3. **Hardcoded paths missed in Stage 0, now fixed:** `docs/.vitepress/Footer.vue` (help/collaborate links), `.github/codex/scripts/component-issues.cjs` and `.github/codex/README.md`, and the three docs-review test fixtures.
4. **Pre-existing bugs fixed because `check:site` caught them:**
   - Icons code page included the non-existent `dist/docs/styling/api.md` → now `icon/styling.md`.
   - Steps code page included the non-existent `step/styling.md` → now `step-indicator/styling.md`.
   - The sidebar linked `/foundations/dark-mode/figma/` (trailing slash; the page is `figma.md`).
5. **`check:site` allowlists one upstream link:** `@warp-ds/elements` `dist/docs/badge/*.md` links to `/docs/components/alert/overview`, which renders as `/docs/docs/…`. It needs fixing in the Elements repo.
6. **Native pages link to their own platform.** The plan's link rewrite pointed every old component link at Web. Links on iOS/Android pages now go to the same platform's page when it exists (e.g. iOS Alert → iOS Box).
7. **Seeding** also drops empty headings left behind once live examples are stripped, and treats a trailing `<component-questions />` as non-content.
8. **No "Using AI" page** (Q2: no content was identified).
9. **The legacy-only Web Code page tab is labelled "Overview"**, linking to the generated `code.md`.

## 4. Known gaps

- **Seeded pages need review:** 90 seeded pages; `seed-report.md` flags 547 lines across 65 pages that mention web terms (Elements, CSS, keyboard, hover, …). 25 seeded pages have no flagged lines.
- **Native accessibility:** only `ios/components/confirmation-dialog/accessibility` exists, now verified against `warp-ios` (§6). No other native a11y pages, by design.
- **Toast on iOS** is kept as a Code page with a deprecation note (§6). `warp-ios` itself has no deprecation marker yet.
- **Status is not modelled in the manifest.** The old manual matrix marked Broadcast (iOS) "deprecated"; the generated coverage page has no status column. Backlog: a `status` frontmatter field.
- **Shared pages:** non-Web users see the Web tree briefly before it swaps to their remembered platform (SSR renders Web).
- **Upgrade risk:** `SidebarComposer.vue` imports `vitepress/dist/client/theme-default/components/VPSidebarGroup.vue` and `RedirectNotFound.vue` imports `NotFound.vue`, both internal. VitePress is pinned at 1.6.4. This is noted in `CLAUDE.md`.
- **Page titles were not rewritten** (no content rewrites in iteration 1). Seeded pages keep "Button - Overview", and native Code pages keep "Button - iOS" plus a visible "## iOS" H2.
- **Pre-existing, not fixed:**
  - hydration mismatches on live-example pages and the blog index;
  - the 12 remaining unresolved image warnings;
  - the chunk-size warning;
  - the `ignoreDeadLinks` rule for `/docs`-prefixed links (kept; `check:site` covers it).
- **Legacy one-off scripts** `scripts/frameworks-title-touchup.js` and `scripts/move-docs.js` still assume the old paths. They're unused, so I left them.
- `redirects.json` is a copy of `redesign/redirect-map.json`. From now on the copy in `docs/.vitepress/` is the one to edit.

## 5. Next steps

1. Review the 4 local commits on `redesign/ia-platform-split`, then push and open the PR when ready.
2. Short freeze on `docs/components/**` edits on `main` while the PR is open. If `main` moves, reset `docs/`, re-run `build-mapping.mjs` + `migrate.mjs`, and re-apply the tooling commits.
3. Ask the iOS team to mark `Warp.Toast` deprecated in `warp-ios` (the docs already say so).
4. Work through `seed-report.md` platform by platform, removing `seeded: true` as pages are reviewed (you).
5. File the drafted Elements issue (`upstream-elements-issue.md`), and open a PR to `warp-ds/warp-docs-skills` with `warp-docs-skills-paths.patch`.
6. Iteration 2 per the backlog (plan §9): visual redesign, Diátaxis splits, content for the Miro leaves (Using AI first), status/versioning per component.

## 6. Follow-ups after the decision form (2026-11-05)

Decisions:

| Decision | Choice |
|---|---|
| iOS Toast | Keep the page and add a deprecation note |
| Seeded pages | Keep them; you'll review later |
| Follow-ups | All four (below) |
| Git | Four local commits, no push (list below) |

1. **iOS Toast:** `docs/ios/components/toast/code.md` now opens with a "Deprecated" warning pointing to [Snackbar](/ios/components/snackbar/code). Web and Android stay archived and redirect to Snackbar.
2. **Footer:** `docs/.vitepress/Footer.vue` now uses `url('/stars-background.svg')`, which builds to `/docs/stars-background.svg`. The 404 on every page is gone (checked against the production build), and two build warnings disappeared.
3. **iOS Confirmation dialog accessibility,** checked against `warp-ios` `Sources/Components/ConfirmationDialog/{ConfirmationDialog,ConfirmationDialogViewModifier}.swift`.
   - **Removed or corrected:**
     - "Cancel is always the last focusable element". Wrong on iPad, where the system hides cancel-role buttons in the popover and tapping outside doesn't call the cancel handler.
     - "Swipe up/down cycles through the actions". VoiceOver moves between elements with swipe left/right.
     - "VoiceOver reads 'Destructive button', so the label needn't say 'delete'". Not verifiable from the source; the label must name the action.
     - "Focus moves to the first action button". Not verifiable; system-managed.
     - Android numbers on an iOS page.
   - **Added from the source:** the title is always visible; the message is optional; `.primary` actions go first, and VoiceOver order follows; the system adds Cancel, a `.cancel` action only gives it a custom title, and only the first one is kept; `.destructive` uses the destructive button role plus the negative text colour; no custom motion.
   - **Same component's `usage.md`:** three contradicting lines fixed (custom-titled Cancel is allowed; iPad dismissal; no unverified haptics claim).
4. **Skills and memory** (outside the repo; backups in `/tmp/skills-backup/`):
   - User skills `~/.claude/skills/{warp-docs/**,audit-component,document-component,list-components}` and the installed plugin cache `~/.claude/plugins/cache/warp-docs/warp-docs-skills/1.1.0`: page paths → `docs/web/components/…` (+ iOS/Android folders), `frameworks/` → Code pages, `generate-frameworks` → `generate-manifest`, preview URLs → `/docs/web/components/…`. Asset URLs (`/components/…`, `/docs/components/…/DoDonts/…`) are unchanged.
   - The plugin's source clone (`~/.claude/plugins/marketplaces/warp-docs`) is **untouched**. The same change is in [warp-docs-skills-paths.patch](warp-docs-skills-paths.patch) for a PR to `warp-ds/warp-docs-skills`. Until that lands, a plugin update overwrites the cache with the old paths again.
   - Audit tooling now understands **both** layouts, because the audit clones `main`, which keeps the old layout until this merges:
     - `~/.claude/workflows/warp-docs-audit.js` (prompt);
     - `~/warp-audit/skill-src/build.mjs` (detects the layout; links go to `…/overview` / `…/usage`);
     - `~/warp-audit/registry.json` (added `paths.docsPlatform`).
   - Memory: "Toast deprecated" (per-platform Snackbar links; iOS keeps the Toast page with a note) and "Elements-only for web prose" (legacy code page names) are updated.
   - **Caveat:** the user skills and plugin cache now describe the new layout, so on a checkout of the old `main` they point to paths that don't exist yet.
5. **Upstream Elements issue (draft, not filed):** [upstream-elements-issue.md](upstream-elements-issue.md). Root-relative `/docs/components/alert/overview` links in `packages/badge/docs/{accessibility,usage}.md` and `packages/toast/docs/{usage,examples}.md` render as `/docs/docs/…`; the icon docs use an absolute old URL.

### Commits (local, not pushed)

| Commit | Content | Builds on its own |
|---|---|---|
| `29b0e95` docs: split into shared, Web, iOS and Android sections with a new shell | content move/seeds + manifest/sidebars + navigation shell | yes, verified in a clean worktree (20.8 s, 0 dead links) |
| `ef0d3d9` feat: redirect every old URL to its new location | redirect map, stubs, router hooks, 404 fallback, `check:site` | yes (the verified final tree) |
| `4549ad0` ci: make the docs review per platform | workflow paths, review-docs, codex check, test fixtures | yes; `test:review-docs` 54/54 |
| `d6b7714` docs: update CLAUDE.md for the platform split | CLAUDE.md | yes |

This split differs from the one proposed in the form (content / tooling / shell + redirects / CI + docs). Content can't be committed without the new sidebars: with the old sidebar config, `vitepress-plugin-llms` recurses on the now-missing paths and the production build runs out of memory. So content, manifest/sidebars and shell share the first commit, and redirects get their own. `redesign/` is left untracked.

## 7. Round 2 changes (after review on localhost, 2026-11-05) — uncommitted

1. **Design Language.**
   - "Foundation (Design Language)" is renamed to **Design Language** and moved from `/foundations/` to `/design-language/`: `git mv`, 85 links rewritten, and 34 new redirects (688 in total). Image URLs under `/foundations/…` are unchanged.
   - The index no longer lists Web-only cards and links to each platform's Foundation section.
   - Header "About DS" → `/design-language/about/`.
2. **Cross-links, opt-in.**
   - A platform foundation page declares `designLanguage: /design-language/<topic>/` in frontmatter. `generate-manifest` builds the reverse map, and `PlatformLinks.vue` (`doc-before` slot) renders "Platform specifics: Web … · iOS … · Android …" on the shared page and "Shared guidance: Design Language › …" on the platform page.
   - Web pages linked: dark mode ×2, font weights, keyboard ×2, and the background/text colour classes.
3. **iOS and Android Foundation sections,** written by two agents from the `warp-ios` (`main`) and `warp-android` (`develop`) sources.
   - **iOS:** Theming, Tokens, Typography, Spacing, Shape, Elevation (+ overview).
   - **Android:** Theming, Tokens, Typography, Elevation (+ overview).
   - The sidebar Foundation group comes from the manifest; the switcher maps the same topic across platforms (iOS Tokens ↔ Android Tokens).
   - Fixed while integrating: a dead link (`/design-language/data-visualization/`).
4. **Existing pages corrected against source** (found by the agents, confirmed by me):
   - `get-started/ios`: `Warp.Config.warpTheme` doesn't exist → `Warp.Theme` + `.warpTheme(_:)`, 6 brands.
   - `get-started/android`: 3 → 6 brands.
   - `ios/components/text/code`: `color` default is `Color? = nil`.
5. **Sidebar.** The platform tree reads Overview · Foundation · Components · Patterns. All three groups start collapsed and open on the current page, so Patterns no longer sits about 1,600px down.
6. **Page tabs.** `ComponentsStatus` renders Overview | Usage | Styling | Code | Accessibility under the title of every component and pattern page. Each tab is still a separate page, so URLs, search and prev/next are unaffected. The Web framework switch is now a smaller second-level "Framework" control.

**Upstream findings** (not docs bugs, not changed):

- **warp-ios:**
  - typeface and strings follow only the global `Warp.Theme`; the non-FINN sample-app targets set only `.warpTheme(_:)`;
  - `ENVIRONMENT_MIGRATION.md` claims a deprecation the code doesn't have.
- **warp-android:**
  - `minimumTouchSize` is 44 dp in Compose but 48 dp in XML;
  - the XML dimens have no `space15`;
  - `adaptDpToFontScale` ignores `coerceMinSize` without `coerceMaxSize`;
  - the README is outdated.

**Verification:**

- `pnpm build`: pass, 24.9 s, 0 dead links, 12 asset warnings (unchanged).
- `pnpm check:site`: 688/688 redirects, 0 broken links across 1,311 HTML files, 0 bad includes.
- Biome clean.
- Browser suite on dev: **55/55** (new checks: page tabs, Design Language cross-links both ways, iOS → Android foundation switch, the `/foundations/…` redirect).

## 8. Round 3 changes (2026-11-05) — uncommitted

1. **Patterns are their own section again,** as in production, plus the Platform switcher.
   - The shared sidebar has a top-level **Patterns** entry → `/patterns/`, a new landing page listing each pattern with the platforms it exists on (`PatternsIndex.vue`).
   - On pattern pages, only `<Platform> patterns` appears under the switcher (`patternSidebars`); the platform tree no longer has a Patterns group, and pattern pages don't show Foundation/Components.
2. **Empty states removed from Web** (it has no Web implementation).
   - The original shared overview/usage/accessibility pages moved to iOS with `git mv` (history kept) and were copied to Android, replacing the stripped seeded copies. They are no longer `seeded`.
   - Links in them point to each platform's Alert/Snackbar.
   - The accessibility page's only claim (illustrations don't scale with text size) was verified against iOS `StateView` (fixed 200×200 `frame`) and Android `WarpState` (`Modifier.size(... dimensions.illustration)` in dp).
   - `/web/patterns/` now says no Web patterns are documented yet.
   - Redirects: `/patterns/` is a real page again; old Empty states URLs → iOS.
   - The What's new post about Empty states links to `/patterns/`.
3. **Home page redesigned in the Fluent 2 style:**
   - `layout: page`, so the sidebar shows from the start.
   - `HomeLanding.vue`: "Welcome to Warp" hero with Design / Develop entries; Platforms (Web, iOS, Android with live component/pattern counts and Get started / Foundation / Components links); Shared across platforms (Design Language, Patterns); Quick links; Help evolve Warp.
   - The old home is kept in git history.

**Verification:** `pnpm build` passes (23.2 s, 0 dead links, 12 asset warnings); `check:site` 687/687 redirects, 0 broken links (1,310 HTML files), 0 bad includes; Biome clean; dev browser suite **60/60**.

## 9. Round 4: visual adjustments (2026-11-05)

1. **Full-width shell.** `--vp-layout-max-width: 100vw`: sidebar pinned left, outline pinned right at any width; fixed 768px reading column (`--warp-doc-width`) centered in between, independent of the outline. Home widened to 1376px.
2. **Home platform cards.** Rebuilt as list cards: a heading (platform + technology), then equal full-width rows (Overview, Get started, Foundation, Components n, Patterns n), 48px targets, chevrons, counts as badges. Patterns row only where a platform has patterns.
3. **One header switch.** "Available on" chips and the "Shared guidance / Platform specifics" box replaced by `PageContext.vue` above the H1: breadcrumb left, segmented switch right. Component/pattern pages: `Web | iOS | Android` (missing platforms shown as unavailable). Design Language topics and their linked platform pages: `Design Language | Web | iOS | Android`; several pages on one topic open a disclosure menu. `PlatformLinks.vue` removed.
4. **No header jump.** `scripts/stable-headers.mjs` (348 pages): H1 = item name, `<ComponentsStatus />` directly under it. The Framework control moved into the header; the framework H2 is hidden by CSS (no post-mount hiding); the seeded notice renders below the tabs. Search and browser titles add the page kind back (`Web › Alert › Usage`, `Alert · Usage · Web`).

Verification: build OK; `check:site` 687 redirects, 0 broken links, 0 include problems; Biome clean; review-docs tests 54/54; browser suite 64/64 (dev), including "header identical on Usage, Code (React) and Overview" (same H1/tabs y and x). Prod 63/64: the only failure is the same 3 pre-existing hydration mismatches (live-example pages, blog index).

## 10. Round 5: home, sidebar and header fixes (2026-11-06)

1. **Home platform cards.** One card per platform (Web, iOS, Android) with an icon, technology and component/pattern counts. The whole card links to the platform overview; there are no deeper links (the sidebar takes over from there).
2. **Sidebar rhythm.** Top-level links without children (Patterns, and the platform tree's first item) had VitePress' 24px bottom padding instead of the 10px of collapsed groups. Now every top-level item uses 10px, and the extra 8px above the Platform block is gone. The platform tree's "Web / Web overview" group is a single "Overview" link (the switcher above already names the platform). The "Docs" label next to the logo is removed (`NavDocsLabel.vue` deleted).
3. **Status badges are back.** The original `WarpBadge` row (`[icon] Elements | released`) sits between the H1 and the tabs, identical on every tab. It is scoped to the current platform: Web shows Elements (released) and React / React 19 / Vue (legacy); iOS and Android show one badge. A new optional frontmatter `status:` (collected into the manifest) overrides "released"; iOS Toast is `deprecated`.
4. **"See also" on every tab.** 16 items had the related-components line on Overview and Usage only. `scripts/see-also-everywhere.mjs` copied it after the lead paragraph on the other 31 pages (Accessibility and Code tabs, Web legacy code pages included).
5. **Platform overview pages.** `/web/`, `/ios/` and `/android/` replace the bullet lists with `<PlatformOverview platform />`: cards for Get started, Foundation, Components and Patterns (counts from the manifest; every platform has the same four cards, and Patterns is a disabled, non-link card on Web until a pattern is documented), plus a "Shared across platforms" row (Design Language, Platform coverage). iOS and Android now link their Foundation too.
6. **"Help evolve Warp".** Warm brand panel (brand-soft gradients and the Warp star field), a Slack pill as the primary action, and three action cards (Contribute guidance, Request a component, Get help) with the Warp red circle icons, descriptions and hover motion (disabled under reduced motion).

Verification: build OK; `check:site` 687 redirects, 0 broken links, 0 include problems; Biome clean; review-docs tests 54/54; browser suite 70/70 (dev; new checks for the home cards, the collaborate links, sidebar padding, badges on Overview and Accessibility, See also on Accessibility, iOS Toast deprecated, iOS overview cards). Prod 69/70: the only failure is the hydration mismatches on pages with live Elements examples (Alert, Button, Breadcrumbs overview; Alert overview is newly visited by the suite) and the blog index. The badge pages without live examples (Alert accessibility, iOS Toast) hydrate cleanly.

## 11. Round 6: site-wide consistency pass (2026-11-06)

1. **One card pattern.** A Docs UI system at the end of `theme/custom.css`: spacing scale (4–64), radius scale (8 controls, 12 cards, 16 panels) and `.dc-grid` / `.dc-card` (`--media`, `--row`, `--disabled`). NavCards, PlatformOverview, the components grid (DsOverview), the patterns landing (PatternsIndex), What's new (ArticleCard) and the home page all use it.
2. **Cards instead of link lists** via the new `<NavCards>` (items in frontmatter, icons from `CardIcon.vue`, platform logos from simple-icons): Get started, Get started: Design, Design Language (plus a Platform foundations row), Dataviz introduction, About Warp, Web / iOS / Android foundation (plus Related rows), Web patterns (disabled card + All patterns). What's new uses a plain title and intro instead of the Hero component (removed); dates are formatted in UTC.
3. **Components grid:** the placeholder descriptions ("Alert component.") are replaced by facts: Web lists the implementations (Elements · React · Vue), native shows "Deprecated" or "Code only". Filter chips use the 8px control radius.
4. **Spacing:** H2 48px above (the hidden divider's 24px padding is gone), H3 32px, H4 24px; prev/next cards use the 12px card radius; the patterns sidebar is flattened like the platform tree (top-level "All … patterns" link, then one group per pattern).
5. **Typography and colour:** titles are semibold (600) everywhere (home, cards, sidebar groups, footer, switcher label, tabs); nav links medium (500); light-mode body text near-black `#1d1d22` (was `#3c3c43`), secondary text `#55555d`. Dark mode unchanged.
6. **Fixed:** the What's new hydration mismatch (a link inside an excerpt nested inside the card link).

Verification: build OK; `check:site` 687 redirects, 0 broken links; Biome clean (0 warnings); dev browser suite 72/72; prod 71/72, the remaining hydration warnings only on the 3 pages with live Elements examples (Alert, Button, Breadcrumbs overview).

## 12. Theme control in the component header (2026-11-06)

- The brand theme dropdown moved from a grey bar in the content to the right end of the tab row on component/pattern pages, labelled "Theme". Same 12 options, same site-wide remembered choice, light/dark behaviour unchanged.
- Shown only on tabs with live examples: `config.js` (`transformPageData`) sets frontmatter `liveExamples` when the page source contains `<ThemeSwitcher />`, so it is decided at build time. On those pages the tag renders nothing in the content; on the two foundation pages without an item header (font weights, surface) it stays inline, restyled.
- The control fits the tab row height (46px on every tab), so tabs never move. Phones: tabs become one scrollable row and Theme sits on its own line under the divider.
- Fixed: the dropdown was blank by default (`themes.Finn` did not exist); it now defaults to Finn light. Removed dead navbar CSS for an old theme switcher.

Verification: build OK; `check:site` clean; Biome clean; dev browser suite 73/73 (new: Theme on Overview with default Finn light, absent on Usage, no inline bar, same row height); prod 72/73 (only the pre-existing live-example hydration warnings). A stored non-default theme (Vend) hydrates without warnings.

Follow-up: the Theme control is now shown on every component/pattern tab on all platforms (not only tabs with live examples), so new examples on Usage, Code or Accessibility need no extra work. The build-time `liveExamples` detection was removed.
