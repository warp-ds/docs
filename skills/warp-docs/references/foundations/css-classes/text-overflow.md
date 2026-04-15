# Text Overflow

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/text-overflow

> Typography

Utilities for controlling text overflow in an element.

| Class | Description |
| --- | --- |
| truncate | overflow: hidden text-overflow: ellipsis white-space: nowrap |
| text-ellipsis | text-overflow: ellipsis |
| text-clip | text-overflow: clip |

Use `truncate` to prevent text from wrapping and truncate overflowing text with an ellipsis (`…`).

```html
<p class="truncate ...">...</p>
```

Use `text-ellipsis` to truncate overflowing text with an ellipsis (`…`).

```html
<p class="text-ellipsis overflow-hidden ...">...</p>
```

Use `text-clip` to clip the text at the limit of the content area.

```html
<p class="text-clip overflow-hidden ...">...</p>
```
