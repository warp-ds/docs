# Flex Grow

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/flex-grow

> Flexbox & Grid

Utilities for controlling how flex items grow.

| Class | Description |
| --- | --- |
| grow | flex-grow: 1 |
| grow-0 | flex-grow: 0 |

Use `grow` to allow a flex item to grow to fill any available space.

```html
<div class="flex">
  <div class="flex-none ...">01</div>
  <div class="grow ...">02</div>
  <div class="flex-none ...">03</div>
</div>
```

Use `grow-0` to prevent a flex item from growing

```html
<div class="flex">
  <div class="grow ...">01</div>
  <div class="grow-0 ...">02</div>
  <div class="grow ...">03</div>
</div>
```

If you need to use a one-off flex-grow value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="grow-[2]">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grow-0` to apply the `grow-0` utility at only medium screen sizes and above.

```html
<div class="grow md:grow-0">
  <!-- ... -->
</div>
```
