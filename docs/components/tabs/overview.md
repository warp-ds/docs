# Tabs - Overview

Tabs organise related content into sections that sit at the same level, and let people switch between them without leaving the page.

<ComponentsStatus />

## Example

<ThemeSwitcher />

<style-isolate>
    <w-tabs active="one">
        <w-tab for="one">Tab 1</w-tab>
        <w-tab for="two">Tab 2</w-tab>
        <w-tab for="three">Tab 3</w-tab>
        <w-tab-panel id="one">First tab content</w-tab-panel>
        <w-tab-panel id="two">Second tab content</w-tab-panel>
        <w-tab-panel id="three">Third tab content</w-tab-panel>
    </w-tabs>
</style-isolate>

## Overview

A set of tabs is a single control. Only one tab is selected at a time, and selecting a tab swaps the panel below it. The rest of the page stays exactly where it is.

Tabs work when the sections are **peers** — alternative views of the same thing, which a user might want in any order. They don't work for steps in a sequence, for navigating to another page, or for content that people need to compare side by side.

Keep the set small. Tabs put every section label on screen at once, so their value comes from being scannable in a single glance.

### Related components

- [Steps](/components/steps/overview.md) — for a sequence the user works through in order.
- [Expandable](/components/expandable/overview.md) — for sections that can be open at the same time, or read one after another.
- [Pill](/components/pill/overview.md) — for filtering or narrowing a single list of results.
- [Breadcrumbs](/components/breadcrumbs/overview.md) — for showing where a page sits in a hierarchy.
- [Select](/components/select/overview.md) — when there are too many options to show as tabs.

## Anatomy

::: image-block
![A three-tab row with the first tab selected and a content panel below it, with five numbered callouts marking the tab list, a tab, the label, the active indicator, and the tab panel](/components/tabs/tabs-anatomy.svg)
:::

1. **Tab list** — the container holding the full set of tabs. A thin rule runs along its bottom edge, separating the tabs from the panel.
2. **Tab** — one selectable section header. Every tab in the list belongs to the same control.
3. **Label** — the text naming the section. Optionally preceded or topped by an icon.
4. **Active indicator** — a 3px underline in the primary colour marking the selected tab. The selected label takes the same colour.
5. **Tab panel** — the content for the selected tab. Only one panel is visible at a time.

## Variants

### Label

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tabs/tabs-variants-label.svg" alt="Three tabs labelled Label, with the first selected and underlined in blue" />
  </div>
  <div>

Text-only tabs. This is the default and the right choice almost every time — a clear noun does more for scanning than an icon does.

  </div>
</div>

### Icon + label

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tabs/tabs-variants-icon-label.svg" alt="Three tabs, each with a small list icon to the left of the label Label, with the first selected" />
  </div>
  <div>

An icon sits beside the label. Use icons only when they carry meaning the label can't — a map view versus a list view, for example. Give **every** tab in the set an icon, or none of them.

On elements (web) you can set `over` on a tab to stack the icon above the label instead. That layout is not in the design library yet, so check with a designer before using it.

  </div>
</div>

## States

A tab is either selected or not. The tab list itself has no states of its own.

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tabs/tabs-state-default.svg" alt="An unselected tab with a grey label and no underline" />
  </div>
  <div>

**Unselected** — grey label, no indicator. The panel it controls is hidden.

  </div>
</div>

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tabs/tabs-state-active.svg" alt="A selected tab with a blue label and a blue underline beneath it" />
  </div>
  <div>

**Selected** — the label turns primary blue and the 3px indicator appears. Exactly one tab is selected at all times.

  </div>
</div>

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tabs/tabs-state-hover.svg" alt="A tab in the hover state, shown with a blue label and blue underline" />
  </div>
  <div>

**Hover** — shown here as the design library defines it, which is currently the same treatment as the selected tab. Because that makes a hovered tab indistinguishable from the selected one, confirm the intended hover styling with a designer before relying on it.

  </div>
</div>

**Focus** is drawn by the platform's focus ring on the tab itself; it is not a separate visual in the library. See [Accessibility](/components/tabs/accessibility.md).

There is no disabled tab in Warp. A tab whose content isn't available yet should be removed from the set, not greyed out — see [Usage](/components/tabs/usage.md).

## Platform considerations

**Web**
`<w-tabs>` owns the selection state and the keyboard behaviour. Each `<w-tab>` points at its panel with a `for` attribute matching the panel's `id`. The tab row sizes each tab to its label and does not scroll, so keep the set short enough to fit the narrowest screen you support. See [Elements](/components/tabs/frameworks/elements.md), [React](/components/tabs/frameworks/react.md), and [Vue](/components/tabs/frameworks/vue.md).

**Android**
`WarpTabRow` supports two layouts. Set `scrollable` to choose between them.

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tabs/tabs-android-fixed.svg" alt="An Android tab row with three tabs spread evenly across the full width, the first selected" />
  </div>
  <div>

**Fixed** (`scrollable = false`, the default) — tabs divide the available width equally. Use for two to four short labels.

  </div>
</div>

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tabs/tabs-android-scrollable.svg" alt="An Android tab row with six tabs sized to their labels, the last one running off the right edge to show it scrolls" />
  </div>
  <div>

**Scrollable** (`scrollable = true`) — tabs size to their labels and the row scrolls horizontally. Use when the labels won't fit. Make sure part of the next tab is visible so people can tell there's more.

  </div>
</div>

Android tabs are 48dp tall, meeting the platform's minimum touch target. See [Android](/components/tabs/frameworks/android.md).

**iOS/iPadOS**
The iOS package ships `Warp.Tabs`, which takes an array of `Warp.TabItem` and a `selectedIndex` binding. See [iOS](/components/tabs/frameworks/ios.md).

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tabs/tabs-ios-segmented-control@2x.png" alt="An iOS segmented control with three segments labelled Label in a rounded track, the first segment selected and raised as a shaded pill" />
  </div>
  <div>

The iOS design library documents this pattern as a **segmented control** — a rounded track with the selected segment raised — rather than the underlined row used on web and Android. There is no iOS tab artwork in the library, so confirm which of the two a screen should use with a designer before building.

  </div>
</div>

<component-questions />
