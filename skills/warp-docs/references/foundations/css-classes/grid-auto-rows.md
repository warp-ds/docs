# Grid Auto Rows

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/grid-auto-rows

> Flexbox & Grid

Utilities for controlling the size of implicitly-created grid rows.

| Class | Description |
| --- | --- |
| auto-rows-auto | grid-auto-rows: auto |
| auto-rows-min | grid-auto-rows: min-content |
| auto-rows-max | grid-auto-rows: max-content |
| auto-rows-fr | grid-auto-rows: minmax(0, 1fr) |

Use the `auto-rows-{size}` utilities to control the size implicitly-created grid rows.

```html
<div class="grid grid-flow-row auto-rows-max">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

If you need to use a one-off `grid-auto-rows` value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="grid grid-flow-row auto-rows-[minmax(0,_2fr)]">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:auto-rows-min` to apply the `auto-rows-min` utility at only medium screen sizes and above.

```html
<div class="grid grid-flow-row auto-rows-max md:auto-rows-min">
  <!-- ... -->
</div>
```
