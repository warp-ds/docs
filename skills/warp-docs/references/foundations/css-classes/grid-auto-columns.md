# Grid Auto Columns

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/grid-auto-columns

> Flexbox & Grid

Utilities for controlling the size of implicitly-created grid columns.

| Class | Description |
| --- | --- |
| auto-cols-auto | grid-auto-columns: auto |
| auto-cols-min | grid-auto-columns: min-content |
| auto-cols-max | grid-auto-columns: max-content |
| auto-cols-fr | grid-auto-columns: minmax(0, 1fr) |

Use the `auto-cols-{size}` utilities to control the size of implicitly-created grid columns.

```html
<div class="grid grid-flow-col auto-cols-max">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

If you need to use a one-off `grid-auto-cols` value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="grid grid-flow-row auto-cols-[minmax(0,_2fr)]">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:auto-cols-min` to apply the `auto-cols-min` utility at only medium screen sizes and above.

```html
<div class="grid grid-flow-col md:grid-flow-row">
  <!-- ... -->
</div>
```
