# Space Between

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/space-between

> Spacing

Utilities for controlling the space between child elements.

> Uses a `> * + *` Selector to target child elements

| Class | Description |
| --- | --- |
| space-x-{amount} | margin-right:{size} (Not on last child) |
| space-y-{amount} | margin-bottom:{size} (Not on last child) |
| space-x-reverse | Reverse space for space-x in combo with flex-row-reverse |
| space-y-reverse | Reverse space for space-y in combo with flex-col-reverse |

> Available values  
> `{amount}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144`  

Control the horizontal space between elements using the `space-x-{amount}` utilities.

```html
<div class="flex space-x-24 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Control the vertical space between elements using the `space-y-{amount}` utilities.

```html
<div class="flex flex-col space-y-16 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`), use the `space-x-reverse` or `space-y-reverse` utilities to ensure the space is added to the correct side of each element.

```html
<div class="flex flex-row-reverse space-x-24 space-x-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

To use a negative space value, prefix the class name with a dash to convert it to a negative value.

```html
<div class="flex -space-x-8 ...">
  <!-- ... -->
</div>
```

These utilities are really just a shortcut for adding margin to all-but-the-first-item in a group, and aren’t designed to handle complex cases like grids, layouts that wrap, or situations where the children are rendered in a complex custom order rather than their natural DOM order.

For those situations, it’s better to use the gap utilities when possible, or add margin to every element with a matching negative margin on the parent

```html
<div class="flow-root">
  <div class="-m-16 flex flex-wrap">
    <div class="m-16 ..."></div>
    <div class="m-16 ..."></div>
    <div class="m-16 ..."></div>
  </div>
</div>
```

The `space-*` utilities are not designed to work together with the [divide utilities](https://warp-ds.github.io/docs/foundations/css-classes/divide-width). For those situations, consider adding margin/padding utilities to the children instead.
