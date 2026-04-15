# Pointer Events

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/pointer-events

> Interactivity

Utilities for controlling whether an element responds to pointer events.

| Class | Description |
| --- | --- |
| pointer-events-auto | pointer-events: auto |
| pointer-events-none | pointer-events: none |
| pointer-events-inherit | pointer-events: inherit |
| pointer-events-initial | pointer-events: initial |
| pointer-events-revert | pointer-events: revert |
| pointer-events-revert-layer | pointer-events: revert-layer |
| pointer-events-unset | pointer-events: unset |

Use `pointer-events-auto` to revert to the default browser behavior for pointer events (like `:hover` and `click`).

Use `pointer-events-none` to make an element ignore pointer events. The pointer events will still trigger on child elements and pass-through to elements that are “beneath” the target.

```html
<div class="...">
  <div class="pointer-events-auto ...">
    <svg>...</svg>
  </div>
  <input type="text" placeholder="Search" class="...">
</div>

<div class="...">
  <div class="pointer-events-none ...">
    <svg>...</svg>
  </div>
  <input type="text" placeholder="Search" class="...">
</div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `focus:pointer-events-auto` to only apply the `pointer-events-auto` utility on focus.

```html
<div class="pointer-events-none focus:pointer-events-auto"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:pointer-events-auto` to apply the `pointer-events-auto` utility at only medium screen sizes and above.

```html
<div class="pointer-events-none md:pointer-events-auto"></div>
```
