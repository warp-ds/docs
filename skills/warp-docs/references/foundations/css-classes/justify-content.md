# Justify Content

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/justify-content

> Flexbox & Grid

Utilities for controlling how flex and grid items are positioned along a container's main axis.

| Class | Description |
| --- | --- |
| justify-start | justify-content: flex-start |
| justify-center | justify-content: center |
| justify-end | justify-content: flex-end |
| justify-between | justify-content: space-between |
| justify-around | justify-content: space-around |
| justify-evenly | justify-content: space-evenly |

Use `justify-start` to justify items against the start of the container’s main axis:

```html
<div class="flex justify-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Use `justify-center` to justify items along the center of the container’s main axis.

```html
<div class="flex justify-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Use `justify-end` to justify items against the end of the container’s main axis

```html
<div class="flex justify-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Use `justify-between` to justify items along the container’s main axis such that there is an equal amount of space between each item.

```html
<div class="flex justify-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Use `justify-around` to justify items along the container’s main axis such that there is an equal amount of space on each side of each item.

```html
<div class="flex justify-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Use `justify-evenly` to justify items along the container’s main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `justify-around`

```html
<div class="flex justify-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:justify-between` to apply the `justify-between` utility at only medium screen sizes and above.

```html
<div class="flex justify-start md:justify-between">
  <!-- ... -->
</div>
```
