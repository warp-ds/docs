# Font Variant Numeric

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/font-variant-numeric

> Typography

Utilities for controlling the variant of numbers.

| Class | Description |
| --- | --- |
| normal-nums | Unsupported |
| tabular-nums | font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif font-variant-numeric: tabular-nums |
| ordinal | font-variant-numeric: ordinal |
| slashed-zero | font-variant-numeric: slashed-zero |
| lining-nums | font-variant-numeric: lining-nums |
| oldstyle-nums | font-variant-numeric: oldstyle-nums |
| proportional-nums | font-variant-numeric: proportional-nums |

`normal-nums` not yet supported

This class is not yet supported! If you need this, reach out to us on [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).

Use the `tabular-nums` to activating the set of figures where numbers are all the same size, allowing them to be easily aligned like in tables. (The font in use has to have support for this, like `font-mono`).

```html
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Scientist</th>
      <th># Coffee</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Justina Matter</td>
      <td class="tabular-nums font-mono ...">1 111 111</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Narve Hoops</td>
      <td class="tabular-nums font-mono ...">4 444 444</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Dagny Calamity</td>
      <td class="tabular-nums font-mono ...">88 888 888</td>
    </tr>
  </tbody>
</table>
```
