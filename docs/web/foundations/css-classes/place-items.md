> Flexbox & Grid

# Place Items

Utilities for controlling how items are justified and aligned at the same time.

## Quick reference

| Class | Description |
|-------|-------------|
| `place-items-start` | `place-items: start` |
| `place-items-end` | `place-items: end` |
| `place-items-center` | `place-items: center` |
| `place-items-stretch` | `place-items: stretch` |

## Basic usage

### Start
Use `place-items-start` to place grid items on the start of their grid areas on both axes.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="ex-bg--striped ex-bg--fuchsia h-96 rounded-tl-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">01</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 rounded-tl-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">02</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 rounded-tl-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">03</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 rounded-tl-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">04</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 rounded-tl-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">05</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 rounded-tl-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">06</div>
    </div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-24 place-items-start ...">
  <!-- ... -->
</div>
```

### End
Use `place-items-end` to place grid items on the end of their grid areas on both axes.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-end rounded-br-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">01</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-end rounded-br-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">02</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-end rounded-br-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">03</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-end rounded-br-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">04</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-end rounded-br-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">05</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-end rounded-br-4">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">06</div>
    </div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-24 place-items-end ...">
  <!-- ... -->
</div>
```

### Center
Use `place-items-center` to place grid items in the center of their grid areas on both axes.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-center">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">01</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-center">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">02</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-center">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">03</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-center">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">04</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-center">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">05</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-center">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">06</div>
    </div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-24 place-items-center ...">
  <!-- ... -->
</div>
```

### Stretch
Use `place-items-stretch` to stretch items along their grid areas on both axes.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-stretch">
      <div class="pd-bg-fuchsia-500 ex-box">01</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-stretch">
      <div class="pd-bg-fuchsia-500 ex-box">02</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-stretch">
      <div class="pd-bg-fuchsia-500 ex-box">03</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-stretch">
      <div class="pd-bg-fuchsia-500 ex-box">04</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-stretch">
      <div class="pd-bg-fuchsia-500 ex-box">05</div>
    </div>
    <div class="ex-bg--striped ex-bg--fuchsia h-96 grid place-items-stretch">
      <div class="pd-bg-fuchsia-500 ex-box">06</div>
    </div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 gap-24 place-items-stretch ...">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:place-items-center` to apply the `place-items-center` utility at only medium screen sizes and above.

```html
<div class="grid place-items-start md:place-items-center">
  <!-- ... -->
</div>
```
