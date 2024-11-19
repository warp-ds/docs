> Borders

# Divide Style

Utilities for controlling the border style between elements.

::: danger Unsupported
This functionality is not yet supported! If you need this, reach out to us on [#smp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Quick reference

| Class                       | Description                          |
|-----------------------------|--------------------------------------|
| ~~`divide-solid`~~ > * + *  | `border-style: solid` (Unsupported)  |
| ~~`divide-dashed`~~ > * + * | `border-style: dashed` (Unsupported) |
| ~~`divide-dotted`~~ > * + * | `border-style: dotted` (Unsupported) |
| ~~`divide-none`~~ > * + *   | `border-style: none` (Unsupported)   |

## Basic usage

### Set the divide style
Control the border style between elements using the `divide-{style}` utilities.

<!--example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="pd-bg-pink-500 rounded-8 divide-y divide-dashed w-full max-w-[300]">
      <div class="p-24 text-center">1</div>
      <div class="p-24 text-center">2</div>
      <div class="p-24 text-center">3</div>
    </div>
  </div>
</container-->

```html
<div class="divide-y divide-dashed ...">
  <!-- ... -->
</div>
```
