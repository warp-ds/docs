# Flex Direction

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/flex-direction

> Flexbox & Grid

Utilities for controlling the direction of flex items.

| Class | Description |
| --- | --- |
| flex-row | flex-direction: row |
| flex-row-reverse | flex-direction: row-reverse |
| flex-col | flex-direction: column |
| flex-col-reverse | flex-direction: column-reverse |

Use `flex-row` to position flex items horizontally in the same direction as text.

```html
<div class="flex flex-row ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Use `flex-row-reverse` to position flex items horizontally in the opposite direction.

```html
  <div class="flex flex-row-reverse ...">
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
```

Use `flex-col` to position flex items vertically.

```html
<div class="flex flex-col ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Use `flex-col-reverse` to position flex items vertically in the opposite direction.

```html
<div class="flex flex-col-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:flex-row` to apply the `flex-row` utility at only medium screen sizes and above.

```html
<div class="flex flex-col md:flex-row">
  <!-- ... -->
</div>
```
