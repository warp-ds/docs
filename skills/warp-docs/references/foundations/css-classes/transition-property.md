# Transition Property

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/transition-property

> Transitions & Animation

Utilities for controlling which CSS properties transition.

| Class | Description |
| --- | --- |
| transition | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 150ms |
| transition-none | transition: none |
| transition-all | transition-property: all transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 150ms |
| transition-colors | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 150ms |
| transition-opacity | transition-property: opacity transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 150ms |
| transition-shadow | transition-property: box-shadow transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 150ms |
| transition-transform | transition-property: transform transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 150ms |

Use the `transition-{properties}` utilities to specify which properties should transition when they change.

```html
  <div class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 ...">
    I'm a nice box, why are you not hovering over me?
  </div>
```

For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the motion-safe and motion-reduce variants.

```html
<button class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
  <!-- ... -->
</button>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:transition-all` to only apply the `transition-all` utility on hover.

```html
<div class="hover:transition-all">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:transition-all` to apply the `transition-all` utility at only medium screen sizes and above.

```html
<div class="md:transition-all">
  <!-- ... -->
</div>
```
