# Outline Color

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/outline-color

> Borders

Utilities for controlling the color of an outline of an element.

s-prefix

The `s-` (semantic) prefix signals that the color value of these will change with the brand css.

| Class | Color | Description |
| --- | --- | --- |
| outline-inherit |  | outline-color: inherit |
| outline-current |  | outline-color: currentColor |
| outline-transparent |  | outline-color: transparent |
| s-outline |  | outline-color: var(--w-s-color-border) |
| s-outline-hover |  | outline-color: var(--w-s-color-border-hover) |
| s-outline-active |  | outline-color: var(--w-s-color-border-active) |
| s-outline-disabled |  | outline-color: var(--w-s-color-border-disabled) |
| s-outline-selected |  | outline-color: var(--w-s-color-border-selected) |
| s-outline-selected-hover |  | outline-color: var(--w-s-color-border-selected-hover) |
| s-outline-inverted |  | outline-color: var(--w-s-color-border-inverted) |
| s-outline-focus |  | outline-color: var(--w-s-color-border-focus) (v2) |
| s-outline-focused |  | Replaced by s-outline-focus in v2 |
| s-outline-strong |  | outline-color: var(--w-s-color-border-strong) |
| s-outline-strong-hover |  | outline-color: var(--w-s-color-border-strong-hover) |
| s-outline-primary |  | outline-color: var(--w-s-color-border-primary) |
| s-outline-primary-hover |  | outline-color: var(--w-s-color-border-primary-hover) |
| s-outline-primary-active |  | outline-color: var(--w-s-color-border-primary-active) |
| s-outline-primary-subtle |  | outline-color: var(--w-s-color-border-primary-subtle) |
| s-outline-primary-subtle-hover |  | outline-color: var(--w-s-color-border-primary-subtle-hover) |
| s-outline-primary-subtle-active |  | outline-color: var(--w-s-color-border-primary-subtle-active) |
| s-outline-secondary |  | outline-color: var(--w-s-color-border-secondary) |
| s-outline-secondary-hover |  | outline-color: var(--w-s-color-border-secondary-hover) |
| s-outline-secondary-active |  | outline-color: var(--w-s-color-border-secondary-active) |
| s-outline-positive |  | outline-color: var(--w-s-color-border-positive) |
| s-outline-positive-hover |  | outline-color: var(--w-s-color-border-positive-hover) |
| s-outline-positive-active |  | outline-color: var(--w-s-color-border-positive-active) |
| s-outline-positive-subtle |  | outline-color: var(--w-s-color-border-positive-subtle) |
| s-outline-positive-subtle-hover |  | outline-color: var(--w-s-color-border-positive-subtle-hover) |
| s-outline-positive-subtle-active |  | outline-color: var(--w-s-color-border-positive-subtle-active) |
| s-outline-negative |  | outline-color: var(--w-s-color-border-negative) |
| s-outline-negative-hover |  | outline-color: var(--w-s-color-border-negative-hover) |
| s-outline-negative-active |  | outline-color: var(--w-s-color-border-negative-active) |
| s-outline-negative-selected |  | Replaced by s-outline-negative in v2 |
| s-outline-negative-selected-hover |  | Replaced by s-outline-negative in v2 |
| s-outline-negative-subtle |  | outline-color: var(--w-s-color-border-negative-subtle) |
| s-outline-negative-subtle-hover |  | outline-color: var(--w-s-color-border-negative-subtle-hover) |
| s-outline-negative-subtle-active |  | outline-color: var(--w-s-color-border-negative-subtle-active) |
| s-outline-warning |  | outline-color: var(--w-s-color-border-warning) |
| s-outline-warning-hover |  | outline-color: var(--w-s-color-border-warning-hover) |
| s-outline-warning-active |  | outline-color: var(--w-s-color-border-warning-active) |
| s-outline-warning-subtle |  | outline-color: var(--w-s-color-border-warning-subtle) |
| s-outline-warning-subtle-hover |  | outline-color: var(--w-s-color-border-warning-subtle-hover) |
| s-outline-warning-subtle-active |  | outline-color: var(--w-s-color-border-warning-subtle-active) |
| s-outline-info |  | outline-color: var(--w-s-color-border-info) |
| s-outline-info-hover |  | outline-color: var(--w-s-color-border-info-hover) |
| s-outline-info-active |  | outline-color: var(--w-s-color-border-info-active) |
| s-outline-info-subtle |  | outline-color: var(--w-s-color-border-info-subtle) |
| s-outline-info-subtle-hover |  | outline-color: var(--w-s-color-border-info-subtle-hover) |
| s-outline-info-subtle-active |  | outline-color: var(--w-s-color-border-info-subtle-active) |

Control the outline color of an element using the `s-outline-{semantic color}` utilities specified in the table above.

```html
<div class="s-outline-focus outline-4 ..."></div>
```

If you need to use a one-off `outline-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However, we recommend only using our semantic color tokens.

```html
<div class="outline-[--w-s-color-border]">
  <!-- ... -->
</div>
```

It is possible to control the opacity of an element’s outline color by adding an optional alpha modifier. The modifier accepts any integer percentage value between 0 and 100. This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

Warning

Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.

```html
<div class="s-outline/50 hover:s-outline/100 ..."></div>
<div class="s-outline-focus/50 hover:s-outline-focus/100 ..."></div>
<div class="outline-[--w-s-color-background-positive/40] hover:bg-[--w-s-color-background-positive/100] ..."></div>
<div class="outline-[--w-black/40] hover:outline-[--w-black/100] ..."></div>
```

Conditionally apply utility classes in different states using variant modifiers. For example, use `hover:s-outline-active` to only apply the `s-outline-active` utility on hover.

```html
<div class="s-outline hover:s-outline-hover ..."></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:s-outline-positive` to apply the `s-outline-positive` utility at only medium screen sizes and above.

```html
<div class="s-outline md:s-outline-positive ..."></div>
```
