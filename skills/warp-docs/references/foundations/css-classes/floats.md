# Floats

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/floats

> Layout

Utilities for controlling the wrapping of content around an element.

| Class | Description |
| --- | --- |
| float-right | float: right |
| float-left | float: left |
| float-none | float: none |

Use `float-right` to float an element to the right of its container.

```html
<img class="float-right ..." src="..." alt="...">
<p>Maybe we can live without libraries, people like you and me. ...</p>
```

Use `float-left` to float an element to the left of its container.

```html
<img class="float-left ..." src="..." alt="...">
<p>Maybe we can live without libraries, people like you and me. ...</p>
```

Use `float-none` to reset any floats that are applied to an element. This is the default value for the float property.

```html
<img class="float-none ..." src="..." alt="...">
<p>Maybe we can live without libraries, people like you and me. ...</p>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:float-right` to apply the `float-right` utility at only medium screen sizes and above.

```html
<img class="float-right md:float-left" src="..." alt="..." />
```
