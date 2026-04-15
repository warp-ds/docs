# Grid Auto Flow

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/grid-auto-flow

> Flexbox & Grid

Utilities for controlling how elements in a grid are auto-placed.

| Class | Description |
| --- | --- |
| grid-flow-row | grid-auto-flow: row |
| grid-flow-col | grid-auto-flow: column |
| grid-flow-dense | grid-auto-flow: dense |
| grid-flow-row-dense | grid-auto-flow: row dense |
| grid-flow-col-dense | grid-auto-flow: column dense |

Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.

Items are placed by filling each row in turn, adding new rows as necessary.

```html
<div class="grid grid-flow-row grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

Items are placed by filling each column in turn, adding new columns as necessary.

```html
<div class="grid grid-flow-col grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

"dense" packing algorithm attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.

If it is omitted, a "sparse" algorithm is used, where the placement algorithm only ever moves "forward" in the grid when placing items, never backtracking to fill holes. This ensures that all auto-placed items appear "in order", even if this leaves holes that could have been filled by later items.

```html
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grid-flow-row` to apply the `grid-flow-row` utility at only medium screen sizes and above.

```html
<div class="grid grid-flow-col md:grid-flow-row">
  <!-- ... -->
</div>
```
