> Transforms

# Rotate

Utilities for rotating elements with transform.

## Quick reference

| Class                  | Description                         |
|------------------------|-------------------------------------|
| `rotate-{deg}`         | `transform: rotate({deg})`          |

> Available values <br />
> `{deg}`: Accepts any degree (120 rotates 120 degrees with the clock). <br />

## Basic usage

### Rotating an element
Use the `rotate-{angle}` utilities to rotate an element.

<example-container>
  <div class="flex flex-wrap items-center justify-around gap-32 sm:gap-16 ex-font-dark dark:pd-text-slate-400 pb-16">
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">rotate-0</h4>
      <img class="w-96 h-96 object-cover ex-box p-0 mt-16" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">rotate-45</h4>
      <div class="relative mt-16">
        <img class="absolute w-96 h-96 object-cover opacity-25 ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="relative rotate-45 w-96 h-96 object-cover ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">rotate-90</h4>
      <img class="w-96 h-96 rotate-90 object-cover ex-box p-0 mt-16" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">rotate-180</h4>
      <img class="w-96 h-96 rotate-180 object-cover ex-box p-0 mt-16" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
    </div>
  </div>
</example-container>

```html
<img class="rotate-0 ...">
<img class="rotate-45 ...">
<img class="rotate-90 ...">
<img class="rotate-180 ...">
```

### Using negative values
To use a negative rotate value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-rotate-45 ..." />
```

### Removing transforms
To remove all transforms on an element at once, use the `transform-none` utility.
This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.

```html
<div class="scale-75 translate-x-4 skew-y-3 md:transform-none"></div>
```

### Hardware acceleration
If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility.

Use `transform-cpu` to force things back to the CPU if you need to undo this conditionally.

```html
<div class="rotate-45 transform-gpu"></div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use hover:rotate-45 to only apply the rotate-45 utility on hover.

```html
<div class="hover:rotate-45"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:rotate-45` to apply the `rotate-45` utility at only medium screen sizes and above.

```html
<div class="md:rotate-45"></div>
```
