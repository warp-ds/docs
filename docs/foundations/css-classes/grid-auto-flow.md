> Flexbox & Grid

# Grid Auto Flow

Utilities for controlling how elements in a grid are auto-placed.

## Quick reference

| Class | Description |
|-------|-------------|
| `grid-flow-row` | `grid-auto-flow: row` |
| `grid-flow-col` | `grid-auto-flow: column` |
| `grid-flow-dense` | `grid-auto-flow: dense` |
| `grid-flow-row-dense` | `grid-auto-flow: row dense` |
| `grid-flow-col-dense` | `grid-auto-flow: column dense` |

## Basic usage

### Controlling grid element placement
Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.

### Grid flow row
Items are placed by filling each row in turn, adding new rows as necessary.

<example-container>
  <div class="ex-bg--striped ex-bg--purple grid grid-flow-row grid-cols-3 grid-rows-3 gap-24 rounded-4">
    <div class="pd-bg-purple-800 ex-box col-span-2">01</div>
    <div class="pd-bg-purple-800 ex-box col-span-2">02</div>
    <div class="pd-bg-purple-500 ex-box">03</div>
    <div class="pd-bg-purple-800 ex-box">04</div>
    <div class="pd-bg-purple-800 ex-box">05</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-flow-row grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Grid flow column
Items are placed by filling each column in turn, adding new columns as necessary.

<example-container>
  <div class="ex-bg--striped ex-bg--purple grid grid-flow-col grid-cols-3 grid-rows-3 gap-24 rounded-4">
    <div class="pd-bg-purple-800 ex-box col-span-2">01</div>
    <div class="pd-bg-purple-800 ex-box col-span-2">02</div>
    <div class="pd-bg-purple-500 ex-box">03</div>
    <div class="pd-bg-purple-800 ex-box">04</div>
    <div class="pd-bg-purple-800 ex-box">05</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-flow-col grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Grid flow column dense
"dense" packing algorithm attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.

If it is omitted, a "sparse" algorithm is used, where the placement algorithm only ever moves "forward" in the grid when placing items, never backtracking to fill holes. This ensures that all auto-placed items appear "in order", even if this leaves holes that could have been filled by later items.

<example-container>
  <div class="ex-bg--striped ex-bg--purple grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-24 rounded-4">
    <div class="pd-bg-purple-800 ex-box col-span-2">01</div>
    <div class="pd-bg-purple-800 ex-box col-span-2">02</div>
    <div class="pd-bg-purple-500 ex-box">03</div>
    <div class="pd-bg-purple-800 ex-box">04</div>
    <div class="pd-bg-purple-800 ex-box">05</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:grid-flow-row` to apply the `grid-flow-row` utility at only medium screen sizes and above.

```html
<div class="grid grid-flow-col md:grid-flow-row">
  <!-- ... -->
</div>
```

<!--
TODO: Improve auto-flow example to show difference between row/col and sparse/dense
-->