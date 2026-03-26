# Align Items

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/align-items

> Flexbox & Grid

Utilities for controlling how flex and grid items are positioned along a container's cross axis.

| Class | Description |
| --- | --- |
| items-baseline | align-items: baseline |
| items-stretch | align-items: stretch |
| items-start | align-items: flex-start |
| items-center | align-items: center |
| items-end | align-items: flex-end |

Use `items-stretch` to stretch items to fill the container’s cross axis.

```html
<div class="flex items-stretch ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

Use `items-start` to align items to the start of the container’s cross axis.

```html
<div class="flex items-start ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

Use `items-center` to align items along the center of the container’s cross axis.

```html
<div class="flex items-center ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

Use `items-end` to align items to the end of the container’s cross axis.

```html
<div class="flex items-end ...">
  <div class="py-16">01</div>
  <div class="py-64">02</div>
  <div class="py-32">03</div>
</div>
```

Use `items-baseline` to align items along the container’s cross axis such that all of their baselines align.

```html
<div class="flex items-baseline ...">
  <div class="pt-8 pb-24">01</div>
  <div class="pt-32 pb-64">02</div>
  <div class="pt-48 pb-16">03</div>
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:items-center` to apply the `items-center` utility at only medium screen sizes and above.

```html
<div class="flex items-stretch md:items-center">
  <!-- ... -->
</div>
```
