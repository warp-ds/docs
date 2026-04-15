# Overflow

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/overflow

> Layout

Utilities for controlling how an element handles content that is too large for the container.

| Class | Description |
| --- | --- |
| overflow-auto | overflow: auto |
| overflow-hidden | overflow: hidden |
| overflow-clip | overflow: clip |
| overflow-visible | overflow: visible |
| overflow-scroll | overflow: scroll |
| overflow-x-auto | overflow-x: auto |
| overflow-y-auto | overflow-y: auto |
| overflow-x-hidden | overflow-x: hidden |
| overflow-y-hidden | overflow-y: hidden |
| overflow-x-clip | overflow-x: clip |
| overflow-y-clip | overflow-y: clip |
| overflow-x-visible | overflow-x: visible |
| overflow-y-visible | overflow-y: visible |
| overflow-x-scroll | overflow-x: scroll |
| overflow-y-scroll | overflow-y: scroll |

Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.

```html
<div class="overflow-visible ..."></div>
```

Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.

```html
<div class="overflow-hidden ..."></div>
```

Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `overflow-scroll`, which always shows scrollbars, this utility will only show them if scrolling is necessary.

```html
<div class="overflow-y-auto h-128 ..."></div>
```

Use `overflow-x-scroll` to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.

Use `overflow-y-scroll` to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.

```html
<div class="overflow-y-scroll ..."></div>
```

Use `overflow-scroll` to add scrollbars to an element. Unlike `overflow-auto`, which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.

```html
<div class="overflow-scroll ..."></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:overflow-scroll` to apply the `overflow-scroll` utility at only medium screen sizes and above.

```html
<div class="overflow-auto md:overflow-scroll">
  <!-- ... -->
</div>
```
