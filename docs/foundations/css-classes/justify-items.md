> Flexbox & Grid

# Justify items

Utilities for controlling how grid items are aligned along their inline axis.

## Quick reference

| Class | Description |
|-------|-------------|
| `justify-items-start` | `justify-items: start` |
| `justify-items-center` | `justify-items: center` |
| `justify-items-end` | `justify-items: end` |
| `justify-items-stretch` | `justify-items: stretch` |

## Basic usage

### Start
Use `justify-items-start` to justify grid items against the start of their inline axis.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="ex-bg--striped ex-bg--blue rounded-l-4">
      <div class="w-64 pd-bg-blue-500 ex-box">01</div>
    </div>
    <div class="ex-bg--striped ex-bg--blue rounded-l-4">
      <div class="w-64 pd-bg-blue-500 ex-box">02</div>
    </div>
    <div class="ex-bg--striped ex-bg--blue rounded-l-4">
      <div class="w-64 pd-bg-blue-500 ex-box">03</div>
    </div>
    <div class="ex-bg--striped ex-bg--blue rounded-l-4">
      <div class="w-64 pd-bg-blue-500 ex-box">04</div>
    </div>
    <div class="ex-bg--striped ex-bg--blue rounded-l-4">
      <div class="w-64 pd-bg-blue-500 ex-box">05</div>
    </div>
    <div class="ex-bg--striped ex-bg--blue rounded-l-4">
      <div class="w-64 pd-bg-blue-500 ex-box">06</div>
    </div>
  </div>
</example-container>

```html{1}
<div class="grid justify-items-start ...">
  <div>01</div>
  <div>02</div>
  ...
  <div>06</div>
</div>
```

### End
Use `justify-items-end` to justify grid items against the end of their inline axis.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="flex justify-end ex-bg--striped ex-bg--cyan rounded-r-4">
      <div class="w-64 pd-bg-cyan-500 ex-box">01</div>
    </div>
    <div class="flex justify-end ex-bg--striped ex-bg--cyan rounded-r-4">
      <div class="w-64 pd-bg-cyan-500 ex-box">02</div>
    </div>
    <div class="flex justify-end ex-bg--striped ex-bg--cyan rounded-r-4">
      <div class="w-64 pd-bg-cyan-500 ex-box">03</div>
    </div>
    <div class="flex justify-end ex-bg--striped ex-bg--cyan rounded-r-4">
      <div class="w-64 pd-bg-cyan-500 ex-box">04</div>
    </div>
    <div class="flex justify-end ex-bg--striped ex-bg--cyan rounded-r-4">
      <div class="w-64 pd-bg-cyan-500 ex-box">05</div>
    </div>
    <div class="flex justify-end ex-bg--striped ex-bg--cyan rounded-r-4">
      <div class="w-64 pd-bg-cyan-500 ex-box">06</div>
    </div>
  </div>
</example-container>

```html{1}
<div class="grid justify-items-end ...">
  <div>01</div>
  <div>02</div>
  ...
  <div>06</div>
</div>
```

### Center
Use `justify-items-center` to justify grid items along their inline axis.

<example-container>
  <div class="grid grid-cols-3 gap-24">
    <div class="flex justify-center ex-bg--striped ex-bg--pink rounded-r-4">
      <div class="w-64 pd-bg-pink-500 ex-box">01</div>
    </div>
    <div class="flex justify-center ex-bg--striped ex-bg--pink rounded-r-4">
      <div class="w-64 pd-bg-pink-500 ex-box">02</div>
    </div>
    <div class="flex justify-center ex-bg--striped ex-bg--pink rounded-r-4">
      <div class="w-64 pd-bg-pink-500 ex-box">03</div>
    </div>
    <div class="flex justify-center ex-bg--striped ex-bg--pink rounded-r-4">
      <div class="w-64 pd-bg-pink-500 ex-box">04</div>
    </div>
    <div class="flex justify-center ex-bg--striped ex-bg--pink rounded-r-4">
      <div class="w-64 pd-bg-pink-500 ex-box">05</div>
    </div>
    <div class="flex justify-center ex-bg--striped ex-bg--pink rounded-r-4">
      <div class="w-64 pd-bg-pink-500 ex-box">06</div>
    </div>
  </div>
</example-container>

```html{1}
<div class="grid justify-items-center ...">
  <div>01</div>
  <div>02</div>
  ...
  <div>06</div>
</div>
```

### Stretch
Use `justify-items-stretch` to stretch items along their inline axis.

<example-container>
  <div class="grid grid-cols-3 gap-24 justify-items-stretch">
    <div class="pd-bg-indigo-500 ex-box">01</div>
    <div class="pd-bg-indigo-500 ex-box">02</div>
    <div class="pd-bg-indigo-500 ex-box">03</div>
    <div class="pd-bg-indigo-500 ex-box">04</div>
    <div class="pd-bg-indigo-500 ex-box">05</div>
    <div class="pd-bg-indigo-500 ex-box">06</div>
  </div>
</example-container>

```html{1}
<div class="grid grid-cols-3 justify-items-stretch ...">
  <div>01</div>
  <div>02</div>
  ...
  <div>06</div>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:justify-items-center` to apply the `justify-items-center` utility at only medium screen sizes and above.

```html{1}
<div class="grid justify-items-start md:justify-items-center">
  <!-- ... -->
</div>
```