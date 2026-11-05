> Borders

# Outline Color

Utilities for controlling the color of an outline of an element.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

| Class | Color | Description |
|-------|-------|-------------|
| outline-inherit | | outline-color: inherit |
| outline-current | | outline-color: currentColor |
| outline-transparent | | outline-color: transparent |
| s-outline | <div class="s-bg p-10 td-reset"><div class="s-outline outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border) |
| s-outline-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-hover) |
| s-outline-active | <div class="s-bg p-10 td-reset"><div class="s-outline-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-active) |
| s-outline-disabled | <div class="s-bg p-10 td-reset"><div class="s-outline-disabled outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-disabled) |
| s-outline-selected | <div class="s-bg p-10 td-reset"><div class="s-outline-selected outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-selected) |
| s-outline-selected-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-selected-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-selected-hover) |
| s-outline-inverted | <div class="s-bg-inverted p-10 td-reset"><div class="s-outline-inverted outline outline-4 outline-offset-2 h-24 w-64 rounded-8"></div></div> | outline-color: var(--w-s-color-border-inverted) |
| s-outline-focus | <div class="s-bg p-10 td-reset"><div class="s-outline-focus outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-focus) *(v2)* |
| ~~s-outline-focused~~ | | Replaced by `s-outline-focus` in v2 |
| s-outline-strong | <div class="s-bg p-10 td-reset"><div class="s-outline-strong outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-strong) |
| s-outline-strong-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-strong-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-strong-hover) |
| s-outline-primary | <div class="s-bg p-10 td-reset"><div class="s-outline-primary outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-primary) |
| s-outline-primary-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-primary-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-primary-hover) |
| s-outline-primary-active | <div class="s-bg p-10 td-reset"><div class="s-outline-primary-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-primary-active) |
| s-outline-primary-subtle | <div class="s-bg p-10 td-reset"><div class="s-outline-primary-subtle outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-primary-subtle) |
| s-outline-primary-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-primary-subtle-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-primary-subtle-hover) |
| s-outline-primary-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-outline-primary-subtle-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-primary-subtle-active) |
| s-outline-secondary | <div class="s-bg p-10 td-reset"><div class="s-outline-secondary outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-secondary) |
| s-outline-secondary-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-secondary-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-secondary-hover) |
| s-outline-secondary-active | <div class="s-bg p-10 td-reset"><div class="s-outline-secondary-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-secondary-active) |
| s-outline-positive | <div class="s-bg p-10 td-reset"><div class="s-outline-positive outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-positive) |
| s-outline-positive-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-positive-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-positive-hover) |
| s-outline-positive-active | <div class="s-bg p-10 td-reset"><div class="s-outline-positive-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-positive-active) |
| s-outline-positive-subtle | <div class="s-bg p-10 td-reset"><div class="s-outline-positive-subtle outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-positive-subtle) |
| s-outline-positive-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-positive-subtle-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-positive-subtle-hover) |
| s-outline-positive-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-outline-positive-subtle-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-positive-subtle-active) |
| s-outline-negative | <div class="s-bg p-10 td-reset"><div class="s-outline-negative outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-negative) |
| s-outline-negative-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-negative-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-negative-hover) |
| s-outline-negative-active | <div class="s-bg p-10 td-reset"><div class="s-outline-negative-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-negative-active) |
| ~~s-outline-negative-selected~~ | | Replaced by `s-outline-negative` in v2 |
| ~~s-outline-negative-selected-hover~~ | | Replaced by `s-outline-negative` in v2 |
| s-outline-negative-subtle | <div class="s-bg p-10 td-reset"><div class="s-outline-negative-subtle outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-negative-subtle) |
| s-outline-negative-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-negative-subtle-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-negative-subtle-hover) |
| s-outline-negative-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-outline-negative-subtle-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-negative-subtle-active) |
| s-outline-warning | <div class="s-bg p-10 td-reset"><div class="s-outline-warning outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-warning) |
| s-outline-warning-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-warning-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-warning-hover) |
| s-outline-warning-active | <div class="s-bg p-10 td-reset"><div class="s-outline-warning-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-warning-active) |
| s-outline-warning-subtle | <div class="s-bg p-10 td-reset"><div class="s-outline-warning-subtle outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-warning-subtle) |
| s-outline-warning-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-warning-subtle-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-warning-subtle-hover) |
| s-outline-warning-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-outline-warning-subtle-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-warning-subtle-active) |
| s-outline-info | <div class="s-bg p-10 td-reset"><div class="s-outline-info outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-info) |
| s-outline-info-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-info-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-info-hover) |
| s-outline-info-active | <div class="s-bg p-10 td-reset"><div class="s-outline-info-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-info-active) |
| s-outline-info-subtle | <div class="s-bg p-10 td-reset"><div class="s-outline-info-subtle outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-info-subtle) |
| s-outline-info-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-outline-info-subtle-hover outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-info-subtle-hover) |
| s-outline-info-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-outline-info-subtle-active outline outline-4 outline-offset-2 h-24 w-64 rounded-8 s-bg"></div></div> | outline-color: var(--w-s-color-border-info-subtle-active) |

## Basic usage

### Setting the outline color
Control the outline color of an element using the `s-outline-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="s-outline-focus s-bg h-80 w-80 rounded-4 outline outline-offset-2 outline-4"></div>
  </div>
</example-container>

```html
<div class="s-outline-focus outline-4 ..."></div>
```

### Arbitrary values
If you need to use a one-off `outline-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However, we recommend only using our semantic color tokens.

```html
<div class="outline-[--w-s-color-border]">
  <!-- ... -->
</div>
```

### Opacity
It is possible to control the opacity of an element’s outline color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.
:::

<example-container class="bg-center bg-[url(../../images/50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center my-8">
    <div class="s-outline/50 hover:s-outline/100 s-bg backdrop-blur-m h-80 w-80 rounded-4 outline outline-offset-4 outline-8 transition-all ease-in-out duration-700"></div>
    <div class="s-outline-focus/50 hover:s-outline-focus/100 s-bg backdrop-blur-m h-80 w-80 rounded-4 outline outline-offset-4 outline-8 transition-all ease-in-out duration-700"></div>
    <div class="outline-[--w-s-color-background-positive/40] hover:outline-[--w-s-color-background-positive/100] s-bg backdrop-blur-m h-80 w-80 rounded-4 outline outline-offset-4 outline-8 transition-all ease-in-out duration-700"></div>
    <div class="outline-[--w-black/40] hover:outline-[--w-black/100] s-bg backdrop-blur-m h-80 w-80 rounded-4 outline outline-offset-4 outline-8 transition-all ease-in-out duration-700"></div>
  </div>
</example-container>

```html
<div class="s-outline/50 hover:s-outline/100 ..."></div>
<div class="s-outline-focus/50 hover:s-outline-focus/100 ..."></div>
<div class="outline-[--w-s-color-background-positive/40] hover:bg-[--w-s-color-background-positive/100] ..."></div>
<div class="outline-[--w-black/40] hover:outline-[--w-black/100] ..."></div>
```

## Applying conditionally

### Hover, focus and other states
Conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-outline-active` to only apply the `s-outline-active` utility on hover.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="s-outline hover:s-outline-hover s-bg h-80 w-80 rounded-4 outline outline-offset-2 outline-4"></div>
   </div>
</example-container>

```html
<div class="s-outline hover:s-outline-hover ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:s-outline-positive` to apply the `s-outline-positive` utility at only medium screen sizes and above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="s-outline md:s-outline-positive s-bg h-80 w-80 rounded-4 outline outline-offset-2 outline-4"></div>
   </div>
</example-container>

```html
<div class="s-outline md:s-outline-positive ..."></div>
```
