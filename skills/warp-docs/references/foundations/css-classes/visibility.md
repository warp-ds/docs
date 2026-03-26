# Visibility

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/visibility

> Layout

Utilities for controlling the visibility of an element.

| Class | Description |
| --- | --- |
| visible | visibility: visible |
| invisible | visibility: hidden |

Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements (compare with `.hidden` from the `display` documentation).

```html
<div class="...">
  <div>01</div>
  <div class="invisible ...">02</div>
  <div>03</div>
</div>
```

Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes or other conditionals.

```html
<div>
  <div class="...">
    Invisible
    <div class="invisible">01</div>
  </div>
  <div class="group ...">
    Hover me
    <div class="invisible group-hover:visible ...">02</div>
  </div>
  <div class="...">
    Invisible
    <div class="invisible">02</div>
  </div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:invisible` to apply the `invisible` utility at only medium screen sizes and above.

```html
<div class="visible md:invisible">
  <!-- ... -->
</div>
```
