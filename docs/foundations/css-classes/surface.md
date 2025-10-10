> Elevation

# Surface

A concept used to visually differentiate the height (or depth) between elements.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

<surface-color-table />

## Basic usage

### Usage guide
Refer to the [Elevation guide](/foundations/elevation/) for more information about when to use elevation and when not to.

### Setting the elevation
Control the elevation of an element using the `s-surface-{sunken|elevated-100|elevated-200|elevated-300}` utilities as specified in the table above.

<ThemeSwitcher />
<example-container>
  <div class="s-bg s-text p-32">
    <div class="s-bg pb-32">.s-bg</div>
    <div class="s-surface-sunken p-16 mb-32 rounded-4">.s-surface-sunken</div>
    <div class="s-surface-elevated-100 p-16 mb-32 rounded-4">.s-surface-elevated-100</div>
    <div class="s-surface-elevated-200 p-16 mb-32 rounded-4">.s-surface-elevated-200</div>
    <div class="s-surface-elevated-300 p-16 mb-32 rounded-4">.s-surface-elevated-300</div>
    <div class="s-surface-elevated-100 p-16 rounded-4"><div>.s-surface-elevated-100</div>
      <div class="s-surface-elevated-200 p-16 rounded-4"><div>.s-surface-elevated-200</div>
        <div class="s-surface-elevated-300 p-16 rounded-4"><div>.s-surface-elevated-300</div>
        </div>
      </div>
    </div>
  </div>
</example-container>

```html
<div class="s-bg ...">
  <div class="s-surface-sunken ..."></div>
  <div class="s-surface-elevated-100 ..."></div>
  <div class="s-surface-elevated-200 ..."></div>
  <div class="s-surface-elevated-300 ..."></div>
</div>
```
