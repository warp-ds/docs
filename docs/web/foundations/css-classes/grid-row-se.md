> Flexbox & Grid

# Grid Rows Start / End

Utilities for controlling how elements are sized and placed across grid rows.

## Quick reference

| Class           | Description                     |
|-----------------|---------------------------------|
| `row-span-{n}`  | `grid-row: span {n} / span {n}` |
| `row-start-{n}` | `grid-row-start: {n}`           |
| `row-end-{n}`   | `grid-row-end: {n}`             |

> Available values <br />
> `{n}`: `1` through `7` <br />

## Basic usage

### Spanning rows
Use the `row-span-{n}` utilities to make an element span n rows.

<example-container>
  <div class="ex-bg--striped ex-bg--fuchsia grid grid-rows-3 grid-flow-col gap-24 rounded-8">
    <div class="pd-bg-fuchsia-500 ex-box row-span-3">01</div>
    <div class="pd-bg-fuchsia-300 ex-box col-span-2">02</div>
    <div class="pd-bg-fuchsia-500 ex-box col-span-2 row-span-2">03</div>
  </div>
</example-container>

```html{2,4}
<div class="grid grid-rows-3 grid-flow-col ...">
  <div class="row-span-3 ...">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="row-span-2 col-span-2 ...">03</div>
</div>
```

### Starting and ending lines
Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line. These can also be combined with the `row-span-{n}` utilities to span a specific number of rows.

::: warning Note
CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.
:::

<example-container>
  <div class="ex-bg--striped ex-bg--blue grid grid-rows-3 grid-flow-col gap-24 rounded-8">
    <div class="ex-box"></div>
    <div class="pd-bg-blue-500 ex-box row-start-2 row-span-2">01</div>
    <div class="pd-bg-blue-500 ex-box row-end-3 row-span-2">02</div>
    <div class="ex-box"></div>
    <div class="pd-bg-blue-500 ex-box row-start-1 row-end-4">03</div>
  </div>
</example-container>

```html{2-4}
<div class="grid grid-rows-3 grid-flow-col ...">
  <div class="row-start-2 row-span-2 ...">01</div>
  <div class="row-end-3 row-span-2 ...">02</div>
  <div class="row-start-1 row-end-4 ...">03</div>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:row-span-4` to apply the `row-span-4` utility at only medium screen sizes and above.

```html{1}
<div class="row-span-3 md:row-span-4">
  <!-- ... -->
</div>
```
