# Transition Duration

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/transition-duration

> Transitions & Animation

Utilities for controlling the duration of CSS transitions.

| Class | Description |
| --- | --- |
| duration-{amount(ms)} | transition-duration: {amount} |

> Available values  
> `{amount}`: Accepts any value in ms (1000 = 1 s)

Use the `duration-{amount}` utilities to control an element’s transition-duration.

```html
<div class="transition duration-150 ease-in-out ...">Hover me</div>
<div class="transition duration-300 ease-in-out ...">Hover me</div>
<div class="transition duration-700 ease-in-out ...">Hover me</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:duration-150` to apply the `duration-150` utility at only medium screen sizes and above.

```html
<div class="transition duration-0 md:duration-150">
  <!-- ... -->
</div>
```
