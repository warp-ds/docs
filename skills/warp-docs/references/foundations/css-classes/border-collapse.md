# Border Collapse

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/border-collapse

> Tables

Utilities for controlling whether table borders should collapse or be separated.

| Class | Description |
| --- | --- |
| border-collapse | border-collapse: collapse |
| border-separate | border-collapse: separate |

Use `border-collapse` to combine adjacent cell borders into a single border when possible. Note that this includes collapsing borders on the top-level `<table>` tag.

```html
<table class="border border-collapse  ...">
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

Use `border-separate` to force each cell to display its own separate borders.

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
