> Flexbox & Grid

# Align Content
Utilities for controlling how rows are positioned in multi-row flex and grid containers.

## Quick reference

| Class | Description |
|-------|-------------|
| `content-start` | `align-content: flex-start` |
| `content-center` | `align-content: center` |
| `content-end` | `align-content: flex-end` |
| `content-between` | `align-content: space-between` |
| `content-around` | `align-content: space-around` |
| `content-evenly` | `align-content: space-evenly` |

## Basic usage

### Start
Use `content-start` to pack rows in a container against the start of the cross axis.

<example-container>
  <div class="ex-bg--striped ex-bg--purple grid grid-cols-3 gap-24 rounded-4 pb-64 content-start">
    <div class="pd-bg-purple-500 ex-box">01</div>
    <div class="pd-bg-purple-500 ex-box">02</div>
    <div class="pd-bg-purple-500 ex-box">03</div>
    <div class="pd-bg-purple-500 ex-box">04</div>
    <div class="pd-bg-purple-500 ex-box">05</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-24 content-start ...">
  <!-- ... -->
</div>
```

### Center
Use `content-center` to pack rows in a container in the center of the cross axis.

<example-container>
  <div class="ex-bg--striped ex-bg--blue grid grid-cols-3 gap-24 rounded-4 py-32 content-center">
    <div class="pd-bg-blue-500 ex-box">01</div>
    <div class="pd-bg-blue-500 ex-box">02</div>
    <div class="pd-bg-blue-500 ex-box">03</div>
    <div class="pd-bg-blue-500 ex-box">04</div>
    <div class="pd-bg-blue-500 ex-box">05</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-24 content-center ...">
  <!-- ... -->
</div>
```

### End
Use `content-end` to pack rows in a container against the end of the cross axis.

<example-container>
  <div class="ex-bg--striped ex-bg--pink grid grid-cols-3 gap-24 rounded-4 pt-64 content-start">
    <div class="pd-bg-pink-500 ex-box">01</div>
    <div class="pd-bg-pink-500 ex-box">02</div>
    <div class="pd-bg-pink-500 ex-box">03</div>
    <div class="pd-bg-pink-500 ex-box">04</div>
    <div class="pd-bg-pink-500 ex-box">05</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-16 content-end ...">
  <!-- ... -->
</div>
```

### Space between
Use `content-between` to distribute rows in a container such that there is an equal amount of space between each line:

<example-container>
  <div class="ex-bg--striped ex-bg--violet grid grid-cols-3 gap-24 rounded-4 content-start">
    <div class="pd-bg-violet-500 ex-box mb-64">01</div>
    <div class="pd-bg-violet-500 ex-box mb-64">02</div>
    <div class="pd-bg-violet-500 ex-box mb-64">03</div>
    <div class="pd-bg-violet-500 ex-box">04</div>
    <div class="pd-bg-violet-500 ex-box">05</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-24 content-between ...">
  <!-- ... -->
</div>
```

### Space around
Use `content-around` to distribute rows in a container such that there is an equal amount of space around each line:

<example-container>
  <div class="ex-bg--striped ex-bg--cyan grid grid-cols-3 gap-x-24 content-start">
    <div class="pd-bg-cyan-500 ex-box my-32">01</div>
    <div class="pd-bg-cyan-500 ex-box my-32">02</div>
    <div class="pd-bg-cyan-500 ex-box my-32">03</div>
    <div class="pd-bg-cyan-500 ex-box my-32">04</div>
    <div class="pd-bg-cyan-500 ex-box my-32">05</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-x-16 content-around ...">
  <!-- ... -->
</div>
```

### Space evenly
Use `content-evenly` to distribute rows in a container such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `content-around`.

<example-container>
  <div class="ex-bg--striped ex-bg--indigo grid grid-cols-3 gap-x-24 content-start">
    <div class="pd-bg-indigo-500 ex-box my-24">01</div>
    <div class="pd-bg-indigo-500 ex-box my-24">02</div>
    <div class="pd-bg-indigo-500 ex-box my-24">03</div>
    <div class="pd-bg-indigo-500 ex-box mb-24">04</div>
    <div class="pd-bg-indigo-500 ex-box mb-24">05</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-x-16 content-evenly ...">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:content-around` to apply the `content-around` utility at only medium screen sizes and above.

```html
<div class="grid content-start md:content-around">
  <!-- ... -->
</div>
```
