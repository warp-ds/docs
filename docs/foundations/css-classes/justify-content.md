> Flexbox & Grid

# Justify Content
Utilities for controlling how flex and grid items are positioned along a container's main axis.

## Quick reference

| Class | Description |
|-------|-------------|
| `justify-start` | `justify-content: flex-start` |
| `justify-center` | `justify-content: center` |
| `justify-end` | `justify-content: flex-end` |
| `justify-between` | `justify-content: space-between` |
| `justify-around` | `justify-content: space-around` |
| `justify-evenly` | `justify-content: space-evenly` |

## Basic usage

### Start
Use `justify-start` to justify items against the start of the container’s main axis:

<example-container>
  <div class="ex-bg--striped ex-bg--fuchsia flex justify-start gap-24 rounded-4">
    <div class="pd-bg-fuchsia-500 ex-box">01</div>
    <div class="pd-bg-fuchsia-500 ex-box">02</div>
    <div class="pd-bg-fuchsia-500 ex-box">03</div>
  </div>
</example-container>

```html{1}
<div class="flex justify-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Center
Use `justify-center` to justify items along the center of the container’s main axis.

<example-container>
  <div class="ex-bg--striped ex-bg--blue flex justify-center gap-24 rounded-4">
    <div class="pd-bg-blue-500 ex-box">01</div>
    <div class="pd-bg-blue-500 ex-box">02</div>
    <div class="pd-bg-blue-500 ex-box">03</div>
  </div>
</example-container>

```html{1}
<div class="flex justify-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### End
Use `justify-end` to justify items against the end of the container’s main axis

<example-container>
  <div class="ex-bg--striped ex-bg--cyan flex justify-end gap-24 rounded-4">
    <div class="pd-bg-cyan-500 ex-box">01</div>
    <div class="pd-bg-cyan-500 ex-box">02</div>
    <div class="pd-bg-cyan-500 ex-box">03</div>
  </div>
</example-container>

```html{1}
<div class="flex justify-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space between
Use `justify-between` to justify items along the container’s main axis such that there is an equal amount of space between each item.

<example-container>
  <div class="ex-bg--striped ex-bg--pink flex justify-between gap-24 rounded-4">
    <div class="pd-bg-pink-500 ex-box">01</div>
    <div class="pd-bg-pink-500 ex-box">02</div>
    <div class="pd-bg-pink-500 ex-box">03</div>
  </div>
</example-container>

```html{1}
<div class="flex justify-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space around
Use `justify-around` to justify items along the container’s main axis such that there is an equal amount of space on each side of each item.

<example-container>
  <div class="ex-bg--striped ex-bg--violet flex justify-around gap-24 rounded-4">
    <div class="pd-bg-violet-500 ex-box">01</div>
    <div class="pd-bg-violet-500 ex-box">02</div>
    <div class="pd-bg-violet-500 ex-box">03</div>
  </div>
</example-container>

```html{1}
<div class="flex justify-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space evenly
Use `justify-evenly` to justify items along the container’s main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `justify-around`

<example-container>
  <div class="ex-bg--striped ex-bg--indigo flex justify-evenly gap-24 rounded-4">
    <div class="pd-bg-indigo-500 ex-box">01</div>
    <div class="pd-bg-indigo-500 ex-box">02</div>
    <div class="pd-bg-indigo-500 ex-box">03</div>
  </div>
</example-container>

```html{1}
<div class="flex justify-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:justify-between` to apply the `justify-between` utility at only medium screen sizes and above.

```html
<div class="flex justify-start md:justify-between">
  <!-- ... -->
</div>
```
