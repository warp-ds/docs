# Border Style

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/border-style

> Borders

Utilities for controlling the style of an element's borders.

| Class | Description |
| --- | --- |
| border-solid | border-style: solid |
| border-dashed | border-style: dashed |
| border-dotted | border-style: dotted |
| border-double | border-style: double |
| border-hidden | border-style: hidden |
| border-none | border-style: none |
| border-groove | border-style: groove |
| border-ridge | border-style: ridge |
| border-inset | border-style: inset |
| border-outset | border-style: outset |

Use `border-{style}` to control an element’s border style.

```html
<div class="border-solid ...">01</div>
<div class="border-dashed ...">02</div>
<div class="border-dotted ...">03</div>
```

Use `border-none` to remove an existing border style from an element.

This is most commonly used to remove a border style that was applied at a smaller breakpoint.

```html
<div class="border-4 border-none ...">01</div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:border-dotted` to only apply the `border-dotted` utility on hover.

```html
<div class="border-solid hover:border-dotted"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:border-dotted` to apply the `border-dotted` utility at only medium screen sizes and above.

```html
<div class="border-solid md:border-dotted"></div>
```
