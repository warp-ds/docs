> Interactivity

# Cursor

Utilities for controlling the cursor style when hovering over an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `cursor-auto` | `cursor: auto` |
| `cursor-default` | `cursor: default` |
| `cursor-pointer` | `cursor: pointer` |
| `cursor-wait` | `cursor: wait` |
| `cursor-text` | `cursor: text` |
| `cursor-move` | `cursor: move` |
| `cursor-help` | `cursor: help` |
| `cursor-not-allowed` | `cursor: not-allowed` |
| `cursor-none` | `cursor: none` |
| `cursor-context-menu` | `cursor: context-menu` |
| `cursor-progress` | `cursor: progress` |
| `cursor-cell` | `cursor: cell` |
| `cursor-crosshair` | `cursor: crosshair` |
| `cursor-vertical-text` | `cursor: vertical-text` |
| `cursor-alias` | `cursor: alias` |
| `cursor-copy` | `cursor: copy` |
| `cursor-no-drop` | `cursor: no-drop` |
| `cursor-grab` | `cursor: grab` |
| `cursor-grabbing` | `cursor: grabbing` |
| `cursor-all-scroll` | `cursor: all-scroll` |
| `cursor-col-resize` | `cursor: col-resize` |
| `cursor-row-resize` | `cursor: row-resize` |
| `cursor-n-resize` | `cursor: n-resize` |
| `cursor-e-resize` | `cursor: e-resize` |
| `cursor-s-resize` | `cursor: s-resize` |
| `cursor-w-resize` | `cursor: w-resize` |
| `cursor-ne-resize` | `cursor: ne-resize` |
| `cursor-nw-resize` | `cursor: nw-resize` |
| `cursor-se-resize` | `cursor: se-resize` |
| `cursor-sw-resize` | `cursor: sw-resize` |
| `cursor-ew-resize` | `cursor: ew-resize` |
| `cursor-ns-resize` | `cursor: ns-resize` |
| `cursor-nesw-resize` | `cursor: nesw-resize` |
| `cursor-nwse-resize` | `cursor: nwse-resize` |
| `cursor-zoom-in` | `cursor: zoom-in` |
| `cursor-zoom-out` | `cursor: zoom-out` |

## Basic usage

### Setting the cursor style
Use the `cursor-{style}` to control which cursor is displayed when hovering over an element.

<example-container>
  <div class="grid grid-cols-2 sm:grid-cols-3 flex-wrap gap-16 items-center justify-around">
    <div class="ex-box pd-bg-indigo-600 hover:pd-bg-indigo-700 cursor-auto" tabindex="-1">
      cursor-auto
    </div>
    <div class="ex-box pd-bg-indigo-600 hover:pd-bg-indigo-700 cursor-pointer" tabindex="-1">
      cursor-pointer
    </div>
    <div class="ex-box pd-bg-indigo-600 hover:pd-bg-indigo-700 cursor-none" tabindex="-1">
      cursor-none
    </div>
  </div>
</example-container>

```html
<div class="cursor-auto ...">cursor-auto</div>
<div class="cursor-pointer ...">cursor-pointer</div>
<div class="cursor-none ...">cursor-none</div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `focus:cursor-auto` to only apply the `cursor-auto` utility on focus.

```html
<div class="cursor-not-allowed focus:cursor-auto"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:cursor-auto` to apply the `cursor-auto` utility at only medium screen sizes and above.

```html
<div class="cursor-not-allowed md:cursor-auto"></div>
```
