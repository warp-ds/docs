> Transforms

# Translate

Utilities for translating elements with transform.

## Quick reference

| Class                  | Description            |
|------------------------|------------------------|
| `translate-x-{amount}` | `translateX({amount})` |
| `translate-y-{amount}` | `translateY({amount})` |

> Available values <br />
> `{amount}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />

## Basic usage

### Translating an element
Use the `translate-x-{amount}` and `translate-y-{amount}` utilities to translate an element.

<example-container>
  <div class="flex items-center justify-around gap-16 sm:gap-4 flex-wrap py-32">
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">translate-y-32</h4>
      <div class="relative">
        <img class="w-128 h-128 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="absolute inset-0 translate-y-32 w-128 h-128 object-cover ex-box rounded-8 p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <div class="relative">
        <img class="w-128 h-128 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="absolute inset-0 -translate-y-32 w-128 h-128 object-cover ex-box rounded-8 p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
      <h4 class="ex-heading mb-0 pt-8">-translate-y-32</h4>
    </div>
    <div class="flex flex-col items-center shrink-0 pr-16">
      <h4 class="ex-heading">translate-x-32</h4>
      <div class="relative">
        <img class="w-128 h-128 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="absolute inset-0 translate-x-32 w-128 h-128 object-cover ex-box rounded-8 p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
  </div>
</example-container>

```html
<img class="translate-y-32 ..." />
<img class="-translate-y-32 ..." />
<img class="translate-x-32 ..." />
```

### Using negative values
To use a negative translate value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-translate-y-8 ..." />
```

### Arbitrary values
If you need to use a one-off translate value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="translate-y-[75]"></div>
```

### Removing transforms
To remove all transforms on an element at once, use the `transform-none` utility.
This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.

```html
<div class="scale-75 translate-x-16 skew-y-32 md:transform-none"></div>
```

### Hardware acceleration
If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility.

Use transform-cpu to force things back to the CPU if you need to undo this conditionally.

```html
<div class="translate-y-8 transform-gpu"></div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:translate-y-16` to only apply the `translate-y-16` utility on hover.

```html
<div class="hover:translate-y-16"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:translate-y-16` to apply the `translate-y-16? utility at only medium screen sizes and above.

```html
<div class="md:translate-y-16"></div>
```
