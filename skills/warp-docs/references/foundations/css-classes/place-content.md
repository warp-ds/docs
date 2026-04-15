# Place Content

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/place-content

> Flexbox & Grid

Utilities for controlling how content is justified and aligned at the same time.

| Class | Description |
| --- | --- |
| place-content-center | place-content: center |
| place-content-start | place-content: start |
| place-content-end | place-content: end |
| place-content-between | place-content: space-between |
| place-content-around | place-content: space-around |
| place-content-evenly | place-content: space-evenly |

Use `place-content-center` to pack items in the center of the block axis.

```html
<div class="grid grid-cols-2 gap-16 place-content-center ...">
  <!-- ... -->
</div>
```

Use `place-content-start` to pack items against the start of the block axis.

```html
<div class="grid grid-cols-2 gap-16 place-content-start ...">
  <!-- ... -->
</div>
```

Use `place-content-end` to pack items against the end of the block axis.

```html
<div class="grid grid-cols-2 gap-16 place-content-end ...">
  <!-- ... -->
</div>
```

Use `place-content-between` to distribute grid items along the block axis so that there is an equal amount of space between each row on the block axis.

```html
<div class="grid grid-cols-2 place-content-between ...">
  <!-- ... -->
</div>
```

Use `place-content-around` distribute grid items such that there is an equal amount of space around each row on the block axis.

```html
<div class="grid grid-cols-2 place-content-around ...">
  <!-- ... -->
</div>
```

Use `place-content-evenly` to distribute grid items such that they are evenly spaced on the block axis.

```html
<div class="grid grid-cols-2 place-content-evenly ...">
  <!-- ... -->
</div>
```

Use `place-content-stretch` to stretch grid items along their grid areas on the block axis.

```html
<div class="grid grid-cols-2 place-content-stretch ...">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:place-content-center` to apply the `place-content-center` utility at only medium screen sizes and above.

```html
<div class="grid place-content-start md:place-content-center">
  <!-- ... -->
</div>
```
