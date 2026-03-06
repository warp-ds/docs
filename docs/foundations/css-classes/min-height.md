> Sizing

# Min-Height

Utilities for setting the minimum height of an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `min-h-0` | `min-height: 0rem` |
| `min-h-1` | `min-height: 0.1rem` |
| `min-h-2` | `min-height: 0.2rem` |
| `min-h-4` | `min-height: 0.4rem` |
| `min-h-6` | `min-height: 0.6rem` |
| `min-h-8` | `min-height: 0.8rem` |
| `min-h-10` | `min-height: 1rem` |
| `min-h-12` | `min-height: 1.2rem` |
| `min-h-14` | `min-height: 1.4rem` |
| `min-h-16` | `min-height: 1.6rem` |
| `min-h-20` | `min-height: 2rem` |
| `min-h-24` | `min-height: 2.4rem` |
| `min-h-28` | `min-height: 2.8rem` |
| `min-h-32` | `min-height: 3.2rem` |
| `min-h-40` | `min-height: 4rem` |
| `min-h-44` | `min-height: 4.4rem` |
| `min-h-48` | `min-height: 4.8rem` |
| `min-h-56` | `min-height: 5.6rem` |
| `min-h-64` | `min-height: 6.4rem` |
| `min-h-80` | `min-height: 8rem` |
| `min-h-96` | `min-height: 9.6rem` |
| `min-h-112` | `min-height: 11.2rem` |
| `min-h-128` | `min-height: 12.8rem` |
| `min-h-144` | `min-height: 14.4rem` |
| `min-h-full` | `min-height: 100%` |
| `min-h-min` | `min-height: min-content` |
| `min-h-max` | `min-height: max-content` |
| `min-h-fit` | `min-height: fit-content` |

## Basic usage

### Setting the minimum height
Set the minimum height of an element using the `min-h-0`, `min-h-full`, or `min-h-screen` utilities.

```html
<div class="h-48">
  <div class="h-24 min-h-full">
    <!-- ... -->
  </div>
</div>
```

### Arbitrary values
If you need to use a one-off `min-height` value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="min-h-[50]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:min-h-full` to apply the `min-h-full` utility at only medium screen sizes and above.

```html
<div class="h-24 min-h-0 md:min-h-full">
  <!-- ... -->
</div>
```
