# Table Layout

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/table-layout

> Tables

Utilities for controlling the table layout algorithm.

| Class | Description |
| --- | --- |
| table-auto | table-layout: auto |
| table-fixed | table-layout: fixed |

Use `table-auto` to allow the table to automatically size columns to fit the contents of the cell.

```html
<table class="table-auto ...">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>Manic Depression</td>
        <td>Jimi Hendrix</td>
        <td>1967</td>
      </tr>
      <tr>
        <td>(Ballad Of) The Hip Death Goddess</td>
        <td>Ultimate Spinach</td>
        <td>1968</td>
      </tr>
      <tr>
        <td>Sonic Prayer</td>
        <td>Earthless</td>
        <td>2017</td>
      </tr>
  </tbody>
</table>
```

Use `table-fixed` to allow the table to ignore the content and use fixed widths for columns. The width of the first row will set the column widths for the whole table.

You can manually set the widths for some columns and the rest of the available width will be divided evenly amongst the columns without explicit width.

```html
<table class="table-fixed ...">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>Manic Depression</td>
        <td>Jimi Hendrix</td>
        <td>1967</td>
      </tr>
      <tr>
        <td>(Ballad Of) The Hip Death Goddess</td>
        <td>Ultimate Spinach</td>
        <td>1968</td>
      </tr>
      <tr>
        <td>Sonic Prayer</td>
        <td>Earthless</td>
        <td>2017</td>
      </tr>
  </tbody>
</table>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:table-fixed` to apply the `table-fixed` utility at only medium screen sizes and above.

```html
<table class="md:table-fixed">
  <!-- ... -->
</table>
```
