# Drop Shadow

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/drop-shadow

> Effects

Utilities for controlling the drop shadow of an element.

| Class | Description |
| --- | --- |
| drop-shadow-s | filter: drop-shadow(rgba(64, 64, 64, .16) 0 1px 6px) drop-shadow(rgba(64, 64, 64, .24) 0 1px 1px) |
| drop-shadow-m | filter: drop-shadow(rgba(64, 64, 64, .24) 0 3px 8px) drop-shadow(rgba(64, 64, 64, .16) 0 3px 6px) |
| drop-shadow-l | filter: drop-shadow(rgba(64, 64, 64, .23) 0 6px 8px) drop-shadow(rgba(64, 64, 64, .19) 0 10px 20px) |
| drop-shadow-xl | filter: drop-shadow(rgba(64, 64, 64, .22) 0 9px 12px) drop-shadow(rgba(64, 64, 64, .25) 0 14px 28px) |

Use the `drop-shadow-s`, `drop-shadow-m`, `drop-shadow-l`, `drop-shadow-xl` utilities to apply different sized drop shadows to images.

```html
<img src="..." class="drop-shadow-s ..." />
<img src="..." class="drop-shadow-m ..." />
<img src="..." class="drop-shadow-l ..." />
<img src="..." class="drop-shadow-xl ..." />
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:drop-shadow-m` to apply the `drop-shadow-m` utility at only medium screen sizes and above.

```html
<div class="drop-shadow-s md:drop-shadow-m"></div>
```
