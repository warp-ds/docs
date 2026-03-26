# Text Color

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/text-color

> Typography

Utilities for controlling the text color of an element.

s-prefix

The `s-` (semantic) prefix signals that the color value of these will change with the brand css.

| Class | Color | Description |
| --- | --- | --- |
| text-transparent | Text | color: transparent |
| text-current | Text | color: currentColor |
| s-text | Text | color: var(--w-s-color-text) |
| s-text-static | Text | color: var(--w-s-color-text-static) (v2) |
| s-text-subtle | Text | color: var(--w-s-color-text-subtle) |
| s-text-placeholder | Text | color: var(--w-s-color-text-placeholder) |
| s-text-inverted | Text | color: var(--w-s-color-text-inverted) |
| s-text-inverted-static | Text | color: var(--w-s-color-text-inverted-static) (v2) |
| s-text-inverted-subtle | Text | color: var(--w-s-color-text-inverted-subtle) |
| s-text-link | Text | color: var(--w-s-color-text-link) |
| s-text-disabled | Text | color: var(--w-s-color-text-disabled) |
| s-text-negative | Text | color: var(--w-s-color-text-negative) |
| s-text-positive | Text | color: var(--w-s-color-text-positive) |
| s-text-notification |  | Replaced by s-text-inverted-static in v2 |

New in v2

To cater for upcoming dark mode, we've added two classes.  
Whenever you have a text that should be "black" in both light and dark mode, use `s-text-static`.  
If you have a text that should be "white" in both light and dark mode, use `s-text-inverted-static`.

Control the text color of an element using the `text-{transparent|current}` or `s-text-{semantic color}` utilities specified in the table above.

```html
<p class="s-text">The quick smart warp scientist</p>
<p class="s-text-static">The quick smart warp scientist</p>
<p class="s-text-subtle">The quick smart warp scientist</p>
<p class="s-text-placeholder">The quick smart warp scientist</p>
<p class="s-text-inverted ...">The quick smart warp scientist</p>
<p class="s-text-inverted-static ...">The quick smart warp scientist</p>
<p class="s-text-inverted-subtle ...">The quick smart warp scientist</p>
<p class="s-text-link">The quick smart warp scientist</p>
<p class="s-text-link-disabled">The quick smart warp scientist</p>
<p class="s-text-positive">The quick smart warp scientist</p>
<p class="s-text-negative">The quick smart warp scientist</p>
```

If you need to use a one-off `text-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However, we recommend only using our semantic color tokens.

```html
<p class="text-[--w-s-color-border]"></p>
```

It is possible to control the opacity of the text color by adding an optional alpha modifier. The modifier accepts any integer percentage value between 0 and 100. This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

Warning

Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.

The examples below are inaccessible and purely for technical reference. Always make sure any text has sufficient contrast to its background.

```html
<div class="s-text/60 hover:s-text/100 ...">Warp</div>
<div class="s-text-link/50 hover:s-text-link/100 ...">Warp</div>
<div class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] ...">Warp</div>
<div class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] ...">Warp</div>
```

You can conditionally apply utility classes in different states using variant modifiers. For example, use `hover:s-text-positive` to only apply the `s-text-positive` utility on hover.

```html
<p class="s-text hover:s-text-positive">The quick smart warp scientist</p>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:s-text-positive` to apply the `s-text-positive` utility at only medium screen sizes and above.

```html
<p class="s-text md:s-text-positive">The quick smart warp scientist</p>
```
