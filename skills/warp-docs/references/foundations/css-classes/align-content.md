# Align Content

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/align-content

> Flexbox & Grid

Utilities for controlling how rows are positioned in multi-row flex and grid containers.

| Class | Description |
| --- | --- |
| content-start | align-content: flex-start |
| content-center | align-content: center |
| content-end | align-content: flex-end |
| content-between | align-content: space-between |
| content-around | align-content: space-around |
| content-evenly | align-content: space-evenly |

Use `content-start` to pack rows in a container against the start of the cross axis.

```html
<div class="grid grid-cols-3 gap-24 content-start ...">
  <!-- ... -->
</div>
```

Use `content-center` to pack rows in a container in the center of the cross axis.

```html
<div class="grid grid-cols-3 gap-24 content-center ...">
  <!-- ... -->
</div>
```

Use `content-end` to pack rows in a container against the end of the cross axis.

```html
<div class="grid grid-cols-3 gap-16 content-end ...">
  <!-- ... -->
</div>
```

Use `content-between` to distribute rows in a container such that there is an equal amount of space between each line:

```html
<div class="grid grid-cols-3 gap-24 content-between ...">
  <!-- ... -->
</div>
```

Use `content-around` to distribute rows in a container such that there is an equal amount of space around each line:

```html
<div class="grid grid-cols-3 gap-x-16 content-around ...">
  <!-- ... -->
</div>
```

Use `content-evenly` to distribute rows in a container such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `content-around`.

```html
<div class="grid grid-cols-3 gap-x-16 content-evenly ...">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:content-around` to apply the `content-around` utility at only medium screen sizes and above.

```html
<div class="grid content-start md:content-around">
  <!-- ... -->
</div>
```
