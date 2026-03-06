> Layout

# Box Sizing

Utilities for controlling how the browser should calculate an element's total size.

## Quick reference

| Class | Description |
|-------|-------------|
| `box-border` | `box-sizing: border-box` |
| `box-content` | `box-sizing: content-box` |

## Basic usage

### Including borders and padding
Use `box-border` to set an element’s `box-sizing` to `border-box`, telling the browser to include the element’s borders and padding when you give it a height or width.

This means a 128px × 128px element with a 2px border and 16px of padding on all sides will be rendered as 100px × 100px, with an internal content area of 92px × 92px.

Warp makes this the default for all elements in the preflight base styles.

<example-container>
  <div class="ex-inner-box">
    <div class="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_3fr_1fr] gap-1 pd-font-mono pd-text-xs font-bold max-w-[300] mx-auto w-full bg-[--w-s-color-border]">
      <div class="col-start-1 row-start-1 pd-bg-white"></div>
      <div class="relative col-start-2 row-start-1 pd-bg-white">
        <div class="absolute text-center bottom-8 -left-1 -right-1 pd-border-indigo-400 border-x-1 leading-none">
          <div class="absolute left-0 top-1/2 right-0 h-1 pd-bg-indigo-400"></div>
          <div class="inline-block relative pd-bg-white px-4 pd-text-indigo-600">128px</div>
        </div>
      </div>
      <div class="col-start-3 row-start-1 pd-bg-white"></div>
      <div class="relative col-start-1 row-start-2 pd-bg-white">
        <div class="flex items-center justify-center absolute text-center right-8 w-12 -top-1 -bottom-1 pd-border-indigo-400 border-y-1 leading-none">
          <div class="absolute top-0 left-1/2 bottom-0 w-1 pd-bg-indigo-400"></div>
          <div class="inline-block pd-bg-white px-4 -rotate-90 pd-text-indigo-600">128px</div>
        </div>
      </div>
      <div class="col-start-2 row-start-2 pd-bg-white">
          <div class="box-border w-128 h-128 -m-1 p-16 border-2 pd-bg-white pd-border-sky-500 ex-bg--striped ex-bg--indigo">
            <div class="w-full h-full pd-bg-sky-500"></div>
          </div>
      </div>
      <div class="col-start-3 row-start-2 pd-bg-white"></div>
      <div class="col-start-1 row-start-3 pd-bg-white"></div>
      <div class="col-start-2 row-start-3 pd-bg-white"></div>
      <div class="col-start-3 row-start-3 pd-bg-white"></div>
    </div>
  </div>
</example-container>

```html
<div class="box-border h-128 w-128 p-16 border-2 ...">
  <!-- ... -->
</div>
```

### Excluding borders and padding
Use `box-content` to set an element’s `box-sizing` to `content-box`, telling the browser to add borders and padding on top of the element’s specified width or height.

This means a 128px × 128px element with a 2px border and 16px of padding on all sides will actually be rendered as 164px × 164px, with an internal content area of 128px × 128px.

<example-container>
  <div class="ex-inner-box">
    <div class="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_3fr_1fr] gap-1 pd-font-mono pd-text-xs font-bold max-w-[300] mx-auto w-full bg-[--w-s-color-border]">
      <div class="col-start-1 row-start-1 pd-bg-white"></div>
      <div class="relative col-start-2 row-start-1 pd-bg-white">
        <div class="absolute text-center bottom-[26] -left-1 -right-1 pd-border-indigo-400 border-x-1 leading-none">
          <div class="absolute left-0 top-1/2 right-0 h-1 pd-bg-indigo-400"></div>
          <div class="inline-block relative pd-bg-white px-4 pd-text-indigo-600">128px</div>
        </div>
      </div>
      <div class="col-start-3 row-start-1 pd-bg-white"></div>
      <div class="relative col-start-1 row-start-2 pd-bg-white">
        <div class="flex items-center justify-center absolute text-center right-[26] w-12 -top-1 -bottom-1 pd-border-indigo-400 border-y-1 leading-none">
          <div class="absolute top-0 left-1/2 bottom-0 w-1 pd-bg-indigo-400"></div>
          <div class="inline-block pd-bg-white px-4 -rotate-90 pd-text-indigo-600">128px</div>
        </div>
      </div>
      <div class="relative col-start-2 row-start-2 pd-bg-white">
          <div class="box-content w-128 h-128 -m-[19] p-16 border-2 pd-bg-white pd-border-sky-500 ex-bg--striped ex-bg--indigo">
            <div class="w-full h-full pd-bg-sky-500"></div>
          </div>
      </div>
      <div class="col-start-3 row-start-2 pd-bg-white"></div>
      <div class="col-start-1 row-start-3 pd-bg-white"></div>
      <div class="col-start-2 row-start-3 pd-bg-white"></div>
      <div class="col-start-3 row-start-3 pd-bg-white"></div>
    </div>
  </div>
</example-container>

```html
<div class="box-content h-128 w-128 p-16 border-3 ...">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:box-content` to apply the `box-content` utility at only medium screen sizes and above.

```html
<div class="box-border md:box-content">
  <!-- ... -->
</div>
```
