# Resize

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/resize

> Interactivity

Utilities for controlling how an element can be resized.

| Class | Description |
| --- | --- |
| resize-none | resize: none |
| resize-y | resize: vertical |
| resize-x | resize: horizontal |
| resize | resize: both |

Use `resize` to make an element horizontally and vertically resizable.

```html
<div class="resize ..."></div>
```

Use `resize-y` to make an element vertically resizable.

```html
<div class="resize-y ..."></div>
```

Use `resize-x` to make an element horizontally resizable.

```html
<div class="resize-x ..."></div>
```

Use `resize-none` to prevent an element from being resizable.

```html
<textarea class="resize-none ..."></textarea>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:resize` to only apply the `resize` utility on hover.

```html
<div class="resize-none hover:resize"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:resize` to apply the `resize` utility at only medium screen sizes and above.

```html
<div class="resize-none md:resize"></div>
```
