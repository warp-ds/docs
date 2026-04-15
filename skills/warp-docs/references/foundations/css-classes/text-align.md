# Text Align

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/text-align

> Typography

Utilities for controlling the alignment of text.

| Class | Description |
| --- | --- |
| text-left | text-align: left |
| text-center | text-align: center |
| text-right | text-align: right |
| text-justify | text-align: justify |
| text-start | text-align: start |
| text-end | text-align: end |

Control the text alignment of an element using the `text-left`, `text-center`, `text-right`, and `text-justify` utilities.

```html
<p class="text-left">In some respects ...</p>
```

```html
<p class="text-center">In some respects ...</p>
```

```html
<p class="text-right">In some respects ...</p>
```

```html
<p class="text-justify">In some respects ...</p>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:text-center` to apply the `text-center` utility at only medium screen sizes and above.

```html
<p class="text-left md:text-center">
  <!-- ... -->
</p>
```
