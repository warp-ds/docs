> Layout

# Object Position

Utilities for controlling how a replaced element's content should be positioned within its container.

## Quick reference

| Class | Description |
|-------|-------------|
| `object-bottom` | `object-position: bottom` |
| `object-center` | `object-position: center` |
| `object-left` | `object-position: left` |
| `object-left-bottom` | `object-position: left bottom` |
| `object-left-top` | `object-position: left top` |
| `object-right` | `object-position: right` |
| `object-right-bottom` | `object-position: right bottom` |
| `object-right-top` | `object-position: right top` |
| `object-top` | `object-position: top` |

## Basic usage

### Positioning a replaced element
Use the `object-{side}` utilities to specify how a replaced element’s content should be positioned within its container.

<example-container>
  <div class="flex sm:grid sm:grid-cols-3 sm:gap-16 sm:justify-around">
    <div class="w-full flex flex-col justify-self-start place-items-start ex-inner-box p-16">
      <div class="pb-8">.object-left-top</div>
      <div class="h-128 w-128 flex">
        <img src="/images/50s-scientists_240.jpg" class="object-none object-left-top rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-self-center place-items-center ex-inner-box p-16">
      <div class="pb-8">.object-top</div>
      <div class="h-128 w-128 flex">
        <img src="/images/50s-scientists_240.jpg" class="object-none object-top rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-self-end place-items-end ex-inner-box p-16">
      <div class="pb-8">.object-right-top</div>
      <div class="h-128 w-128 flex">
        <img src="/images/50s-scientists_240.jpg" class="object-none object-right-top rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-self-start place-items-start ex-inner-box p-16">
      <div class="pb-8">.object-left</div>
      <div class="h-128 w-128 flex">
        <img src="/images/50s-scientists_240.jpg" class="object-none object-left rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-self-center place-items-center ex-inner-box p-16">
      <div class="pb-8">.object-center</div>
      <div class="h-128 w-128 flex">
        <img src="/images/50s-scientists_240.jpg" class="object-none object-center rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-self-end place-items-end ex-inner-box p-16">
      <div class="pb-8">.object-right</div>
      <div class="h-128 w-128 flex">
        <img src="/images/50s-scientists_240.jpg" class="object-none object-right rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
     <div class="w-full flex flex-col justify-self-start place-items-start ex-inner-box p-16">
      <div class="pb-8">.object-left-bottom</div>
      <div class="h-128 w-128 flex">
        <img src="/images/50s-scientists_240.jpg" class="object-none object-left-bottom rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-self-center place-items-center ex-inner-box p-16">
      <div class="pb-8">.object-bottom</div>
      <div class="h-128 w-128 flex">
        <img src="/images/50s-scientists_240.jpg" class="object-none object-bottom rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-self-end place-items-end ex-inner-box p-16">
      <div class="pb-8">.object-right-bottom</div>
      <div class="h-128 w-128 flex">
        <img src="/images/50s-scientists_240.jpg" class="object-none object-right-bottom rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
  </div>
</example-container>

```html
<img class="object-none object-left-top ..." src="..." alt="..." />
<img class="object-none object-top ..." src="..." alt="..." />
<img class="object-none object-right-top ..." src="..." alt="..." />
<img class="object-none object-left ..." src="..." alt="..." />
<img class="object-none object-center ..." src="..." alt="..." />
<img class="object-none object-right" src="..." alt="..." />
<img class="object-none object-left-bottom ..." src="..." alt="..." />
<img class="object-none object-bottom ..." src="..." alt="..." />>
<img class="object-none object-right-bottom ..." src="..." alt="..." />
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:object-top` to apply the `object-top` utility at only medium screen sizes and above.

```html
<img class="object-center md:object-top" src="...">
```
