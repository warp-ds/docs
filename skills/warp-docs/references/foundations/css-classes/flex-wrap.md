# Flex Wrap

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/flex-wrap

> Flexbox & Grid

Utilities for controlling how flex items wrap.

| Class | Description |
| --- | --- |
| flex-nowrap | flex-wrap: nowrap |
| flex-wrap | flex-wrap: wrap |
| flex-wrap-reverse | flex-wrap: wrap-reverse |

Use `flex-nowrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary.

```html
<div class="flex flex-nowrap ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Use `flex-wrap` to allow flex items to wrap.

```html
<div class="flex flex-wrap ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Use `flex-wrap-reverse` to wrap flex items in the reverse direction.

```html
<div class="flex flex-wrap-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:flex-wrap-reverse` to apply the `flex-wrap-reverse` utility at only medium screen sizes and above.

```html
<div class="flex flex-wrap md:flex-wrap-reverse">
  <!-- ... -->
</div>
```
