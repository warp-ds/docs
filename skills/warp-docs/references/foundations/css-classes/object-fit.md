# Object Fit

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/object-fit

> Layout

Utilities for controlling how a replaced element's content should be resized.

| Class | Description |
| --- | --- |
| object-contain | object-fit: contain |
| object-cover | object-fit: cover |
| object-fill | object-fit: fill |
| object-none | object-fit: none |
| object-scale-down | object-fit: scale-down |

Resize an element’s content to cover its container using `.object-cover`.

```html
<div class="aspect-2/1 ...">
  <img class="object-cover ..." src="..." alt="..." />
</div>
```

Resize an element’s content to stay contained within its container using `.object-contain`.

```html
<div class="aspect-2/1 ...">
  <img class="object-contain ..." src="..." alt="..." />
</div>
```

Stretch an element’s content to fit its container using `.object-fill`.

```html
<div class="aspect-2/1 ...">
  <img class="object-stretch ..." src="..." alt="..." />
</div>
```

Display an element’s content at its original size but scale it down to fit its container if necessary using `.object-scale-down`.

```html
<div class="aspect-2/1 ...">
  <img class="object-scale-down ..." src="..." alt="..." />
</div>
```

Display an element’s content at its original size ignoring the container size using `.object-none`.

```html
<div class="aspect-2/1 ...">
  <img class="object-none ..." src="..." alt="..." />
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:object-scale-down` to apply the `object-scale-down` utility at only medium screen sizes and above.

```html
<img class="object-contain md:object-scale-down">
```
