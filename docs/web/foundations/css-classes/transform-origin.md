> Transforms

# Transform Origin

Utilities for specifying the origin for an element's transformations.

## Quick reference

| Class | Description |
|-------|-------------|
| `origin-center` | `transform-origin: center` |
| `origin-top` | `transform-origin: top` |
| `origin-top-right` | `transform-origin: top right` |
| `origin-right` | `transform-origin: right` |
| `origin-bottom-right` | `transform-origin: bottom right` |
| `origin-bottom` | `transform-origin: bottom` |
| `origin-bottom-left` | `transform-origin: bottom left` |
| `origin-left` | `transform-origin: left` |
| `origin-top-left` | `transform-origin: top left` |

## Basic usage

### Changing the transform origin
Specify an element’s transform origin using the `origin-{keyword}` utilities.

<example-container>
  <div class="flex flex-wrap items-center justify-around gap-16 sm:gap-32 pb-32">
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">origin-center</h4>
      <div class="relative mt-8">
        <img class="absolute w-96 h-96 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="relative origin-center rotate-30 w-96 h-96 object-cover rounded-8 ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">origin-top-left</h4>
      <div class="relative mt-8">
        <img class="absolute w-96 h-96 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="relative origin-top-left rotate-30 w-96 h-96 object-cover rounded-8 ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">origin-bottom</h4>
      <div class="relative mt-8">
        <img class="absolute w-96 h-96 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="relative origin-bottom rotate-30 w-96 h-96 object-cover rounded-8 ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
  </div>
</example-container>

```html
<img class="rotate-30 origin-center ..." />
<img class="rotate-30 origin-top-left ..." />
<img class="rotate-30 origin-bottom ..." />
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:origin-top` to only apply the `origin-top` utility on hover.

```html
<div class="origin-center hover:origin-top"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:origin-top` to apply the `origin-top` utility at only medium screen sizes and above.

```html
<div class="origin-center md:origin-top"></div>
```