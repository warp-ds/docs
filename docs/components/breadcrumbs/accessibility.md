# Breadcrumbs - Accessibility

Breadcrumbs must expose their purpose, links, current location, and reading order without relying on visual styling alone.

<ComponentsStatus />

## General

- Wrap the trail in a navigation landmark with an accessible label that identifies it as breadcrumbs.
- Keep breadcrumb items in hierarchy order in the DOM, from the broadest parent to the current location.
- Use real links for parent destinations. Do not reproduce link behaviour with click handlers on generic elements.
- Identify the current page with `aria-current="page"`. Prefer non-interactive text so the current page does not link to itself.
- Keep slash separators out of the accessibility tree so screen readers do not announce them between every item.

## Keyboard interaction

Breadcrumbs use standard link behaviour and do not need custom keyboard handling.

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Moves focus to the next breadcrumb link. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous breadcrumb link. |
| <kbd>Enter</kbd> | Opens the focused link. |

Only links participate in the tab order. The current-page text and separators do not receive focus.

## Screen readers

### Landmark and label

The breadcrumb trail must be exposed as a navigation landmark with a concise accessible label. Warp's web components provide a localised label equivalent to “You are here” by default; use `aria-label` when the surrounding page needs a more specific label.

```html
<w-breadcrumbs aria-label="Breadcrumbs">
  <w-breadcrumb-item href="/motor">Motor</w-breadcrumb-item>
  <w-breadcrumb-item href="/motor/cars">Cars</w-breadcrumb-item>
  <w-breadcrumb-item current-page>Electric cars</w-breadcrumb-item>
</w-breadcrumbs>
```

### Current page

`aria-current="page"` communicates which item represents the page being viewed. The modern Elements item API applies it when `current-page` is set. In React and Vue, add `aria-current="page"` to the final non-link child yourself.

If the current page is omitted from the trail, do not set `aria-current` on its parent link.

### Separators

Separators are visual punctuation, not navigation content. `w-breadcrumb-item` inserts separators with `aria-hidden="true"`. The React and Vue wrappers insert visible slash separators but do not currently hide them from assistive technology, so include this in screen-reader testing when using those wrappers.

## Visual accessibility

### Links and focus

Keep the Warp link styling so parent items are visually distinguishable and receive a visible focus outline. Do not communicate the current page by colour alone; its position and `aria-current` provide additional context.

Check foreground and background colours in every supported theme. Do not place breadcrumbs over imagery or surfaces that reduce link, text, or focus-indicator contrast.

### Targets and spacing

Breadcrumb links must remain easy to activate without selecting an adjacent link. Test pointer targets against the WCAG 2.2 minimum target-size requirement and preserve spacing between links, especially when text wraps or is enlarged.

### Text resize and reflow

At narrow widths and up to 400% browser zoom, the trail must remain readable without obscuring content or requiring two-dimensional scrolling. Because the component does not collapse or truncate automatically, choose responsive content deliberately and test it at 320 CSS pixels wide.

Do not remove or shorten an accessible name merely to make the visible trail fit.

## Platform-specific guidance

### Elements

Use `w-breadcrumb-item` for each item. The component:

- exposes a navigation landmark and localised label;
- applies `aria-current="page"` to an item marked `current-page`;
- hides inserted separators from assistive technology;
- warns when current-page state is duplicated or placed before the final item.

Avoid the legacy direct anchor-and-span API because its inserted separators are not hidden from assistive technology.

### React and Vue

The React and Vue wrappers expose a labelled navigation landmark and insert separators between their direct children. Authors are responsible for using real links for parents and adding `aria-current="page"` to the final non-link child.

The wrappers' separators may be announced by screen readers, so test the rendered output with the browser and assistive technology combinations supported by the product.

### Native

Warp does not currently provide a Breadcrumbs component for iOS or Android.

## Motion

Breadcrumbs do not animate. Do not add movement solely to signal a route change; the page heading, focus management, and current-page semantics should communicate the new location.

## Testing

Test the rendered breadcrumb with:

- keyboard-only navigation in both directions;
- a screen reader, confirming the landmark label, hierarchy order, links, current page, and separator behaviour;
- 200% text resizing and 400% browser zoom;
- narrow viewports and the longest translated labels supported by the product;
- light and dark themes, including hover and keyboard focus states.

<component-questions />
