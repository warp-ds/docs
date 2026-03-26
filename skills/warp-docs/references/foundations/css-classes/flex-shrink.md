# Flex Shrink

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/flex-shrink

> Flexbox & Grid

Utilities for controlling how flex items shrink.

| Class | Description |
| --- | --- |
| shrink | flex-shrink: 1 |
| shrink-0 | flex-shrink: 0 |

Use `shrink` to allow a flex item to shrink if needed.

```html
<div class="flex">
  <div class="flex-none ...">01</div>
  <div class="shrink ...">02</div>
  <div class="flex-none ...">03</div>
</div>
```

Use `shrink-0` to prevent a flex item from shrinking

```html
  <div class="flex">
    <div class="flex-1 ...">01</div>
    <div class="shrink-0 w-32 ...">02</div>
    <div class="flex-1 ...">03</div>
  </div>
```

If you need to use a one-off flex-shrink value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="shrink-[2]">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:shrink-0` to apply the `shrink-0` utility at only medium screen sizes and above.

```html
<div class="shrink md:shrink-0">
  <!-- ... -->
</div>
```
