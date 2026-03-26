# Divide Width

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/divide-width

> Borders

Utilities for controlling the border width between elements.

| Class | Description |
| --- | --- |
| divide-x > * + * | border-right-width: 1pxborder-left-width: 1px |
| divide-y > * + * | border-top-width: 1pxborder-bottom-width: 1px |
| divide-x-{size} > * + * | border-right-width: {size}border-left-width: {size} |
| divide-y-{size} > * + * | border-top-width: {size}border-bottom-width: {size} |
| divide-x-reverse > * + * | Flips the borders to work with flex-row-reverse |
| divide-y-reverse > * + * | Flips the borders to work with flex-col-reverse |

> Available values  
> `{sizes}` : `0`, `2`, `4`, `8`

Add borders between horizontal elements using the `divide-x-{width}` utilities.

```html
<div class="divide-x-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Add borders between stacked elements using the `divide-y-{width}` utilities.

```html
<div class="divide-y ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`), use the `divide-x-reverse` or `divide-y-reverse` utilities to ensure the border is added to the correct side of each element.

```html
<div class="flex flex-col-reverse divide-y divide-y-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

If you need to use a one-off `divide-{width}` value, use square brackets to generate a property using any arbitrary width. This works with or without an optional, but recommended, direction:  
`divide-{x|y}-[{width}] | divide-[{width}]`

```html
<div class="divide-x-[66]">
  <!-- ... -->
</div>
```

You can conditionally apply utility classes in different states using variant modifiers. For example, use `hover:divide-y-8` to only apply the `divide-y-8` utility on hover.

```html
<div class="divide-y hover:divide-y-8 ...">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:divide-y-8` to apply the `divide-y-8` utility at only medium screen sizes and above.

```html
<div class="divide-y md:divide-y-8 ...">
  <!-- ... -->
</div>
```
