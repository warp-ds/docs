# Transition Timing

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/transition-timing

> Transitions & Animation

Utilities for controlling the easing of CSS transitions.

| Class | Description |
| --- | --- |
| ease-linear | transition-timing-function: linear |
| ease-in | transition-timing-function: cubic-bezier(0.4, 0, 1, 1) |
| ease-out | transition-timing-function: cubic-bezier(0, 0, 0.2, 1) |
| ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) |

Use the `ease-{timing}` utilities to control an element’s easing curve.

```html
  <div class="ease-linear duration-700 ...">Ease-inlinear</div>
  <div class="ease-in duration-700 ...">Ease-in</div>
  <div class="ease-out duration-700 ...">Ease-out</div>
  <div class="ease-in-out duration-700 ...">Ease-in-out</div>
```

If you need to use a one-off `transition-timing-function` value, you can use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"></div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:ease-in` to only apply the `ease-in` utility on hover.

```html
<div class="transition duration-150 ease-out hover:ease-in"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:ease-in` to apply the `ease-in` utility at only medium screen sizes and above.

```html
<div class="transition duration-150 ease-out md:ease-in"></div>
```
