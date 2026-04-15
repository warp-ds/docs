# Box Shadow

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/box-shadow

> Effects

Utilities for controlling the box shadow of an element.

| Class | Description |
| --- | --- |
| shadow-s | box-shadow: var(--w-shadow-s) |
| shadow-m | box-shadow: var(--w-shadow-m) |
| shadow-l | box-shadow: var(--w-shadow-l) |
| shadow-xl | box-shadow: var(--w-shadow-xl) |

Use the `shadow-s`, `shadow-m`, `shadow-l`, `shadow-xl` utilities to apply different sized outer box shadows to an element.

```html
<div class="shadow-s ...">s</div>
<div class="shadow-m ...">m</div>
<div class="shadow-l ...">l</div>
<div class="shadow-xl ...">xl</div>
```

If you need to use a one-off box-shadow value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="shadow-[--any-css-var]"></div>
<div class="shadow-[var(--any-css-var)]"></div>
<div class="shadow-[10px_5px_5px_red]"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:shadow-m` to apply the `shadow-m` utility at only medium screen sizes and above.

```html
<div class="shadow-s md:shadow-m"></div>
```
