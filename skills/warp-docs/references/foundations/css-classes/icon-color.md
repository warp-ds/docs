# Icon Color

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/icon-color

> Iconography

Utilities for controlling the icon color.

s-prefix

The `s-` (semantic) prefix signals that the color value of these will change with the brand css.

| Class | Color | Description |
| --- | --- | --- |
| s-icon |  | color: var(--w-s-color-icon) |
| s-icon-static |  | color: var(--w-s-color-icon-static) (v2) |
| s-icon-hover |  | color: var(--w-s-color-icon-hover) |
| s-icon-active |  | color: var(--w-s-color-icon-active) |
| s-icon-selected |  | color: var(--w-s-color-icon-selected) |
| s-icon-selected-hover |  | color: var(--w-s-color-icon-selected-hover) |
| s-icon-disabled |  | color: var(--w-s-color-icon-disabled) |
| s-icon-subtle |  | color: var(--w-s-color-icon-subtle) |
| s-icon-subtle-hover |  | color: var(--w-s-color-icon-subtle-hover) |
| s-icon-subtle-active |  | color: var(--w-s-color-icon-subtle-active) |
| s-icon-inverted |  | color: var(--w-s-color-icon-inverted) |
| s-icon-inverted-static |  | color: var(--w-s-color-icon-inverted-static) (v2) |
| s-icon-inverted-hover |  | color: var(--w-s-color-icon-inverted-hover) |
| s-icon-inverted-active |  | color: var(--w-s-color-icon-inverted-active) |
| s-icon-primary |  | color: var(--w-s-color-icon-primary) |
| s-icon-secondary |  | color: var(--w-s-color-icon-secondary) |
| s-icon-secondary-hover |  | color: var(--w-s-color-icon-secondary-hover) |
| s-icon-secondary-active |  | color: var(--w-s-color-icon-secondary-active) |
| s-icon-positive |  | color: var(--w-s-color-icon-positive) |
| s-icon-negative |  | color: var(--w-s-color-icon-negative) |
| s-icon-warning |  | color: var(--w-s-color-icon-warning) |
| s-icon-info |  | color: var(--w-s-color-icon-info) |
| s-icon-notification |  | Replaced by s-icon-inverted-static in v2 |

New in v2

To cater for upcoming dark mode, we've added two classes.  
Whenever you have an icon that should be "black" in both light and dark mode, use `s-icon-static`.  
If you have an icon that should be "white" in both light and dark mode, use `s-icon-inverted-static`.

Control the color of an icon using the `s-icon-{semantic color}` utilities specified in the table above.

```html
<w-icon name="StarFull" size="64px" class="s-icon ..." />
<w-icon name="StarFull" size="64px" class="s-icon-primary ..." />
<w-icon name="StarFull" size="64px" class="s-icon-positive ..." />
<w-icon name="StarFull" size="64px" class="s-icon-warning ..." />
```

If you need to use a one-off `icon-{color}` value, use the text utility class with square brackets to set the `color` css property. We recommend only using our semantic color tokens for this.

```html
<p class="text-[--w-s-color-border]"></p>
```

It is possible to control the opacity of the icon color by adding an optional alpha modifier. The modifier accepts any integer percentage value between 0 and 100. This works for the semantic icon classes, and you can also use the arbitrary text classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

Warning

Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.

The examples below are inaccessible and purely for technical reference. Always make sure to have sufficient contrast.

```html
<w-icon name="StarFull" size="64px" class="s-icon/60 hover:s-icon/100 ..." />
<w-icon name="StarFull" size="64px" class="s-icon-primary/60 hover:s-icon-primary/100 ... ..." />
<w-icon name="StarFull" size="64px" class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] ..." />
<w-icon name="StarFull" size="64px" class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] ..." />
```
