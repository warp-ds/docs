# Background Image

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/background-image

> Backgrounds

Utilities for controlling an element's background image.

| Class | Description |
| --- | --- |
| bg-none | background-image: none |
| bg-[url({url})] | background-image: url({url}) |
| bg-[url(var(--any-css-variable))] | background-image: var(--any-css-variable) |

> `{url}`: _Any valid image url_

If you need to use a one-off `background-image` value, use square brackets to generate a property on the fly using any url.

```html
<div class="bg-[url(...)] ..."></div>
```
