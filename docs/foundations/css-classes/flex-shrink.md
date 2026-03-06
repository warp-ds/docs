> Flexbox & Grid

# Flex Shrink

Utilities for controlling how flex items shrink.

## Quick reference

| Class | Description |
|-------|-------------|
| `shrink` | `flex-shrink: 1` |
| `shrink-0` | `flex-shrink: 0` |

## Basic usage

### Shrink
Use `shrink` to allow a flex item to shrink if needed.

<width-controller>
  <example-container>
    <div class="ex-bg--striped ex-bg--indigo flex gap-24 rounded-8">
      <div class="flex-none pd-bg-indigo-800 ex-box">01</div>
      <div class="w-128 shrink pd-bg-indigo-500 ex-box">02</div>
      <div class="flex-none pd-bg-indigo-800 ex-box">03</div>
    </div>
  </example-container>
</width-controller>

```html
<div class="flex">
  <div class="flex-none ...">01</div>
  <div class="shrink ...">02</div>
  <div class="flex-none ...">03</div>
</div>
```

### Don't shrink
Use `shrink-0` to prevent a flex item from shrinking

<width-controller>
  <example-container>
    <div class="ex-bg--striped ex-bg--pink flex gap-24 rounded-8">
    <div class="flex-1 pd-bg-pink-800 ex-box">01</div>
    <div class="w-128 shrink-0 pd-bg-pink-500 ex-box">02</div>
    <div class="flex-1 pd-bg-pink-800 ex-box">03</div>
    </div>
  </example-container>
</width-controller>

```html
  <div class="flex">
    <div class="flex-1 ...">01</div>
    <div class="shrink-0 w-32 ...">02</div>
    <div class="flex-1 ...">03</div>
  </div>
```

### Arbitrary values
If you need to use a one-off flex-shrink value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="shrink-[2]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:shrink-0` to apply the `shrink-0` utility at only medium screen sizes and above.

```html
<div class="shrink md:shrink-0">
  <!-- ... -->
</div>
```
