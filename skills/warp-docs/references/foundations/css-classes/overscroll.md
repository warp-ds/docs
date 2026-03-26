# Overscroll Behavior

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/overscroll

> Layout

Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.

| Class | Description |
| --- | --- |
| overscroll-auto | overscroll-behavior: auto |
| overscroll-contain | overscroll-behavior: contain |
| overscroll-none | overscroll-behavior: none |
| overscroll-y-auto | overscroll-behavior-y: auto |
| overscroll-y-contain | overscroll-behavior-y: contain |
| overscroll-y-none | overscroll-behavior-y: none |
| overscroll-x-auto | overscroll-behavior-x: auto |
| overscroll-x-contain | overscroll-behavior-x: contain |
| overscroll-x-none | overscroll-behavior-x: none |

Use `overscroll-contain` to prevent scrolling in the target area from triggering scrolling in the parent element, but preserve “bounce” effects when scrolling past the end of the container in operating systems that support it.

```html
<div class="overscroll-contain ...">Well, let me tell you something, ...</div>
```

Use `overscroll-none` to prevent scrolling in the target area from triggering scrolling in the parent element, and also prevent “bounce” effects when scrolling past the end of the container.

```html
<div class="overscroll-none ...">Well, let me tell you something, ...</div>
```

Use `overscroll-auto` to make it possible for the user to continue scrolling a parent scroll area when they reach the boundary of the primary scroll area.

```html
<div class="overscroll-auto ...">Well, let me tell you something, ...</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:overscroll-contain` to apply the `overscroll-contain` utility at only medium screen sizes and above.

```html
<div class="overscroll-auto md:overscroll-contain">
  <!-- ... -->
</div>
```
