> Tables

# Table Layout

Utilities for controlling the table layout algorithm.

## Quick reference

| Class | Description |
|-------|-------------|
| `table-auto` | `table-layout: auto` |
| `table-fixed` | `table-layout: fixed` |

## Basic usage

### Auto
Use `table-auto` to allow the table to automatically size columns to fit the contents of the cell.

<example-container>
  <table class="table! table-auto border-collapse w-full pd-border pd-border-slate-400 dark:pd-border-slate-500 pd-bg-white dark:pd-bg-slate-800 pd-text-sm pd-shadow-xl">
    <thead class="pd-bg-slate-50 dark:pd-bg-slate-700">
      <tr>
        <th class="border pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold p-16 pd-text-slate-900 dark:pd-text-slate-200 text-left">Song</th>
        <th class="border pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold p-16 pd-text-slate-900 dark:pd-text-slate-200 text-left">Artist</th>
        <th class="border pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold p-16 pd-text-slate-900 dark:pd-text-slate-200 text-left">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Manic Depression</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Jimi Hendrix</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">1967</td>
      </tr>
      <tr>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">(Ballad Of) The Hip Death Goddess</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Ultimate Spinach</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">1968</td>
      </tr>
      <tr>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Sonic Prayer</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Earthless</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">2017</td>
      </tr>
    </tbody>
  </table>
</example-container>

```html{1}
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

### Fixed
Use `table-fixed` to allow the table to ignore the content and use fixed widths for columns. The width of the first row will set the column widths for the whole table.

You can manually set the widths for some columns and the rest of the available width will be divided evenly amongst the columns without explicit width.

<example-container>
  <table class="table! table-fixed border-collapse w-full pd-border pd-border-slate-400 dark:pd-border-slate-500 pd-bg-white dark:pd-bg-slate-800 pd-text-sm pd-shadow-xl">
    <thead class="pd-bg-slate-50 dark:pd-bg-slate-700">
      <tr>
        <th class="border pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold p-16 pd-text-slate-900 dark:pd-text-slate-200 text-left">Song</th>
        <th class="border pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold p-16 pd-text-slate-900 dark:pd-text-slate-200 text-left">Artist</th>
        <th class="border pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold p-16 pd-text-slate-900 dark:pd-text-slate-200 text-left">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Manic Depression</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Jimi Hendrix</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">1967</td>
      </tr>
      <tr>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">(Ballad Of) The Hip Death Goddess</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Ultimate Spinach</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">1968</td>
      </tr>
      <tr>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Sonic Prayer</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">Earthless</td>
        <td class="border pd-border-slate-300 dark:pd-border-slate-700 p-16 pd-text-slate-500 dark:pd-text-slate-400">2017</td>
      </tr>
    </tbody>
  </table>
</example-container>

```html{1}
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

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:table-fixed` to apply the `table-fixed` utility at only medium screen sizes and above.

```html
<table class="md:table-fixed">
  <!-- ... -->
</table>
```
