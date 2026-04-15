# Box Sizing

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/box-sizing

> Layout

Utilities for controlling how the browser should calculate an element's total size.

| Class | Description |
| --- | --- |
| box-border | box-sizing: border-box |
| box-content | box-sizing: content-box |

Use `box-border` to set an element’s `box-sizing` to `border-box`, telling the browser to include the element’s borders and padding when you give it a height or width.

This means a 128px × 128px element with a 2px border and 16px of padding on all sides will be rendered as 100px × 100px, with an internal content area of 92px × 92px.

Warp makes this the default for all elements in the preflight base styles.

```html
<div class="box-border h-128 w-128 p-16 border-2 ...">
  <!-- ... -->
</div>
```

Use `box-content` to set an element’s `box-sizing` to `content-box`, telling the browser to add borders and padding on top of the element’s specified width or height.

This means a 128px × 128px element with a 2px border and 16px of padding on all sides will actually be rendered as 164px × 164px, with an internal content area of 128px × 128px.

```html
<div class="box-content h-128 w-128 p-16 border-3 ...">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:box-content` to apply the `box-content` utility at only medium screen sizes and above.

```html
<div class="box-border md:box-content">
  <!-- ... -->
</div>
```
