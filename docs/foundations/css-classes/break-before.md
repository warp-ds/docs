> Layout

# Break Before

Utilities for controlling how a column or page should break before an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `break-before-auto` | `break-before: auto` |
| `break-before-avoid` | `break-before: avoid` |
| `break-before-all` | `break-before: all` |
| `break-before-avoid-page` | `break-before: avoid-page` |
| `break-before-page` | `break-before: page` |
| `break-before-left` | `break-before: left` |
| `break-before-right` | `break-before: right` |
| `break-before-column` | `break-before: column` |

## Basic usage

### Setting the break-before behavior
Use the `break-before-{value}` utilities to control how a column or page break should behave before an element. For example, use the `break-before-column` utility to force a column break before an element.

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-before-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:break-before-column` to apply the `break-before-column` utility at only medium screen sizes and above.

```html
<div class="md:break-before-column">
  <!-- ... -->
</div>
```

