# Rotate

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/rotate

> Transforms

Utilities for rotating elements with transform.

| Class | Description |
| --- | --- |
| rotate-{deg} | transform: rotate({deg}) |

> Available values  
> `{deg}`: Accepts any degree (120 rotates 120 degrees with the clock).  

Use the `rotate-{angle}` utilities to rotate an element.

```html
<img class="rotate-0 ...">
<img class="rotate-45 ...">
<img class="rotate-90 ...">
<img class="rotate-180 ...">
```

To use a negative rotate value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-rotate-45 ..." />
```

To remove all transforms on an element at once, use the `transform-none` utility. This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.

```html
<div class="scale-75 translate-x-4 skew-y-3 md:transform-none"></div>
```

If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility.

Use `transform-cpu` to force things back to the CPU if you need to undo this conditionally.

```html
<div class="rotate-45 transform-gpu"></div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:rotate-45 to only apply the rotate-45 utility on hover.

```html
<div class="hover:rotate-45"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:rotate-45` to apply the `rotate-45` utility at only medium screen sizes and above.

```html
<div class="md:rotate-45"></div>
```
