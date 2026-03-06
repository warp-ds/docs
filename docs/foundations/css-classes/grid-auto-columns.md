> Flexbox & Grid

# Grid Auto Columns

Utilities for controlling the size of implicitly-created grid columns.

## Quick reference

| Class | Description |
|-------|-------------|
| `auto-cols-auto` | `grid-auto-columns: auto` |
| `auto-cols-min` | `grid-auto-columns: min-content` |
| `auto-cols-max` | `grid-auto-columns: max-content` |
| `auto-cols-fr` | `grid-auto-columns: minmax(0, 1fr)` |

## Basic usage

### Sizing implicitly-created grid columns
Use the `auto-cols-{size}` utilities to control the size of implicitly-created grid columns.

```html
<div class="grid grid-flow-col auto-cols-max">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Arbitrary values
If you need to use a one-off `grid-auto-cols` value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="grid grid-flow-row auto-cols-[minmax(0,_2fr)]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:auto-cols-min` to apply the `auto-cols-min` utility at only medium screen sizes and above.

```html
<div class="grid grid-flow-col md:grid-flow-row">
  <!-- ... -->
</div>
```
