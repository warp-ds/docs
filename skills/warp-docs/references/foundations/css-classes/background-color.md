# Background Color

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/background-color

> Backgrounds

Utilities for controlling an element's background color.

s-prefix

The `s-` (semantic) prefix signals that the color value of these will change with the brand css.

| Class | Color | Description |
| --- | --- | --- |
| bg-inherit |  | background-color: inherit |
| bg-current |  | background-color: currentColor |
| bg-transparent |  | background-color: transparent |
| s-bg |  | background-color: var(--w-s-color-background) |
| s-bg-hover |  | background-color: var(--w-s-color-background-hover) |
| s-bg-active |  | background-color: var(--w-s-color-background-active) |
| s-bg-selected |  | background-color: var(--w-s-color-background-selected) |
| s-bg-selected-hover |  | background-color: var(--w-s-color-background-selected-hover) |
| s-bg-disabled |  | background-color: var(--w-s-color-background-disabled) |
| s-bg-inverted |  | background-color: var(--w-s-color-background-inverted) |
| s-bg-subtle |  | background-color: var(--w-s-color-background-subtle) |
| s-bg-subtle-hover |  | background-color: var(--w-s-color-background-subtle-hover) |
| s-bg-subtle-active |  | background-color: var(--w-s-color-background-subtle-active) |
| s-bg-primary |  | background-color: var(--w-s-color-background-primary) |
| s-bg-primary-hover |  | background-color: var(--w-s-color-background-primary-hover) |
| s-bg-primary-active |  | background-color: var(--w-s-color-background-primary-active) |
| s-bg-primary-subtle |  | background-color: var(--w-s-color-background-primary-subtle) |
| s-bg-primary-subtle-hover |  | background-color: var(--w-s-color-background-primary-subtle-hover) |
| s-bg-primary-subtle-active |  | background-color: var(--w-s-color-background-primary-subtle-active) |
| s-bg-secondary |  | background-color: var(--w-s-color-background-secondary) |
| s-bg-secondary-hover |  | background-color: var(--w-s-color-background-secondary-hover) |
| s-bg-secondary-active |  | background-color: var(--w-s-color-background-secondary-active) |
| s-bg-positive |  | background-color: var(--w-s-color-background-positive) |
| s-bg-positive-hover |  | background-color: var(--w-s-color-background-positive-hover) |
| s-bg-positive-active |  | background-color: var(--w-s-color-background-positive-active) |
| s-bg-positive-selected |  | Replaced by s-bg-positive in v2 |
| s-bg-positive-selected-hover |  | Replaced by s-bg-positive in v2 |
| s-bg-positive-subtle |  | background-color: var(--w-s-color-background-positive-subtle) |
| s-bg-positive-subtle-hover |  | background-color: var(--w-s-color-background-positive-subtle-hover) |
| s-bg-positive-subtle-active |  | background-color: var(--w-s-color-background-positive-subtle-active) |
| s-bg-negative |  | background-color: var(--w-s-color-background-negative) |
| s-bg-negative-hover |  | background-color: var(--w-s-color-background-negative-hover) |
| s-bg-negative-active |  | background-color: var(--w-s-color-background-negative-active) |
| s-bg-negative-selected |  | Replaced by s-bg-negative in v2 |
| s-bg-negative-selected-hover |  | Replaced by s-bg-negative in v2 |
| s-bg-negative-subtle |  | background-color: var(--w-s-color-background-negative-subtle) |
| s-bg-negative-subtle-hover |  | background-color: var(--w-s-color-background-negative-subtle-hover) |
| s-bg-negative-subtle-active |  | background-color: var(--w-s-color-background-negative-subtle-active) |
| s-bg-warning |  | background-color: var(--w-s-color-background-warning) |
| s-bg-warning-hover |  | background-color: var(--w-s-color-background-warning-hover) |
| s-bg-warning-active |  | background-color: var(--w-s-color-background-warning-active) |
| s-bg-warning-selected |  | Replaced by s-bg-warning in v2 |
| s-bg-warning-selected-hover |  | Replaced by s-bg-warning in v2 |
| s-bg-warning-subtle |  | background-color: var(--w-s-color-background-warning-subtle) |
| s-bg-warning-subtle-hover |  | background-color: var(--w-s-color-background-warning-subtle-hover) |
| s-bg-warning-subtle-active |  | background-color: var(--w-s-color-background-warning-subtle-active) |
| s-bg-info |  | background-color: var(--w-s-color-background-info) |
| s-bg-info-hover |  | background-color: var(--w-s-color-background-info-hover) |
| s-bg-info-active |  | background-color: var(--w-s-color-background-info-active) |
| s-bg-info-selected |  | Replaced by s-bg-info in v2 |
| s-bg-info-selected-hover |  | Replaced by s-bg-info in v2 |
| s-bg-info-subtle |  | background-color: var(--w-s-color-background-info-subtle) |
| s-bg-info-subtle-hover |  | background-color: var(--w-s-color-background-info-subtle-hover) |
| s-bg-info-subtle-active |  | background-color: var(--w-s-color-background-info-subtle-active) |
| s-bg-notification |  | background-color: var(--w-s-color-background-notification) |

Control the background color of an element using the `bg-{transparent|inherit|current}` or `s-bg-{semantic color}` utilities specified in the table above.

```html
<div class="s-bg ..."></div>
<div class="s-bg-subtle ..."></div>
<div class="s-bg-primary ..."></div>
<div class="s-bg-positive ..."></div>
<div class="s-bg-negative ..."></div>
```

If you need to use a one-off `bg-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However, we recommend only using our semantic color tokens.

```html
<div class="bg-[--w-s-color-background]"></div>
```

It is possible to control the opacity of an element’s background color by adding an optional alpha modifier. The modifier accepts any integer percentage value between 0 and 100. This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

Warning

Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.

```html
<div class="s-bg/20 hover:s-bg/100 ..."></div>
<div class="s-bg-primary/50 hover:s-bg-primary/100 ..."></div>
<div class="bg-[--w-s-color-background-positive/40] hover:bg-[--w-s-color-background-positive/100] ..."></div>
<div class="bg-[var(--w-black)/70] hover:bg-[var(--w-black)/100] ..."></div>
```

Conditionally apply utility classes in different states using variant modifiers. For example, use `hover:s-bg-hover` to only apply the `s-bg-hover` utility on hover.

```html
<div class="s-bg hover:s-bg-hover active:s-bg-active ..."></div>
<div class="s-bg-info hover:s-bg-info-hover active:s-bg-info-active ..."></div>
<div class="s-bg-warning hover:s-bg-warning-hover active:s-bg-warning-active ..."></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:s-bg-positive` to apply the `s-bg-positive` utility at only medium screen sizes and above.

```html
<div class="s-bg md:s-bg-positive ..."></div>
```
