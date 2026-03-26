# Clear

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/clear

> Layout

Utilities for controlling the wrapping of content around an element.

| Class | Description |
| --- | --- |
| clear-left | clear: left |
| clear-right | clear: right |
| clear-both | clear: both |
| clear-none | clear: none |

Use `clear-left` to position an element below any preceding left-floated elements.

```html
<img class="float-left ..." src="..." alt="...">
<img class="float-right ..." src="..." alt="...">
<p class="clear-left">Maybe we can live without libraries, people like you and me. ...</p>
```

Use `clear-right` to position an element below any preceding right-floated elements.

```html
<img class="float-left ..." src="..." alt="...">
<img class="float-right ..." src="..." alt="...">
<p class="clear-right">Maybe we can live without libraries, people like you and me. ...</p>
```

Use `clear-both` to position an element below all preceding floated elements.

```html
<img class="float-left ..." src="..." alt="...">
<img class="float-right ..." src="..." alt="...">
<p class="clear-both">Maybe we can live without libraries, people like you and me. ...</p>
```

Use `clear-none` to reset any clears that are applied to an element. This is the default value for the clear property.

```html
<img class="float-left ..." src="..." alt="...">
<img class="float-right ..." src="..." alt="...">
<p class="clear-none">Maybe we can live without libraries, people like you and me. ...</p>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:clear-none` to apply the `clear-none` utility at only medium screen sizes and above.

```html
<p class="clear-left md:clear-none">
  <!-- ... -->
</p>
```
