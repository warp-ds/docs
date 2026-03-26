# Transform Origin

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/transform-origin

> Transforms

Utilities for specifying the origin for an element's transformations.

| Class | Description |
| --- | --- |
| origin-center | transform-origin: center |
| origin-top | transform-origin: top |
| origin-top-right | transform-origin: top right |
| origin-right | transform-origin: right |
| origin-bottom-right | transform-origin: bottom right |
| origin-bottom | transform-origin: bottom |
| origin-bottom-left | transform-origin: bottom left |
| origin-left | transform-origin: left |
| origin-top-left | transform-origin: top left |

Specify an element’s transform origin using the `origin-{keyword}` utilities.

```html
<img class="rotate-30 origin-center ..." />
<img class="rotate-30 origin-top-left ..." />
<img class="rotate-30 origin-bottom ..." />
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:origin-top` to only apply the `origin-top` utility on hover.

```html
<div class="origin-center hover:origin-top"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:origin-top` to apply the `origin-top` utility at only medium screen sizes and above.

```html
<div class="origin-center md:origin-top"></div>
```
