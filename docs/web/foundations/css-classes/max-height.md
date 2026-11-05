> Sizing

# Max-Height
Utilities for setting the maximum height of an element.

## Quick reference

| Class               | Description               |
|---------------------|---------------------------|
| `max-h-full`        | `max-height: 100%`        |
| `max-h-screen`      | `max-height: 100vh`       |
| `max-h-min`         | `max-height: min-content` |
| `max-h-max`         | `max-height: max-content` |
| `max-h-fit`         | `max-height: fit-content` |
| `max-h-{size}`      | `max-height: {size}`      |
| `max-h-{fraction}`  | `max-height: {fraction}`  |

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />
> `{fraction}`: _Any fraction is valid - e.g. `1/5`_

## Basic usage

### Setting the maximum height
Set the maximum height of an element using the `max-h-full` or `max-h-screen` utilities.

```html
<div class="h-24 ...">
  <div class="h-48 max-h-full ...">
    <!-- ... -->
  </div>
</div>
```

### Arbitrary values
If you need to use a one-off max-height value, you can use square brackets to generate a property using any arbitrary value.

```html
<div class="max-h-[32]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:max-h-screen` to apply the `max-h-screen` utility at only medium screen sizes and above.

```html
<div class="h-48 max-h-full md:max-h-screen">
  <!-- ... -->
</div>
```
