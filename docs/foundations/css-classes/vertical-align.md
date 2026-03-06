> Typography

# Vertical Align

Utilities for controlling the vertical alignment of an inline or table-cell box.

## Quick reference

| Class | Description |
|-------|-------------|
| `align-baseline` | `vertical-align: baseline` |
| `align-top` | `vertical-align: top` |
| `align-middle` | `vertical-align: middle` |
| `align-bottom` | `vertical-align: bottom` |
| `align-text-top` | `vertical-align: text-top` |
| `align-text-bottom` | `vertical-align: text-bottom` |
| `align-sub` | `vertical-align: sub` |
| `align-super` | `vertical-align: super` |

## Basic usage

### Baseline
Use `align-baseline` to align the baseline of an element with the baseline of its parent.

<example-container>
  <div class="ex-inner-box s-text text-body max-w-full">
    <div class="relative leading-none">
      <span class="inline-block align-baseline text-xxl mr-10 leading-none">
        <span class="absolute -mx-8 inset-x-0 top-1 bottom-4 pd-border-pink-300 border-y-1 border-dashed"></span>
        <span class="absolute -mx-8 top-0 h-16 inset-x-0 pd-border-pink-300 border-b border-dashed"></span>
        <span class="relative z-20">Warp</span>
      </span>
      <span class="relative z-20">The quick smart warp scientist drinks the hazy coffee.</span>
    </div>
  </div>
</example-container>

```html
<span class="inline-block align-baseline ...">Warp</span>
```

### Top
Use `align-top` to align the top of an element and its descendants with the top of the entire line.

<example-container>
  <div class="ex-inner-box s-text text-body max-w-full">
    <div class="relative leading-none">
      <span class="inline-block align-top text-xxl mr-10 leading-none">
        <span class="absolute -mx-8 inset-x-0 top-1 bottom-4 pd-border-pink-300 border-y-1 border-dashed"></span>
        <span class="absolute -mx-8 top-0 h-16 inset-x-0 pd-border-pink-300 border-b border-dashed"></span>
        <span class="relative z-20">Warp</span>
      </span>
      <span class="relative z-20">The quick smart warp scientist drinks the hazy coffee.</span>
    </div>
  </div>
</example-container>

### Middle
Use `align-middle` to align the middle of an element with the baseline plus half the x-height of the parent.

<example-container>
  <div class="ex-inner-box s-text text-body max-w-full">
    <div class="relative leading-none">
      <span class="inline-block align-middle text-xxl mr-10 leading-none">
        <span class="absolute -mx-8 inset-x-0 top-1 bottom-4 pd-border-pink-300 border-y-1 border-dashed"></span>
        <span class="absolute -mx-8 top-0 h-16 inset-x-0 pd-border-pink-300 border-b border-dashed"></span>
        <span class="relative z-20">Warp</span>
      </span>
      <span class="relative z-20">The quick smart warp scientist drinks the hazy coffee.</span>
    </div>
  </div>
</example-container>

### Bottom
Use `align-bottom` to align the bottom of an element and its descendants with the bottom of the entire line.

<example-container>
  <div class="ex-inner-box s-text text-body max-w-full">
    <div class="relative leading-none">
      <span class="inline-block align-bottom text-xxl mr-10 leading-none">
        <span class="absolute -mx-8 inset-x-0 top-1 bottom-4 pd-border-pink-300 border-y-1 border-dashed"></span>
        <span class="absolute -mx-8 top-0 h-16 inset-x-0 pd-border-pink-300 border-b border-dashed"></span>
        <span class="relative z-20">Warp</span>
      </span>
      <span class="relative z-20">The quick smart warp scientist drinks the hazy coffee.</span>
    </div>
  </div>
</example-container>

### Text Top
Use `align-text-top` to align the top of an element with the top of the parent element’s font.

<example-container>
  <div class="ex-inner-box s-text text-body max-w-full">
    <div class="relative leading-none">
      <span class="inline-block align-text-top text-xxl mr-10 leading-none">
        <span class="absolute -mx-8 inset-x-0 top-1 bottom-4 pd-border-pink-300 border-y-1 border-dashed"></span>
        <span class="absolute -mx-8 top-0 h-16 inset-x-0 pd-border-pink-300 border-b border-dashed"></span>
        <span class="relative z-20">Warp</span>
      </span>
      <span class="relative z-20">The quick smart warp scientist drinks the hazy coffee.</span>
    </div>
  </div>
</example-container>

### Text Bottom
Use `align-text-bottom` to align the bottom of an element with the bottom of the parent element’s font.

<example-container>
  <div class="ex-inner-box s-text text-body max-w-full">
    <div class="relative leading-none">
      <span class="inline-block align-text-bottom text-xxl mr-10 leading-none">
        <span class="absolute -mx-8 inset-x-0 top-1 bottom-4 pd-border-pink-300 border-y-1 border-dashed"></span>
        <span class="absolute -mx-8 top-0 h-16 inset-x-0 pd-border-pink-300 border-b border-dashed"></span>
        <span class="relative z-20">Warp</span>
      </span>
      <span class="relative z-20">The quick smart warp scientist drinks the hazy coffee.</span>
    </div>
  </div>
</example-container>

### Sub
Use `align-sub` to align the bottom of an element with the subscript-baseline of its parent.

<example-container>
  <div class="ex-inner-box s-text text-body max-w-full">
    <div class="relative text-xxl leading-none">
      <div class="absolute -mx-8 inset-x-0 top-1 bottom-4">
        <span class="absolute inset-x-0 top-0 bottom-8 pd-border-pink-300 border-y-1 border-dashed"></span>
        <span class="absolute h-16 inset-x-0 pd-border-pink-300 border-b border-dashed"></span>
      </div>
      <span class="inline-block mr-4 relative z-20 leading-none">Warp</span>
      <span class="align-sub text-body relative z-20">The quick smart warp scientist drinks the hazy coffee.</span>
    </div>
  </div>
</example-container>

### Super
Use `align-super` to align the bottom of an element with the superscript-baseline of its parent.

<example-container>
  <div class="ex-inner-box s-text text-body max-w-full">
    <div class="relative text-xxl leading-none">
      <span class="absolute -mx-8 inset-x-0 top-1 bottom-4 pd-border-pink-300 border-y-1 border-dashed"></span>
      <span class="absolute -mx-8 top-0 h-16 inset-x-0 pd-border-pink-300 border-b border-dashed"></span>
      <span class="inline-block mr-4 relative z-20 leading-none">Warp</span>
      <span class="align-super text-body relative z-20">The quick smart warp scientist drinks the hazy coffee.</span>
    </div>
  </div>
</example-container>
