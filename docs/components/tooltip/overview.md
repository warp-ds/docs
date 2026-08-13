# Tooltip - Overview

A tooltip is a small message box that appears when a user hovers over, focuses, or taps a UI element. It provides brief, supplementary information about that element.

<ComponentsStatus />

## Example

<ThemeSwitcher />
<tooltip-example />

## Overview

Tooltips explain what an element does or clarify a term without adding permanent text to the interface. Keep them short — a tooltip is a hint, not a place for instructions.

Use tooltips sparingly. Content inside a tooltip is hidden until the user interacts with the trigger, so anything essential to completing a task belongs in the interface itself.

On the web, the tooltip is a variant of the Attention component: set the `tooltip` prop to render it with tooltip styling and semantics. On iOS and Android, Tooltip is a dedicated component.

### Related components

- [Popover](/components/popover/overview.md) — for richer, dismissible content that can include links and actions.
- [Callout](/components/callout/overview.md) — for supplementary information that stays visible in the layout.
- [Alert](/components/alert/overview.md) — for status, warning, or error messages the user must see.
- [Modal](/components/modal/overview.md) — for content that requires the user's full attention and a decision.

## Anatomy

::: image-block
![A "Zoom in" tooltip above a plus icon button, with four numbered callouts marking the container, the message, the arrow, and the trigger element](/components/tooltip/tooltip-anatomy.svg)
:::

1. **Container** — a floating surface that sits above page content.
2. **Message** — one or two lines of plain text describing the trigger element.
3. **Arrow** — points at the trigger element to show what the message refers to. The arrow appears on the opposite side of the chosen placement. On the web you can remove it with `no-arrow`.
4. **Trigger element** — the button, icon, or label the tooltip is anchored to. The trigger is not part of the tooltip component itself.

## Variants

The tooltip has one variant property: the position of the **arrow**. Pick the arrow position that points back at the trigger.

The arrow sits on the **opposite** side to the tooltip's placement. A tooltip placed *below* its trigger uses the **top** arrow, because the arrow has to point back up at the trigger.

### Arrow top

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tooltip/tooltip-variants-arrow-top.svg" alt="A tooltip sitting below its trigger, with the arrow on its top edge pointing up at the trigger" />
  </div>
  <div>

Use when the tooltip sits **below** the trigger. This is the default placement on web (`bottom`) and the most common choice, since there's usually room below a control.

  </div>
</div>

### Arrow bottom

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tooltip/tooltip-variants-arrow-bottom.svg" alt="A tooltip sitting above its trigger, with the arrow on its bottom edge pointing down at the trigger" />
  </div>
  <div>

Use when the tooltip sits **above** the trigger (`top` placement). Useful when the trigger is near the bottom of the viewport, or when content below it must stay visible.

  </div>
</div>

### Arrow left

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tooltip/tooltip-variants-arrow-left.svg" alt="A tooltip sitting to the right of its trigger, with the arrow on its left edge pointing at the trigger" />
  </div>
  <div>

Use when the tooltip sits to the **right** of the trigger (`right` placement). Suits triggers in a vertical list, where a top or bottom tooltip would cover the neighbouring rows.

  </div>
</div>

### Arrow right

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tooltip/tooltip-variants-arrow-right.svg" alt="A tooltip sitting to the left of its trigger, with the arrow on its right edge pointing at the trigger" />
  </div>
  <div>

Use when the tooltip sits to the **left** of the trigger (`left` placement). Remember to place the tooltip before the target in the DOM for left placements — see [Accessibility](/components/tooltip/accessibility.md).

  </div>
</div>

### No arrow

<div class="grid grid-cols-2 gap-24 py-16">
  <div class="image-plate">
    <img src="/components/tooltip/tooltip-variants-no-arrow.svg" alt="A tooltip with no arrow, shown on its own with nothing pointing back at a trigger" />
  </div>
  <div>

Use only when the connection to the trigger is already obvious — for example, a tooltip pinned directly against a slider handle that moves with it. Without an arrow, nothing points at the trigger, so avoid this variant when several controls sit close together. Set `no-arrow` on web, and on native omit the arrow edge.

  </div>
</div>

## Placement

Tooltips are positioned relative to their trigger.

**Web** supports twelve placements: `top-start`, `top`, `top-end`, `bottom-start`, `bottom`, `bottom-end`, `left-start`, `left`, `left-end`, `right-start`, `right`, and `right-end`. The default is `bottom`.

**iOS** exposes the arrow edge instead: `.top`, `.leading`, `.bottom`, `.trailing`, defaulting to `.top`. **Android** uses the equivalent `Edge.Top`, `Edge.Bottom`, `Edge.Leading`, and `Edge.Trailing`.

### Staying in view

On the web, the tooltip uses [Floating UI](https://floating-ui.com/) to calculate its position. Three props control what happens when there isn't room for the preferred placement:

- `flip` (default `false`) — flip to the opposite side to stay in the viewport.
- `cross-axis` (default `false`) — also check cross-axis overflow. Requires `flip`.
- `fallback-placements` (default `undefined`) — an ordered list of placements to try before flipping. Requires `flip`.

Enable `flip` whenever the trigger can scroll near the edge of the viewport. See the [Elements](/components/tooltip/frameworks/elements.md), [React](/components/tooltip/frameworks/react.md), and [Vue](/components/tooltip/frameworks/vue.md) pages for live examples.

### Offsets

Fine-tune the gap between tooltip and trigger with `distance` (perpendicular offset, default `8`) and `skidding` (offset along the trigger, default `0`). On iOS use `arrowOffset` to shift the arrow away from centre; on Android use `horizontalOffset` and `verticalOffset`.

## Platform considerations

**Web**
The tooltip is shown on `mouseenter` and `focus`, and hidden on `mouseleave`, `blur`, and <kbd>Escape</kbd>. You control visibility yourself through `isShowing` (React), `v-model` (Vue), or `show` (Elements).

**iOS/iPadOS**
`Warp.Tooltip` renders a SwiftUI view; a UIKit `UIView` is available via `.uiView`. There is no hover on touch, so pair the tooltip with a visible tap target of at least 44×44pt.

**Android**
`WarpTooltip` is driven by a `WarpTooltipState` you toggle from the anchor's click handler. Set `inline = true` to place the tooltip as a regular composable instead of a popup — useful when you need it in normal layout flow rather than floating above content. Keep anchors at least 48×48dp.

<component-questions />
