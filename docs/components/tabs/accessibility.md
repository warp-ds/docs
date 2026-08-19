# Tabs - Accessibility

Tabs organise related content into sections that sit at the same level, and let people switch between them without leaving the page.

<ComponentsStatus />

## General

Tabs hide most of their content. Everything that isn't in the selected panel is invisible to sighted users and, when the panel is marked hidden, invisible to screen readers too. Two rules follow from that:

1. **Never hide something essential behind an unselected tab.** If a user has to find the right tab to discover that an action exists, the interface has failed before the tab is even used.
2. **The tab set must be operable end to end from the keyboard.** Arrow keys, not just <kbd>Tab</kbd>.

Warp implements the [WAI-ARIA Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) for you. Roles, selection state, panel association, and keyboard navigation are handled by the component — you mostly need to avoid undoing them.

## ARIA

The component builds this structure:

| Element | Role | Attributes it manages |
| --- | --- | --- |
| The tab row | `tablist` | — |
| Each tab | `tab` | `aria-selected`, `aria-controls`, roving `tabindex` |
| Each panel | `tabpanel` | `aria-labelledby`, `aria-hidden` |

Only the selected tab carries `tabindex="0"`; the rest are `-1`. That's what makes the whole set a single stop in the tab order, with the arrow keys moving inside it.

### Associating tabs with panels

On the web, each `<w-tab>` names its panel with `for`, matching the panel's `id`. The component derives `aria-controls` and `aria-labelledby` from that pair, so the association only works if the ids are right.

```html
<w-tabs active="specifications">
  <w-tab for="overview">Overview</w-tab>
  <w-tab for="specifications">Specifications</w-tab>
  <w-tab-panel id="overview">…</w-tab-panel>
  <w-tab-panel id="specifications">…</w-tab-panel>
</w-tabs>
```

If a tab has no `id` of its own, one is generated for it, so the panel always has something to be labelled by.

::: warning Warning
The `name` attributes will be used to generate `id` attributes (prefixed with `warp-tab-` and `warp-tabpanel-`), and therefore they must be unique throughout the entire DOM.
This is because aria-controls and aria-labelledby rely on id attributes, and they are required for the tabs to be ARIA compliant.
:::

### Naming the tab set

The tab list has no accessible name of its own. On a page with one tab set that's fine. With two or more, a screen reader user hears two identical, unlabelled tab lists.

Give each set a name through the surrounding content — a heading immediately before it, or a labelled region:

```html
<section aria-labelledby="product-sections">
  <h2 id="product-sections">Product information</h2>
  <w-tabs active="overview">…</w-tabs>
</section>
```

### Panels without focusable content

A panel that contains only text is not reachable by keyboard: <kbd>Tab</kbd> moves from the tab row straight past it. Add `tabindex="0"` to those panels so the content can be focused and scrolled.

```html
<w-tab-panel id="overview" tabindex="0">
  Plain text with nothing focusable inside.
</w-tab-panel>
```

Don't add `tabindex` to panels that already contain a link, button, or field — that creates a redundant stop.

## Keyboard interaction

| Key | Behaviour |
| --- | --- |
| <kbd>Tab</kbd> | Moves focus into the tab list, landing on the **selected** tab. Pressing it again leaves the list and moves to the next focusable element |
| <kbd>←</kbd> | Selects and focuses the previous tab |
| <kbd>→</kbd> | Selects and focuses the next tab |
| <kbd>Home</kbd> | Selects and focuses the first tab |
| <kbd>End</kbd> | Selects and focuses the last tab |
| <kbd>Space</kbd> / <kbd>Enter</kbd> | Selects the focused tab |

Two details worth knowing:

- **The set does not wrap.** <kbd>→</kbd> stops on the last tab and <kbd>←</kbd> stops on the first, rather than cycling round.
- **Selection is automatic.** Arrowing onto a tab selects it and shows its panel immediately. This is the right pattern when panels are cheap to render; if a panel triggers an expensive load, that cost is paid on every arrow press.

## Screen readers

Each tab is announced with its label, its role, its selected state, and its position — "Overview, tab, selected, 1 of 3". Because position is announced, keeping the set short and the order stable matters more than it looks.

- **Don't put the word "tab" in a label.** It will be read twice.
- **Don't rely on the panel swap being announced.** Focus stays on the tab, so nothing in the panel is read automatically. If a tab switch causes something the user must know about, say it in the panel's first heading.
- **Inactive panels are marked `aria-hidden`**, so their content is genuinely unavailable — never put a live region or a status message in one.

**iOS/iPadOS** — VoiceOver reads each `Warp.TabItem` title. Give icon-only or ambiguous items an `accessibilityLabel`, and don't repeat the section name already announced by the surrounding screen.

**Android** — TalkBack announces `WarpTab` with its `text` and selected state. When `scrollable = true`, confirm that tabs off-screen are still reachable by swiping through TalkBack's reading order, and that focusing one scrolls it into view.

## Touch and click targets

| Platform | Minimum | Warp tabs |
| --- | --- | --- |
| Web | 44×44px | Tab height comes from 16px top padding, 8px bottom padding, and the 4px indicator around the label — comfortably above the 24×24px WCAG 2.2 AA minimum |
| Android | 48×48dp | `WarpTabRow` is 48dp tall |
| iOS/iPadOS | 44×44pt | The segmented control is 44pt tall |

The Figma component is drawn at **34px** tall, which is shorter than what the web implementation renders. Don't treat the Figma height as the touch target when you're checking a design against the guidance above.

Width is the more common failure. A one-word tab like "Map" is narrow, and narrow neighbours are easy to mis-tap. Keep the tabs in a set to similar widths, and prefer fewer tabs over squeezing more in.

## Visual accessibility

**Contrast** — tab colours come from semantic tokens, so they resolve to a different value in every brand and mode:

| Element | Token | Requirement |
| --- | --- | --- |
| Unselected label | `--w-s-color-text-subtle` | 4.5:1 (text) |
| Selected label | `--w-s-color-text-link` | 4.5:1 (text) |
| Active indicator | `--w-s-color-border-selected` | 3:1 (non-text) |

Every Warp theme meets or exceeds these ratios against its own background, in both light and dark mode. The margin is narrowest on the selected label, so don't override these tokens with hard-coded colours — tab labels are small text, and there's less headroom than a single brand's numbers would suggest.

**Colour independence** — the selected tab is marked by the underline *and* the colour change, so it survives greyscale and colour-vision differences. If you restyle tabs, keep a non-colour signal.

**Focus indicator** — focus draws a 2px outline in the focus colour, offset by 1px, and the tab delegates focus to its inner button so the ring lands on the control. Never remove it: with a roving tabindex, the outline is the only way to tell which tab the arrow keys will move from.

**Text resizing** — tab labels scale with the user's text size, and longer text makes the row wider. Test at 200% zoom, and with the largest Dynamic Type or Android font scale. Short labels are an accessibility measure, not just a style preference.

**Motion** — the web active indicator slides between tabs over 150ms. Honour `prefers-reduced-motion` if you add any further animation to a tab switch, and never animate the panel content in a way that delays reading it.

## Best practices

| ✓ DO | ✗ DON'T |
| --- | --- |
| Keep one tab selected at all times | Render a tab set with nothing selected |
| Give each tab set a name via a nearby heading or labelled region | Put two unlabelled tab sets on one page |
| Keep `for` / `id` (or `name`) unique across the whole document | Reuse `name="one"` in a second tab set |
| Add `tabindex="0"` to panels with no focusable content | Add it to panels that already contain controls |
| Let the component manage `aria-selected` and `tabindex` | Hand-set ARIA attributes on tabs |
| Write short labels that survive 200% zoom | Rely on truncation to make labels fit |
| Remove a tab whose content isn't available | Ship a greyed-out tab a user can't reach or query |
| Keep essential actions outside the tab set | Hide the only Save button in an unselected panel |

## Testing

**Keyboard**
Tab into the set and confirm focus lands on the selected tab, not the first one. Arrow through every tab and confirm the panel changes and the focus ring follows. Confirm <kbd>Home</kbd> and <kbd>End</kbd> jump to the ends, and that a second <kbd>Tab</kbd> press leaves the list rather than moving between tabs.

**Screen readers**
Test with VoiceOver (macOS/iOS), TalkBack (Android), and NVDA or JAWS (Windows). Confirm each tab is announced with its selected state and its position in the set, that the panel is associated with its tab, and that inactive panel content is not reachable.

**Zoom and text size**
Check at 200% browser zoom and at the largest system font scale. Confirm labels don't truncate into ambiguity and the row doesn't wrap into a second line.

**Contrast**
Check labels and the active indicator in light and dark themes, and in every brand theme you support.

**Automated**
Run axe or Lighthouse on the page. Automated tools catch a missing `aria-controls` but won't catch duplicate ids across two tab sets, an unlabelled tab list, or a panel that can't be focused — check those by hand.

<component-questions />
