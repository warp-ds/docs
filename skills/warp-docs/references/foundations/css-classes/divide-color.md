# Divide Color

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/divide-color

> Borders

Utilities for controlling the border color between elements.

s-prefix

The `s-` (semantic) prefix signals that the color value of these will change with the brand css.

| Class | Color | Description |
| --- | --- | --- |
| divide-inherit |  | border-color: inherit |
| divide-current |  | border-color: currentColor |
| divide-transparent |  | border-color: transparent |
| s-divide | AB | border-color: var(--w-s-color-border) |
| s-divide-hover | AB | border-color: var(--w-s-color-border-hover) |
| s-divide-active | AB | border-color: var(--w-s-color-border-active) |
| s-divide-disabled | AB | border-color: var(--w-s-color-border-disabled) |
| s-divide-selected | AB | border-color: var(--w-s-color-border-selected) |
| s-divide-selected-hover | AB | border-color: var(--w-s-color-border-selected-hover) |
| s-divide-inverted | AB | border-color: var(--w-s-color-border-inverted) |
| s-divide-focus | AB | border-color: var(--w-s-color-border-focus) (v2) |
| s-divide-focused |  | Replaced by s-divide-focus in v2 |
| s-divide-strong | AB | border-color: var(--w-s-color-border-strong) |
| s-divide-strong-hover | AB | border-color: var(--w-s-color-border-strong-hover) |
| s-divide-primary | AB | border-color: var(--w-s-color-border-primary) |
| s-divide-primary-hover | AB | border-color: var(--w-s-color-border-primary-hover) |
| s-divide-primary-active | AB | border-color: var(--w-s-color-border-primary-active) |
| s-divide-primary-subtle | AB | border-color: var(--w-s-color-border-primary-subtle) |
| s-divide-primary-subtle-hover | AB | border-color: var(--w-s-color-border-primary-subtle-hover) |
| s-divide-primary-subtle-active | AB | border-color: var(--w-s-color-border-primary-subtle-active) |
| s-divide-secondary | AB | border-color: var(--w-s-color-border-secondary) |
| s-divide-secondary-hover | AB | border-color: var(--w-s-color-border-secondary-hover) |
| s-divide-secondary-active | AB | border-color: var(--w-s-color-border-secondary-active) |
| s-divide-positive | AB | border-color: var(--w-s-color-border-positive) |
| s-divide-positive-hover | AB | border-color: var(--w-s-color-border-positive-hover) |
| s-divide-positive-active | AB | border-color: var(--w-s-color-border-positive-active) |
| s-divide-positive-subtle | AB | border-color: var(--w-s-color-border-positive-subtle) |
| s-divide-positive-subtle-hover | AB | border-color: var(--w-s-color-border-positive-subtle-hover) |
| s-divide-positive-subtle-active | AB | border-color: var(--w-s-color-border-positive-subtle-active) |
| s-divide-negative | AB | border-color: var(--w-s-color-border-negative) |
| s-divide-negative-hover | AB | border-color: var(--w-s-color-border-negative-hover) |
| s-divide-negative-active | AB | border-color: var(--w-s-color-border-negative-active) |
| s-divide-negative-selected |  | Replaced by s-divide-negative in v2 |
| s-divide-negative-selected-hover |  | Replaced by s-divide-negative in v2 |
| s-divide-negative-subtle | AB | border-color: var(--w-s-color-border-negative-subtle) |
| s-divide-negative-subtle-hover | AB | border-color: var(--w-s-color-border-negative-subtle-hover) |
| s-divide-negative-subtle-active | AB | border-color: var(--w-s-color-border-negative-subtle-active) |
| s-divide-warning | AB | border-color: var(--w-s-color-border-warning) |
| s-divide-warning-hover | AB | border-color: var(--w-s-color-border-warning-hover) |
| s-divide-warning-active | AB | border-color: var(--w-s-color-border-warning-active) |
| s-divide-warning-subtle | AB | border-color: var(--w-s-color-border-warning-subtle) |
| s-divide-warning-subtle-hover | AB | border-color: var(--w-s-color-border-warning-subtle-hover) |
| s-divide-warning-subtle-active | AB | border-color: var(--w-s-color-border-warning-subtle-active) |
| s-divide-info | AB | border-color: var(--w-s-color-border-info) |
| s-divide-info-hover | AB | border-color: var(--w-s-color-border-info-hover) |
| s-divide-info-active | AB | border-color: var(--w-s-color-border-info-active) |
| s-divide-info-subtle | AB | border-color: var(--w-s-color-border-info-subtle) |
| s-divide-info-subtle-hover | AB | border-color: var(--w-s-color-border-info-subtle-hover) |
| s-divide-info-subtle-active | AB | border-color: var(--w-s-color-border-info-subtle-active) |

Control the border color between elements using the `s-divide-{semantic color}` utilities specified in the table above.

```html
<div class="divide-x-4 s-divide-primary">
  <!-- ... -->
</div>
```

Avoid conflicts with potential other borders, on the elements you wish to have dividers between, by adding a direction to the utility class: `s-divide-{x|y}-{semantic color}`.

```html
<div class="divide-x-4 s-divide-x-primary">
  <div class="border-b-4">01</div>
  <div class="border-b-4">02</div>
  <div class="border-b-4">03</div>
</div>
```

If you need to use a one-off `divide-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However, we recommend only using our semantic color tokens. This also works with or without an optional, but recommended, direction. `divide-{x|y}-[{any color value or css var}]`

```html
<div class="divide-y-[--w-s-color-text]"></div>
```

It is possible to control the opacity of the divide color by adding an optional alpha modifier. The modifier accepts any integer percentage value between 0 and 100. This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

Warning

Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.

```html
<div class="divide-x-8 s-divide-x-primary-subtle/60 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
<div class="divide-y-8 divide-y-[--w-white/60] ...">
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```
