# Background Position

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/background-position

> Backgrounds

Utilities for controlling the position of an element's background image.

| Class | Description |
| --- | --- |
| bg-bottom | background-position: bottom |
| bg-center | background-position: center |
| bg-left | background-position: left |
| bg-left-bottom | background-position: left bottom |
| bg-left-top | background-position: left top |
| bg-right | background-position: right |
| bg-right-bottom | background-position: right bottom |
| bg-right-top | background-position: right top |
| bg-top | background-position: top |

Use the `bg-{side}` utilities to control the position of an element’s background image.

```html
<div class="bg-left-top ..."></div>
<div class="bg-top ..."></div>
<div class="bg-right-top ..."></div>
<div class="bg-left ..."></div>
<div class="bg-center ..."></div>
<div class="bg-right ..."></div>
<div class="bg-left-bottom ..."></div>
<div class="bg-bottom ..."></div>
<div class="bg-right-bottom ..."></div>
```

If you need to use a one-off `background-position` value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="bg-[center_top_1rem] ..."></div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:bg-top` to only apply the `bg-top` utility on hover.

```html
<div class="bg-center hover:bg-top ..."></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:bg-top` to apply the `bg-top` utility at only medium screen sizes and above.

```html
<div class="bg-center md:bg-top ..."></div>
```
