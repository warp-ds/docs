# Align Self

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/align-self

> Flexbox & Grid

Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.

| Class | Description |
| --- | --- |
| self-auto | align-self: auto |
| self-start | align-self: flex-start |
| self-center | align-self: center |
| self-end | align-self: flex-end |
| self-stretch | align-self: stretch |

Use `self-auto` to align an item based on the value of the container’s `align-items` property.

```html
<div class="flex grid-cols-3 items-stretch ...">
  <div>01</div>
  <div class="self-auto ...">02</div>
  <div>03</div>
</div>
```

Use `self-start` to align an item to the start of the container’s cross axis, despite the container’s align-items value:

```html
<div class="flex grid-cols-3 items-stretch ...">
  <div>01</div>
  <div class="self-start">02</div>
  <div>03</div>
</div>
```

Use `self-center` to align an item along the center of the container’s cross axis, despite the container’s `align-items` value.

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-center">02</div>
  <div>03</div>
</div>
```

Use `self-end` to align an item to the end of the container’s cross axis, despite the container’s `align-items` value.

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-end">02</div>
  <div>03</div>
</div>
```

Use `self-stretch` to stretch an item to fill the container’s cross axis, despite the container’s `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-stretch">02</div>
  <div>03</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:self-end` to apply the `self-end` utility at only medium screen sizes and above.

```html
<div class="self-auto md:self-end">
  <!-- ... -->
</div>
```
