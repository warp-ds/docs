# Tooltip - Usage

A tooltip is a small message box that appears when a user hovers over, focuses, or taps a UI element. It provides brief, supplementary information about that element.

<ComponentsStatus />

## Guidelines

- Use tooltips for supplementary information only. The interface must still make sense with every tooltip closed.
- Keep the message to one or two short lines.
- Attach a tooltip to a single, clearly interactive trigger.
- Show only plain text. Tooltips can't hold links, buttons, or images.
- Show one tooltip at a time.
- Position the tooltip so it never covers the trigger or the content the user is reading.

### When to use

- **Clarify an icon-only control.** A filter or sort icon button gains a text label on hover and focus.
- **Explain a term.** Define domain language such as "Fiks ferdig" or "Financing estimate" at the point where it appears.
- **Give context for a value.** Explain how a price estimate or delivery date is calculated.
- **Explain why a control is unavailable.** Tell the user what needs to happen before an action becomes possible.

### When not to use

- **Don't use for essential instructions.** Put the text in the interface, or use a [Callout](/components/callout/overview.md) below the field.
- **Don't use for interactive content.** Use a [Popover](/components/popover/overview.md) when the message contains a link, an action, or a close button.
- **Don't use for status, warnings, or errors.** Use an [Alert](/components/alert/overview.md), which stays visible and is announced to screen readers.
- **Don't use for confirmations or decisions.** Use a [Modal](/components/modal/overview.md).
- **Don't use to restate a visible label.** A tooltip reading "Save" on a button labelled "Save" is noise.
- **Don't use for long explanations.** Link to a help page instead.

## Behaviour

### Showing and hiding

Tooltips are transient. They appear on demand and disappear as soon as the user moves on.

| Trigger | Shows on | Hides on |
| --- | --- | --- |
| Pointer | Hovering the trigger | Moving the pointer off the trigger |
| Keyboard | Focusing the trigger | Blurring the trigger, or pressing <kbd>Escape</kbd> |
| Touch | Tapping the trigger | Tapping the trigger again, or tapping elsewhere |

Show the tooltip on both hover **and** focus. Hover alone excludes keyboard users; focus alone excludes pointer users.

Never make a tooltip persistent. If the message needs to stay on screen, it isn't tooltip content.

### Positioning

The tooltip flips or shifts to stay in the viewport when `flip` is enabled. Enable it whenever the trigger can scroll close to a screen edge — otherwise the tooltip will be clipped and the message lost.

Pick the placement that keeps the tooltip clear of what the user is looking at:

- Prefer `top` or `bottom` for triggers in a row of controls.
- Prefer `right` or `left` for triggers in a vertical list.
- Avoid placements that cover the field a user is about to fill in.

### States

- **Hidden (default).** No tooltip is rendered. This is the state the interface must be usable in.
- **Visible.** The tooltip is shown, anchored to its trigger with the arrow pointing at it.
- **Repositioned.** The tooltip has flipped or shifted to stay in view. The arrow follows the new placement.

Tooltips have no hover, pressed, disabled, loading, or error states of their own — those belong to the trigger element.

### Disabled triggers

Disabled elements don't fire pointer or focus events, so a tooltip attached to one never opens. If you need to explain why a control is unavailable, attach the tooltip to a wrapper around the control, or keep the control enabled and explain the constraint when the user activates it.

## Content guidelines

Write tooltips as short, complete thoughts.

- **Keep it under 10 words** where you can, and never more than two lines.
- **Use sentence case.** Skip the full stop on fragments; keep it on full sentences.
- **Lead with the answer**, not with "This button lets you…".
- **Don't repeat the trigger's visible label.**
- **Don't put anything in a tooltip that the user needs in order to act** — they can't read it while typing.

| ✓ DO | ✗ DON'T |
| --- | --- |
| **"Sort results by price"** — says what the control does | **"Sort"** — repeats the icon's obvious meaning |
| **"Estimated based on your postcode"** — explains where a value comes from | **"More info"** — tells the user nothing |
| **"Select a size before adding to cart"** — names the blocker | **"Unavailable"** — leaves the user stuck |
| Keep it to one or two lines | Write a paragraph that covers the page behind it |
| Plain text only | Links or buttons the user has to move the pointer to reach |

## Placement in the interface

**Desktop**
Anchor the tooltip to the control it describes and leave enough space around it that the tooltip doesn't overlap adjacent controls. Use `distance` to increase the gap when the trigger sits inside a dense toolbar.

**Mobile**
There's no hover on touch, so the tooltip needs an explicit tap. Make that obvious — an info icon next to the label is the clearest pattern. Give the trigger a target of at least 44×44pt (iOS) or 48×48dp (Android), and make sure a tap anywhere outside dismisses the tooltip.

Prefer `top` or `bottom` placement on narrow screens. Side placements rarely have room, and a flipped tooltip can end up far from the element it describes.

## Best practices

### Open on hover and focus

<DoDont>
<Do imgurl="/docs/components/tooltip/usage-best-practices-1-hover-focus-do.svg" imgalt="Two identical triggers side by side: the first is hovered by a pointer and shows a “Trigger hovered” tooltip, the second has a keyboard focus ring and shows a “Trigger in focus” tooltip">

Show the tooltip on both hover and keyboard focus, so every user can reach the message.

</Do>
<Do not imgurl="/docs/components/tooltip/usage-best-practices-1-hover-focus-dont.svg" imgalt="Two identical triggers side by side: the hovered one shows a “Trigger hovered” tooltip, but the one with a keyboard focus ring shows no tooltip at all">

Don't bind to hover alone. Keyboard and screen reader users never see the tooltip, and the information is lost.

</Do>
</DoDont>

### Anchor to an interactive trigger

<DoDont>
<Do imgurl="/docs/components/tooltip/usage-best-practices-2-interactive-trigger-do.svg" imgalt="A pointer hovering a plus icon button, which shows a “Zoom in” tooltip above it">

Attach the tooltip to something that clearly looks interactive, like a button or an info icon.

</Do>
<Do not imgurl="/docs/components/tooltip/usage-best-practices-2-interactive-trigger-dont.svg" imgalt="A pointer hovering the plain sentence “…and his name was Mochi”, which reveals an “A Syrian hamster” tooltip with no visible affordance on the text">

Don't attach it to plain text with no affordance. Users have no reason to hover there, so they never discover it.

</Do>
</DoDont>

### Keep essential information outside the tooltip

<DoDont>
<Do imgurl="/docs/components/tooltip/usage-best-practices-3-essential-info-do.svg" imgalt="A grid view icon button showing a “Switch to grid view” tooltip that names the control without hiding anything needed to use it">

Make sure the interface still works with every tooltip closed. Tooltips add detail; they don't carry the task.

</Do>
<Do not imgurl="/docs/components/tooltip/usage-best-practices-3-essential-info-dont.svg" imgalt="A text field labelled “Label” with help text below it, where a “dd/mm/yyyy” tooltip covers the top of the input the user is about to type into">

Don't hide anything the user needs in order to act. Tooltip content disappears the moment they move to the field.

</Do>
</DoDont>

### One tooltip at a time

<DoDont>
<Do imgurl="/docs/components/tooltip/usage-best-practices-4-one-at-a-time-do.svg" imgalt="A page of content blocks with a single “Save your progress” tooltip above the button it describes">

Use a single tooltip per trigger, and show only one at a time.

</Do>
<Do not imgurl="/docs/components/tooltip/usage-best-practices-4-one-at-a-time-dont.svg" imgalt="The same page with two overlapping tooltips stacked above the button, “Press once to save” on top of “Save your progress”, obscuring the content behind them">

Don't stack or chain tooltips. Overlapping messages compete for attention and obscure the content behind them.

</Do>
</DoDont>

### Keep the tooltip in view

<DoDont>
<Do imgurl="/docs/components/tooltip/usage-best-practices-5-keep-in-view-do.svg" imgalt="Two panels: in the first the tooltip sits above its trigger, in the second the trigger is near the top edge so the tooltip has flipped below it to stay fully visible">

Enable `flip` whenever the trigger can scroll near the edge of the viewport, so the tooltip repositions itself.

</Do>
<Do not imgurl="/docs/components/tooltip/usage-best-practices-5-keep-in-view-dont.svg" imgalt="A tooltip clipped by the top edge of the viewport, leaving only the bottom half of “Save your progress” readable">

Don't let the tooltip get clipped off-screen. A half-visible message is worse than none.

</Do>
</DoDont>

### Make it easy to dismiss

<DoDont>
<Do imgurl="/docs/components/tooltip/usage-best-practices-6-dismiss-do.svg" imgalt="Two panels: in the first the pointer rests on the trigger and the “Save your progress” tooltip is visible, in the second the pointer has moved away and the tooltip has gone">

Close the tooltip on <kbd>Escape</kbd>, on blur, and when the pointer leaves the trigger.

</Do>
<Do not imgurl="/docs/components/tooltip/usage-best-practices-6-dismiss-dont.svg" imgalt="The pointer has moved well away from the trigger, but the “Save your progress” tooltip is still showing">

Don't require a precise pointer movement to dismiss it, and never make the tooltip persistent.

</Do>
</DoDont>

### Choose the right component for the content

<DoDont>
<Do imgurl="/docs/components/tooltip/usage-best-practices-7-right-component-do.svg" imgalt="A popover card titled “Hover versus click” with body text and a “Read more” link, anchored to an info icon button that has been clicked">

Use a [Popover](/components/popover/overview.md) when the message needs a link, a button, or a close control.

</Do>
<Do not imgurl="/docs/components/tooltip/usage-best-practices-7-right-component-dont.svg" imgalt="A tooltip containing “Save your progress” and a “More info” link, an interactive target the pointer cannot reach without dismissing the tooltip">

Don't put interactive content in a tooltip. It vanishes on mouse-out and can't be reached by keyboard.

</Do>
</DoDont>

<component-questions />
