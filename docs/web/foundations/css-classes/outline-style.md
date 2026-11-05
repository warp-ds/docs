> Borders

# Outline Style

Utilities for controlling the style of an outline of an element.

## Quick reference

| Class             | Description                                                 |
|-------------------|-------------------------------------------------------------|
| `outline-none`    | `outline: 2px solid transparent`<br/>`outline-offset: 2px`  |
| `outline`         | `outline-style: solid`                                      |
| `outline-dashed`  | `outline-style: dashed`                                     |
| `outline-dotted`  | `outline-style: dotted`                                     |
| `outline-double`  | `outline-style: double`                                     |

## Basic usage

### Setting the outline style
Use the `outline-{style}` utilities to set the outline style for an element.

<example-container>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-16 justify-items-center">
    <div>
      <strong class="ex-font-dark">outline</strong>
      <div class="pd-bg-violet-100 h-80 w-80 rounded-4 outline outline-offset-4 outline-4 s-outline-focus my-16 mx-auto"></div>
    </div>
    <div>
      <strong class="ex-font-dark whitespace-nowrap">outline-dashed</strong>
      <div class="pd-bg-violet-100 h-80 w-80 rounded-4 outline-dashed outline-offset-4 outline-4 s-outline-focus my-16 mx-auto"></div>
    </div>
    <div>
      <strong class="ex-font-dark whitespace-nowrap">outline-dotted</strong>
      <div class="pd-bg-violet-100 h-80 w-80 rounded-4 outline-dotted outline-offset-4 outline-4 s-outline-focus my-16 mx-auto"></div>
    </div>
    <div>
      <strong class="ex-font-dark whitespace-nowrap">outline-double</strong>
      <div class="pd-bg-violet-100 h-80 w-80 rounded-4 outline-double outline-offset-4 outline-4 s-outline-focus my-16 mx-auto"></div>
    </div>
  </div>
</example-container>

```html
<div class="outline outline-offset-4 outline-4 ..."></div>
<div class="outline-dashed outline-offset-4 outline-4 ..."></div>
<div class="outline-dotted outline-offset-4 outline-4 ..."></div>
<div class="outline-double outline-offset-4 outline-4 ..."></div>
```

### Removing outlines
Use `outline-none` to hide the default browser outline on focused elements.

It is highly recommended to apply Warp's focus styling for accessibility when using this utility.

<example-container>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-x-16 gap-y-8 px-0 sm:px-10 font-mono font-bold">
    <input type="text" class="focus:outline s-bg s-border rounded border border-solid py-4 px-6 w-full" placeholder="Default focus style" />
    <input type="text" class="outline-none s-bg s-border rounded border border-solid py-4 px-6 w-full" placeholder="No focus with outline-none" />
    <input type="text" class="focusable focus:[--w-outline-offset:-2px] s-bg s-border rounded border border-solid py-4 px-6 w-full" placeholder="Warp's focus style" />
  </div>
</example-container>

```html
<input type="text" class="..." placeholder="Default focus style" />
<input type="text" class="outline-none ..." placeholder="No focus style with outline-none" />
<input type="text" class="focusable focus:[--w-outline-offset:-2px]" placeholder="Warp-s focus style" />
```

The `outline-none` utility is implemented using a transparent outline under the hood to ensure elements are still visibly focused to [Windows high contrast mode](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/) users.

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:outline-dashed` to only apply the `outline-dashed` utility on hover.

```html
<div class="outline hover:outline-dashed"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:outline-dashed` to apply the `outline-dashed` utility at only medium screen sizes and above.

```html
<div class="outline md:outline-dashed"></div>
```
