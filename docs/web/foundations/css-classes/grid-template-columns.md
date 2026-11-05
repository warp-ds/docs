> Flexbox & Grid

# Grid Template Columns

Utilities for specifying the columns in a grid layout.

## Quick reference

| Class                    | Description                                          |
|--------------------------|------------------------------------------------------|
| `grid-cols-{n}`          | `grid-template-columns: repeat({n} ,minmax(0,1fr))`  |
| `grid-cols-[{col-spec}]` | `grid-template-columns: {col-spec}`                  |

> Available values <br />
> `{n}`: `1` through `13` <br />
> `{col-spec}`: _Any valid value for the `grid-template-columns` property - replace spaces with `_`_ <br />

## Basic usage

### Specifying the columns in a grid
Use the `grid-cols-{n}` utilities to create grids with `n` equally sized columns.

<example-container class="overflow-auto">
  <div class="ex-bg--striped ex-bg--pink grid grid-cols-4 gap-24 rounded-8">
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
<div class="grid grid-cols-4 ...">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

### Arbitrary values

If you need to use a one-off `grid-template-columns` value, use square brackets to generate a property on the fly. Replace any spaces in the property with underscore.

```html{1}
<div class="grid grid-cols-[3.2rem_1fr]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grid-cols-6` to apply the `grid-cols-6` utility at only medium screen sizes and above.

```html{1}
<div class="grid grid-cols-1 md:grid-cols-6">
  <!-- ... -->
</div>
```
