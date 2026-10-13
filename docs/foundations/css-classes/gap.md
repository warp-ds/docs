> Flexbox & Grid

# Gap

Utilities for controlling gutters between grid and flexbox items.

## Quick reference

| Class       | Description       |
|-------------|-------------------|
| `gap-{size}`   | `gap: {size}`        |
| `gap-x-{size}` | `column-gap: {size}` |
| `gap-y-{size}` | `row-gap: {size}`    |

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />

## Basic usage

### Setting the gap between elements
Use `gap-{size}` to change the gap between both rows and columns in grid and flexbox layouts.

<example-container>
  <div class="ex-bg--striped ex-bg--violet grid gap-24 grid-cols-2 rounded-4">
    <div class="pd-bg-violet-500 ex-box">01</div>
    <div class="pd-bg-violet-500 ex-box">02</div>
    <div class="pd-bg-violet-500 ex-box">03</div>
    <div class="pd-bg-violet-500 ex-box">04</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-2 gap-24">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Changing row and column gaps independently
Use `gap-x-{size}` and `gap-y-{size}` to change the gap between rows and columns independently.

<example-container>
  <div class="ex-bg--striped ex-bg--blue grid gap-x-48 gap-y-24 grid-cols-3 rounded-4">
    <div class="pd-bg-blue-500 ex-box">01</div>
    <div class="pd-bg-blue-500 ex-box">02</div>
    <div class="pd-bg-blue-500 ex-box">03</div>
    <div class="pd-bg-blue-500 ex-box">04</div>
    <div class="pd-bg-blue-500 ex-box">05</div>
    <div class="pd-bg-blue-500 ex-box">06</div>
  </div>
</example-container>

```html{1}
<div class="grid gap-x-32 gap-y-24 grid-cols-3 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Arbitrary values
If you need to use a one-off gap value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="grid gap-[27]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:gap-6` to apply the `gap-6` utility at only medium screen sizes and above.

```html
<div class="grid gap-16 md:gap-24">
  <!-- ... -->
</div>
```
