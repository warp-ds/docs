# Vertical Align

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/vertical-align

> Typography

Utilities for controlling the vertical alignment of an inline or table-cell box.

| Class | Description |
| --- | --- |
| align-baseline | vertical-align: baseline |
| align-top | vertical-align: top |
| align-middle | vertical-align: middle |
| align-bottom | vertical-align: bottom |
| align-text-top | vertical-align: text-top |
| align-text-bottom | vertical-align: text-bottom |
| align-sub | vertical-align: sub |
| align-super | vertical-align: super |

Use `align-baseline` to align the baseline of an element with the baseline of its parent.

```html
<span class="inline-block align-baseline ...">Warp</span>
```

Use `align-top` to align the top of an element and its descendants with the top of the entire line.

Use `align-middle` to align the middle of an element with the baseline plus half the x-height of the parent.

Use `align-bottom` to align the bottom of an element and its descendants with the bottom of the entire line.

Use `align-text-top` to align the top of an element with the top of the parent element’s font.

Use `align-text-bottom` to align the bottom of an element with the bottom of the parent element’s font.

Use `align-sub` to align the bottom of an element with the subscript-baseline of its parent.

Use `align-super` to align the bottom of an element with the superscript-baseline of its parent.
