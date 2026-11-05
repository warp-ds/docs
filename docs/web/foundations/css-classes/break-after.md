> Layout

# Break After

Utilities for controlling how a column or page should break after an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `break-after-auto` | `break-after: auto` |
| `break-after-avoid` | `break-after: avoid` |
| `break-after-all` | `break-after: all` |
| `break-after-avoid-page` | `break-after: avoid-page` |
| `break-after-page` | `break-after: page` |
| `break-after-left` | `break-after: left` |
| `break-after-right` | `break-after: right` |
| `break-after-column` | `break-after: column` |

## Basic usage

### Setting the break-after behavior
Use the `break-after-{value}` utilities to control how a column or page break should behave after an element. For example, use the break-after-column utility to force a column break after an element.

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:break-after-column` to apply the `break-after-column` utility at only medium screen sizes and above.

```html
<div class="md:break-after-column">
  <!-- ... -->
</div>
```

