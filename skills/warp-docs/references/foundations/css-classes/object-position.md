# Object Position

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/object-position

> Layout

Utilities for controlling how a replaced element's content should be positioned within its container.

| Class | Description |
| --- | --- |
| object-bottom | object-position: bottom |
| object-center | object-position: center |
| object-left | object-position: left |
| object-left-bottom | object-position: left bottom |
| object-left-top | object-position: left top |
| object-right | object-position: right |
| object-right-bottom | object-position: right bottom |
| object-right-top | object-position: right top |
| object-top | object-position: top |

Use the `object-{side}` utilities to specify how a replaced element’s content should be positioned within its container.

```html
<img class="object-none object-left-top ..." src="..." alt="..." />
<img class="object-none object-top ..." src="..." alt="..." />
<img class="object-none object-right-top ..." src="..." alt="..." />
<img class="object-none object-left ..." src="..." alt="..." />
<img class="object-none object-center ..." src="..." alt="..." />
<img class="object-none object-right" src="..." alt="..." />
<img class="object-none object-left-bottom ..." src="..." alt="..." />
<img class="object-none object-bottom ..." src="..." alt="..." />>
<img class="object-none object-right-bottom ..." src="..." alt="..." />
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:object-top` to apply the `object-top` utility at only medium screen sizes and above.

```html
<img class="object-center md:object-top" src="...">
```
