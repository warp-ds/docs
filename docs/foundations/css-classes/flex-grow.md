> Flexbox & Grid

# Flex Grow

Utilities for controlling how flex items grow.

## Quick reference

| Class | Description |
|-------|-------------|
| `grow` | `flex-grow: 1` |
| `grow-0` | `flex-grow: 0` |

## Basic usage

### Grow
Use `grow` to allow a flex item to grow to fill any available space.

<width-controller>
  <example-container>
    <div class="ex-bg--striped ex-bg--indigo flex gap-24 rounded-8">
      <div class="flex-none pd-bg-indigo-800 ex-box">01</div>
      <div class="grow pd-bg-indigo-500 ex-box">02</div>
      <div class="flex-none pd-bg-indigo-800 ex-box">03</div>
    </div>
  </example-container>
</width-controller>

```html
<div class="flex">
  <div class="flex-none ...">01</div>
  <div class="grow ...">02</div>
  <div class="flex-none ...">03</div>
</div>
```

### Do not grow
Use `grow-0` to prevent a flex item from growing

<width-controller>
  <example-container>
    <div class="ex-bg--striped ex-bg--pink flex gap-24 rounded-8">
      <div class="grow pd-bg-pink-800 ex-box">01</div>
      <div class="grow-0 flex-1 pd-bg-pink-500 ex-box">02</div>
      <div class="grow pd-bg-pink-800 ex-box">03</div>
    </div>
  </example-container>
</width-controller>

```html
<div class="flex">
  <div class="grow ...">01</div>
  <div class="grow-0 ...">02</div>
  <div class="grow ...">03</div>
</div>
```

### Arbitrary values
If you need to use a one-off flex-grow value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="grow-[2]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grow-0` to apply the `grow-0` utility at only medium screen sizes and above.

```html
<div class="grow md:grow-0">
  <!-- ... -->
</div>
```
