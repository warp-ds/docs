> Flexbox & Grid

# Flex Basis

Utilities for controlling the initial size of flex items.

## Quick reference

| Class              | Description                                                            |
|--------------------|------------------------------------------------------------------------|
| `basis-{size}`     | Set the initial size of the item to `{size}`                           |
| `basis-{fraction}` | Set the initial size of the item to a percentage based on `{fraction}` |

> Available values <br />
> `{size}`: `1`, `2`, `4`, `8`, `16`, `32`, `48`, `64` <br />
> `{fraction}`: _Any fraction is valid - e.g. `1/5`_

## Basic usage

### Setting the flex basis
Use the `basis-{size}` utilities to set the initial size of flex items.

<example-container>
  <div class="flex gap-24">
    <div class="basis-1/4 pd-bg-fuchsia-500 ex-box">01</div>
    <div class="basis-1/4 pd-bg-fuchsia-500 ex-box">02</div>
    <div class="basis-1/2 pd-bg-fuchsia-500 ex-box">03</div>
  </div>
</example-container>

```html
<div class="flex">
  <div class="basis-1/4">01</div>
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div>
```

### Arbitrary values
If you need to use a one-off flex-basis value, use square brackets to generate a property on the fly using any arbitrary value.

```html{2}
<div class="flex">
  <div class="basis-[15%]"></div>
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:basis-1/3` to apply the `basis-1/3` utility at only medium screen sizes and above.

```html
<div class="flex">
  <div class="basis-1/4 md:basis-1/3">01</div>
  <div class="basis-1/4 md:basis-1/3">02</div>
  <div class="basis-1/2 md:basis-1/3">03</div>
</div>
```
