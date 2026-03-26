# Columns

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/columns

> Layout

Utilities for controlling the number of columns within an element.

| Class | Description |
| --- | --- |
| columns-{n} | columns: {n} |
| columns-auto | columns: auto |

> Available values  
> `{n}`: `1` through `12`  

Use the `columns-{count}` utilities to set the number of columns that should be created for the content within an element. The column width will be automatically adjusted to accommodate that number.

```html
<div class="columns-3 ...">
  <img class="w-full ..." src="..." />
  <img class="w-full aspect-square ..." src="..." />
  <!-- ... -->
</div>
```

To specify the width between columns, you can use the `gap-x` utilities.

```html
<div class="gap-x-24 columns-3 ...">
  <img class="w-full ..." src="..." />
  <img class="w-full aspect-square ..." src="..." />
  <!-- ... -->
</div>
```

If you need to use a one-off columns value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="columns-[13]">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:columns-3` to apply the `columns-3` utility at only medium screen sizes and above.

```html
<div class="columns-2 md:columns-3">
  <!-- ... -->
</div>
```
