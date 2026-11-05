> Layout

# Top / Right / Bottom / Left

Utilities for controlling the placement of positioned elements.

## Quick reference

| Class            | Description                                                            |
|------------------|------------------------------------------------------------------------|
| `top-a`          | `top: auto`                                                            |
| `right-a`        | `right: auto`                                                          |
| `bottom-a`       | `bottom: auto`                                                         |
| `left-a`         | `left: auto`                                                           |
| `top-{size}`     | `top: {size}`                                                          |
| `right-{size}`   | `right: {size}`                                                        |
| `bottom-{size}`  | `bottom: {size}`                                                       |
| `left-{size}`    | `left: {size}`                                                         |
| `inset-{size}`   | `top: {size}`<br>`right: {size}`<br>`bottom: {size}`<br>`left: {size}` |
| `inset-x-{size}` | `right: {size}`<br>`left: {size}`                                      |
| `inset-y-{size}` | `top: {size}`<br>`bottom: {size}`                                      |

<!--
 !TODO: Does this thing support: Full?, Fractions? other?
-->

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />

## Basic usage

### Placing a positioned element
Use the `{top|right|bottom|left|inset}-{size}` utilities to set the horizontal or vertical position of [positioned element](/web/foundations/css-classes/position).

<example-container>
  <div class="grid grid-cols-3 gap-16">
    <div class="relative ex-bg--striped ex-bg--purple aspect-2/1 rounded-8">
      <div class="absolute left-0 top-0 h-32 w-32 ex-box rounded-8 pd-bg-violet-600">01</div>
    </div>
    <div class="relative ex-bg--striped ex-bg--purple aspect-2/1 rounded-8">
      <div class="absolute top-0 inset-x-0 h-32 ex-box rounded-8 pd-bg-violet-600">02</div>
    </div>
    <div class="relative ex-bg--striped ex-bg--purple aspect-2/1 rounded-8">
      <div class="absolute right-0 left-a top-0 h-32 w-32 ex-box rounded-8 pd-bg-violet-600">03</div>
    </div>
    <div class="relative ex-bg--striped ex-bg--purple aspect-2/1 rounded-8">
      <div class="absolute left-0 top-0 bottom-0 w-32 ex-box rounded-8 pd-bg-violet-600">04</div>
    </div>
    <div class="relative ex-bg--striped ex-bg--purple aspect-2/1 rounded-8">
      <div class="absolute inset-0 ex-box rounded-8 pd-bg-violet-600">05</div>
    </div>
    <div class="relative ex-bg--striped ex-bg--purple aspect-2/1 rounded-8">
      <div class="absolute right-0 left-a inset-y-0 w-32 ex-box rounded-8 pd-bg-violet-600">06</div>
    </div>
    <div class="relative ex-bg--striped ex-bg--purple aspect-2/1 rounded-8">
      <div class="absolute left-0 bottom-0 h-32 top-a w-32 ex-box rounded-8 pd-bg-violet-600">07</div>
    </div>
    <div class="relative ex-bg--striped ex-bg--purple aspect-2/1 rounded-8">
      <div class="absolute inset-x-0 bottom-0 top-a h-32 ex-box rounded-8 pd-bg-violet-600">08</div>
    </div>
    <div class="relative ex-bg--striped ex-bg--purple aspect-2/1 rounded-8">
      <div class="absolute right-0 bottom-0 left-a top-a h-32 w-32 ex-box rounded-8 pd-bg-violet-600">09</div>
    </div>
  </div>
</example-container>

```html{3,8,13,18,23,28,33,38,43}
<!-- Pin to top left corner -->
<div class="relative ...">
  <div class="absolute left-0 top-0 h-32 w-32 ...">01</div>
</div>

<!-- Span top edge -->
<div class="relative ...">
  <div class="absolute inset-x-0 top-0 h-32 ...">02</div>
</div>

<!-- Pin to top right corner -->
<div class="relative ...">
  <div class="absolute top-0 right-0 h-32 w-32 ...">03</div>
</div>

<!-- Span left edge -->
<div class="relative ...">
  <div class="absolute inset-y-0 left-0 w-32 ...">04</div>
</div>

<!-- Fill entire parent -->
<div class="relative ...">
  <div class="absolute inset-0 ...">05</div>
</div>

<!-- Span right edge -->
<div class="relative ...">
  <div class="absolute inset-y-0 right-0 w-32 ...">06</div>
</div>

<!-- Pin to bottom left corner -->
<div class="relative  ...">
  <div class="absolute bottom-0 left-0 h-32 w-32 ...">07</div>
</div>

<!-- Span bottom edge -->
<div class="relative ...">
  <div class="absolute inset-x-0 bottom-0 h-32 ...">08</div>
</div>

<!-- Pin to bottom right corner -->
<div class="relative ...">
  <div class="absolute bottom-0 right-0 h-32 w-32 ...">09</div>
</div>
```

### Using negative values
To use a negative top/right/bottom/left value, prefix the class name with a dash to convert it to a negative value.

<example-container>
  <div class="ex-bg--striped ex-bg--indigo relative rounded-8 max-w-144 h-96 mx-auto">
    <div class="ex-box rounded-8 absolute -left-16 -top-16 h-64 w-64 pd-bg-indigo-600"> </div>
  </div>
</example-container>

```html{2}
<div class="relative ...">
  <div class="absolute -left-16 -top-16 ..."></div>
</div>
```

### Arbitrary values
If you need to use a one-off top/right/bottom/left value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="top-[160]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Hover, focus, and other states
You can conditionally apply utility classes in different states using variant modifiers. For example, use `hover:top-6` to only apply the `top-6` utility on hover.

```html
<div class="top-8 hover:top-10">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:top-6` to apply the `top-6` utility at only medium screen sizes and above.

```html
<div class="top-8 md:top-10">
  <!-- ... -->
</div>
```
