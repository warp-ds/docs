# Border Width

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/border-width

> Borders

Utilities for controlling the border width of an element.

| Class | Description |
| --- | --- |
| border | border-width: 1px |
| border-x | border-left-width: 1pxborder-right-width: 1px |
| border-y | border-top-width: 1pxborder-bottom-width: 1px |
| border-t | border-top-width: 1px |
| border-r | border-right-width: 1px |
| border-b | border-bottom-width: 1px |
| border-l | border-left-width: 1px |
| border-{size} | border-radius: {size} |
| border-x-{size} | border-left-width: {size}border-right-width: {size} |
| border-y-{size} | border-top-width: {size}border-bottom-width: {size} |
| border-t-{size} | border-top-width: {size} |
| border-r-{size} | border-right-width: {size} |
| border-b-{size} | border-bottom-width: {size} |
| border-l-{size} | border-left-width: {size} |

> Available values  
> `{size}`: `0`, `2`, `4`, `8`  

Use the `border-0`, `border`, `border-2`, `border-4`, or `border-8` utilities to set the border width for all sides of an element.

```html
<div class="border ..."></div>
<div class="border-2 ..."></div>
<div class="border-4 ..."></div>
<div class="border-8 ..."></div>
```

Use the `border-{side}`, `border-{side}-0`, `border-{side}-2`, `border-{side}-4`, or `border-{side}-8` utilities to set the border width for one side of an element.

```html
<div class="border-t-4 ..."></div>
<div class="border-r-4 ..."></div>
<div class="border-b-4 ..."></div>
<div class="border-l-4 ..."></div>
```

Use the `border-{x|y}-{width}` utilities to set the border width on two sides of an element at the same time.

```html
<div class="border-x-4 ..."></div>
<div class="border-y-4 ..."></div>
```

If you need to use a one-off `border-{width}` value, use square brackets to generate a property using any arbitrary width. This also works with or without an optional side:  
`border-{side}-[{width}] | border-[{width}]`

```html
<div class="border-[66]"></div>
```

You can conditionally apply utility classes in different states using variant modifiers. For example, use `hover:border-t-4` to only apply the `border-t-4` utility on hover.

```html
<div class="border-2 hover:border-t-4"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:border-t-4` to apply the `border-t-4` utility at only medium screen sizes and above.

```html
<div class="border-2 md:border-t-4"></div>
```
