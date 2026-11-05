> Layout

# Break Inside

Utilities for controlling how a column or page should break within an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `break-inside-auto` | `break-inside: auto` |
| `break-inside-avoid` | `break-inside: avoid` |
| `break-inside-avoid-page` | `break-inside: avoid-page` |
| `break-inside-avoid-column` | `break-inside: avoid-column` |

## Basic usage

### Setting the break-inside behavior
Use the `break-inside-{value}` utilities to control how a column or page break should behave within an element. For example, use the `break-inside-avoid-column` utility to avoid a column break within an element.

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:break-inside-avoid-column` to apply the `break-inside-avoid-column` utility at only medium screen sizes and above.

```html
<div class="md:break-inside-avoid-column">
  <!-- ... -->
</div>
```

