> Sizing

# Min-Width

Utilities for setting the minimum width of an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `min-w-0` | `min-width: 0rem` |
| `min-w-1` | `min-width: 0.1rem` |
| `min-w-2` | `min-width: 0.2rem` |
| `min-w-4` | `min-width: 0.4rem` |
| `min-w-6` | `min-width: 0.6rem` |
| `min-w-8` | `min-width: 0.8rem` |
| `min-w-10` | `min-width: 1rem` |
| `min-w-12` | `min-width: 1.2rem` |
| `min-w-14` | `min-width: 1.4rem` |
| `min-w-16` | `min-width: 1.6rem` |
| `min-w-20` | `min-width: 2rem` |
| `min-w-24` | `min-width: 2.4rem` |
| `min-w-28` | `min-width: 2.8rem` |
| `min-w-32` | `min-width: 3.2rem` |
| `min-w-40` | `min-width: 4rem` |
| `min-w-44` | `min-width: 4.4rem` |
| `min-w-48` | `min-width: 4.8rem` |
| `min-w-56` | `min-width: 5.6rem` |
| `min-w-64` | `min-width: 6.4rem` |
| `min-w-80` | `min-width: 8rem` |
| `min-w-96` | `min-width: 9.6rem` |
| `min-w-112` | `min-width: 11.2rem` |
| `min-w-128` | `min-width: 12.8rem` |
| `min-w-144` | `min-width: 14.4rem` |
| `min-w-full` | `min-width: 100%` |
| `min-w-min` | `min-width: min-content` |
| `min-w-max` | `min-width: max-content` |
| `min-w-fit` | `min-width: fit-content` |

## Basic usage

### Setting the minimum width
Set the minimum width of an element using the `min-w-{width}` utilities.

```html
<span class="min-w-full ...">
  <!-- ... -->
</span>
```

### Arbitrary values
If you need to use a one-off `min-width` value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="min-w-[50]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:min-w-0` to apply the `min-w-0` utility at only medium screen sizes and above.

```html
<div class="w-24 min-w-full md:min-w-0">
  <!-- ... -->
</div>
```
