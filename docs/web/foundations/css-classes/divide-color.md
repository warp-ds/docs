> Borders

# Divide Color
Utilities for controlling the border color between elements.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

| Class | Color | Description |
|-------|-------|-------------|
| divide-inherit | | border-color: inherit |
| divide-current | | border-color: currentColor |
| divide-transparent | | border-color: transparent |
| s-divide | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border) |
| s-divide-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-hover) |
| s-divide-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-active) |
| s-divide-disabled | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-disabled"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-disabled) |
| s-divide-selected | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-selected"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-selected) |
| s-divide-selected-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-selected-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-selected-hover) |
| s-divide-inverted | <div class="s-bg-inverted s-text-inverted p-10 td-reset"><div class="flex divide-x-4 s-divide-inverted s-text-inverted"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-inverted) |
| s-divide-focus | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-focus"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-focus) *(v2)* |
| ~~s-divide-focused~~ | | Replaced by `s-divide-focus` in v2 |
| s-divide-strong | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-strong"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-strong) |
| s-divide-strong-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-strong-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-strong-hover) |
| s-divide-primary | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-primary"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-primary) |
| s-divide-primary-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-primary-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-primary-hover) |
| s-divide-primary-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-primary-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-primary-active) |
| s-divide-primary-subtle | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-primary-subtle"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-primary-subtle) |
| s-divide-primary-subtle-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-primary-subtle-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-primary-subtle-hover) |
| s-divide-primary-subtle-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-primary-subtle-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-primary-subtle-active) |
| s-divide-secondary | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-secondary"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-secondary) |
| s-divide-secondary-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-secondary-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-secondary-hover) |
| s-divide-secondary-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-secondary-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-secondary-active) |
| s-divide-positive | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-positive"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-positive) |
| s-divide-positive-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-positive-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-positive-hover) |
| s-divide-positive-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-positive-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-positive-active) |
| s-divide-positive-subtle | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-positive-subtle"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-positive-subtle) |
| s-divide-positive-subtle-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-positive-subtle-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-positive-subtle-hover) |
| s-divide-positive-subtle-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-positive-subtle-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-positive-subtle-active) |
| s-divide-negative | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-negative"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-negative) |
| s-divide-negative-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-negative-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-negative-hover) |
| s-divide-negative-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-negative-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-negative-active) |
| ~~s-divide-negative-selected~~ | | Replaced by `s-divide-negative` in v2 |
| ~~s-divide-negative-selected-hover~~ | | Replaced by `s-divide-negative` in v2 |
| s-divide-negative-subtle | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-negative-subtle"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-negative-subtle) |
| s-divide-negative-subtle-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-negative-subtle-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-negative-subtle-hover) |
| s-divide-negative-subtle-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-negative-subtle-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-negative-subtle-active) |
| s-divide-warning | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-warning"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-warning) |
| s-divide-warning-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-warning-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-warning-hover) |
| s-divide-warning-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-warning-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-warning-active) |
| s-divide-warning-subtle | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-warning-subtle"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-warning-subtle) |
| s-divide-warning-subtle-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-warning-subtle-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-warning-subtle-hover) |
| s-divide-warning-subtle-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-warning-subtle-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-warning-subtle-active) |
| s-divide-info | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-info"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-info) |
| s-divide-info-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-info-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-info-hover) |
| s-divide-info-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-info-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-info-active) |
| s-divide-info-subtle | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-info-subtle"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-info-subtle) |
| s-divide-info-subtle-hover | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-info-subtle-hover"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-info-subtle-hover) |
| s-divide-info-subtle-active | <div class="s-bg s-text p-10 td-reset"><div class="flex divide-x-4 s-divide-info-subtle-active"><div class="px-8">A</div><div class="px-8">B</div></div></div> | border-color: var(--w-s-color-border-info-subtle-active) |

## Basic usage

### Setting the divide color
Control the border color between elements using the `s-divide-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="flex justify-items-stretch rounded-8 divide-x-4 s-divide-primary w-full">
    <div class="p-24 flex-1 text-center s-text-inverted">01</div>
    <div class="p-24 flex-1 text-center s-text-inverted">02</div>
    <div class="p-24 flex-1 text-center s-text-inverted">03</div>
  </div>
</example-container>

```html{1}
<div class="divide-x-4 s-divide-primary">
  <!-- ... -->
</div>
```

### Horizontal and vertical dividers

Avoid conflicts with potential other borders, on the elements you wish to have dividers between,
by adding a direction to the utility class: `s-divide-{x|y}-{semantic color}`.

<example-container>
  <div class="flex justify-items-stretch rounded-8 divide-x-4 s-divide-x-primary w-full">
    <div class="p-24 flex-1 text-center border-b-4 s-text-inverted">01</div>
    <div class="p-24 flex-1 text-center border-b-4 s-text-inverted">02</div>
    <div class="p-24 flex-1 text-center border-b-4 s-text-inverted">03</div>
  </div>
</example-container>

```html
<div class="divide-x-4 s-divide-x-primary">
  <div class="border-b-4">01</div>
  <div class="border-b-4">02</div>
  <div class="border-b-4">03</div>
</div>
```

### Arbitrary values
If you need to use a one-off `divide-{color}` value, use square brackets to generate a property on the fly using any arbitrary value.
However, we recommend only using our semantic color tokens.
This also works with or without an optional, but recommended, direction.
`divide-{x|y}-[{any color value or css var}]`

```html
<div class="divide-y-[--w-s-color-text]"></div>
```

### Opacity
It is possible to control the opacity of the divide color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.
:::

<example-container class="bg-center bg-[url(../../images/50s-scientists.jpg)]">
  <div class="flex justify-items-stretch rounded-8 divide-x-8 s-divide-x-primary-subtle/60 w-full mb-24 overflow-hidden">
    <div class="flex-1"><div class="p-24 text-center ex-font-dark s-bg/80 backdrop-blur-m">01</div></div>
    <div class="flex-1"><div class="p-24 text-center ex-font-dark s-bg/80 backdrop-blur-m">02</div></div>
    <div class="flex-1"><div class="p-24 text-center ex-font-dark s-bg/80 backdrop-blur-m">03</div></div>
  </div>
  <div class="rounded-8 divide-y-8 divide-y-[--w-white/60] overflow-hidden">
    <div><div class="px-24 py-8 text-center ex-font-dark s-bg/80 backdrop-blur-m">04</div></div>
    <div><div class="px-24 py-8 text-center ex-font-dark s-bg/80 backdrop-blur-m">05</div></div>
    <div><div class="px-24 py-8 text-center ex-font-dark s-bg/80 backdrop-blur-m">06</div></div>
  </div>
</example-container>

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
