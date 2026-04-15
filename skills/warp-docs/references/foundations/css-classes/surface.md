# Surface

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/surface

> Elevation

A concept used to visually differentiate the height (or depth) between elements.

s-prefix

The `s-` (semantic) prefix signals that the color value of these will change with the brand css.

| Class | Color | Description |
| --- | --- | --- |
| s-surface-sunken |  | background-color: var(--w-s-color-surface-sunken) |
| s-surface-elevated-100 |  | background-color: var(--w-s-color-surface-elevated-100) |
| s-surface-elevated-200 |  | background-color: var(--w-s-color-surface-elevated-200) |
| s-surface-elevated-300 |  | background-color: var(--w-s-color-surface-elevated-300) |

Refer to the [Elevation guide](https://warp-ds.github.io/docs/foundations/elevation/) for more information about when to use elevation and when not to.

Control the elevation of an element using the `s-surface-{sunken|elevated-100|elevated-200|elevated-300}` utilities as specified in the table above.

```html
<div class="s-bg ...">
  <div class="s-surface-sunken ..."></div>
  <div class="s-surface-elevated-100 ..."></div>
  <div class="s-surface-elevated-200 ..."></div>
  <div class="s-surface-elevated-300 ..."></div>
</div>
```
