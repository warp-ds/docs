> Interactivity

# Resize

Utilities for controlling how an element can be resized.

## Quick reference

| Class | Description |
|-------|-------------|
| `resize-none` | `resize: none` |
| `resize-y` | `resize: vertical` |
| `resize-x` | `resize: horizontal` |
| `resize` | `resize: both` |

## Basic usage

### Resizing in all directions
Use `resize` to make an element horizontally and vertically resizable.

<example-container class="overflow-auto">
  <div class="ex-box w-144 mx-auto pd-bg-fuchsia-600 overflow-hidden resize">Resize me!</div>
</example-container>

```html
<div class="resize ..."></div>
```

### Resizing vertically
Use `resize-y` to make an element vertically resizable.

<example-container class="overflow-auto">
  <div class="ex-box w-144 mx-auto pd-bg-cyan-600 overflow-hidden resize-y">Resize me!</div>
</example-container>

```html
<div class="resize-y ..."></div>
````

### Resizing horizontally
Use `resize-x` to make an element horizontally resizable.

<example-container class="overflow-auto">
  <div class="ex-box w-144 mx-auto pd-bg-blue-600 overflow-hidden resize-x">Resize me!</div>
</example-container>

```html
<div class="resize-x ..."></div>
```

### Preventing resizing
Use `resize-none` to prevent an element from being resizable.

<example-container>
  <div class="relative overflow-auto">
    <div class="w-full flex items-center justify-center">
      <textarea placeholder="I'm unresizable!" class="resize-none pd-text-sm p-16 w-[200] pd-shadow-lg rounded border s-border" rows="3"></textarea>
    </div>
  </div>
</example-container>

```html
<textarea class="resize-none ..."></textarea>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:resize` to only apply the `resize` utility on hover.
```html
<div class="resize-none hover:resize"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:resize` to apply the `resize` utility at only medium screen sizes and above.

```html
<div class="resize-none md:resize"></div>
```
