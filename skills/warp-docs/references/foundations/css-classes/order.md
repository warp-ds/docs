# Order

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/order

> Flexbox & Grid

Utilities for controlling the order of flex and grid items.

| Class | Description |
| --- | --- |
| order-{value} | order: {value} |
| order-none | order: 0 |
| order-first | order: -9999 |
| order-last | order: 9999 |

> Available values  
> `{value}`: `1` through `12`  

Use `order-{order}` to render flex and grid items in a different order than they appear in the DOM.

```html
<div class="flex justify-between">
  <div class="order-last">01</div>
  <div>02</div>
  <div>03</div>
</div>
```

To use a negative order value, prefix the class name with a dash to convert it to a negative value.

```html
<div class="-order-1"></div>
```

If you need to use a one-off order value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="order-[14]"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:order-4` to apply the `order-4` utility at only medium screen sizes and above.

```html
<div class="order-3 md:order-4"></div>
```
