# WARP docs: backlog after the final review

These are the open items from the pre-release review of the redesigned docs (platform split, new shell and home page). Fixes that shipped with the review are listed at the end.

Paths are relative to `docs/`. "Seeded" pages were copied from the Web docs and already show a "Pending review" notice.

## iOS team

**Pages to review:**
- **Confirmation dialog** (`ios/components/confirmation-dialog/{code,usage,accessibility}.md`, flagged `pendingReview`).
  - `code.md` lists only `default` and `destructive` in `Action.Style`. The source also has `.cancel` (custom Cancel title; only the first one is used) and `.primary` (sorted first).
  - `code.md` says "Do not add [Cancel] manually". That contradicts the usage and accessibility pages.
  - `usage.md` sends readers to "Alert" for yes/no decisions and text fields. That link opens the inline Alert. The dialog (`.warpAlert`) is documented in `alert/code.md` under "Alert dialog".
  - `usage.md` says to use Alert for single-option confirmations, but the code page's own "Delete photo?" example is single-action. Decide which rule is right.
- **Broadcast overview** (`ios/components/broadcast/overview.md`, flagged): the behaviour bullets were written during the redesign. Check "dismissible by default", the overlay and the animation.
- **Icons code** (`ios/components/icons/code.md`): line 11 uses Android terms ("ImageVectors created from vector drawables"). The default icon colour is given as `Warp.Color.token.icon` in one place and `Warp.Token.icon` in another.
- **Code examples that don't match their signatures:**
  - Modal: `dismissOnClickOutside` is not in the signature.
  - Divider: the parameter table uses TypeScript-style string unions.
  - Empty states: the table types are `string`/`number`/`boolean`.
  - Button: the text "Disabled is not supported" sits next to an `isEnabled: false` example.
- **Typo:** "exmaple" in the code fences of `alert/code.md` and `badge/code.md`.
- **Get started** (`get-started/ios/index.md`):
  - The `badgeNeutralBackground` switch is missing `.vend` and `.neutral`.
  - Line 91 lists `Warp.DatavizToken` for UIColor, which looks like a copy error.
  - Typo: "hightly".

## Android team

**Pages to review:**
- **Get started** (`get-started/android/index.md`, flagged `needsReview`):
  - It pins `warp-android:0.0.27`; the release notes reach 0.0.54.
  - The Gradle block only has the finn, tori and dba flavours, but the text says Blocket, Vend and Neutral are supported.
  - Line 99 (`FINN -> FinnWarpTheme(content)`) is not valid Kotlin.
  - `WarpNmpTheme` is shown both as a composable function and as a class.
- **Code examples that don't match their signatures:**
  - Alert: the table says `WarpBadgeStyle.Warning`.
  - Badge: the example uses `alignment = Alignment.BottomStart` instead of `alignmentStyle`.
  - Checkbox: the signature has `label`, the examples use `text`; `Default` vs `Neutral`.
  - Callout: the table lists `title` (should be `text`) and `CalloutSize.Popover`.
  - Modal: the examples leave out the required `onDismiss`.
  - Range slider: `startIndex`/`endIndex` are not in the signature.
- **Toast** (deprecated): `toast/usage.md` says 5000 and 10000 ms, but the code says SHORT is 3000 ms. Align the numbers, or cut the page down to the deprecation note plus a link to Snackbar.
- **Snackbar:** the usage page now says 4 s / 10 s, matching the Android code page. Please confirm this against the source; only the iOS source was checked.
- **Release notes:** they stop at 0.0.54 (Feb 2026), while iOS continues to Aug 2026.

## iOS and Android (both platforms)

The seeded overview and usage pages are the same text on both platforms, so each item below applies to `ios/…` and `android/…`.

- **Web material on seeded native pages.** These need the Web rows and paragraphs removed, keeping only the content for that platform:
  - Tabs: `<w-tabs>`, React/Vue tables, URL deep linking, links to Elements/React/Vue, and a "confirm with a designer" note.
  - Tooltip: hover/focus/Escape, `for`/`id`, `no-arrow`, Floating UI, links to Web pages. The default placement is given as "bottom" on line 53 and "top" on line 114.
  - Box: "Bleed" with a 480px breakpoint, Web padding, and five links to the Web Card.
  - Button group (iOS): "only supported in Warp Vue" and the React Toggle.
  - Callout: `w-attention`, `highlight`, Floating UI, `flip`, and an Escape row.
  - Select and Text field usage: Tab, arrow keys, Enter and mouse hover states. Text area (iOS) is the same.
  - Also: Checkbox ("Keyboard focus"), Link (Android, lines 55–61), Radio overview, Alert usage (`show` property, "DOM"), Snackbar usage (Web placement, keyboard shortcuts, "max 3 at once", 328–420px width), and Modal usage ("Mobile Web" / "Desktop Web" sections).
- **Contradictions inside a component:**
  - Alert overview: the title is "optional" and the body is "the only required content", but the iOS code requires both `title` and `subtitle`.
  - Box overview: Neutral is called "the default on the native platforms", but `style` is required on iOS.
  - Checkbox usage describes an Indeterminate state that neither platform supports, and reuses the label-group images for the "mixed values" Do/Don't.
  - Date picker overview and usage describe the Web field. Rewrite them for each platform: native `DatePicker` (graphical, compact or wheel) on iOS, dialog or inline on Android.
  - Select usage line 15 says "one or more options", which contradicts the lead.
  - Link overview (Android): the lead says "links that look like buttons", but the body says not to do that.
  - Range slider usage: the note that native platforms don't follow this page is at the very end of a 380-line Web spec. Move it to the top.
- **Empty states** (`patterns/empty-states/*`, now flagged `seeded`):
  - The page has a desktop-web image, px sizes, "T3 heading token", "420px max width" and fade-in loading.
  - Overview line 43: "Page not found… Available in web and Figma only".
  - Usage lines 81 and 112 use absolute legacy URLs (`warp-ds.github.io/docs/…`).
  - The accessibility page is one unverified line.
- **Spinner and Text overviews** (now flagged `seeded`): they show live Web CSS demos as the native example, and the Spinner "Usage" section only holds a Figma link.
- **Structure:**
  - `switch/code.md` and `ios/components/toast/code.md` have no `## iOS` / `## Android` H2 before `<FrameworkTabs />`.
  - The iOS Button pill code H1 is "Button Pill".
  - Several pages use "Related components:" instead of "See also".
  - Some pages have several lead paragraphs: Badge has 3, one of them a sentence fragment; Checkbox has 3; Empty states has 2.
  - `<component-questions />` is missing on the Icons and Tooltip code pages.
- **Typos and leftovers:**
  - Badge: "plaid placement" (should be "paid"), and an internal note on line 94.
  - Select: stray text "interaction.s".
  - Date picker: "bare in mind", "Norwegain formating".
  - Page indicator: a Figma branch URL, and margins given as 24px in one place and 16/12px in another.
  - Checkbox usage lines 140–142: the "Don't" is actually a correct statement.
- **Flags that could be dropped after a quick look:** the one-sentence seeded overviews (Button, Expandable, Pill, Steps, Switch, Android Popover), Logo overview and usage, Icons overview, Page indicator overview.

## Web (Elements) team

- **Native and legacy material on Web pages.** Strip the iOS/Android sections and React/Vue rows so Web prose is Elements-only:
  - Alert, Box, Callout and Radio overviews and accessibility pages;
  - Tabs overview lines 126–162 and usage lines 41–44 (it still links to the iOS Tabs code page);
  - Tooltip overview lines 115–133;
  - Snackbar usage lines 135–185;
  - Range slider usage lines 424–443;
  - Link usage line 64;
  - Modal usage: the "always supports drag down" claim.
- **13 usage tabs are placeholders** ("Status - in progress"): button-group, button, card, combo-box, icons, expandable, pagination, pill, radio-buttons, popover, steps, switch, utilities. Button is the most visible.
- **Utilities** has no Elements implementation (Vue only). Hide it from the Web list or label it legacy.
- **Get started** (flagged `needsReview`):
  - `get-started/web/index.md`:
    - Line 39 has the path `@warp-ds/css/~v~2/…`, probably a typo for `~2`.
    - Line 66 links to the old absolute URL for UnoCSS.
    - Typos: "tecnically", "InstelliSense", and "is" for "are" on line 206.
    - It doesn't list the brand CSS files or explain how to turn on dark mode.
  - `get-started/web/custom-components/index.md` is built on `warp-ds/labs/warp-element` (archived, 404) and `@warp-ds/elements-core/v0`. Rewrite it for Elements 2.x or hide it. Its H1 doesn't match the sidebar label.
  - `get-started/web/migrate-from-fabric/index.md` line 37 links to `colour-tokens-overview` (probably dead), and the page has duplicate "Colours" sections.
- **Overviews:**
  - Badge, Checkbox and Combo box each have two near-identical lead paragraphs.
  - Link overview line 12 links "Button" to a Figma file.
  - The Breadcrumbs example uses raw `<a>` instead of `<w-breadcrumb-item>`.
  - The usage H1s "Button Group", "Combo Box" and "Radio Buttons" don't match the overview H1s.
  - "Radio" and "Radio buttons" both describe themselves as radio buttons.
- **Foundations:**
  - `customization/index.md` points to "each component's styling-api.md"; it should say the Styling API section on the Code tab.
  - `dark-mode/index.md` doesn't explain how to turn dark mode on, links to old URLs, and uses `assets.vend.com` where Get started uses `assets.finn.no`.
  - `font-weights` has informal headings and typos.
  - `keyboard/navigation` doesn't cover the focus order its card promises.
  - `css-classes/unocss.md` has an outdated Tailwind comparison.
  - `css-classes/introduction.md` and `what-is-warp.md` are stubs that only redirects reach.
- **Upstream (elements package docs, included at build time):**
  - The Modal code example uses `src="/pages/public/unocssmusical.jpeg"`, which is a 404.
  - The Steps, Switch and Tabs Elements code pages throw `SyntaxError: Failed to execute 'appendChild'`.
  - The Date picker code page throws `Cannot set properties of null (setting 'isDayDisabled')`.
  - All three errors also happen on the live site.
- **Hydration warnings:** 28 Web pages with live examples log "Hydration completed but contains mismatches". This is also on the live site.

## Design and content

- **Design Language promises pages that don't exist.** The home page, the Design Language index and the platform cards promise "colour… motion", but there is no Colour page, and the Motion page says there are no guidelines yet.
- **Data visualization:**
  - "Tokens & CSS" is 8 pages of Web-only CSS. iOS has `Warp.DatavizToken`.
  - `tokens/chart/index.md` lines 34–35: the ChartText Default and Subtle variables look swapped.
  - Headings use Title Case with a "(dataviz)" suffix, and two pages share the H1 "Chart Colors".
- **Cross-links:**
  - Dark mode only links to Web.
  - The iOS/Android `designLanguage` values point to Brands, not Dark mode.
  - The Web Typography and Tokens matches are weak.
- **Design Language copy:**
  - Brands, line 3: "WARP multiple brands within the Vend." is missing a verb.
  - Tokens intro: "such as such as", plus "TBA" rows.
  - Typography, Brands and Illustrations have no Vend or Neutral rows.
- **Help pages:**
  - `requests/new-component` refers to a section "below" that doesn't exist.
  - `requests/component-changes` has a bullet starting "If no, …" with no question before it.
  - Support: check the team roster is current; the avatars are hotlinked from Slack.
- **Authoring guide** (`about/help/authoring-guide/index.md`, now "WARP Docs content guideline"):
  - It documents `<ComponentStatus react=… vue=…>`, which isn't registered.
  - It doesn't cover the page conventions (H1, `<ComponentsStatus />`, lead paragraph), the review flags, `designLanguage` or `status:`.
  - Typos: "forewards", "excisting", "startingpoint".
- **Get started: Design:**
  - Warp in Figma says content "will be removed soon", which is stale.
  - Custom components: the link text says "foundations > tokens", and the alt text says "NMP brands".
  - Typos: "transistioning", "higtligting".
- **What's new:**
  - `2026/design-06-23.md` lines 43–52 should be bullet lists.
  - Broken anchors: `/get-started/web/#setup` and `#eik-support`.
  - About 20 posts use absolute `warp-ds.github.io/docs|tech-docs` links; `/components/textarea`, `/textfield` and `/datepicker` have no redirect.
  - The index promises "roadmap updates", but there are none.
- **Home quick links** (CSS classes, Icons, Colors) are all Web pages; consider labelling them "Web".
- **Slack:** the #vend-accessibility link (`C06MRNFR8` in `design-language/accessibility/index.md`) looks truncated. It needs the correct channel ID.
- **"Contribute guidance" card:** hidden on the home page until the contribution model guideline exists (see the comment in `HomeLanding.vue`).

## Docs engineering

- **Shared code bundle:** about 206 KB compressed, loaded on every page, including iOS and Android. It holds the Warp web components used by the live examples. Consider loading them only on Web pages that have examples.
- **Search index:** 644 KB compressed, downloaded the first time someone opens search. Consider leaving the legacy React/Vue code pages out of the index.
- **Large SVGs with embedded bitmaps:**
  - `whats-new/2026/design-01-05-1.svg` (4.3 MB)
  - `components/badge/badge-placement-1.svg` (3.7 MB)
  - the Breadcrumbs placement SVGs (2.2 and 1.4 MB)
  - `patterns/emptystates/placement-main_element-web_desktop.svg` (1.9 MB)
  - `components/toast/toast-position.svg` (1.5 MB)
- **The original PNGs** of the images converted to WebP (`images/office-warping.png`, `warp-in-progress-*.png`) are still in `public/` so old links keep working. They can be deleted later.
- **Broken absolute image paths** (`/images/…` without the `/docs/` base) in some older CSS-class examples. This is also on the live site.
- **Vertical alignment:** the hero "Design" and "Develop" card descriptions start at different heights when their lengths differ.

## Fixed in this round

- The CSS-class example images broken by the move to `/web/` now load.
- The "LINK" placeholders are gone from the Modal usage pages, and the iOS/Android sections are gone from the Web one.
- Review flags were added:
  - `pendingReview`: iOS Confirmation dialog and Broadcast.
  - `seeded`: Empty states, Spinner and Text overviews.
  - `needsReview`, a new flag for older guides: the Get started pages for Android and Web.
- Small content fixes:
  - The FAQ answer about platforms.
  - Real alt texts on Tokens overview and the Empty states anatomy.
  - Empty states now says "Snackbar".
  - The iOS Logo code page has its API.
  - The Android Logo code page has a parameters table.
- Snackbar durations are 4 s / 10 s on iOS and Android.
- One Slack ID (`C04P0GYTHPV`) is used for #warp-design-system everywhere.
- Wrong-platform links were removed or redirected (Broadcast, Spinner, Divider, iOS↔Android, the Snackbar "Elements page" link, Link → Button).
- Naming:
  - Nav "What's new".
  - "Mission and principles".
  - "WARP Docs content guideline".
  - The Get started labels "Overview" and "Set up".
  - "WARP" in visible text everywhere; code names stay as they are.
- The Theme dropdown shows only on Web pages.
- Previous/next links name the item ("Box › Code").
- What's new:
  - Each post shows its date, and its title when the post has no H1.
  - The list page ships 16 KB instead of 590 KB.
- The mobile tab row fades where more tabs are hidden, and the current tab scrolls into view.
- The heaviest images are WebP: 4.7 MB → 78 KB, and 868 KB / 292 KB → 54 KB / 88 KB.
- The search button is icon-only on tablets, so the nav fits at 768–1023px.
