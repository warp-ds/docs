> Typography

# Text Color

Utilities for controlling the text color of an element.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

| Class | Color | Description |
|-------|-------|-------------|
| text-transparent | <div class="s-bg p-10 abc inline-block"><span class="text-transparent text-l">Text</span></div> | color: transparent |
| text-current | <div class="s-bg p-10 abc inline-block"><span class="text-current text-l">Text</span></div> | color: currentColor |
| s-text | <div class="s-bg p-10 abc inline-block"><span class="s-text text-l">Text</span></div> | color: var(--w-s-color-text) |
| s-text-static | <div class="s-bg-negative-subtle p-10 abc inline-block"><span class="s-text-static text-l">Text</span></div> | color: var(--w-s-color-text-static) *(v2)* |
| s-text-subtle | <div class="s-bg p-10 abc inline-block"><span class="s-text-subtle text-l">Text</span></div> | color: var(--w-s-color-text-subtle) |
| s-text-placeholder | <div class="s-bg p-10 abc inline-block"><span class="s-text-placeholder text-l">Text</span></div> | color: var(--w-s-color-text-placeholder) |
| s-text-inverted | <div class="s-bg-inverted p-10 abc inline-block"><span class="s-text-inverted text-l">Text</span></div> | color: var(--w-s-color-text-inverted) |
| s-text-inverted-static | <div class="s-bg-notification p-10 abc inline-block"><span class="s-text-inverted-static text-l">Text</span></div> | color: var(--w-s-color-text-inverted-static) *(v2)* |
| s-text-inverted-subtle | <div class="s-bg-inverted p-10 abc inline-block"><span class="s-text-inverted-subtle text-l">Text</span></div> | color: var(--w-s-color-text-inverted-subtle) |
| s-text-link | <div class="s-bg p-10 abc inline-block"><span class="s-text-link text-l">Text</span></div> | color: var(--w-s-color-text-link) |
| s-text-disabled | <div class="s-bg p-10 abc inline-block"><span class="s-text-disabled text-l">Text</span></div> | color: var(--w-s-color-text-disabled) |
| s-text-negative | <div class="s-bg p-10 abc inline-block"><span class="s-text-negative text-l">Text</span></div> | color: var(--w-s-color-text-negative) |
| s-text-positive | <div class="s-bg p-10 abc inline-block"><span class="s-text-positive text-l">Text</span></div> | color: var(--w-s-color-text-positive) |
| ~~s-text-notification~~ || Replaced by `s-text-inverted-static` in v2 |

::: tip New in v2
To cater for upcoming dark mode, we've added two classes.  
Whenever you have a text that should be "black" in both light and dark mode, use `s-text-static`.  
If you have a text that should be "white" in both light and dark mode, use `s-text-inverted-static`.
:::

## Basic usage

### Setting the text color
Control the text color of an element using the `text-{transparent|current}` or `s-text-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="ex-inner-box text-body">
    <strong class="s-text pd-font-mono text-s">s-text</strong>
    <p class="s-text">The quick smart warp scientist</p>
    <strong class="s-text-static pd-font-mono text-s">s-text-satic</strong>
    <p class="s-text-static">The quick smart warp scientist</p>
    <strong class="s-text-subtle pd-font-mono text-s">s-text-subtle</strong>
    <p class="s-text-subtle">The quick smart warp scientist</p>
    <strong class="s-text-placeholder pd-font-mono text-s">s-text-placeholder</strong>
    <p class="s-text-placeholder">The quick smart warp scientist</p>
    <div class="s-bg-inverted -mx-8 px-8 py-4 mb-8 rounded">
      <strong class="s-text-inverted pd-font-mono text-s">s-text-inverted</strong>
      <p class="s-text-inverted">The quick smart warp scientist</p>
      <strong class="s-text-inverted-static pd-font-mono text-s">s-text-inverted-static</strong>
      <p class="s-text-inverted-static mb-8">The quick smart warp scientist</p>
      <strong class="s-text-inverted-subtle pd-font-mono text-s">s-text-inverted-subtle</strong>
      <p class="s-text-inverted-subtle mb-0">The quick smart warp scientist</p>
    </div>
    <strong class="s-text-link pd-font-mono text-s">s-text-link</strong>
    <p class="s-text-link">The quick smart warp scientist</p>
    <strong class="s-text-link-disabled pd-font-mono text-s">s-text-link-disabled</strong>
    <p class="s-text-link-disabled">The quick smart warp scientist</p>
    <strong class="s-text-positive pd-font-mono text-s">s-text-positive</strong>
    <p class="s-text-positive">The quick smart warp scientist</p>
    <strong class="s-text-negative pd-font-mono text-s">s-text-negative</strong>
    <p class="s-text-negative">The quick smart warp scientist</p>
  </div>
</example-container>

```html
<p class="s-text">The quick smart warp scientist</p>
<p class="s-text-static">The quick smart warp scientist</p>
<p class="s-text-subtle">The quick smart warp scientist</p>
<p class="s-text-placeholder">The quick smart warp scientist</p>
<p class="s-text-inverted ...">The quick smart warp scientist</p>
<p class="s-text-inverted-static ...">The quick smart warp scientist</p>
<p class="s-text-inverted-subtle ...">The quick smart warp scientist</p>
<p class="s-text-link">The quick smart warp scientist</p>
<p class="s-text-link-disabled">The quick smart warp scientist</p>
<p class="s-text-positive">The quick smart warp scientist</p>
<p class="s-text-negative">The quick smart warp scientist</p>
```

### Arbitrary values
If you need to use a one-off `text-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However, we recommend only using our semantic color tokens.

```html
<p class="text-[--w-s-color-border]"></p>
```

### Opacity
It is possible to control the opacity of the text color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.

The examples below are inaccessible and purely for technical reference.
Always make sure any text has sufficient contrast to its background.
:::

<example-container class="bg-center bg-[url(../../images/50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="s-text/60 hover:s-text/100 transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16">Warp</div>
    <div class="s-text-link/50 hover:s-text-link/100 transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16">Warp</div>
    <div class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16">Warp</div>
    <div class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16">Warp</div>
  </div>
</example-container>

```html
<div class="s-text/60 hover:s-text/100 ...">Warp</div>
<div class="s-text-link/50 hover:s-text-link/100 ...">Warp</div>
<div class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] ...">Warp</div>
<div class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] ...">Warp</div>
```

## Applying conditionally

### Hover, focus, and other states

You can conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-text-positive` to only apply the `s-text-positive` utility on hover.

<example-container>
  <p class="s-text hover:s-text-positive mb-0">The quick smart warp scientist</p>
</example-container>

```html
<p class="s-text hover:s-text-positive">The quick smart warp scientist</p>
```

### Breakpoints and media queries

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:s-text-positive` to apply the `s-text-positive` utility at only medium screen sizes and above.

<example-container>
  <p class="s-text md:s-text-positive mb-0">The quick smart warp scientist</p>
</example-container>

```html
<p class="s-text md:s-text-positive">The quick smart warp scientist</p>
```
