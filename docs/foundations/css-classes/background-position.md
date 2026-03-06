> Backgrounds

# Background Position

Utilities for controlling the position of an element's background image.

## Quick reference

| Class | Description |
|-------|-------------|
| `bg-bottom` | `background-position: bottom` |
| `bg-center` | `background-position: center` |
| `bg-left` | `background-position: left` |
| `bg-left-bottom` | `background-position: left bottom` |
| `bg-left-top` | `background-position: left top` |
| `bg-right` | `background-position: right` |
| `bg-right-bottom` | `background-position: right bottom` |
| `bg-right-top` | `background-position: right top` |
| `bg-top` | `background-position: top` |

## Basic usage

### Setting the background position
Use the `bg-{side}` utilities to control the position of an element’s background image.

<example-container>
  <div class="grid sm:grid-cols-3 gap-24 sm:justify-around">
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8 pd-font-mono">bg-left-top</div>
      <div class="h-128 w-128 rounded-8 bg-top-left bg-[url(../../images/50s-scientists.jpg)]" style="background-size:300%"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8 pd-font-mono">bg-top</div>
      <div class="h-128 w-128 rounded-8 bg-top bg-[url(../../images/50s-scientists.jpg)]" style="background-size:300%"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8 pd-font-mono">bg-right-top</div>
      <div class="h-128 w-128 rounded-8 bg-top-right bg-[url(../../images/50s-scientists.jpg)]" style="background-size:300%"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8 pd-font-mono">bg-left</div>
      <div class="h-128 w-128 rounded-8 bg-left bg-auto bg-[url(../../images/50s-scientists.jpg)]" style="background-size:300%"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8 pd-font-mono">bg-center</div>
      <div class="h-128 w-128 rounded-8 bg-center bg-auto bg-[url(../../images/50s-scientists.jpg)]" style="background-size:300%"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8 pd-font-mono">bg-right</div>
      <div class="h-128 w-128 rounded-8 bg-right bg-auto bg-[url(../../images/50s-scientists.jpg)]" style="background-size:300%"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8 pd-font-mono">bg-left-bottom</div>
      <div class="h-128 w-128 rounded-8 bg-left-bottom bg-auto bg-[url(../../images/50s-scientists.jpg)]" style="background-size:300%"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8 pd-font-mono">bg-bottom</div>
      <div class="h-128 w-128 rounded-8 bg-bottom bg-auto bg-[url(../../images/50s-scientists.jpg)]" style="background-size:300%"></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8 pd-font-mono">bg-right-bottom</div>
      <div class="h-128 w-128 rounded-8 bg-right-bottom bg-auto bg-[url(../../images/50s-scientists.jpg)]" style="background-size:300%"></div>
    </div>
  </div>
</example-container>

```html
<div class="bg-left-top ..."></div>
<div class="bg-top ..."></div>
<div class="bg-right-top ..."></div>
<div class="bg-left ..."></div>
<div class="bg-center ..."></div>
<div class="bg-right ..."></div>
<div class="bg-left-bottom ..."></div>
<div class="bg-bottom ..."></div>
<div class="bg-right-bottom ..."></div>
```

### Arbitrary values
If you need to use a one-off `background-position` value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="bg-[center_top_1rem] ..."></div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:bg-top` to only apply the `bg-top` utility on hover.

```html
<div class="bg-center hover:bg-top ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:bg-top` to apply the `bg-top` utility at only medium screen sizes and above.

```html
<div class="bg-center md:bg-top ..."></div>
```
