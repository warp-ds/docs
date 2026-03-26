# Border Spacing

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/border-spacing

> Tables

Utilities for controlling the spacing between table borders.

| Class | Description |
| --- | --- |
| border-spacing-{size} | border-spacing: {size} {size} |
| border-spacing-x-{size} | border-spacing: {size} var(--w-border-spacing-y) |
| border-spacing-y-{size} | border-spacing: var(--w-border-spacing-x) {size} |

> Available values  
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144`  

Use `border-spacing` to control the space between the borders of table cells with [separate borders](https://warp-ds.github.io/docs/foundations/css-classes/border-collapse#separate).

```html
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

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:border-spacing-4` to apply the `border-spacing-4` utility at only medium screen sizes and above.

```html
<table class="md:border-spacing-4">
  <!-- ... -->
</table>
```
