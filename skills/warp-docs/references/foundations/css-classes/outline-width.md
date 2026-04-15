# Outline Width

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/outline-width

> Borders

Utilities for controlling the outline width of an element.

| Class | Description |
| --- | --- |
| outline-{size} | outline-width: {size} |

> Available values  
> `{size}`: `0`, `1`, `2`, `4`, `8`  

Use the `outline-{size}` utilities to set the outline width for an element.

```html
<div class="outline outline-offset-4 outline-1 ..."></div>
<div class="outline outline-offset-4 outline-2 ..."></div>
<div class="outline outline-offset-4 outline-4 ..."></div>
<div class="outline outline-offset-4 outline-8 ..."></div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:outline-4` to only apply the `outline-4` utility on hover.

```html
<div class="outline-2 hover:outline-4"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:outline-4` to apply the `outline-4` utility at only medium screen sizes and above.

```html
<div class="outline-2 md:outline-4"></div>
```
