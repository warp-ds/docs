# Grid Rows Start / End

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/grid-row-se

> Flexbox & Grid

Utilities for controlling how elements are sized and placed across grid rows.

| Class | Description |
| --- | --- |
| row-span-{n} | grid-row: span {n} / span {n} |
| row-start-{n} | grid-row-start: {n} |
| row-end-{n} | grid-row-end: {n} |

> Available values  
> `{n}`: `1` through `7`  

Use the `row-span-{n}` utilities to make an element span n rows.

```html
<div class="grid grid-rows-3 grid-flow-col ...">
  <div class="row-span-3 ...">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="row-span-2 col-span-2 ...">03</div>
</div>
```

Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line. These can also be combined with the `row-span-{n}` utilities to span a specific number of rows.

Note

CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.

```html
<div class="grid grid-rows-3 grid-flow-col ...">
  <div class="row-start-2 row-span-2 ...">01</div>
  <div class="row-end-3 row-span-2 ...">02</div>
  <div class="row-start-1 row-end-4 ...">03</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:row-span-4` to apply the `row-span-4` utility at only medium screen sizes and above.

```html
<div class="row-span-3 md:row-span-4">
  <!-- ... -->
</div>
```
