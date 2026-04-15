# Background Clip

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/background-clip

> Backgrounds

Utilities for controlling the bounding box of an element's background.

| Class | Description |
| --- | --- |
| bg-clip-border | -webkit-background-clip: border-box background-clip: border-box |
| bg-clip-padding | -webkit-background-clip: padding-box background-clip: padding-box |
| bg-clip-content | -webkit-background-clip: content-box background-clip: content-box |
| bg-clip-text | -webkit-background-clip: text background-clip: text |

Use the `bg-clip-{keyword}` utilities to control the bounding box of an element’s background.

```html
<div class="bg-clip-border ... "></div>
<div class="bg-clip-padding ... "></div>
<div class="bg-clip-content ... "></div>
```

Use `bg-clip-text` to crop an element’s background to match the shape of the text. Useful for effects where you want a background image to be visible through the text.

```html
<span class="bg-clip-text bg-cover text-transparent bg-[url(...)]">
  Warp speed
</span>
```
