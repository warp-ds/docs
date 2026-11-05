> Iconography

# Icon Color

Utilities for controlling the icon color.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

| Class | Color | Description |
|-------|-------|-------------|
| s-icon | <div class="s-bg p-10 td-reset"><div class="s-icon text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon) |
| s-icon-hover | <div class="s-bg p-10 td-reset"><div class="s-icon-hover text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-hover) |
| s-icon-active | <div class="s-bg p-10 td-reset"><div class="s-icon-active text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-active) |
| s-icon-selected | <div class="s-bg p-10 td-reset"><div class="s-icon-selected text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-selected) |
| s-icon-selected-hover | <div class="s-bg p-10 td-reset"><div class="s-icon-selected-hover text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-selected-hover) |
| s-icon-disabled | <div class="s-bg p-10 td-reset"><div class="s-icon-disabled text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-disabled) |
| s-icon-subtle | <div class="s-bg p-10 td-reset"><div class="s-icon-subtle text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-subtle) |
| s-icon-subtle-hover | <div class="s-bg p-10 td-reset"><div class="s-icon-subtle-hover text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-subtle-hover) |
| s-icon-subtle-active | <div class="s-bg p-10 td-reset"><div class="s-icon-subtle-active text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-subtle-active) |
| s-icon-primary | <div class="s-bg p-10 td-reset"><div class="s-icon-primary text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-primary) |
| s-icon-secondary | <div class="s-bg p-10 td-reset"><div class="s-icon-secondary text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-secondary) |
| s-icon-secondary-hover | <div class="s-bg p-10 td-reset"><div class="s-icon-secondary-hover text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-secondary-hover) |
| s-icon-secondary-active | <div class="s-bg p-10 td-reset"><div class="s-icon-secondary-active text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-secondary-active) |
| s-icon-positive | <div class="s-bg p-10 td-reset"><div class="s-icon-positive text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-positive) |
| s-icon-negative | <div class="s-bg p-10 td-reset"><div class="s-icon-negative text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-negative) |
| s-icon-warning | <div class="s-bg p-10 td-reset"><div class="s-icon-warning text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-warning) |
| s-icon-info | <div class="s-bg p-10 td-reset"><div class="s-icon-info text-center"><w-icon name="StarFull"></w-icon></div></div> | color: var(--w-s-color-icon-info) |
| ~~s-icon-notification~~ | | Replaced by `s-icon-inverted-static` in v2 |

### Static and inverted static variants

All of the classes in the quick reference have two additional variants to cater for areas of the page that should not change between light and dark mode.

- The `static` suffix.
- The `inverted` modifier.

The format is always `s-icon(-inverted)-<name>(-static)` where `<name>` is what comes after `s-icon` in the quick reference.

For example, to get a positive icon that stays in its light mode form even in dark mode, use this class:

```css
.s-icon-positive-static
```

To always get its `inverted` (dark mode) form, use the `inverted` modifier.

```css
.s-icon-inverted-positive-static
```

To get its inverted form in light mode but have it change to its light mode counterpart in dark mode then only use the `inverted` modifier:

```css
.s-icon-inverted-positive
```

The active and hover states for interactive icons work the same way:

```css
.s-icon-secondary-static,
.s-icon-secondary-hover-static,
.s-icon-secondary-active-static
```

```css
.s-icon-inverted-secondary-static,
.s-icon-inverted-secondary-hover-static,
.s-icon-inverted-secondary-active-static
```

## Basic usage

### Setting the icon color
Control the color of an icon using the `s-icon-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <w-icon name="StarFull" size="64px" class="s-icon text-xxl" />
    <w-icon name="StarFull" size="64px" class="s-icon-primary text-xxl" />
    <w-icon name="StarFull" size="64px" class="s-icon-positive text-xxl" />
    <w-icon name="StarFull" size="64px" class="s-icon-warning text-xxl" />
  </div>
</example-container>

```html
<w-icon name="StarFull" size="64px" class="s-icon ..." />
<w-icon name="StarFull" size="64px" class="s-icon-primary ..." />
<w-icon name="StarFull" size="64px" class="s-icon-positive ..." />
<w-icon name="StarFull" size="64px" class="s-icon-warning ..." />
```

### Arbitrary values
If you need to use a one-off `icon-{color}` value, use the text utility class with square brackets to set the `color` css property.
We recommend only using our semantic color tokens for this.

```html
<p class="text-[--w-s-color-border]"></p>
```

### Opacity
It is possible to control the opacity of the icon color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for the semantic icon classes, and you can also use the arbitrary text classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.

The examples below are inaccessible and purely for technical reference.
Always make sure to have sufficient contrast.
:::

<example-container class="bg-center bg-[url(../../images/50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="s-icon/60 hover:s-icon/100 transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16"><w-icon name="StarFull" size="64px" /></div>
    <div class="s-icon-primary/60 hover:s-icon-primary/100 transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16"><w-icon name="StarFull" size="64px" /></div>
    <div class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16"><w-icon name="StarFull" size="64px" /></div>
    <div class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16"><w-icon name="StarFull" size="64px" /></div>
  </div>
</example-container>

```html
<w-icon name="StarFull" size="64px" class="s-icon/60 hover:s-icon/100 ..." />
<w-icon name="StarFull" size="64px" class="s-icon-primary/60 hover:s-icon-primary/100 ... ..." />
<w-icon name="StarFull" size="64px" class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] ..." />
<w-icon name="StarFull" size="64px" class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] ..." />
```
