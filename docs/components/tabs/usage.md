# Tabs - Usage

Tabs organise related content into sections that sit at the same level, and let people switch between them without leaving the page.

<ComponentsStatus />

## Guidelines

- Use tabs only for sections that are **peers** — alternative views of one subject, readable in any order.
- Keep the set to **two to five** tabs. One tab is not a tab set; too many stop being scannable.
- Always keep exactly one tab selected, including on first load.
- Write short noun labels — one or two words.
- Keep the whole set on one line, without wrapping.
- Never nest one set of tabs inside another.
- Switching tabs must change the panel only. It must not navigate, submit, or reload.

### When to use

- **Alternative views of the same object.** A listing page with *Overview*, *Specifications*, and *Reviews*.
- **Splitting a long page into scannable sections.** When the content is too long to read in one scroll but each part stands on its own.
- **Switching a display mode.** *List* and *Map* views of the same set of results.
- **Grouping settings by area.** *Profile*, *Notifications*, and *Privacy* in an account screen.

### When not to use

- **Don't use for a sequence.** If the user must finish one part before the next, use [Steps](/components/steps/overview.md).
- **Don't use when sections are read together.** If people need to compare two sections or see them at once, use [Expandable](/components/expandable/overview.md) or put both on the page.
- **Don't use for page navigation.** Tabs swap a panel. To move between pages, use links and [Breadcrumbs](/components/breadcrumbs/overview.md).
- **Don't use for filtering a list.** Use [Pill](/components/pill/overview.md) to narrow results within one view.
- **Don't use for more than about five options.** Use a [Select](/components/select/overview.md), or restructure the page.
- **Don't use for a single section.** Drop the tab and use a heading.
- **Don't use for a decision the user must make.** Use a [Modal](/components/modal/overview.md) or [Button group](/components/button-group/overview.md).

## Behaviour

### Selection

One tab is always selected. Set the initial selection explicitly rather than leaving it to chance:

| Framework | How to set the initial tab |
| --- | --- |
| Elements | `active` on `<w-tabs>`, holding the panel's `id` |
| React | `active` on `Tabs`, or `isActive` on a `Tab` |
| Vue | `v-model` on `w-tabs`, holding the tab's `name` |
| iOS | the `selectedIndex` binding |
| Android | `selectedTabIndex` on `WarpTabRow` |

If you don't set one, the first tab is selected. Make the first tab the one most people need, and keep the order stable — don't reorder tabs based on usage or state.

### Switching

Selecting a tab swaps the panel immediately. Nothing else on the page moves. Scroll position outside the panel stays where it was.

Selection is **automatic**: moving to a tab with the arrow keys selects it and shows its panel straight away. Keep panel content cheap enough to render that arrowing through the set stays smooth.

### Overflow

**Web** tabs size to their labels and the row does not scroll. If the set is too wide, tabs wrap onto a second line — which breaks the single-control reading and buries the last tabs. Prevent it by shortening labels or cutting tabs, not by letting it wrap.

**Android** offers `scrollable = true`, which sizes tabs to their labels and scrolls the row horizontally. Leave part of the next tab visible so the scroll is discoverable.

### Loading content

Load the first panel with the page. Panels can be loaded when first selected, but:

- Reserve the panel's height so the page doesn't jump when content arrives.
- Show a [Spinner](/components/spinner/overview.md) inside the panel, not over the tab row.
- Keep the tab row interactive while a panel loads, so people can change their mind.

### Deep linking

If a tab represents something worth returning to — a shared link, a bookmark, a back-button step — reflect the selected tab in the URL and restore it on load. If it doesn't, don't add a history entry for every tab click; that traps people who press back expecting to leave the page.

### States

| State | When it occurs | What the user should understand |
| --- | --- | --- |
| Unselected | The tab's panel is hidden | This section exists and can be opened |
| Selected | The tab's panel is showing | This is the section I'm reading |
| Hover | Pointer is over the tab | This tab is clickable |
| Focus | The tab has keyboard focus | Pressing an arrow key moves between tabs |

There is no disabled tab. If a section isn't available, leave it out of the set — a greyed-out tab tells people something exists without telling them how to get it, and it can't hold a tooltip explaining why.

## Content guidelines

Tab labels are the only description of what's inside, so they carry a lot of weight.

- **Use nouns, not verbs.** A tab names a place, not an action.
- **Keep to one or two words.** Long labels crowd the row and truncate first on mobile.
- **Use sentence case**, and no punctuation.
- **Make labels parallel.** Every label in the set should be the same kind of thing.
- **Don't number them.** Numbers imply an order the user has to follow.
- **Don't repeat the page title** in every label.

| ✓ DO | ✗ DON'T |
| --- | --- |
| **"Reviews"** — one word, says exactly what's inside | **"See all customer reviews"** — a sentence, truncates on mobile |
| **"Overview" / "Specs" / "Reviews"** — parallel nouns | **"Overview" / "Compare models" / "Reviews"** — a verb phrase breaks the set |
| **"Map"** — names the view | **"Switch to map"** — describes the click, not the destination |
| **"Payment"** — a section | **"Step 2"** — implies an order tabs don't enforce |
| Give every tab an icon, or none | Put an icon on the first tab only |

## Placement

Put the tab row directly above the panel it controls, with the two visually connected by the bottom rule. Nothing should sit between them.

**Desktop**
Align the tab row to the left edge of its content. Full-width, evenly-spread tabs read as segmented buttons rather than sections.

**Mobile**
Space is the constraint. Two to three short labels usually fit; four rarely do. Check the longest label in the longest language you support — Norwegian and Finnish strings run considerably longer than English.

Don't stick the tab row to the top of the viewport unless the panel is long enough to make it worthwhile, and never let it collide with a sticky header.

## Best practices

### Keep labels short

<DoDont>
<Do imgurl="/docs/components/tabs/usage-best-practices-1-label-length-do.svg" imgalt="Three tabs labelled Overview, Reviews and Shipping, each sized to its label, with Overview selected">

Use one- or two-word nouns. Short labels keep the whole set scannable in a glance.

</Do>
<Do not imgurl="/docs/components/tabs/usage-best-practices-1-label-length-dont.svg" imgalt="Three tabs with long labels squeezed into equal widths and cut off mid-word with ellipses">

Don't write sentences as labels. They truncate, and a truncated label describes nothing.

</Do>
</DoDont>

### Limit the number of tabs

<DoDont>
<Do imgurl="/docs/components/tabs/usage-best-practices-2-tab-count-do.svg" imgalt="Three tabs labelled Overview, Specs and Reviews, comfortably fitting the width, with Overview selected">

Keep to two to five tabs. Every section stays visible, so people can pick without hunting.

</Do>
<Do not imgurl="/docs/components/tabs/usage-best-practices-2-tab-count-dont.svg" imgalt="Eight tabs in a row that runs off the right edge of the container, hiding the later tabs">

Don't overfill the row. Tabs that run off the edge are effectively invisible — restructure the page or use a [Select](/components/select/overview.md).

</Do>
</DoDont>

### Use tabs for peers, not steps

<DoDont>
<Do imgurl="/docs/components/tabs/usage-best-practices-3-sequential-do.svg" imgalt="Three tabs labelled Overview, Specs and Reviews, all available, with Overview selected">

Use tabs when the sections can be read in any order and none depends on another.

</Do>
<Do not imgurl="/docs/components/tabs/usage-best-practices-3-sequential-dont.svg" imgalt="Three tabs labelled Step 1, Step 2 and Step 3, with the last two greyed out">

Don't model a sequence with tabs. Use [Steps](/components/steps/overview.md), which shows progress and where the user is in the flow.

</Do>
</DoDont>

### Always keep one tab selected

<DoDont>
<Do imgurl="/docs/components/tabs/usage-best-practices-4-one-selected-do.svg" imgalt="Three tabs with the first selected, shown in blue with an underline, and its panel showing content below">

Select a tab on first load and show its panel. Make it the section most people came for.

</Do>
<Do not imgurl="/docs/components/tabs/usage-best-practices-4-one-selected-dont.svg" imgalt="Three tabs with none selected, no underline anywhere, and an empty panel below">

Don't start with nothing selected. An empty panel reads as a broken page rather than a choice.

</Do>
</DoDont>

### Keep the set on one line

<DoDont>
<Do imgurl="/docs/components/tabs/usage-best-practices-5-single-row-do.svg" imgalt="Four short tabs — Overview, Specs, Reviews and Help — fitting on a single row">

Fit the whole set on one row so it reads as a single control.

</Do>
<Do not imgurl="/docs/components/tabs/usage-best-practices-5-single-row-dont.svg" imgalt="Six tabs wrapped onto two rows, with Warranty and Returns pushed onto a second line below the first four">

Don't let tabs wrap. A second row looks like a separate control, and the tabs on it get missed.

</Do>
</DoDont>

### Don't nest tabs

<DoDont>
<Do imgurl="/docs/components/tabs/usage-best-practices-6-nesting-do.svg" imgalt="A single tab row above a panel of content, with no further tabs inside the panel">

Use one level of tabs. If a panel needs subdivision, use headings or [Expandable](/components/expandable/overview.md).

</Do>
<Do not imgurl="/docs/components/tabs/usage-best-practices-6-nesting-dont.svg" imgalt="An outer tab row whose panel contains a second, inner tab row labelled Size, Weight and Power">

Don't put tabs inside tabs. Two active indicators compete, and it stops being clear which one a click will change.

</Do>
</DoDont>

### Use icons consistently

<DoDont>
<Do imgurl="/docs/components/tabs/usage-best-practices-7-icons-do.svg" imgalt="Three tabs, each with a small icon to the left of its label, with the first selected">

If icons help, give every tab one. The row stays evenly weighted and easy to scan.

</Do>
<Do not imgurl="/docs/components/tabs/usage-best-practices-7-icons-dont.svg" imgalt="Three tabs where only the first has an icon, leaving the row visually uneven">

Don't add an icon to some tabs only. The odd one out reads as more important than the rest.

</Do>
</DoDont>

<component-questions />
