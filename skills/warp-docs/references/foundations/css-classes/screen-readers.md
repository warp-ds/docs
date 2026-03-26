# Screen Readers

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/screen-readers

> Accessibility

Utilities for improving accessibility with screen readers.

| Class | Description |
| --- | --- |
| sr-only | position: absolute width: 1px height: 1px padding: 0 margin: -1px overflow: hidden clip: rect(0, 0, 0, 0) white-space: nowrap border-width: 0 |
| not-sr-only | position: static width: auto height: auto padding: 0 margin: 0 overflow: visible clip: auto white-space: normal |

Use `sr-only` to hide an element visually without hiding it from screen readers:

```html
<a href="#">
  <svg><!-- ... --></svg>
  <span class="sr-only">Settings</span>
</a>
```

Use `not-sr-only` to undo `sr-only`, making an element visible to sighted users as well as screen readers. This can be useful when you want to visually hide something on small screens but show it on larger screens for example:

```html
<a href="#">
  <svg><!-- ... --></svg>
  <span class="sr-only sm:not-sr-only">Settings</span>
</a>
```
