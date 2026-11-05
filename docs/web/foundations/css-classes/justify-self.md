> Flexbox & Grid

# Justify Self

Utilities for controlling how an individual grid item is aligned along its inline axis.

## Quick reference

| Class | Description |
|-------|-------------|
| `justify-self-auto` | `justify-self: auto` |
| `justify-self-start` | `justify-self: start` |
| `justify-self-center` | `justify-self: center` |
| `justify-self-end` | `justify-self: end` |
| `justify-self-stretch` | `justify-self: stretch` |

## Basic usage

### Auto
Use `justify-self-auto` to align an item based on the value of the grid’s `justify-items` property.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-purple-600 ex-box">01</div>
    <div class="pd-bg-purple-400 ex-box justify-self-auto">02</div>
    <div class="pd-bg-purple-600 ex-box">03</div>
    <div class="pd-bg-purple-600 ex-box">04</div>
    <div class="pd-bg-purple-600 ex-box">05</div>
    <div class="pd-bg-purple-600 ex-box">06</div>
  </div>
</example-container>

```html{3}
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-auto ...">02</div>
  <!-- ... -->
</div>
```

### Start
Use `justify-self-start` to align a grid item to the start its inline axis.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-cyan-700 ex-box">01</div>
    <div class="ex-bg--striped ex-bg--cyan flex rounded-l-4">
      <div class="w-64 pd-bg-cyan-500 ex-box">02</div>
    </div>
    <div class="pd-bg-cyan-700 ex-box">03</div>
    <div class="pd-bg-cyan-700 ex-box">04</div>
    <div class="pd-bg-cyan-700 ex-box">05</div>
    <div class="pd-bg-cyan-700 ex-box">06</div>
  </div>
</example-container>

```html{3}
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-start ...">02</div>
  <!-- ... -->
</div>
```

### Center
Use `justify-self-center` to align a grid item along the center its inline axis:

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-pink-700 ex-box">01</div>
    <div class="ex-bg--striped ex-bg--pink flex justify-center">
      <div class="w-64 pd-bg-pink-500 ex-box">02</div>
    </div>
    <div class="pd-bg-pink-700 ex-box">03</div>
    <div class="pd-bg-pink-700 ex-box">04</div>
    <div class="pd-bg-pink-700 ex-box">05</div>
    <div class="pd-bg-pink-700 ex-box">06</div>
  </div>
</example-container>

```html{3}
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
</div>
```

### End
Use `justify-self-end` to align a grid item to the end its inline axis:

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-indigo-600 ex-box">01</div>
    <div class="ex-bg--striped ex-bg--indigo flex justify-end rounded-r-4">
      <div class="w-64 pd-bg-indigo-400 ex-box">02</div>
    </div>
    <div class="pd-bg-indigo-600 ex-box">03</div>
    <div class="pd-bg-indigo-600 ex-box">04</div>
    <div class="pd-bg-indigo-600 ex-box">05</div>
    <div class="pd-bg-indigo-600 ex-box">06</div>
  </div>
</example-container>

```html{3}
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
</div>
```

### Stretch
Use `justify-self-stretch` to stretch a grid item to fill the grid area on its inline axis:

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="ex-bg--striped ex-bg--violet flex justify-center rounded-4">
      <div class="w-64 pd-bg-violet-600 ex-box">01</div>
    </div>
    <div class="pd-bg-violet-400 ex-box">02</div>
    <div class="ex-bg--striped ex-bg--violet flex justify-center rounded-4">
      <div class="w-64 pd-bg-violet-600 ex-box">03</div>
    </div>
    <div class="ex-bg--striped ex-bg--violet flex justify-center rounded-4">
      <div class="w-64 pd-bg-violet-600 ex-box">04</div>
    </div>
    <div class="ex-bg--striped ex-bg--violet flex justify-center rounded-4">
      <div class="w-64 pd-bg-violet-600 ex-box">05</div>
    </div>
    <div class="ex-bg--striped ex-bg--violet flex justify-center rounded-4">
      <div class="w-64 pd-bg-violet-600 ex-box">06</div>
    </div>
  </div>
</example-container>

```html{3}
<div class="grid justify-items-start ...">
  <!-- ... -->
  <div class="justify-self-stretch ...">02</div>
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:justify-self-end` to apply the `justify-self-end` utility at only medium screen sizes and above.

```html
<div class="justify-self-start md:justify-self-end">
  <!-- ... -->
</div>
```
