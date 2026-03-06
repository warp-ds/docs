> Borders

# Border Color

Utilities for controlling the color of an element's borders.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

| Class | Color | Description |
|-------|-------|-------------|
| border-inherit | <div class="s-bg p-10 td-reset"><div class="border-inherit  border-4 h-24 w-64 rounded-8"></div></div> | border-color: inherit |
| border-current | <div class="s-bg p-10 td-reset"><div class="border-current border-4 h-24 w-64 rounded-8"></div></div> | border-color: currentColor |
| border-transparent | <div class="s-bg p-10 td-reset"><div class="border-transparent border-4 h-24 w-64 rounded-8"></div></div> | border-color: transparent |
| s-border | <div class="s-bg p-10 td-reset"><div class="s-border border-4 h-24 w-64 px-8 text-center rounded-8"><!----></div></div> | border-color: var(--w-s-color-border) |
| s-border-hover | <div class="s-bg p-10 td-reset"><div class="s-border-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-hover) |
| s-border-active | <div class="s-bg p-10 td-reset"><div class="s-border-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-active) |
| s-border-disabled | <div class="s-bg p-10 td-reset"><div class="s-border-disabled border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-disabled) |
| s-border-selected | <div class="s-bg p-10 td-reset"><div class="s-border-selected border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-selected) |
| s-border-selected-hover | <div class="s-bg p-10 td-reset"><div class="s-border-selected-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-selected-hover) |
| s-border-inverted | <div class="s-bg-inverted p-10 td-reset"><div class="s-border-inverted border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-inverted) |
| s-border-focus | <div class="s-bg p-10 td-reset"><div class="s-border-focus border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-focus) *(v2)* |
| ~~s-border-focused~~ | | Replaced by `s-border-focus` in v2 |
| s-border-strong | <div class="s-bg p-10 td-reset"><div class="s-border-strong border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-strong) |
| s-border-strong-hover | <div class="s-bg p-10 td-reset"><div class="s-border-strong-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-strong-hover) |
| s-border-primary | <div class="s-bg p-10 td-reset"><div class="s-border-primary border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-primary) |
| s-border-primary-hover | <div class="s-bg p-10 td-reset"><div class="s-border-primary-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-primary-hover) |
| s-border-primary-active | <div class="s-bg p-10 td-reset"><div class="s-border-primary-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-primary-active) |
| s-border-primary-subtle | <div class="s-bg p-10 td-reset"><div class="s-border-primary-subtle border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-primary-subtle) |
| s-border-primary-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-border-primary-subtle-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-primary-subtle-hover) |
| s-border-primary-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-border-primary-subtle-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-primary-subtle-active) |
| s-border-secondary | <div class="s-bg p-10 td-reset"><div class="s-border-secondary border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-secondary) |
| s-border-secondary-hover | <div class="s-bg p-10 td-reset"><div class="s-border-secondary-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-secondary-hover) |
| s-border-secondary-active | <div class="s-bg p-10 td-reset"><div class="s-border-secondary-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-secondary-active) |
| s-border-positive | <div class="s-bg p-10 td-reset"><div class="s-border-positive border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-positive) |
| s-border-positive-hover | <div class="s-bg p-10 td-reset"><div class="s-border-positive-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-positive-hover) |
| s-border-positive-active | <div class="s-bg p-10 td-reset"><div class="s-border-positive-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-positive-active) |
| s-border-positive-subtle | <div class="s-bg p-10 td-reset"><div class="s-border-positive-subtle border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-positive-subtle) |
| s-border-positive-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-border-positive-subtle-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-positive-subtle-hover) |
| s-border-positive-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-border-positive-subtle-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-positive-subtle-active) |
| s-border-negative | <div class="s-bg p-10 td-reset"><div class="s-border-negative border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-negative) |
| s-border-negative-hover | <div class="s-bg p-10 td-reset"><div class="s-border-negative-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-negative-hover) |
| s-border-negative-active | <div class="s-bg p-10 td-reset"><div class="s-border-negative-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-negative-active) |
| ~~s-border-negative-selected~~ | | Replaced by `s-border-negative` in v2 |
| ~~s-border-negative-selected-hover~~ | | Replaced by `s-border-negative` in v2 |
| s-border-negative-subtle | <div class="s-bg p-10 td-reset"><div class="s-border-negative-subtle border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-negative-subtle) |
| s-border-negative-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-border-negative-subtle-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-negative-subtle-hover) |
| s-border-negative-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-border-negative-subtle-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-negative-subtle-active) |
| s-border-warning | <div class="s-bg p-10 td-reset"><div class="s-border-warning border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-warning) |
| s-border-warning-hover | <div class="s-bg p-10 td-reset"><div class="s-border-warning-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-warning-hover) |
| s-border-warning-active | <div class="s-bg p-10 td-reset"><div class="s-border-warning-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-warning-active) |
| s-border-warning-subtle | <div class="s-bg p-10 td-reset"><div class="s-border-warning-subtle border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-warning-subtle) |
| s-border-warning-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-border-warning-subtle-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-warning-subtle-hover) |
| s-border-warning-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-border-warning-subtle-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-warning-subtle-active) |
| s-border-info | <div class="s-bg p-10 td-reset"><div class="s-border-info border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-info) |
| s-border-info-hover | <div class="s-bg p-10 td-reset"><div class="s-border-info-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-info-hover) |
| s-border-info-active | <div class="s-bg p-10 td-reset"><div class="s-border-info-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-info-active) |
| s-border-info-subtle | <div class="s-bg p-10 td-reset"><div class="s-border-info-subtle border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-info-subtle) |
| s-border-info-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-border-info-subtle-hover border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-info-subtle-hover) |
| s-border-info-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-border-info-subtle-active border-4 h-24 w-64 rounded-8"></div></div> | border-color: var(--w-s-color-border-info-subtle-active) |

## Basic usage

### Setting the border color
Control the border color of an element using the `border-{transparent | inherit | current}` or `s-border-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-positive"></div>
  </div>
</example-container>

```html
<div class="s-border-positive border-4 rounded-16 ..."></div>
```

### Individual sides
Use the `border-{l|r|t|b}-{transparent|inherit|current}` or `s-border-{l|r|t|b}-{semantic color}` utilities to set the border color for only one side of an element.

<example-container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-l-positive"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-r-positive"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-t-positive"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-b-positive"></div>
  </div>
</example-container>

```html
<div class="s-border-l-positive border-4 ..."></div>
<div class="s-border-r-positive border-4 ..."></div>
<div class="s-border-t-positive border-4 ..."></div>
<div class="s-border-b-positive border-4 ..."></div>
```

### Horizontal and vertical sides
Use the `border-{x|y}-{transparent|inherit|current}` or `s-border-{x|y}-{semantic color}` utilities to set the border color on two sides of an element at the same time.

<example-container>
  <div class="grid grid-cols-2 gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-x-positive"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-y-positive"></div>
   </div>
</example-container>

```html
<div class="s-border-x-positive border-4 ..."></div>
<div class="s-border-y-positive border-4 ..."></div>
```

### Arbitrary values
If you need to use a one-off `border-{color}` value, use square brackets to generate a property on the fly using any arbitrary value.
However, we recommend only using our semantic color tokens.
This also works with or without an optional direction.
`border-{x|y|l|r|t|b}-[{any color value or css var}]`

```html
<div class="border-[--w-s-color-icon]">
  <!-- ... -->
</div>
```

### Opacity
It is possible to control the opacity of an element’s border color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.
:::

<example-container class="bg-center bg-[url(../../images/50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="s-border/50 hover:s-border/100 h-80 w-80 border-8 rounded-16 s-bg/10 backdrop-blur-m transition-colors ease-in-out duration-700"></div>
    <div class="s-border-t-primary/55 hover:s-border-t-primary/100 h-80 w-80 border-t-8 rounded-16 s-bg/50 backdrop-blur-m transition-colors ease-in-out duration-700"></div>
    <div class="border-x-[--w-s-color-background-positive/60] hover:border-x-[--w-s-color-background-positive/100] h-80 w-80 border-x-8 rounded-16 s-bg/50 backdrop-blur-m transition-colors ease-in-out duration-700"></div>
    <div class="border-y-[var(--w-black)/40] hover:border-y-[var(--w-black)/100] h-80 w-80 border-y-8 rounded-16 s-bg/50 backdrop-blur-m transition-colors ease-in-out duration-700"></div>
  </div>
</example-container>

```html
<div class="s-border/50 hover:s-border/100 ..."></div>
<div class="s-border-t-primary/55 hover:s-border-t-primary/100 ..."></div>
<div class="border-x-[--w-s-color-background-positive/60] hover:border-x-[--w-s-color-background-positive/100] ..."></div>
<div class="border-y-[var(--w-black)/40] hover:border-y-[var(--w-black)/100] ..."></div>
```

## Applying conditionally

### Hover, focus and other states
Conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-border-active` to only apply the `s-border-active` utility on hover.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border hover:s-border-hover"></div>
   </div>
</example-container>

```html
<div class="s-border hover:s-border-hover ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:s-border-positive` to apply the `s-border-positive` utility at only medium screen sizes and above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border md:s-border-positive"></div>
   </div>
</example-container>

```html
<div class="s-border md:s-border-positive ..."></div>
```
