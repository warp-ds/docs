# Outline Offset

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/outline-offset

> Borders

Utilities for controlling the offset of an outline of an element.

| Class | Description |
| --- | --- |
| outline-offset-{size} | outline-offset: {size} |

> Available values  
> `{size}`: `0`, `1`, `2`, `4`, `8`  

Use the `outline-offset-{size}` utilities to set the outline offset for an element.

```html
<div class="outline outline-offset-1 outline-4 ..."></div>
<div class="outline outline-offset-2 outline-4 ..."></div>
<div class="outline outline-offset-4 outline-4 ..."></div>
<div class="outline outline-offset-8 outline-4 ..."></div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:outline-offset-4` to only apply the `outline-offset-4` utility on hover.

```html
<div class="outline-offset-2 hover:outline-offset-4"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:outline-offset-4` to apply the `outline-offset-4` utility at only medium screen sizes and above.

```html
<div class="outline-offset-2 md:outline-offset-4"></div>
```
