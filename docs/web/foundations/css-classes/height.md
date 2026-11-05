> Sizing

# Height

Utilities for setting the height of an element.

## Quick reference

| Class          | Description           |
|----------------|-----------------------|
| `h-auto`       | `height: auto`        |
| `h-full`       | `height: 100%`        |
| `h-screen`     | `height: 100vw`       |
| `h-min`        | `height: min-content` |
| `h-max`        | `height: max-content` |
| `h-fit`        | `height: fit-content` |
| `h-{size}`     | `height: {size}`      |
| `h-{fraction}` | `height: {fraction}`  |

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />
> `{fraction}`: _Any fraction is valid - e.g. `1/5`_

## Basic usage

### Fixed heights
Use `h-{number}` to set an element to a fixed height. Example `h-16` = 1.6rem = 16px.

<example-container class="flex justify-center items-end gap-16">
  <div class="h-128 w-32 pd-bg-blue-500 rounded"></div>
  <div class="h-64 w-32 pd-bg-blue-500 rounded"></div>
  <div class="h-32 w-32 pd-bg-blue-500 rounded"></div>
  <div class="h-16 w-32 pd-bg-blue-500 rounded"></div>
  <div class="h-8 w-32 pd-bg-blue-500 rounded"></div>
  <div class="h-4 w-32 pd-bg-blue-500 rounded"></div>
  <div class="h-2 w-32 pd-bg-blue-500 rounded"></div>
</example-container>

```html
  <div class="h-128 ... "></div>
  <div class="h-64 ... "></div>
  <div class="h-32 ... "></div>
  <div class="h-16 ... "></div>
  <div class="h-8 ... "></div>
  <div class="h-4 ... "></div>
  <div class="h-2 ... "></div>
```

### Full height
Use `h-full` to set an element’s height to 100% of its parent, as long as the parent has a defined height.

```html
<div class="h-48">
  <div class="h-full ...">
    <!-- This element will have a height of `12rem` (h-48) -->
  </div>
</div>
```

### Viewport height

Use `h-screen` to make an element span the entire height of the viewport.

```html
<div class="h-screen">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off height value, use square brackets to generate a property using any arbitrary value. Example: `h-[100]` generates `height:10rem` = 100px.

```html
<div class="h-[100]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:h-full` to apply the `h-full` utility at only medium screen sizes and above.

```html
<div class="h-8 md:h-full">
  <!-- ... -->
</div>
```
