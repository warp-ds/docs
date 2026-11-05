> Flexbox & Grid

# Place Content

Utilities for controlling how content is justified and aligned at the same time.

## Quick reference

| Class | Description |
|-------|-------------|
| `place-content-center` | `place-content: center` |
| `place-content-start` | `place-content: start` |
| `place-content-end` | `place-content: end` |
| `place-content-between` | `place-content: space-between` |
| `place-content-around` | `place-content: space-around` |
| `place-content-evenly` | `place-content: space-evenly` |

## Basic usage

### Center
Use `place-content-center` to pack items in the center of the block axis.

<example-container>
  <div class="ex-bg--striped ex-bg--blue grid grid-cols-[repeat(2,64px)] gap-24 py-64 place-content-center">
    <div class="pd-bg-blue-500 ex-box">01</div>
    <div class="pd-bg-blue-500 ex-box">02</div>
    <div class="pd-bg-blue-500 ex-box">03</div>
    <div class="pd-bg-blue-500 ex-box">04</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-2 gap-16 place-content-center ...">
  <!-- ... -->
</div>
```

### Start
Use `place-content-start` to pack items against the start of the block axis.

<example-container>
  <div class="ex-bg--striped ex-bg--fuchsia grid grid-cols-[repeat(2,64px)] gap-24 pb-128 place-content-start">
    <div class="pd-bg-fuchsia-500 ex-box">01</div>
    <div class="pd-bg-fuchsia-500 ex-box">02</div>
    <div class="pd-bg-fuchsia-500 ex-box">03</div>
    <div class="pd-bg-fuchsia-500 ex-box">04</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-2 gap-16 place-content-start ...">
  <!-- ... -->
</div>
```

### End
Use `place-content-end` to pack items against the end of the block axis.

<example-container>
  <div class="ex-bg--striped ex-bg--cyan grid grid-cols-[repeat(2,64px)] gap-24 rounded-4 pt-128 place-content-start">
    <div class="pd-bg-cyan-500 ex-box">01</div>
    <div class="pd-bg-cyan-500 ex-box">02</div>
    <div class="pd-bg-cyan-500 ex-box">03</div>
    <div class="pd-bg-cyan-500 ex-box">04</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-2 gap-16 place-content-end ...">
  <!-- ... -->
</div>
```

### Space between
Use `place-content-between` to distribute grid items along the block axis so that there is an equal amount of space between each row on the block axis.

<example-container>
  <div class="ex-bg--striped ex-bg--pink grid grid-cols-[repeat(2,64px)] place-content-between rounded-4">
    <div class="pd-bg-pink-500 ex-box mb-64">01</div>
    <div class="pd-bg-pink-500 ex-box mb-64">02</div>
    <div class="pd-bg-pink-500 ex-box">03</div>
    <div class="pd-bg-pink-500 ex-box">04</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-2 place-content-between ...">
  <!-- ... -->
</div>
```

### Space around
Use `place-content-around` distribute grid items such that there is an equal amount of space around each row on the block axis.

<example-container>
  <div class="ex-bg--striped ex-bg--violet grid grid-cols-[repeat(2,64px)] place-content-around rounded-4">
    <div class="pd-bg-violet-500 ex-box my-16">01</div>
    <div class="pd-bg-violet-500 ex-box my-16">02</div>
    <div class="pd-bg-violet-500 ex-box my-16">03</div>
    <div class="pd-bg-violet-500 ex-box my-16">04</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-2 place-content-around ...">
  <!-- ... -->
</div>
```

### Space evenly
Use `place-content-evenly` to distribute grid items such that they are evenly spaced on the block axis.

<example-container>
  <div class="ex-bg--striped ex-bg--indigo grid grid-cols-[repeat(2,64px)] place-content-evenly rounded-4">
    <div class="pd-bg-indigo-500 ex-box my-32">01</div>
    <div class="pd-bg-indigo-500 ex-box my-32">02</div>
    <div class="pd-bg-indigo-500 ex-box mb-32">03</div>
    <div class="pd-bg-indigo-500 ex-box mb-32">04</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-2 place-content-evenly ...">
  <!-- ... -->
</div>
```

### stretch
Use `place-content-stretch` to stretch grid items along their grid areas on the block axis.

<example-container>
  <div class="ex-bg--striped ex-bg--blue grid grid-cols-2 place-content-stretch gap-24 rounded-4">
    <div class="pd-bg-blue-500 ex-box">01</div>
    <div class="pd-bg-blue-500 ex-box">02</div>
    <div class="pd-bg-blue-500 ex-box">03</div>
    <div class="pd-bg-blue-500 ex-box">04</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-2 place-content-stretch ...">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:place-content-center` to apply the `place-content-center` utility at only medium screen sizes and above.

```html
<div class="grid place-content-start md:place-content-center">
  <!-- ... -->
</div>
```
