# Border Color

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/border-color

> Borders

Utilities for controlling the color of an element's borders.

s-prefix

The `s-` (semantic) prefix signals that the color value of these will change with the brand css.

| Class | Color | Description |
| --- | --- | --- |
| border-inherit |  | border-color: inherit |
| border-current |  | border-color: currentColor |
| border-transparent |  | border-color: transparent |
| s-border |  | border-color: var(--w-s-color-border) |
| s-border-hover |  | border-color: var(--w-s-color-border-hover) |
| s-border-active |  | border-color: var(--w-s-color-border-active) |
| s-border-disabled |  | border-color: var(--w-s-color-border-disabled) |
| s-border-selected |  | border-color: var(--w-s-color-border-selected) |
| s-border-selected-hover |  | border-color: var(--w-s-color-border-selected-hover) |
| s-border-inverted |  | border-color: var(--w-s-color-border-inverted) |
| s-border-focus |  | border-color: var(--w-s-color-border-focus) (v2) |
| s-border-focused |  | Replaced by s-border-focus in v2 |
| s-border-strong |  | border-color: var(--w-s-color-border-strong) |
| s-border-strong-hover |  | border-color: var(--w-s-color-border-strong-hover) |
| s-border-primary |  | border-color: var(--w-s-color-border-primary) |
| s-border-primary-hover |  | border-color: var(--w-s-color-border-primary-hover) |
| s-border-primary-active |  | border-color: var(--w-s-color-border-primary-active) |
| s-border-primary-subtle |  | border-color: var(--w-s-color-border-primary-subtle) |
| s-border-primary-subtle-hover |  | border-color: var(--w-s-color-border-primary-subtle-hover) |
| s-border-primary-subtle-active |  | border-color: var(--w-s-color-border-primary-subtle-active) |
| s-border-secondary |  | border-color: var(--w-s-color-border-secondary) |
| s-border-secondary-hover |  | border-color: var(--w-s-color-border-secondary-hover) |
| s-border-secondary-active |  | border-color: var(--w-s-color-border-secondary-active) |
| s-border-positive |  | border-color: var(--w-s-color-border-positive) |
| s-border-positive-hover |  | border-color: var(--w-s-color-border-positive-hover) |
| s-border-positive-active |  | border-color: var(--w-s-color-border-positive-active) |
| s-border-positive-subtle |  | border-color: var(--w-s-color-border-positive-subtle) |
| s-border-positive-subtle-hover |  | border-color: var(--w-s-color-border-positive-subtle-hover) |
| s-border-positive-subtle-active |  | border-color: var(--w-s-color-border-positive-subtle-active) |
| s-border-negative |  | border-color: var(--w-s-color-border-negative) |
| s-border-negative-hover |  | border-color: var(--w-s-color-border-negative-hover) |
| s-border-negative-active |  | border-color: var(--w-s-color-border-negative-active) |
| s-border-negative-selected |  | Replaced by s-border-negative in v2 |
| s-border-negative-selected-hover |  | Replaced by s-border-negative in v2 |
| s-border-negative-subtle |  | border-color: var(--w-s-color-border-negative-subtle) |
| s-border-negative-subtle-hover |  | border-color: var(--w-s-color-border-negative-subtle-hover) |
| s-border-negative-subtle-active |  | border-color: var(--w-s-color-border-negative-subtle-active) |
| s-border-warning |  | border-color: var(--w-s-color-border-warning) |
| s-border-warning-hover |  | border-color: var(--w-s-color-border-warning-hover) |
| s-border-warning-active |  | border-color: var(--w-s-color-border-warning-active) |
| s-border-warning-subtle |  | border-color: var(--w-s-color-border-warning-subtle) |
| s-border-warning-subtle-hover |  | border-color: var(--w-s-color-border-warning-subtle-hover) |
| s-border-warning-subtle-active |  | border-color: var(--w-s-color-border-warning-subtle-active) |
| s-border-info |  | border-color: var(--w-s-color-border-info) |
| s-border-info-hover |  | border-color: var(--w-s-color-border-info-hover) |
| s-border-info-active |  | border-color: var(--w-s-color-border-info-active) |
| s-border-info-subtle |  | border-color: var(--w-s-color-border-info-subtle) |
| s-border-info-subtle-hover |  | border-color: var(--w-s-color-border-info-subtle-hover) |
| s-border-info-subtle-active |  | border-color: var(--w-s-color-border-info-subtle-active) |

Control the border color of an element using the `border-{transparent | inherit | current}` or `s-border-{semantic color}` utilities specified in the table above.

```html
<div class="s-border-positive border-4 rounded-16 ..."></div>
```

Use the `border-{l|r|t|b}-{transparent|inherit|current}` or `s-border-{l|r|t|b}-{semantic color}` utilities to set the border color for only one side of an element.

```html
<div class="s-border-l-positive border-4 ..."></div>
<div class="s-border-r-positive border-4 ..."></div>
<div class="s-border-t-positive border-4 ..."></div>
<div class="s-border-b-positive border-4 ..."></div>
```

Use the `border-{x|y}-{transparent|inherit|current}` or `s-border-{x|y}-{semantic color}` utilities to set the border color on two sides of an element at the same time.

```html
<div class="s-border-x-positive border-4 ..."></div>
<div class="s-border-y-positive border-4 ..."></div>
```

If you need to use a one-off `border-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However, we recommend only using our semantic color tokens. This also works with or without an optional direction. `border-{x|y|l|r|t|b}-[{any color value or css var}]`

```html
<div class="border-[--w-s-color-icon]">
  <!-- ... -->
</div>
```

It is possible to control the opacity of an element’s border color by adding an optional alpha modifier. The modifier accepts any integer percentage value between 0 and 100. This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

Warning

Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.

```html
<div class="s-border/50 hover:s-border/100 ..."></div>
<div class="s-border-t-primary/55 hover:s-border-t-primary/100 ..."></div>
<div class="border-x-[--w-s-color-background-positive/60] hover:border-x-[--w-s-color-background-positive/100] ..."></div>
<div class="border-y-[var(--w-black)/40] hover:border-y-[var(--w-black)/100] ..."></div>
```

Conditionally apply utility classes in different states using variant modifiers. For example, use `hover:s-border-active` to only apply the `s-border-active` utility on hover.

```html
<div class="s-border hover:s-border-hover ..."></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:s-border-positive` to apply the `s-border-positive` utility at only medium screen sizes and above.

```html
<div class="s-border md:s-border-positive ..."></div>
```
