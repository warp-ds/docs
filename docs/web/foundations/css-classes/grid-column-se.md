> Flexbox & Grid

# Grid Columns Start / End

Utilities for controlling how elements are sized and placed across grid columns.

## Quick reference

| Class           | Description                        |
|-----------------|------------------------------------|
| `col-span-{n}`  | `grid-column: span {n} / span {n}` |
| `col-start-{n}` | `grid-column-start: {n}`           |
| `col-end-{n}`   | `grid-column-end: {n}`             |

> Available values <br />
> `{n}`: `1` through `13` <br />

## Basic usage

### Spanning columns
Use the `col-span-{n}` utilities to make an element span n columns.

<example-container class="grid grid-cols-3 gap-24">
  <div class="pd-bg-indigo-800 ex-box">01</div>
  <div class="pd-bg-indigo-800 ex-box">02</div>
  <div class="pd-bg-indigo-800 ex-box">03</div>
  <div class="pd-bg-indigo-500 ex-box col-span-2">04</div>
  <div class="pd-bg-indigo-800 ex-box">05</div>
  <div class="pd-bg-indigo-800 ex-box">06</div>
  <div class="pd-bg-indigo-500 ex-box col-span-2">07</div>
</example-container>

```html{5,8}
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

### Starting and ending lines
Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line. These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.

::: warning Note
CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.
:::

<example-container>
  <div class="grid grid-cols-6 gap-24 rounded-8 ex-bg--striped ex-bg--blue">
    <div class="ex-box"></div>
    <div class="pd-bg-blue-500 ex-box col-start-2 col-span-4">01</div>
    <div class="ex-box"></div>
    <div class="pd-bg-blue-500 ex-box col-start-1 col-end-3">02</div>
    <div class="ex-box"></div>
    <div class="ex-box"></div>
    <div class="pd-bg-blue-500 ex-box col-end-7 col-span-2">03</div>
    <div class="pd-bg-blue-500 ex-box col-start-1 col-end-7">04</div>
  </div>
</example-container>

```html{2-5}
<div class="grid grid-cols-6 ...">
  <div class="col-start-2 col-span-4 ...">01</div>
  <div class="col-start-1 col-end-3 ...">02</div>
  <div class="col-end-7 col-span-2 ...">03</div>
  <div class="col-start-1 col-end-7 ...">04</div>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:col-span-6` to apply the `col-span-6` utility at only medium screen sizes and above.

```html{1}
<div class="col-span-2 md:col-span-6">
  <!-- ... -->
</div>
```
