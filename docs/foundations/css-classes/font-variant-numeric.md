> Typography

# Font Variant Numeric

Utilities for controlling the variant of numbers.

## Quick reference

<qr-table />

::: warning `normal-nums` not yet supported
This class is not yet supported! If you need this, reach out to us on [#smp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Basic usage

### Applying numeric variants
Use the `tabular-nums` to activating the set of figures where numbers are all the same size, allowing them to be easily aligned like in tables. (The font in use has to have support for this, like `font-mono`).

<!--
TODO: Discuss the support for this in warp.
We might to have to theme this somehow, these fonts might look too different to some of the brand fonts and perhaps need different weights to match them better to the brand font.
-->

<example-container>
  <h4>With tabular-nums + font-mono</h4>
  <table class="docs-table mb-16">
    <thead>
      <tr>
        <th>#</th>
        <th>Scientist</th>
        <th class="text-right!"># Coffee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Justina Matter</td>
        <td class="tabular-nums font-mono text-right">1 111 111</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Narve Hoops</td>
        <td class="tabular-nums font-mono text-right">4 444 444</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Dagny Calamity</td>
        <td class="tabular-nums font-mono text-right">88 888 888</td>
      </tr>
    </tbody>
  </table>
  <h4>Without tabular-nums + font-mono</h4>
  <table class="docs-table mb-16">
    <thead>
      <tr>
        <th>#</th>
        <th>Scientist</th>
        <th class="text-right!"># Coffee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Justina Matter</td>
        <td class="text-right">1 111 111</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Narve Hoops</td>
        <td class="text-right">4 444 444</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Dagny Calamity</td>
        <td class="text-right">88 888 888</td>
      </tr>
    </tbody>
  </table>
</example-container>

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
