# Text Transform

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/text-transform

> Typography

Utilities for controlling the transformation of text.

| Class | Description |
| --- | --- |
| uppercase | text-transform: uppercase |
| lowercase | text-transform: lowercase |
| capitalize | text-transform: capitalize |
| normal-case | text-transform: none |

The `uppercase` and `lowercase` will uppercase and lowercase text respectively, whereas `capitalize` utility will convert text to title-case. The `normal-case` utility can be used to preserve the original casing — typically to reset capitalization at different breakpoints.

```html
<p class="normal-case...">The quick smart warp scientist ...</p>
<p class="uppercase ...">The quick smart warp scientist ...</p>
<p class="lowercase ...">The quick smart warp scientist ...</p>
<p class="capitalize ...">The quick smart warp scientist ...</p>
```
