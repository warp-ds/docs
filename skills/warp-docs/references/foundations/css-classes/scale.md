# Scale

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/scale

> Transforms

Utilities for scaling elements with transform.

| Class | Description |
| --- | --- |
| scale-{percentage} | transform: translateX({percentage})transform: translateY({percentage}) |
| scale-x-{percentage} | transform: translateX({percentage}) |
| scale-y-{percentage} | transform: translateY({percentage}) |

> Available values  
> `{percentage}`: Accepts any percentage value.  

Use the `scale-{percentage}`, `scale-x-{percentage}`, and `scale-y-{percentage}` utilities to scale an element.

```html
<img class="scale-75 ...">
<img class="scale-100 ...">
<img class="scale-125 ...">
```

To use a negative scale value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-scale-50" />
```

To remove all transforms on an element at once, use the `transform-none` utility. This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.

```html
<div class="scale-75 translate-x-16 skew-y-16 md:transform-none"></div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:scale-125` to only apply the `scale-125` utility on hover.

```html
<div class="hover:scale-125"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:scale-125` to apply the `scale-125` utility at only medium screen sizes and above.

```html
<div class="md:scale-125"></div>
```
