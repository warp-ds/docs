> Borders

# Border Width

Utilities for controlling the border width of an element.

## Quick reference

| Class             | Description                                                  |
|-------------------|--------------------------------------------------------------|
| `border`          | `border-width: 1px`                                          |
| `border-x`        | `border-left-width: 1px`<br/>`border-right-width: 1px`       |
| `border-y`        | `border-top-width: 1px`<br/>`border-bottom-width: 1px`       |
| `border-t`        | `border-top-width: 1px`                                      |
| `border-r`        | `border-right-width: 1px`                                    |
| `border-b`        | `border-bottom-width: 1px`                                   |
| `border-l`        | `border-left-width: 1px`                                     |
| `border-{size}`   | `border-radius: {size}`                                      |
| `border-x-{size}` | `border-left-width: {size}`<br/>`border-right-width: {size}` |
| `border-y-{size}` | `border-top-width: {size}`<br/>`border-bottom-width: {size}` |
| `border-t-{size}` | `border-top-width: {size}`                                   |
| `border-r-{size}` | `border-right-width: {size}`                                 |
| `border-b-{size}` | `border-bottom-width: {size}`                                |
| `border-l-{size}` | `border-left-width: {size}`                                  |

> Available values <br />
> `{size}`: `0`, `2`, `4`, `8` <br />

## Basic usage

### All sides
Use the `border-0`, `border`, `border-2`, `border-4`, or `border-8` utilities to set the border width for all sides of an element.

<example-container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div>border</div>
    <div>border-2</div>
    <div>border-4</div>
    <div>border-8</div>
    <div class="pd-bg-violet-100 pd-border-violet-900 h-80 w-80 border"></div>
    <div class="pd-bg-violet-100 pd-border-violet-900 h-80 w-80 border-2"></div>
    <div class="pd-bg-violet-100 pd-border-violet-900 h-80 w-80 border-4"></div>
    <div class="pd-bg-violet-100 pd-border-violet-900 h-80 w-80 border-8"></div>
  </div>
</example-container>

```html
<div class="border ..."></div>
<div class="border-2 ..."></div>
<div class="border-4 ..."></div>
<div class="border-8 ..."></div>
```

### Individual sides
Use the `border-{side}`, `border-{side}-0`, `border-{side}-2`, `border-{side}-4`, or `border-{side}-8` utilities to set the border width for one side of an element.

<example-container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div>border-t-4</div>
    <div>border-r-4</div>
    <div>border-b-4</div>
    <div>border-l-4</div>
    <div class="pd-bg-indigo-100 pd-border-indigo-900 h-80 w-80 border-t-4"></div>
    <div class="pd-bg-indigo-100 pd-border-indigo-900 h-80 w-80 border-r-4"></div>
    <div class="pd-bg-indigo-100 pd-border-indigo-900 h-80 w-80 border-b-4"></div>
    <div class="pd-bg-indigo-100 pd-border-indigo-900 h-80 w-80 border-l-4"></div>
  </div>
</example-container>

```html
<div class="border-t-4 ..."></div>
<div class="border-r-4 ..."></div>
<div class="border-b-4 ..."></div>
<div class="border-l-4 ..."></div>
```

### Horizontal and vertical sides
Use the `border-{x|y}-{width}` utilities to set the border width on two sides of an element at the same time.

<example-container>
  <div class="grid grid-cols-2 gap-16 justify-items-center">
    <div>border-x-4</div>
    <div>border-y-4</div>
    <div class="pd-bg-blue-100 pd-border-blue-900 h-80 w-80 border-x-4"></div>
    <div class="pd-bg-blue-100 pd-border-blue-900 h-80 w-80 border-y-4"></div>
  </div>
</example-container>

```html
<div class="border-x-4 ..."></div>
<div class="border-y-4 ..."></div>
```

### Arbitrary values
If you need to use a one-off `border-{width}` value, use square brackets to generate a property using any arbitrary width.
This also works with or without an optional side:  
`border-{side}-[{width}] | border-[{width}]`

```html
<div class="border-[66]"></div>
```

## Applying conditionally

### Hover, focus, and other states
You can conditionally apply utility classes in different states using variant modifiers. For example, use `hover:border-t-4` to only apply the `border-t-4` utility on hover.

```html
<div class="border-2 hover:border-t-4"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:border-t-4` to apply the `border-t-4` utility at only medium screen sizes and above.

```html
<div class="border-2 md:border-t-4"></div>
```
