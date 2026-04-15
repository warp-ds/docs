# Background Attachment

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/background-attachment

> Backgrounds

Utilities for controlling how a background image behaves when scrolling.

| Class | Description |
| --- | --- |
| bg-fixed | background-attachment: fixed |
| bg-local | background-attachment: local |
| bg-scroll | background-attachment: scroll |

Use `bg-fixed` to fix the background image relative to the viewport.

```html
<div class="bg-fixed ..."></div>
```

Use `bg-local` to scroll the background image with the container and the viewport.

```html
<div class="bg-local ..."></div>
```

Use `bg-scroll` to scroll the background image with the viewport, but not with the container.

```html
<div class="bg-scroll ..."></div>
```
