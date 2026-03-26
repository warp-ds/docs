# Justify Self

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/justify-self

> Flexbox & Grid

Utilities for controlling how an individual grid item is aligned along its inline axis.

| Class | Description |
| --- | --- |
| justify-self-auto | justify-self: auto |
| justify-self-start | justify-self: start |
| justify-self-center | justify-self: center |
| justify-self-end | justify-self: end |
| justify-self-stretch | justify-self: stretch |

Use `justify-self-auto` to align an item based on the value of the grid’s `justify-items` property.

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-auto ...">02</div>
  <!-- ... -->
</div>
```

Use `justify-self-start` to align a grid item to the start its inline axis.

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-start ...">02</div>
  <!-- ... -->
</div>
```

Use `justify-self-center` to align a grid item along the center its inline axis:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
</div>
```

Use `justify-self-end` to align a grid item to the end its inline axis:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
</div>
```

Use `justify-self-stretch` to stretch a grid item to fill the grid area on its inline axis:

```html
<div class="grid justify-items-start ...">
  <!-- ... -->
  <div class="justify-self-stretch ...">02</div>
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:justify-self-end` to apply the `justify-self-end` utility at only medium screen sizes and above.

```html
<div class="justify-self-start md:justify-self-end">
  <!-- ... -->
</div>
```
