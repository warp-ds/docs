> Spacing

# Margin

Utilities for controlling an element's margin.

## Quick reference

| Class            | Description                                      |
|------------------|--------------------------------------------------|
| `m-{size}`       | `margin: {size};`                                |
| `m{side}-{size}` | `margin-{side}: {size};`                         |
| `mx-{size}`      | `margin-left: {size}`<br/>`margin-right: {size}` |
| `my-{size}`      | `margin-top: {side}`<br/>`margin-bottom: {size}` |

> Available values <br />
> `{side}`: `t`(top), `r`(right), `b`(bottom), `l`(left), `x`(horizontal), `y`(vertical)<br />
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144` <br />

## Basic usage

### Add margin to all sides
Control the margin on all sides of an element using the `m-{size}` utilities.

<example-container class="p-0!">
  <div class="ex-bg--striped ex-bg--blue">
    <div class="ex-box m-32 p-16 pd-bg-blue-500">m-32</div>
  </div>
</example-container>

```html
<div class="m-32 ...">m-32</div>
```

### Add margin to a single side
Control the margin on one side of an element using the `m{t|r|b|l}-{size}` utilities.

For example,`mt-16` would add `1.6rem`which should be equivalent of 16px of margin to the top of an element, `mr-8` would add `0.8rem` (8px) of margin to the right of an element, `pb-32` would add `3.2rem` (32px) of margin to the bottom of an element, and `pl-64` would add `6.4rem` (64px) of margin to the left of an element.

<example-container class="p-0!">
  <div class="flex flex-wrap justify-between">
    <div class="content-center">
      <div class="ex-bg--striped ex-bg--purple flow-root rounded-r-8 my-48">
        <div class="ml-32 p-16 ex-box pd-bg-purple-500">ml-32</div>
      </div>
    </div>
    <div class="content-start">
      <div class="ex-bg--striped ex-bg--purple flow-root rounded-b-8">
        <div class="mt-16 p-16 ex-box pd-bg-purple-500">mt-16</div>
      </div>
    </div>
    <div class="content-end">
      <div class="ex-bg--striped ex-bg--purple flow-root rounded-t-8">
        <div class="mb-32 p-16 ex-box pd-bg-purple-500">mb-32</div>
      </div>
    </div>
    <div class="content-center">
      <div class="ex-bg--striped ex-bg--purple flow-root rounded-l-8">
        <div class="mr-24 p-16 ex-box pd-bg-purple-500">mr-24</div>
      </div>
    </div>
  </div>
</example-container>

```html
<div class="ml-16 ...">ml-32</div>
<div class="mt-16 ...">mt-16</div>
<div class="mb-32 ...">mb-32</div>
<div class="mr-24 ...">mr-24</div>
```

### Add horizontal margin
Control the horizontal margin of an element using the `mx-{size}` utilities.

<example-container class="p-0!">
  <div class="ex-bg--striped ex-bg--indigo my-32">
    <div class="ex-box mx-32 p-16 pd-bg-indigo-500">mx-32</div>
  </div>
</example-container>

```html
<div class="mx-32 ...">mx-32</div>
```

### Add vertical margin
Control the vertical margin of an element using the `my-{size}` utilities.

<example-container class="p-0! flex justify-center">
  <div class="ex-bg--striped ex-bg--pink">
    <div class="ex-box my-32 p-16 pd-bg-pink-500">my-32</div>
  </div>
</example-container>

```html
<div class="my-24 ...">my-24</div>
```

### Using negative values
To use a negative margin value, prefix the class name with a dash to convert it to a negative value.

<example-container>
  <div class="ex-inner-box flex justify-center mb-16">
    <div class="content-end">
      <div class="ex-box -mb-48 p-16 pd-bg-sky-500">-mb-48</div>
    </div>
  </div>
</example-container>

```html
<div class="-mt-32 ...">-mt-32</div>
```

### Arbitrary values
If you need to use a one-off margin value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="m-[7]">
  <!-- ... -->
</div>
```

## Applying conditionally

### Hover, focus, and other states
You can conditionally apply utility classes in different states using variant modifiers. For example, use `hover:mt-8` to only apply the `mt-8` utility on hover.

```html
<div class="mt-4 hover:mt-8">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:mt-8` to apply the `mt-8` utility at only medium screen sizes and above.

```html
<div class="mt-4 md:mt-8">
  <!-- ... -->
</div>
```
