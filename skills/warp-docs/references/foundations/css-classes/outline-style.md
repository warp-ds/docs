# Outline Style

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/outline-style

> Borders

Utilities for controlling the style of an outline of an element.

| Class | Description |
| --- | --- |
| outline-none | outline: 2px solid transparentoutline-offset: 2px |
| outline | outline-style: solid |
| outline-dashed | outline-style: dashed |
| outline-dotted | outline-style: dotted |
| outline-double | outline-style: double |

Use the `outline-{style}` utilities to set the outline style for an element.

```html
<div class="outline outline-offset-4 outline-4 ..."></div>
<div class="outline-dashed outline-offset-4 outline-4 ..."></div>
<div class="outline-dotted outline-offset-4 outline-4 ..."></div>
<div class="outline-double outline-offset-4 outline-4 ..."></div>
```

Use `outline-none` to hide the default browser outline on focused elements.

It is highly recommended to apply Warp's focus styling for accessibility when using this utility.

```html
<input type="text" class="..." placeholder="Default focus style" />
<input type="text" class="outline-none ..." placeholder="No focus style with outline-none" />
<input type="text" class="focusable focus:[--w-outline-offset:-2px]" placeholder="Warp-s focus style" />
```

The `outline-none` utility is implemented using a transparent outline under the hood to ensure elements are still visibly focused to [Windows high contrast mode](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/) users.

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:outline-dashed` to only apply the `outline-dashed` utility on hover.

```html
<div class="outline hover:outline-dashed"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:outline-dashed` to apply the `outline-dashed` utility at only medium screen sizes and above.

```html
<div class="outline md:outline-dashed"></div>
```
