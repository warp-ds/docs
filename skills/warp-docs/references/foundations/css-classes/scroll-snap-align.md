# Scroll Snap Align

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/scroll-snap-align

> Interactivity

Utilities for controlling the scroll offset around items in a snap container.

Unsupported

This functionality is not yet supported! If you need this, reach out to us on [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).

| Class | Description |
| --- | --- |
| snap-start | Unsupported |
| snap-end | Unsupported |
| snap-center | Unsupported |
| snap-align-none | Unsupported |

Use the `snap-center` utility to snap an element to its center when being scrolled inside a snap container.

```html
<div class="snap-x ...">
  <div class="snap-center ..."><img src="..." /></div>
  <div class="snap-center ..."><img src="..." /></div>
  <!-- ... -->
  <div class="snap-center ..."><img src="..." /></div>
</div>
```

Use the `snap-start` utility to snap an element to its start when being scrolled inside a snap container.

```html
<div class="snap-x ...">
  <div class="snap-start ..."><img src="..." /></div>
  <div class="snap-start ..."><img src="..." /></div>
  <!-- ... -->
  <div class="snap-start ..."><img src="..." /></div>
</div>
```

Use the `snap-end` utility to snap an element to its end when being scrolled inside a snap container.

```html
<div class="snap-x ...">
  <div class="snap-end ..."><img src="..." /></div>
  <div class="snap-end ..."><img src="..." /></div>
  <!-- ... -->
  <div class="snap-end ..."><img src="..." /></div>
</div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:snap-start` to only apply the `snap-start` utility on hover.

```html
<div class="snap-center hover:snap-start"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:snap-start` to apply the `snap-start` utility at only medium screen sizes and above.

```html
<div class="snap-center md:snap-start"></div>
```
