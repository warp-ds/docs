> Transforms

# Scale

Utilities for scaling elements with transform.

## Quick reference

| Class                  | Description                                                                      |
|------------------------|----------------------------------------------------------------------------------|
| `scale-{percentage}`   | `transform: translateX({percentage})`<br />`transform: translateY({percentage})` |
| `scale-x-{percentage}` | `transform: translateX({percentage})`                                            |
| `scale-y-{percentage}` | `transform: translateY({percentage})`                                            |

> Available values <br />
> `{percentage}`: Accepts any percentage value. <br />

## Basic usage

### Scaling an element
Use the `scale-{percentage}`, `scale-x-{percentage}`, and `scale-y-{percentage}` utilities to scale an element.

<example-container>
  <div class="flex flex-wrap items-center justify-around gap-32 mb-16">
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">scale-75</h4>
      <div class="relative mt-16">
        <img class="absolute w-128 h-128 object-cover rounded-8 opacity-25" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        <img class="relative scale-75 w-128 h-128 object-cover rounded-8 ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">scale-100</h4>
      <img class="scale-100 mt-16 w-128 h-128 object-cover rounded-8 ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
    </div>
    <div class="flex flex-col items-center shrink-0 pr-16">
      <h4 class="ex-heading">scale-125</h4>
      <img class="scale-125 mt-16 w-128 h-128 object-cover rounded-8 ex-box p-0" src="/images/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
    </div>
  </div>
</example-container>

```html
<img class="scale-75 ...">
<img class="scale-100 ...">
<img class="scale-125 ...">
```

### Using negative values
To use a negative scale value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-scale-50" />
```

### Removing transforms
To remove all transforms on an element at once, use the `transform-none` utility.
This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.

```html
<div class="scale-75 translate-x-16 skew-y-16 md:transform-none"></div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:scale-125` to only apply the `scale-125` utility on hover.

```html
<div class="hover:scale-125"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:scale-125` to apply the `scale-125` utility at only medium screen sizes and above.

```html
<div class="md:scale-125"></div>
```
