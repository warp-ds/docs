# Justify items

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/justify-items

> Flexbox & Grid

Utilities for controlling how grid items are aligned along their inline axis.

| Class | Description |
| --- | --- |
| justify-items-start | justify-items: start |
| justify-items-center | justify-items: center |
| justify-items-end | justify-items: end |
| justify-items-stretch | justify-items: stretch |

Use `justify-items-start` to justify grid items against the start of their inline axis.

```html
<div class="grid justify-items-start ...">
  <div>01</div>
  <div>02</div>
  ...
  <div>06</div>
</div>
```

Use `justify-items-end` to justify grid items against the end of their inline axis.

```html
<div class="grid justify-items-end ...">
  <div>01</div>
  <div>02</div>
  ...
  <div>06</div>
</div>
```

Use `justify-items-center` to justify grid items along their inline axis.

```html
<div class="grid justify-items-center ...">
  <div>01</div>
  <div>02</div>
  ...
  <div>06</div>
</div>
```

Use `justify-items-stretch` to stretch items along their inline axis.

```html
<div class="grid grid-cols-3 justify-items-stretch ...">
  <div>01</div>
  <div>02</div>
  ...
  <div>06</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:justify-items-center` to apply the `justify-items-center` utility at only medium screen sizes and above.

```html
<div class="grid justify-items-start md:justify-items-center">
  <!-- ... -->
</div>
```
