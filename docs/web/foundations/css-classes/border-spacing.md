> Tables

# Border Spacing

Utilities for controlling the spacing between table borders.

## Quick reference

| Class                     | Description                                        |
|---------------------------|----------------------------------------------------|
| `border-spacing-{size}`   | `border-spacing: {size} {size}`                    |
| `border-spacing-x-{size}` | `border-spacing: {size} var(--w-border-spacing-y)` |
| `border-spacing-y-{size}` | `border-spacing: var(--w-border-spacing-x) {size}` |

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />

## Basic usage

### Setting the border spacing
Use `border-spacing` to control the space between the borders of table cells with [separate borders](/web/foundations/css-classes/border-collapse#separate).

<example-container>
  <table class="table! pd-border border-separate! border-spacing-8 w-full  pd-border-slate-400 dark:pd-border-slate-500 pd-bg-white dark:pd-bg-slate-800 pd-text-sm pd-shadow-xl" style="border-collapse: separate;" >
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

```html {1}
<table class="border border-separate border-spacing-8  ...">
  <thead>
    <tr>
      <th class="border ...">Song</th>
      <th class="border ...">Artist</th>
      <th class="border ...">Year</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td class="border ...">Manic Depression</td>
        <td class="border ...">Jimi Hendrix</td>
        <td class="border ...">1967</td>
      </tr>
      <tr>
        <td class="border ...">(Ballad Of) The Hip Death Goddess</td>
        <td class="border ...">Ultimate Spinach</td>
        <td class="border ...">1968</td>
      </tr>
      <tr>
        <td class="border ...">Sonic Prayer</td>
        <td class="border ...">Earthless</td>
        <td class="border ...">2017</td>
      </tr>
  </tbody>
</table>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:border-spacing-4` to apply the `border-spacing-4` utility at only medium screen sizes and above.

```html
<table class="md:border-spacing-4">
  <!-- ... -->
</table>
```
