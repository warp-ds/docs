> Transforms

# Skew

Utilities for skewing elements with transform.

## Quick reference

| Class             | Description                  |
|-------------------|------------------------------|
| `skew-x-{amount}` | `transform: skewX({amount})` |
| `skew-y-{amount}` | `transform: skewY({amount})` |

## Basic usage

### Skewing an element
Use the `skew-x-{amount}` and `skew-y-{amount}` utilities to skew an element.

<example-container>
  <div class="flex flex-wrap items-center justify-around gap-16 sm:gap-32">
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">skew-y-0</h4>
      <img class="w-96 h-96 object-cover rounded-8 ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">skew-x-8</h4>
      <div class="relative">
        <img class="absolute w-96 h-96 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="relative w-96 h-96 object-cover ex-box p-0 skew-x-8" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">skew-y-6</h4>
      <div class="relative">
        <img class="absolute w-96 h-96 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="relative skew-y-6 w-96 h-96 object-cover rounded-8 ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">skew-x-8 skew-y-12</h4>
      <div class="relative">
        <img class="absolute w-96 h-96 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="relative skew-x-8 skew-y-12 w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
  </div>
</example-container>

```html
<img class="skew-y-0 ..." />
<img class="skew-x-8 ..." />
<img class="skew-y-6 ..." />
<img class="skew-x-8 skew-y-12 ..." />
```

### Using negative values
To use a negative skew value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-skew-y-6 ..." />
```

### Removing transforms
To remove all transforms on an element at once, use the `transform-none` utility.

```html
<div class="scale-75 translate-x-16 skew-y-12 md:transform-none"></div>
```

### Hardware acceleration
If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility.

Use transform-cpu to force things back to the CPU if you need to undo this conditionally.

```html
<div class="skew-y-12 transform-gpu"></div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:skew-y-12` to only apply the `skew-y-12` utility on hover.

```html
<div class="hover:skew-y-12"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:skew-y-12` to apply the `skew-y-12´ utility at only medium screen sizes and above.

```html
<div class="md:skew-y-12"></div>
```
