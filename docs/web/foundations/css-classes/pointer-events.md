> Interactivity

# Pointer Events

Utilities for controlling whether an element responds to pointer events.

## Quick reference

| Class | Description |
|-------|-------------|
| `pointer-events-auto` | `pointer-events: auto` |
| `pointer-events-none` | `pointer-events: none` |
| `pointer-events-inherit` | `pointer-events: inherit` |
| `pointer-events-initial` | `pointer-events: initial` |
| `pointer-events-revert` | `pointer-events: revert` |
| `pointer-events-revert-layer` | `pointer-events: revert-layer` |
| `pointer-events-unset` | `pointer-events: unset` |

## Basic usage

### Controlling pointer event behavior
Use `pointer-events-auto` to revert to the default browser behavior for pointer events (like `:hover` and `click`).

Use `pointer-events-none` to make an element ignore pointer events. The pointer events will still trigger on child elements and pass-through to elements that are “beneath” the target.

<example-container>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-32">
    <div class="flex flex-col">
      <h4 class="ex-heading">pointer-events-auto</h4>
      <p>Clicking the search icon will <strong>not</strong> trigger focus on the input.</p>
      <div class="relative rounded-8 pd-shadow-lg w-full">
        <div class="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-auto">
          <svg class="absolute pd-text-slate-400 h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <input type="text" placeholder="Search" class="pd-font-sans block pd-text-sm w-full pl-32 py-8 px-6 border s-border rounded">
      </div>
    </div>
    <div class="flex flex-col">
      <h4 class="ex-heading">pointer-events-none</h4>
      <p>Clicking the search icon will trigger focus on the input.</p>
      <div class="relative rounded-8 pd-shadow-lg w-full">
        <div class="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
          <svg class="absolute pd-text-slate-400 h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <input type="text" placeholder="Search" class="pd-font-sans block pd-text-sm w-full pl-32 py-8 px-6 border s-border rounded">
      </div>
    </div>
  </div>
</example-container>

```html
<div class="...">
  <div class="pointer-events-auto ...">
    <svg>...</svg>
  </div>
  <input type="text" placeholder="Search" class="...">
</div>

<div class="...">
  <div class="pointer-events-none ...">
    <svg>...</svg>
  </div>
  <input type="text" placeholder="Search" class="...">
</div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `focus:pointer-events-auto` to only apply the `pointer-events-auto` utility on focus.

```html
<div class="pointer-events-none focus:pointer-events-auto"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:pointer-events-auto` to apply the `pointer-events-auto` utility at only medium screen sizes and above.

```html
<div class="pointer-events-none md:pointer-events-auto"></div>
```

