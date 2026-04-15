# Top / Right / Bottom / Left

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/top-right-bottom-left

> Layout

Utilities for controlling the placement of positioned elements.

| Class | Description |
| --- | --- |
| top-a | top: auto |
| right-a | right: auto |
| bottom-a | bottom: auto |
| left-a | left: auto |
| top-{size} | top: {size} |
| right-{size} | right: {size} |
| bottom-{size} | bottom: {size} |
| left-{size} | left: {size} |
| inset-{size} | top: {size}right: {size}bottom: {size}left: {size} |
| inset-x-{size} | right: {size}left: {size} |
| inset-y-{size} | top: {size}bottom: {size} |

> Available values  
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144`  

Use the `{top|right|bottom|left|inset}-{size}` utilities to set the horizontal or vertical position of [positioned element](https://warp-ds.github.io/docs/foundations/css-classes/position).

```html
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

To use a negative top/right/bottom/left value, prefix the class name with a dash to convert it to a negative value.

```html
<div class="relative ...">
  <div class="absolute -left-16 -top-16 ..."></div>
</div>
```

If you need to use a one-off top/right/bottom/left value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="top-[160]">
  <!-- ... -->
</div>
```

You can conditionally apply utility classes in different states using variant modifiers. For example, use `hover:top-6` to only apply the `top-6` utility on hover.

```html
<div class="top-8 hover:top-10">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:top-6` to apply the `top-6` utility at only medium screen sizes and above.

```html
<div class="top-8 md:top-10">
  <!-- ... -->
</div>
```
