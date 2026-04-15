# Position

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/position

> Layout

Utilities for controlling how an element is positioned in the DOM.

| Class | Description |
| --- | --- |
| static | position: static |
| fixed | position: fixed |
| absolute | position: absolute |
| relative | position: relative |
| sticky | position: sticky |

Use `static` to position an element according to the normal flow of the document.

Any `offsets` will be ignored and the element will not act as a position reference for absolutely positioned children.

```html
<div class="relative ...">
  <div class="static ...">
    Static parent
    <div class="absolute bottom-0 left-0 ...">
      Absolute child
    </div>
  </div>
</div>
```

Use `relative` to position an element according to the normal flow of the document.

Any `offsets` are calculated relative to the element’s normal position and the element will act as a position reference for absolutely positioned children.

```html
<div class="relative ...">
  <p>Relative parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

Use `absolute` to position an element outside the normal flow of the document, causing neighboring elements to act as if the element doesn't exist.

Any `offsets` are calculated relative to the nearest parent that has a position other than static, and the element will act as a position reference for other absolutely positioned children.

```html
<div class="static ...">
  <!-- Static parent -->
  <div class="static ..."><p>Static child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
  <!-- Static parent -->
  <div class="absolute ..."><p>Absolute child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
</div>
```

Use `fixed` to position an element relative to the browser window.

Any `offsets` are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children.

```html
<div>
  <h4 class="fixed top-0 left-0 right-0">Warp Scientists</h4>
  <ul>
    <li>
      <img src="..." />
      <div>Justina Matter</div>
    </li>
    <li>
      <img src="..." />
      <div>Narve Hoops</div>
    </li>
    <!-- ... -->
  </ul>
</div>
```

Use `sticky` to position an element as `relative` until it crosses a specified threshold, then treat it as fixed until its parent is off screen.

Any `offsets` are calculated relative to the element’s normal position and the element will act as a position reference for absolutely positioned children.

```html
<div>
  <div>
    <h4 class="sticky top-0 left-0 right-0 ...">A - Warp Scientists</h4>
    <ul>
      <li>
        <img src="..." />
        <strong>Ainsley Matter</strong>
      </li>
      <li>
        <img src="..." />
        <strong>Alarik Hoops</strong>
      </li>
      <!-- ... -->
    </ul>
  </div>
  <div>
    <h4 class="sticky top-0 left-0 right-0 ...">B - Warp Scientists</h4>
    <ul>
      <li>
        <img src="..." />
        <strong>Bella Matter</strong>
      </li>
      <!-- ... -->
    </ul>
  </div>
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:absolute` to apply the `absolute` utility at only medium screen sizes and above.

```html
<div class="relative md:absolute">
  <!-- ... -->
</div>
```
