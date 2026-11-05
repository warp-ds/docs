> Backgrounds

# Background Image

Utilities for controlling an element's background image.

## Quick reference

| Class | Description |
|-------|-------------|
| `bg-none` | `background-image: none` |
| `bg-[url({url})]` | `background-image: url({url})` |
| `bg-[url(var(--any-css-variable))]` | `background-image: var(--any-css-variable)` |

> `{url}`: _Any valid image url_

## Basic usage

### Arbitrary values
If you need to use a one-off `background-image` value, use square brackets to generate a property on the fly using any url.

<example-container class="h-144 bg-cover bg-center bg-no-repeat bg-[url(../../images/20s-scientists.jpg)]">
</example-container>

```html
<div class="bg-[url(...)] ..."></div>
```

