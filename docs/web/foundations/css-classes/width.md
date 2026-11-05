> Sizing

# Width
Utilities for setting the width of an element.

## Quick reference

| Class          | Description          |
|----------------|----------------------|
| `w-auto`       | `width: auto`        |
| `w-full`       | `width: 100%`        |
| `w-screen`     | `width: 100vw`       |
| `w-min`        | `width: min-content` |
| `w-max`        | `width: max-content` |
| `w-fit`        | `width: fit-content` |
| `w-{size}`     | `width: {size}`      |
| `w-{fraction}` | `width: {fraction}`  |

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />
> `{fraction}`: _Any fraction is valid - e.g. `1/5`_

## Basic usage

### Fixed widths
Use `w-{number}` to set an element to a fixed width. Example `w-32` = 3.2rem = 32px.

<example-container class="flex justify-center">
  <div class="space-y-16">
    <div class="w-128 h-32 mb-16 pd-bg-blue-500 rounded"></div>
    <div class="w-64 h-32 mb-16 pd-bg-blue-500 rounded"></div>
    <div class="w-32 h-32 mb-16 pd-bg-blue-500 rounded"></div>
    <div class="w-16 h-32 mb-16 pd-bg-blue-500 rounded"></div>
    <div class="w-8 h-32 mb-16 pd-bg-blue-500 rounded"></div>
    <div class="w-4 h-32 mb-16 pd-bg-blue-500 rounded"></div>
    <div class="w-2 h-32 mb-16 pd-bg-blue-500 rounded"></div>
  </div>
</example-container>

```html
  <div class="w-128 ... "></div>
  <div class="w-64 ... "></div>
  <div class="w-32 ... "></div>
  <div class="w-16 ... "></div>
  <div class="w-8 ... "></div>
  <div class="w-4 ... "></div>
  <div class="w-2 ... "></div>
```

### Percentage widths
Use `w-{fraction}` or `w-full` to set an element to a percentage based width.

<example-container>
  <div class="flex gap-16">
    <div class="w-1/2 h-32 mb-16 pd-bg-violet-500 ex-box">w-1/2</div>
    <div class="w-1/2 h-32 mb-16 pd-bg-violet-500 ex-box">w-1/2</div>
  </div>
  <div class="flex gap-16">
    <div class="w-2/5 h-32 mb-16 pd-bg-violet-500 ex-box">w-2/5</div>
    <div class="w-3/5 h-32 mb-16 pd-bg-violet-500 ex-box">w-3/5</div>
  </div>
  <div class="flex gap-16">
    <div class="w-1/3 h-32 mb-16 pd-bg-violet-500 ex-box">w-1/3</div>
    <div class="w-2/3 h-32 mb-16 pd-bg-violet-500 ex-box">w-2/3</div>
  </div>
  <div class="flex gap-16">
    <div class="w-1/4 h-32 mb-16 pd-bg-violet-500 ex-box">w-1/4</div>
    <div class="w-3/4 h-32 mb-16 pd-bg-violet-500 ex-box">w-3/4</div>
  </div>
  <div class="flex gap-16">
    <div class="w-1/5 h-32 mb-16 pd-bg-violet-500 ex-box">w-1/5</div>
    <div class="w-4/5 h-32 mb-16 pd-bg-violet-500 ex-box">w-4/5</div>
  </div>
  <div class="flex gap-16">
    <div class="w-1/6 h-32 mb-16 pd-bg-violet-500 ex-box">w-1/6</div>
    <div class="w-5/6 h-32 mb-16 pd-bg-violet-500 ex-box">w-5/6</div>
  </div>
    <div class="flex gap-16">
    <div class="w-full h-32 mb-16 pd-bg-violet-500 ex-box">w-full</div>
  </div>
</example-container>

```html
<div class="flex ...">
  <div class="w-1/2 ...">w-1/2</div>
  <div class="w-1/2 ...">w-1/2</div>
</div>
<div class="flex ...">
  <div class="w-2/5 ...">w-2/5</div>
  <div class="w-3/5 ...">w-3/5</div>
</div>
<div class="flex ...">
  <div class="w-1/3 ...">w-1/3</div>
  <div class="w-2/3 ...">w-2/3</div>
</div>
<div class="flex ...">
  <div class="w-1/4 ...">w-1/4</div>
  <div class="w-3/4 ...">w-3/4</div>
</div>
<div class="flex ...">
  <div class="w-1/5 ...">w-1/5</div>
  <div class="w-4/5 ...">w-4/5</div>
</div>
<div class="flex ...">
  <div class="w-1/6 ...">w-1/6</div>
  <div class="w-5/6 ...">w-5/6</div>
</div>
  <div class="flex ...">
  <div class="w-full ...">w-full</div>
</div>
```

### Viewport width
Use `w-screen` to make an element span the entire width of the viewport.

```html
<div class="w-screen">
  <!-- ... -->
</div>
```

### Resetting the width
The `w-auto` utility can be useful if you need to remove an element’s assigned width under a specific condition, like at a particular breakpoint:

```html
<div class="w-full md:w-auto">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off width value, use square brackets to generate a property using any arbitrary value. Example: `w-[256]` generates width:25.6rem = 256px in most cases.

```html
<div class="w-[256]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:w-full` to apply the `w-full` utility at only medium screen sizes and above.

```html
<div class="w-1/2 md:w-full">
  <!-- ... -->
</div>
```
