> Flexbox & Grid

# Align Items

Utilities for controlling how flex and grid items are positioned along a container's cross axis.

## Quick reference

| Class | Description |
|-------|-------------|
| `items-baseline` | `align-items: baseline` |
| `items-stretch` | `align-items: stretch` |
| `items-start` | `align-items: flex-start` |
| `items-center` | `align-items: center` |
| `items-end` | `align-items: flex-end` |

## Basic usage

### Stretch
Use `items-stretch` to stretch items to fill the container’s cross axis.

<example-container>
  <div class="ex-bg--striped ex-bg--purple grid grid-cols-3 items-stretch gap-24 rounded-4">
    <div class="py-16 pd-bg-purple-500 ex-box">01</div>
    <div class="py-64 pd-bg-purple-500 ex-box">02</div>
    <div class="py-32 pd-bg-purple-500 ex-box">03</div>
  </div>
</example-container>

```html
<div class="flex items-stretch ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

### Start
Use `items-start` to align items to the start of the container’s cross axis.

<example-container>
  <div class="ex-bg--striped ex-bg--violet grid grid-cols-3 items-start gap-24 rounded-4">
    <div class="py-16 pd-bg-violet-500 ex-box">01</div>
    <div class="py-64 pd-bg-violet-500 ex-box">02</div>
    <div class="py-32 pd-bg-violet-500 ex-box">03</div>
  </div>
</example-container>

```html
<div class="flex items-start ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

### Center
Use `items-center` to align items along the center of the container’s cross axis.

<example-container>
  <div class="ex-bg--striped ex-bg--pink grid grid-cols-3 items-center gap-24 rounded-4">
    <div class="py-16 pd-bg-pink-500 ex-box">01</div>
    <div class="py-64 pd-bg-pink-500 ex-box">02</div>
    <div class="py-32 pd-bg-pink-500 ex-box">03</div>
  </div>
</example-container>

```html
<div class="flex items-center ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

### End
Use `items-end` to align items to the end of the container’s cross axis.

<example-container>
  <div class="ex-bg--striped ex-bg--indigo grid grid-cols-3 items-end gap-24 rounded-4">
    <div class="py-16 pd-bg-indigo-500 ex-box">01</div>
    <div class="py-64 pd-bg-indigo-500 ex-box">02</div>
    <div class="py-32 pd-bg-indigo-500 ex-box">03</div>
  </div>
</example-container>

```html
<div class="flex items-end ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

### Baseline
Use `items-baseline` to align items along the container’s cross axis such that all of their baselines align.

<example-container>
  <div class="ex-bg--striped ex-bg--blue grid grid-cols-3 items-baseline gap-24 rounded-4">
    <div class="pt-8 pb-24 pd-bg-blue-500 ex-box">01</div>
    <div class="pt-32 pb-64 pd-bg-blue-500 ex-box">02</div>
    <div class="pt-48 pb-16 pd-bg-blue-500 ex-box">03</div>
  </div>
</example-container>

```html
<div class="flex items-baseline ...">
  <div class="pt-8 pb-24">01</div>
  <div class="pt-32 pb-64">02</div>
  <div class="pt-48 pb-16">03</div>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:items-center` to apply the `items-center` utility at only medium screen sizes and above.

```html
<div class="flex items-stretch md:items-center">
  <!-- ... -->
</div>
```
