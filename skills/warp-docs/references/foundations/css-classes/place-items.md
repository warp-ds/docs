# Place Items

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/place-items

> Flexbox & Grid

Utilities for controlling how items are justified and aligned at the same time.

| Class | Description |
| --- | --- |
| place-items-start | place-items: start |
| place-items-end | place-items: end |
| place-items-center | place-items: center |
| place-items-stretch | place-items: stretch |

Use `place-items-start` to place grid items on the start of their grid areas on both axes.

```html
<div class="grid grid-cols-3 gap-24 place-items-start ...">
  <!-- ... -->
</div>
```

Use `place-items-end` to place grid items on the end of their grid areas on both axes.

```html
<div class="grid grid-cols-3 gap-24 place-items-end ...">
  <!-- ... -->
</div>
```

Use `place-items-center` to place grid items in the center of their grid areas on both axes.

```html
<div class="grid grid-cols-3 gap-24 place-items-center ...">
  <!-- ... -->
</div>
```

Use `place-items-stretch` to stretch items along their grid areas on both axes.

```html
<div class="grid grid-cols-3 gap-24 place-items-stretch ...">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:place-items-center` to apply the `place-items-center` utility at only medium screen sizes and above.

```html
<div class="grid place-items-start md:place-items-center">
  <!-- ... -->
</div>
```
