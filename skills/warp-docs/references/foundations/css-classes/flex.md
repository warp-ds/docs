# Flex

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/flex

> Flexbox & Grid

Utilities for controlling how flex items both grow and shrink.

| Class | Description |
| --- | --- |
| flex-initial | flex: 0 1 auto |
| flex-1 | flex: 1 1 0% |
| flex-auto | flex: 1 1 auto |
| flex-none | flex: none |

Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size.

```html
<div class="flex">
  <div class="flex-none w-64 ...">01</div>
  <div class="flex-initial w-128 ...">02</div>
  <div class="flex-initial w-80 ...">03</div>
</div>
```

Use `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size.

```html
<div class="flex">
  <div class="flex-none w-64 ...">01</div>
  <div class="flex-1 w-128 ...">02</div>
  <div class="flex-1 w-40 ...">03</div>
</div>
```

Use `flex-auto` to allow a flex item to grow and shrink, taking into account its initial size.

```html
<div class="flex ...">
  <div class="flex-none w-64 ...">01</div>
  <div class="flex-auto w-128 ...">02</div>
  <div class="flex-auto w-40 ...">03</div>
</div>
```

Use `flex-none` to prevent a flex item from growing or shrinking.

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

If you need to use a one-off `flex` value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="flex-[2_2_0%]">
  <!-- ... -->
</div>
```
