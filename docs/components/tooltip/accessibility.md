# Tooltip - Accessibility

A tooltip is a small message box that appears when a user hovers over, focuses, or taps a UI element. It provides brief, supplementary information about that element.

<ComponentsStatus />

## General

Tooltip content is hidden by default, so it's easy to make it unreachable for people who don't use a mouse. Two rules cover most of the risk:

1. **Everything a user needs to complete a task must be available outside the tooltip.** Treat tooltip text as an enhancement, never as the only source of an instruction.
2. **Every tooltip must open on keyboard focus, not just on hover.**

## ARIA

On the web, the Tooltip component handles the tooltip semantics for you. It renders its content in a `div` with `role="tooltip"` and a localised `aria-description` describing the arrow direction.

### Associating the tooltip with its trigger

Give the tooltip an `id` and reference it from the trigger with `aria-labelledby`. The Tooltip component uses the `for` attribute to associate itself with the trigger and handles hover, focus, and Escape-key behavior.

```html
<button id="target" aria-labelledby="tooltip-text">
  Sort
</button>
<w-tooltip id="tooltip-text" for="target" placement="top">Sort results by price</w-tooltip>
```

Use `aria-label` for a trigger's name and `aria-labelledby` to associate it with the tooltip. An icon-only button needs an accessible name so it can be identified; the tooltip supplies supporting detail.

### Narrowing what's announced

When the tooltip contains more text than a screen reader needs, keep only the relevant text in the tooltip. The Tooltip component supplies `role="tooltip"`; reference the tooltip's `id` from the target with `aria-labelledby`.

```html
<button aria-labelledby="aria-content" id="target">
  Click to toggle a tooltip on top
</button>
<w-tooltip id="aria-content" for="target" placement="top">This tooltip text is important</w-tooltip>
```

The trigger still needs its own accessible name. Do not use the tooltip as the only accessible name for an icon-only control; give the control an `aria-label` as well as `aria-labelledby`.

### DOM order

Place the trigger before the Tooltip element and connect them with the trigger's `id` and the tooltip's `for` attribute. The Tooltip element is not itself a focus target.

## Keyboard interaction

| Key | Behaviour |
| --- | --- |
| <kbd>Tab</kbd> | Moves focus to the trigger and shows the tooltip |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus off the trigger and hides the tooltip |
| <kbd>Escape</kbd> | Hides the tooltip while focus stays on the trigger |

The tooltip itself never receives focus, and focus is never trapped. Because a tooltip can't be focused, its content can't be reached by keyboard — another reason to keep links and buttons out of it.

The Tooltip component wires up `focus`, `blur`, `mouseover`, and `mouseout` on the element named by `for`. It also handles <kbd>Escape</kbd> and hover transitions between the trigger and tooltip.

## Screen readers

- The tooltip text is announced as the trigger's description when the trigger receives focus.
- A tooltip is **not** a live region. Don't rely on it to announce state changes — use an [Alert](/components/alert/overview.md) for status, warning, and error messages.
- Don't duplicate the trigger's accessible name in the tooltip. It will be read twice.

**iOS/iPadOS** — VoiceOver reads `Warp.Tooltip`'s `title` as text. Set an `accessibilityHint` on the anchor so VoiceOver users know a tooltip is available before they trigger it, and make sure the anchor's `accessibilityLabel` doesn't repeat the tooltip text.

**Android** — TalkBack reads the tooltip text when it becomes visible. Give the anchor a `contentDescription` that names the control, and keep the tooltip text as the supporting detail.

## Touch and click targets

Give every tooltip trigger a target of at least:

- **44×44pt** on iOS/iPadOS
- **48×48dp** on Android
- **44×44px** on web

Small info icons are the most common failure here — pad the tap target beyond the icon's visual bounds. Leave enough space between adjacent triggers that a user can't open the wrong tooltip.

## Visual accessibility

- **Contrast.** Tooltip text meets at least 4.5:1 against the tooltip surface. Don't override the tooltip's colours with custom styling.
- **Colour independence.** The tooltip carries meaning through text alone, so it works without colour perception. Don't add colour-only meaning to the trigger.
- **Focus indicator.** The trigger keeps its visible focus ring while the tooltip is open. Never suppress the focus ring to make the tooltip look cleaner.
- **Text resizing.** The tooltip grows with the user's text size. Test at 200% and confirm the message wraps rather than truncating, and that it still fits on screen — Tooltip automatically flips and shifts to avoid clipping.
- **Hover persistence.** WCAG 1.4.13 (Content on Hover or Focus) requires that hover-triggered content be dismissible with <kbd>Escape</kbd>, remain visible while the pointer is over the trigger, and not obscure other content. Position the tooltip so it doesn't cover the trigger or nearby text.

## Best practices

| ✓ DO | ✗ DON'T |
| --- | --- |
| Show the tooltip on focus as well as hover | Bind only to `mouseenter` / `mouseleave` |
| Associate the tooltip with `aria-labelledby` and `for` | Leave the tooltip orphaned from its trigger |
| Keep all essential information outside the tooltip | Hide the only copy of an instruction in a tooltip |
| Allow <kbd>Escape</kbd> to dismiss | Force the user to move the pointer away to close |
| Give icon-only triggers an accessible name of their own | Rely on the tooltip to name the control |
| Use an [Alert](/components/alert/overview.md) for errors and status | Use a tooltip to announce a validation failure |
| Meet the minimum target size on the trigger | Attach a tooltip to a 16px icon with no padding |

## Testing

**Keyboard**
Tab to the trigger and confirm the tooltip appears. Press <kbd>Escape</kbd> and confirm it closes with focus still on the trigger. Tab away and confirm it closes.

**Screen readers**
Test with VoiceOver (macOS/iOS), TalkBack (Android), and NVDA or JAWS (Windows). Confirm the trigger is announced with its own name, that the tooltip text follows as a description, and that nothing is announced twice.

**Zoom and text size**
Set the browser to 200% zoom, or Dynamic Type / font scaling to its largest setting on mobile. Confirm the tooltip stays on screen and the text wraps.

**Contrast**
Check tooltip text against its surface with a contrast checker in both light and dark themes, and for every brand theme you support.

**Automated**
Run axe or Lighthouse on a page with the tooltip open. Automated tools won't catch a tooltip that never opens on focus — verify that manually.

<component-questions />
