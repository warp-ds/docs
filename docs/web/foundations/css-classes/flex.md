> Flexbox & Grid

# Flex

Utilities for controlling how flex items both grow and shrink.

## Quick reference

| Class | Description |
|-------|-------------|
| `flex-initial` | `flex: 0 1 auto` |
| `flex-1` | `flex: 1 1 0%` |
| `flex-auto` | `flex: 1 1 auto` |
| `flex-none` | `flex: none` |

## Basic usage

### Initial
Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size.

<width-controller>
  <example-container>
    <div class="ex-bg--striped ex-bg--blue flex gap-24 rounded-8">
      <div class="w-64 flex-none pd-bg-blue-800 ex-box">01</div>
      <div class="w-128 flex-initial pd-bg-blue-500 ex-box">02</div>
      <div class="w-80 flex-initial pd-bg-blue-500 ex-box">03</div>
    </div>
  </example-container>
</width-controller>

```html
<div class="flex">
  <div class="flex-none w-64 ...">01</div>
  <div class="flex-initial w-128 ...">02</div>
  <div class="flex-initial w-80 ...">03</div>
</div>
```

### Flex 1
Use `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size.

<width-controller>
  <example-container>
    <div class="ex-bg--striped ex-bg--pink flex gap-24 rounded-8">
      <div class="w-64 flex-none pd-bg-pink-800 ex-box">01</div>
      <div class="w-128 flex-1 pd-bg-pink-500 ex-box">02</div>
      <div class="w-40 flex-1 pd-bg-pink-500 ex-box">03</div>
    </div>
  </example-container>
</width-controller>

```html
<div class="flex">
  <div class="flex-none w-64 ...">01</div>
  <div class="flex-1 w-128 ...">02</div>
  <div class="flex-1 w-40 ...">03</div>
</div>
```

### Auto
Use `flex-auto` to allow a flex item to grow and shrink, taking into account its initial size.

<width-controller>
  <example-container>
    <div class="ex-bg--striped ex-bg--violet flex gap-24 rounded-8">
      <div class="w-64 flex-none pd-bg-violet-800 ex-box">01</div>
      <div class="w-128 flex-auto pd-bg-violet-500 ex-box">02</div>
      <div class="w-40 flex-auto pd-bg-violet-500 ex-box">03</div>
    </div>
  </example-container>
</width-controller>

```html
<div class="flex ...">
  <div class="flex-none w-64 ...">01</div>
  <div class="flex-auto w-128 ...">02</div>
  <div class="flex-auto w-40 ...">03</div>
</div>
```

### None
Use `flex-none` to prevent a flex item from growing or shrinking.

<width-controller>
  <example-container>
    <div class="ex-bg--striped ex-bg--indigo flex gap-24 rounded-8">
      <div class="w-64 flex-none pd-bg-indigo-800 ex-box">01</div>
      <div class="w-128 flex-auto pd-bg-indigo-500 ex-box">02</div>
      <div class="w-40 flex-1 pd-bg-indigo-500 ex-box">03</div>
    </div>
  </example-container>
</width-controller>

```html
<div class="flex ...">
  <div class="flex-none w-64 ...">
    01
  </div>
  <div class="flex-none w-128...">
    02
  </div>
  <div class="flex-1 w-40...">
    03
  </div>
</div>
```

### Arbitrary values
If you need to use a one-off `flex` value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="flex-[2_2_0%]">
  <!-- ... -->
</div>
```
