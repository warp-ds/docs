# Line Height

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/line-height

> Typography

Utilities for controlling the leading (line height) of an element.

| Class | Description |
| --- | --- |
| leading-none | line-height: 1 |
| leading-xs | line-height: var(--w-line-height-xs) |
| leading-s | line-height: var(--w-line-height-s) |
| leading-m | line-height: var(--w-line-height-m) |
| leading-ml | line-height: var(--w-line-height-ml) |
| leading-l | line-height: var(--w-line-height-l) |
| leading-xl | line-height: var(--w-line-height-xl) |
| leading-xxl | line-height: var(--w-line-height-xxl) |
| leading-xxxl | line-height: var(--w-line-height-xxxl) |

Control the Line-height of an element using the `leading-{size}` utilities.

```html
<p class="leading-xs ...">The quick smart warp scientist ...</p>
<p class="leading-s ...">The quick smart warp scientist ...</p>
...
<p class="leading-xxl ...">The quick smart warp scientist ...</p>
<p class="leading-xxxl ...">The quick smart warp scientist ...</p>
```

If you need to use a one-off `line-height` value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<p class="leading-[120]"></p>
```
