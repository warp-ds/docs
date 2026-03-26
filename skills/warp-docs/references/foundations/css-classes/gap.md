# Gap

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/gap

> Flexbox & Grid

Utilities for controlling gutters between grid and flexbox items.

| Class | Description |
| --- | --- |
| gap-{n} | gap: {n} |
| gap-x-{n} | column-gap: {n} |
| gap-y-{n} | row-gap: {n} |

> Available values  
> `{n}`: Any spacing value  

Use `gap-{size}` to change the gap between both rows and columns in grid and flexbox layouts.

```html
<div class="grid grid-cols-2 gap-24">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

Use `gap-x-{size}` and `gap-y-{size}` to change the gap between rows and columns independently.

```html
<div class="grid gap-x-32 gap-y-24 grid-cols-3 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

If you need to use a one-off gap value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="grid gap-[27]">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:gap-6` to apply the `gap-6` utility at only medium screen sizes and above.

```html
<div class="grid gap-16 md:gap-24">
  <!-- ... -->
</div>
```
