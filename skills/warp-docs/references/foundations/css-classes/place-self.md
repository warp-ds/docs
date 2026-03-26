# Place Self

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/place-self

> Flexbox & Grid

Utilities for controlling how an individual item is justified and aligned at the same time.

| Class | Description |
| --- | --- |
| place-self-auto | place-self: auto |
| place-self-start | place-self: start |
| place-self-end | place-self: end |
| place-self-center | place-self: center |
| place-self-stretch | place-self: stretch |

Use `place-self-auto` to align an item based on the value of the container’s `place-items` property.

```html
<div class="grid grid-cols-3 gap-24 ...">
  <!-- ... -->
  <div class="place-self-auto ...">02</div>
  <!-- ... -->
</div>
```

Use `place-self-start` to align an item to the start on both axes.

```html
<div class="grid grid-cols-3 gap-4 ...">
  <!-- ... -->
  <div class="place-self-start ...">02</div>
  <!-- ... -->
</div>
```

Use `place-self-center` to align an item at the center on both axes.

```html
<div class="grid grid-cols-3 gap-16 ...">
  <!-- ... -->
  <div class="place-self-center ...">02</div>
  <!-- ... -->
</div>
```

Use `place-self-end` to align an item to the end on both axes.

```html
<div class="grid grid-cols-3 gap-24 ...">
  <!-- ... -->
  <div class="place-self-center ...">02</div>
  <!-- ... -->
</div>
```

Use `place-self-stretch` to stretch an item on both axes:

```html
<div class="grid grid-cols-3 gap-24 ...">
  <!-- ... -->
  <div class="place-self-stretch ...">02</div>
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:place-self-end` to apply the `place-self-end` utility at only medium screen sizes and above.

```html
<div class="place-self-start md:place-self-end">
  <!-- ... -->
</div>
```
