> Backgrounds

# Background Color

Utilities for controlling an element's background color.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

| Class | Color | Description |
|-------|-------|-------------|
| bg-inherit | | background-color: inherit |
| bg-current | | background-color: currentColor |
| bg-transparent | | background-color: transparent |
| s-bg | <div class="s-bg-inverted p-10 td-reset"><div class="s-bg h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background) |
| s-bg-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-hover) |
| s-bg-active | <div class="s-bg p-10 td-reset"><div class="s-bg-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-active) |
| s-bg-selected | <div class="s-bg p-10 td-reset"><div class="s-bg-selected h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-selected) |
| s-bg-selected-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-selected-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-selected-hover) |
| s-bg-disabled | <div class="s-bg p-10 td-reset"><div class="s-bg-disabled h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-disabled) |
| s-bg-inverted | <div class="s-bg p-10 td-reset"><div class="s-bg-inverted h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-inverted) |
| s-bg-subtle | <div class="s-bg p-10 td-reset"><div class="s-bg-subtle h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-subtle) |
| s-bg-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-subtle-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-subtle-hover) |
| s-bg-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-bg-subtle-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-subtle-active) |
| s-bg-primary | <div class="s-bg p-10 td-reset"><div class="s-bg-primary h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-primary) |
| s-bg-primary-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-primary-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-primary-hover) |
| s-bg-primary-active | <div class="s-bg p-10 td-reset"><div class="s-bg-primary-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-primary-active) |
| s-bg-primary-subtle | <div class="s-bg p-10 td-reset"><div class="s-bg-primary-subtle h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-primary-subtle) |
| s-bg-primary-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-primary-subtle-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-primary-subtle-hover) |
| s-bg-primary-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-bg-primary-subtle-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-primary-subtle-active) |
| s-bg-secondary | <div class="s-bg p-10 td-reset"><div class="s-bg-secondary h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-secondary) |
| s-bg-secondary-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-secondary-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-secondary-hover) |
| s-bg-secondary-active | <div class="s-bg p-10 td-reset"><div class="s-bg-secondary-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-secondary-active) |
| s-bg-positive | <div class="s-bg p-10 td-reset"><div class="s-bg-positive h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-positive) |
| s-bg-positive-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-positive-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-positive-hover) |
| s-bg-positive-active | <div class="s-bg p-10 td-reset"><div class="s-bg-positive-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-positive-active) |
| ~~s-bg-positive-selected~~ | | Replaced by `s-bg-positive` in v2 |
| ~~s-bg-positive-selected-hover~~ | | Replaced by `s-bg-positive` in v2 |
| s-bg-positive-subtle | <div class="s-bg p-10 td-reset"><div class="s-bg-positive-subtle h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-positive-subtle) |
| s-bg-positive-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-positive-subtle-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-positive-subtle-hover) |
| s-bg-positive-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-bg-positive-subtle-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-positive-subtle-active) |
| s-bg-negative | <div class="s-bg p-10 td-reset"><div class="s-bg-negative h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-negative) |
| s-bg-negative-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-negative-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-negative-hover) |
| s-bg-negative-active | <div class="s-bg p-10 td-reset"><div class="s-bg-negative-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-negative-active) |
| ~~s-bg-negative-selected~~ | | Replaced by `s-bg-negative` in v2 |
| ~~s-bg-negative-selected-hover~~ | | Replaced by `s-bg-negative` in v2 |
| s-bg-negative-subtle | <div class="s-bg p-10 td-reset"><div class="s-bg-negative-subtle h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-negative-subtle) |
| s-bg-negative-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-negative-subtle-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-negative-subtle-hover) |
| s-bg-negative-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-bg-negative-subtle-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-negative-subtle-active) |
| s-bg-warning | <div class="s-bg p-10 td-reset"><div class="s-bg-warning h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-warning) |
| s-bg-warning-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-warning-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-warning-hover) |
| s-bg-warning-active | <div class="s-bg p-10 td-reset"><div class="s-bg-warning-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-warning-active) |
| ~~s-bg-warning-selected~~ | | Replaced by `s-bg-warning` in v2 |
| ~~s-bg-warning-selected-hover~~ | | Replaced by `s-bg-warning` in v2 |
| s-bg-warning-subtle | <div class="s-bg p-10 td-reset"><div class="s-bg-warning-subtle h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-warning-subtle) |
| s-bg-warning-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-warning-subtle-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-warning-subtle-hover) |
| s-bg-warning-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-bg-warning-subtle-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-warning-subtle-active) |
| s-bg-info | <div class="s-bg p-10 td-reset"><div class="s-bg-info h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-info) |
| s-bg-info-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-info-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-info-hover) |
| s-bg-info-active | <div class="s-bg p-10 td-reset"><div class="s-bg-info-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-info-active) |
| ~~s-bg-info-selected~~ | | Replaced by `s-bg-info` in v2 |
| ~~s-bg-info-selected-hover~~ | | Replaced by `s-bg-info` in v2 |
| s-bg-info-subtle | <div class="s-bg p-10 td-reset"><div class="s-bg-info-subtle h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-info-subtle) |
| s-bg-info-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-bg-info-subtle-hover h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-info-subtle-hover) |
| s-bg-info-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-bg-info-subtle-active h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-info-subtle-active) |
| s-bg-notification | <div class="s-bg p-10 td-reset"><div class="s-bg-notification h-24 w-64 rounded-8"></div></div> | background-color: var(--w-s-color-background-notification) |

## Basic usage

### Setting the background color
Control the background color of an element using the `bg-{transparent|inherit|current}` or `s-bg-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="grid grid-cols-5 gap-16 justify-items-center">
    <div class="h-80 w-80 border rounded-16 s-bg"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-subtle"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-primary"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-positive"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-negative"></div>
  </div>
</example-container>

```html
<div class="s-bg ..."></div>
<div class="s-bg-subtle ..."></div>
<div class="s-bg-primary ..."></div>
<div class="s-bg-positive ..."></div>
<div class="s-bg-negative ..."></div>
```

### Arbitrary values
If you need to use a one-off `bg-{color}` value, use square brackets to generate a property on the fly using any arbitrary value.
However, we recommend only using our semantic color tokens.

```html
<div class="bg-[--w-s-color-background]"></div>
```

### Opacity
It is possible to control the opacity of an element’s background color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.
:::

<example-container class="bg-center bg-[url(../../images/50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="s-bg/20 hover:s-bg/100 border h-80 w-80 rounded-16 backdrop-blur-s transition-colors ease-in-out duration-700"></div>
    <div class="s-bg-primary/50 hover:s-bg-primary/100 h-80 w-80 rounded-16 backdrop-blur-s transition-colors ease-in-out duration-700"></div>
    <div class="bg-[--w-s-color-background-positive/40] hover:bg-[--w-s-color-background-positive/100] h-80 w-80 rounded-16 backdrop-blur-s transition-colors ease-in-out duration-700"></div>
    <div class="bg-[var(--w-black)/70] hover:bg-[var(--w-black)/100] h-80 w-80 rounded-16 backdrop-blur-s transition-colors ease-in-out duration-700"></div>
  </div>
</example-container>

```html
<div class="s-bg/20 hover:s-bg/100 ..."></div>
<div class="s-bg-primary/50 hover:s-bg-primary/100 ..."></div>
<div class="bg-[--w-s-color-background-positive/40] hover:bg-[--w-s-color-background-positive/100] ..."></div>
<div class="bg-[var(--w-black)/70] hover:bg-[var(--w-black)/100] ..."></div>
```

## Applying conditionally

### Hover, focus and other states
Conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-bg-hover` to only apply the `s-bg-hover` utility on hover.

<example-container>
  <div class="grid grid-cols-3 gap-16 justify-items-center">
    <div class="h-80 w-80 border rounded-16 s-bg hover:s-bg-hover active:s-bg-active"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-info hover:s-bg-info-hover active:s-bg-info-active"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-warning hover:s-bg-warning-hover active:s-bg-warning-active"></div>
  </div>
</example-container>

```html
<div class="s-bg hover:s-bg-hover active:s-bg-active ..."></div>
<div class="s-bg-info hover:s-bg-info-hover active:s-bg-info-active ..."></div>
<div class="s-bg-warning hover:s-bg-warning-hover active:s-bg-warning-active ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:s-bg-positive` to apply the `s-bg-positive` utility at only medium screen sizes and above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border rounded-16 s-bg md:s-bg-positive"></div>
  </div>
</example-container>

```html
<div class="s-bg md:s-bg-positive ..."></div>
```
