> Interactivity

# Scroll Behavior

Utilities for controlling the scroll behavior of an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `scroll-auto` | `scroll-behavior: auto` |
| `scroll-smooth` | `scroll-behavior: smooth` |

## Basic usage

### Adding smooth scrolling
Use the `scroll-smooth` utilities to enable smooth scrolling within an element.

```html
<html class="scroll-smooth">
  <!-- ... -->
</html>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:scroll-auto` to only apply the `scroll-auto` utility on hover.

```html
<html class="scroll-smooth hover:scroll-auto">
  <!-- ... -->
</html>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:scroll-auto` to apply the `scroll-auto` utility at only medium screen sizes and above.

```html
<html class="scroll-smooth md:scroll-auto">
  <!-- ... -->
</html>
```
