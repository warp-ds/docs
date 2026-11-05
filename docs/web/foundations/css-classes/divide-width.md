> Borders

# Divide Width

Utilities for controlling the border width between elements.

## Quick reference

| Class                             | Description                                                      |
|-----------------------------------|------------------------------------------------------------------|
| `divide-x` > * + *                | `border-right-width: 1px`<br />`border-left-width: 1px`          |
| `divide-y` > * + *                | `border-top-width: 1px`<br />`border-bottom-width: 1px`          |
| `divide-x-{size}` > * + *         | `border-right-width: {size}`<br />`border-left-width: {size}`    |
| `divide-y-{size}` > * + *         | `border-top-width: {size}`<br />`border-bottom-width: {size}`    |
| `divide-x-reverse` > * + *        | Flips the borders to work with flex-row-reverse                  |
| `divide-y-reverse` > * + *        | Flips the borders to work with flex-col-reverse                  |

> Available values<br />
`{sizes}` : `0`, `2`, `4`, `8`

## Basic usage

### Add borders between horizontal children
Add borders between horizontal elements using the `divide-x-{width}` utilities.

<example-container>
  <div class="flex justify-items-stretch pd-bg-blue-100 s-divide-primary rounded-8 divide-x-4 w-full pd-shadow-lg">
    <div class="p-24 flex-1 text-center ex-font-dark">01</div>
    <div class="p-24 flex-1 text-center ex-font-dark">02</div>
    <div class="p-24 flex-1 text-center ex-font-dark">03</div>
  </div>
</example-container>

```html {1}
<div class="divide-x-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Add borders between stacked children
Add borders between stacked elements using the `divide-y-{width}` utilities.

<example-container>
  <div class="pd-bg-blue-100 s-divide-primary rounded-8 divide-y w-full max-w-[300] mx-auto pd-shadow-lg">
    <div class="p-24 text-center ex-font-dark">01</div>
    <div class="p-24 text-center ex-font-dark">02</div>
    <div class="p-24 text-center ex-font-dark">03</div>
  </div>
</example-container>

```html {1}
<div class="divide-y ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Reversing children order
If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`), use the `divide-x-reverse` or `divide-y-reverse` utilities to ensure the border is added to the correct side of each element.

<example-container>
  <div class="flex flex-col-reverse pd-bg-blue-100 s-divide-primary rounded-8 divide-y divide-y-reverse w-full max-w-[300] pd-shadow-lg mx-auto">
    <div class="p-24 text-center ex-font-dark">01</div>
    <div class="p-24 text-center ex-font-dark">02</div>
    <div class="p-24 text-center ex-font-dark">03</div>
  </div>
</example-container>

```html {1}
<div class="flex flex-col-reverse divide-y divide-y-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Arbitrary values
If you need to use a one-off `divide-{width}` value, use square brackets to generate a property using any arbitrary width.
This works with or without an optional, but recommended, direction:  
`divide-{x|y}-[{width}] | divide-[{width}]`

```html
<div class="divide-x-[66]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Hover, focus, and other states
You can conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:divide-y-8` to only apply the `divide-y-8` utility on hover.

```html
<div class="divide-y hover:divide-y-8 ...">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:divide-y-8` to apply the `divide-y-8` utility at only medium screen sizes and above.

```html
<div class="divide-y md:divide-y-8 ...">
  <!-- ... -->
</div>
```