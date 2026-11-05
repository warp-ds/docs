> Flexbox & Grid

# Grid Template Rows

Utilities for specifying the rows in a grid layout.

## Quick reference

| Class                    | Description                                       |
|--------------------------|---------------------------------------------------|
| `grid-rows-{n}`          | `grid-template-rows: repeat({n} ,minmax(0, 1fr))` |
| `grid-rows-[{row-spec}]` | `grid-template-rows: {row-spec}`                  |

> Available values <br />
> `{n}`: `1` through `7` <br />
> `{row-spec}`: _Any valid value for the `grid-template-rows` property - replace spaces with `_`_ <br />

## Basic usage

### Specifying the rows in a grid
Use the `grid-rows-{n}` utilities to create grids with n equally sized rows.

<example-container class="overflow-auto">
  <div class="ex-bg--striped ex-bg--pink grid grid-rows-4 grid-flow-col gap-24 rounded-8">
    <div class="pd-bg-pink-500 ex-box">01</div>
    <div class="pd-bg-pink-500 ex-box">02</div>
    <div class="pd-bg-pink-500 ex-box">03</div>
    <div class="pd-bg-pink-500 ex-box">04</div>
    <div class="pd-bg-pink-500 ex-box">05</div>
    <div class="pd-bg-pink-500 ex-box">06</div>
    <div class="pd-bg-pink-500 ex-box">07</div>
    <div class="pd-bg-pink-500 ex-box">08</div>
    <div class="pd-bg-pink-500 ex-box">09</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-rows-4 grid-flow-col ...">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

### Arbitrary values

If you need to use a one-off `grid-template-rows` value, use square brackets to generate a property on the fly. Replace any spaces in the property with underscore.

```html{1}
<div class="grid grid-rows-[3.2rem_1fr]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grid-rows-6` to apply the `grid-rows-6` utility at only medium screen sizes and above.

```html{1}
<div class="grid grid-rows-2 md:grid-rows-6">
  <!-- ... -->
</div>
```
