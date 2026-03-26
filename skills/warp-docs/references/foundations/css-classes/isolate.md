# Isolate

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/isolate

> Layout

Utilities for controlling whether an element should explicitly create a new stacking context.

| Class | Description |
| --- | --- |
| isolate | isolation: isolate |
| isolation-auto | isolation: auto |

Use the `isolate` and `isolation-auto` utilities to control whether an element should explicitly create a new stacking context.

```html
<div class="isolate ...">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:isolation-auto` to apply the `isolation-auto` utility at only medium screen sizes and above.

```html
<div class="isolate md:isolation-auto">
  <!-- ... -->
</div>
```
