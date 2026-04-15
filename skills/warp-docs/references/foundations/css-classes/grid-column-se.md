# Grid Columns Start / End

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/grid-column-se

> Flexbox & Grid

Utilities for controlling how elements are sized and placed across grid columns.

| Class | Description |
| --- | --- |
| col-span-{n} | grid-column: span {n} / span {n} |
| col-start-{n} | grid-column-start: {n} |
| col-end-{n} | grid-column-end: {n} |

> Available values  
> `{n}`: `1` through `13`  

Use the `col-span-{n}` utilities to make an element span n columns.

```html
<div class="grid grid-cols-3 ...">
  <div class="...">01</div>
  <div class="...">02</div>
  <div class="...">03</div>
  <div class="col-span-2 ...">04</div>
  <div class="...">05</div>
  <div class="...">06</div>
  <div class="col-span-2 ...">07</div>
</div>
```

Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line. These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.

Note

CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.

```html
<div class="grid grid-cols-6 ...">
  <div class="col-start-2 col-span-4 ...">01</div>
  <div class="col-start-1 col-end-3 ...">02</div>
  <div class="col-end-7 col-span-2 ...">03</div>
  <div class="col-start-1 col-end-7 ...">04</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:col-span-6` to apply the `col-span-6` utility at only medium screen sizes and above.

```html
<div class="col-span-2 md:col-span-6">
  <!-- ... -->
</div>
```
