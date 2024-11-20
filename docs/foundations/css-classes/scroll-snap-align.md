> Interactivity

# Scroll Snap Align

Utilities for controlling the scroll offset around items in a snap container.

::: danger Unsupported
This functionality is not yet supported! If you need this, reach out to us on [#smp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Quick reference

<qr-table />

## Basic usage

### Snapping to the center
Use the `snap-center` utility to snap an element to its center when being scrolled inside a snap container.

<example-container class="p-0!">
    <div class="relative">
      <!-- Snap Point -->
      <div class="absolute top-0 bottom-0 left-1/2 border-l-1 pd-border-indigo-500"></div>
      <div class="relative text-center pt-32 pb-16">
        <h4 class="ex-box inline-block py-4 pd-bg-indigo-500">snap-center</h4>
      </div>
      <!-- Contents -->
      <div class="relative w-full flex gap-16 snap-x snap-mandatory overflow-x-auto px-16 pb-32" style="scroll-snap-type: x mandatory;">
        <div class="snap-center shrink-0" style="scroll-snap-align: center;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la09.jpg">
        </div>
        <div class="snap-center shrink-0" style="scroll-snap-align: center;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la06.jpg">
        </div>
        <div class="snap-center shrink-0" style="scroll-snap-align: center;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la10.jpg">
        </div>
        <div class="snap-center shrink-0" style="scroll-snap-align: center;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la01.jpg">
        </div>
        <div class="snap-center shrink-0" style="scroll-snap-align: center;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la11.jpg">
        </div>
        <div class="snap-center shrink-0" style="scroll-snap-align: center;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la13.jpg">
        </div>
      </div>
    </div>
</example-container>

```html
<div class="snap-x ...">
  <div class="snap-center ..."><img src="..." /></div>
  <div class="snap-center ..."><img src="..." /></div>
  <!-- ... -->
  <div class="snap-center ..."><img src="..." /></div>
</div>
```

### Snapping to the start
Use the `snap-start` utility to snap an element to its start when being scrolled inside a snap container.

<example-container class="relative p-0!">
  <div class="relative rounded-xl">
    <div class="relative">
      <!-- Snap Point -->
      <div class="absolute top-0 bottom-0 left-16 border-l-1 pd-border-indigo-500"></div>
      <div class="relative pt-32 pb-16">
        <h4 class="ex-box rounded-l-0 inline-block py-4 ml-16 pd-bg-indigo-500">snap-start</h4>
      </div>
      <!-- Contents -->
      <div class="relative w-full flex snap-x snap-mandatory overflow-x-auto pb-32 pr-16" style="scroll-snap-type: x mandatory;">
        <div class="shrink-0">
          <div class="shrink-0 w-48"></div>
        </div>
        <div class="snap-start shrink-0 pl-16" style="scroll-snap-align: start;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-xl pd-bg-white" src="/images/la09.jpg">
        </div>
        <div class="snap-start shrink-0 pl-16" style="scroll-snap-align: start;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-xl pd-bg-white" src="/images/la06.jpg">
        </div>
        <div class="snap-start shrink-0 pl-16" style="scroll-snap-align: start;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-xl pd-bg-white" src="/images/la10.jpg">
        </div>
        <div class="snap-start shrink-0 pl-16" style="scroll-snap-align: start;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-xl pd-bg-white" src="/images/la01.jpg">
        </div>
        <div class="snap-start shrink-0 pl-16" style="scroll-snap-align: start;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-xl pd-bg-white" src="/images/la11.jpg">
        </div>
        <div class="snap-start shrink-0 pl-16" style="scroll-snap-align: start;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-xl pd-bg-white" src="/images/la13.jpg">
        </div>
      </div>
    </div>
  </div>
</example-container>

```html
<div class="snap-x ...">
  <div class="snap-start ..."><img src="..." /></div>
  <div class="snap-start ..."><img src="..." /></div>
  <!-- ... -->
  <div class="snap-start ..."><img src="..." /></div>
</div>
```

### Snapping to the end
Use the `snap-end` utility to snap an element to its end when being scrolled inside a snap container.

<example-container class="relative p-0!">
  <div class="relative rounded-xl overflow-auto">
    <div class="relative">
      <!-- Snap Point -->
      <div class="absolute top-0 bottom-0 right-16 border-r-1 pd-border-indigo-500"></div>
      <div class="relative pt-32 pb-16 text-right">
        <h4 class="ex-box rounded-r-0 inline-block py-4 mr-16 pd-bg-indigo-500">snap-end</h4>
      </div>
      <!-- Contents -->
      <div class="relative w-full flex snap-x snap-mandatory overflow-x-auto pb-32" style="scroll-snap-type: x mandatory;">
        <div class="snap-end shrink-0 px-16" style="scroll-snap-align: end;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la09.jpg">
        </div>
        <div class="snap-end shrink-0 pr-16" style="scroll-snap-align: end;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la06.jpg">
        </div>
        <div class="snap-end shrink-0 pr-16" style="scroll-snap-align: end;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la10.jpg">
        </div>
        <div class="snap-end shrink-0 pr-16" style="scroll-snap-align: end;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la01.jpg">
        </div>
        <div class="snap-end shrink-0 pr-16" style="scroll-snap-align: end;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la11.jpg">
        </div>
        <div class="snap-end shrink-0 pr-16" style="scroll-snap-align: end;">
          <img class="shrink-0 w-[300] rounded-8 pd-shadow-lg" src="/images/la13.jpg">
        </div>
        <div class="snap-end shrink-0 pr-16">
          <div class="shrink-0 w-48"></div>
        </div>
      </div>
    </div>
  </div>
</example-container>

```html
<div class="snap-x ...">
  <div class="snap-end ..."><img src="..." /></div>
  <div class="snap-end ..."><img src="..." /></div>
  <!-- ... -->
  <div class="snap-end ..."><img src="..." /></div>
</div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:snap-start` to only apply the `snap-start` utility on hover.

```html
<div class="snap-center hover:snap-start"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:snap-start` to apply the `snap-start` utility at only medium screen sizes and above.

```html
<div class="snap-center md:snap-start"></div>
```
