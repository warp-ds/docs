> Flexbox & Grid

# Place Self

Utilities for controlling how an individual item is justified and aligned at the same time.

## Quick reference

| Class | Description |
|-------|-------------|
| `place-self-auto` | `place-self: auto` |
| `place-self-start` | `place-self: start` |
| `place-self-end` | `place-self: end` |
| `place-self-center` | `place-self: center` |
| `place-self-stretch` | `place-self: stretch` |

## Basic usage

### Auto
Use `place-self-auto` to align an item based on the value of the container’s `place-items` property.

<example-container>
  <div class="grid grid-cols-3 gap-24 place-content-center">
    <div class="pd-bg-blue-600 ex-box">01</div>
    <div class="pd-bg-blue-500 ex-box">02</div>
    <div class="pd-bg-blue-600 ex-box">03</div>
    <div class="pd-bg-blue-600 ex-box">04</div>
    <div class="pd-bg-blue-600 ex-box">05</div>
    <div class="pd-bg-blue-600 ex-box">06</div>
  </div>
</example-container>

```html{3}
<div class="grid grid-cols-3 gap-24 ...">
  <!-- ... -->
  <div class="place-self-auto ...">02</div>
  <!-- ... -->
</div>
```

### Start
Use `place-self-start` to align an item to the start on both axes.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-fuchsia-600 ex-box h-96">01</div>
    <div class="ex-bg--striped ex-bg--fuchsia grid h-96 rounded tl-4">
      <div class="pd-bg-fuchsia-500 ex-box h-64 place-self-start">02</div>
    </div>
    <div class="pd-bg-fuchsia-600 ex-box h-96">03</div>
    <div class="pd-bg-fuchsia-600 ex-box h-96">04</div>
    <div class="pd-bg-fuchsia-600 ex-box h-96">05</div>
    <div class="pd-bg-fuchsia-600 ex-box h-96">06</div>
  </div>
</example-container>

```html{3}
<div class="grid grid-cols-3 gap-4 ...">
  <!-- ... -->
  <div class="place-self-start ...">02</div>
  <!-- ... -->
</div>
```

### Center
Use `place-self-center` to align an item at the center on both axes.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-cyan-600 ex-box h-96">01</div>
    <div class="ex-bg--striped ex-bg--cyan grid h-96">
      <div class="pd-bg-cyan-500 ex-box h-64 place-self-center">02</div>
    </div>
    <div class="pd-bg-cyan-600 ex-box h-96">03</div>
    <div class="pd-bg-cyan-600 ex-box h-96">04</div>
    <div class="pd-bg-cyan-600 ex-box h-96">05</div>
    <div class="pd-bg-cyan-600 ex-box h-96">06</div>
  </div>
</example-container>

```html{3}
<div class="grid grid-cols-3 gap-16 ...">
  <!-- ... -->
  <div class="place-self-center ...">02</div>
  <!-- ... -->
</div>
```

### End
Use `place-self-end` to align an item to the end on both axes.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-violet-600 ex-box h-96">01</div>
    <div class="ex-bg--striped ex-bg--violet grid h-96 rounded-br-4">
      <div class="pd-bg-violet-500 ex-box h-64 place-self-end">02</div>
    </div>
    <div class="pd-bg-violet-600 ex-box h-96">03</div>
    <div class="pd-bg-violet-600 ex-box h-96">04</div>
    <div class="pd-bg-violet-600 ex-box h-96">05</div>
    <div class="pd-bg-violet-600 ex-box h-96">06</div>
  </div>
</example-container>

```html{3}
<div class="grid grid-cols-3 gap-24 ...">
  <!-- ... -->
  <div class="place-self-center ...">02</div>
  <!-- ... -->
</div>
```

### Stretch
Use `place-self-stretch` to stretch an item on both axes:

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-indigo-600 ex-box h-96">01</div>
    <div class="ex-bg--striped ex-bg--indigo grid h-96">
      <div class="pd-bg-indigo-500 ex-box place-self-stretch">02</div>
    </div>
    <div class="pd-bg-indigo-600 ex-box h-96">03</div>
    <div class="pd-bg-indigo-600 ex-box h-96">04</div>
    <div class="pd-bg-indigo-600 ex-box h-96">05</div>
    <div class="pd-bg-indigo-600 ex-box h-96">06</div>
  </div>
</example-container>

```html{3}
<div class="grid grid-cols-3 gap-24 ...">
  <!-- ... -->
  <div class="place-self-stretch ...">02</div>
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:place-self-end` to apply the `place-self-end` utility at only medium screen sizes and above.

```html
<div class="place-self-start md:place-self-end">
  <!-- ... -->
</div>
```
