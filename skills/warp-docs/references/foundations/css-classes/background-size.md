# Background Size

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/background-size

> Backgrounds

Utilities for controlling the background size of an element's background image.

| Class | Description |
| --- | --- |
| bg-auto | background-size: auto |
| bg-cover | background-size: cover |
| bg-contain | background-size: contain |

Use `bg-auto` to display the background image at its default size.

```html
<div class="bg-auto bg-no-repeat bg-center bg-[url(...)] ..."/>
```

Use `bg-cover` to scale the background image until it fills the background layer.

```html
<div class="bg-cover bg-center bg-[url(...)] ...">
```

Use `bg-contain` to scale the background image to the outer edges without cropping or stretching.

```html
<div class="bg-contain bg-center bg-[url(...)] ..."></div>
```
