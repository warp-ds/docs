> Filters

# Backdrop Blur

Utilities for applying backdrop blur filters to an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `backdrop-blur-none` | `-webkit-backdrop-filter: blur(0) backdrop-filter: blur(0)` |
| `backdrop-blur` | `-webkit-backdrop-filter: blur(4px) backdrop-filter: blur(4px)` |
| `backdrop-blur-s` | `-webkit-backdrop-filter: blur(2px) backdrop-filter: blur(2px)` |
| `backdrop-blur-m` | `-webkit-backdrop-filter: blur(8px) backdrop-filter: blur(8px)` |
| `backdrop-blur-l` | `-webkit-backdrop-filter: blur(12px) backdrop-filter: blur(12px)` |
| `backdrop-blur-xl` | `-webkit-backdrop-filter: blur(16px) backdrop-filter: blur(16px)` |
| `backdrop-blur-xxl` | `-webkit-backdrop-filter: blur(24px) backdrop-filter: blur(24px)` |
| `backdrop-blur-xxxl` | `-webkit-backdrop-filter: blur(40px) backdrop-filter: blur(40px)` |

## Basic usage

### Blurring behind an element
Use the `backdrop-blur-{size}` utilities to control an element’s backdrop blur.

<example-container>
  <div class="flex flex-wrap gap-16 justify-items-center justify-around">
    <div class="text-center">
      <strong class="ex-font-dark">backdrop-blur-none</strong>
      <div class="p-16 bg-[url(../../images/20s-scientists.jpg)] bg-contain w-144 h-144 mx-auto mt-8 relative rounded-8 shadow-m">
        <div class="backdrop-blur-none border pd-border-white absolute inset-16 rounded-8"></div>
      </div>
    </div>
    <div class="text-center">
      <strong class="ex-font-dark">backdrop-blur-s</strong>
      <div class="p-16 bg-[url(../../images/20s-scientists.jpg)] bg-contain w-144 h-144 mx-auto mt-8 relative rounded-8 shadow-m">
        <div class="backdrop-blur-s border pd-border-white absolute inset-16 rounded-8"></div>
      </div>
    </div>
    <div class="text-center">
      <strong class="ex-font-dark">backdrop-blur-m</strong>
      <div class="p-16 bg-[url(../../images/20s-scientists.jpg)] bg-contain w-144 h-144 mx-auto mt-8 relative rounded-8 shadow-m">
        <div class="backdrop-blur-m border pd-border-white absolute inset-16 rounded-8"></div>
      </div>
    </div>
    <div class="text-center">
      <strong class="ex-font-dark">backdrop-blur-l</strong>
      <div class="p-16 bg-[url(../../images/20s-scientists.jpg)] bg-contain w-144 h-144 mx-auto mt-8 relative rounded-8 shadow-m">
        <div class="backdrop-blur-l border pd-border-white absolute inset-16 rounded-8"></div>
      </div>
    </div>
    <div class="text-center">
      <strong class="ex-font-dark">backdrop-blur-xl</strong>
      <div class="p-16 bg-[url(../../images/20s-scientists.jpg)] bg-contain w-144 h-144 mx-auto mt-8 relative rounded-8 shadow-m">
        <div class="backdrop-blur-xl border pd-border-white absolute inset-16 rounded-8"></div>
      </div>
    </div>
    <div class="text-center">
      <strong class="ex-font-dark">backdrop-blur-xxl</strong>
      <div class="p-16 bg-[url(../../images/20s-scientists.jpg)] bg-contain w-144 h-144 mx-auto mt-8 relative rounded-8 shadow-m">
        <div class="backdrop-blur-xxl border pd-border-white absolute inset-16 rounded-8"></div>
      </div>
    </div>
    <div class="text-center">
      <strong class="ex-font-dark">backdrop-blur-xxxl</strong>
      <div class="p-16 bg-[url(../../images/20s-scientists.jpg)] bg-contain w-144 h-144 mx-auto mt-8 relative rounded-8 shadow-m">
        <div class="backdrop-blur-xxxl border pd-border-white absolute inset-16 rounded-8"></div>
      </div>
    </div>
  </div>
</example-container>

```html{2,5,8,11,14,17,20}
<div class="bg-[...] ...">
  <div class="backdrop-blur-none ..."></div>
</div>
<div class="bg-[...] ...">
  <div class="backdrop-blur-s ..."></div>
</div>
<div class="bg-[...] ...">
  <div class="backdrop-blur-m ..."></div>
</div>
<div class="bg-[...] ...">
  <div class="backdrop-blur-l ..."></div>
</div>
<div class="bg-[...] ...">
  <div class="backdrop-blur-xl ..."></div>
</div>
<div class="bg-[...] ...">
  <div class="backdrop-blur-xxl ..."></div>
</div>
<div class="bg-[...] ...">
  <div class="backdrop-blur-xxxl ..."></div>
</div>
```