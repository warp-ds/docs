> Layout

# Overflow

Utilities for controlling how an element handles content that is too large for the container.

## Quick reference

| Class | Description |
|-------|-------------|
| `overflow-auto` | `overflow: auto` |
| `overflow-hidden` | `overflow: hidden` |
| `overflow-clip` | `overflow: clip` |
| `overflow-visible` | `overflow: visible` |
| `overflow-scroll` | `overflow: scroll` |
| `overflow-x-auto` | `overflow-x: auto` |
| `overflow-y-auto` | `overflow-y: auto` |
| `overflow-x-hidden` | `overflow-x: hidden` |
| `overflow-y-hidden` | `overflow-y: hidden` |
| `overflow-x-clip` | `overflow-x: clip` |
| `overflow-y-clip` | `overflow-y: clip` |
| `overflow-x-visible` | `overflow-x: visible` |
| `overflow-y-visible` | `overflow-y: visible` |
| `overflow-x-scroll` | `overflow-x: scroll` |
| `overflow-y-scroll` | `overflow-y: scroll` |

## Basic usage

### Showing content that overflows
Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.

<example-container>
  <div class="ex-inner-box overflow-visible">
   <div class="flex items-center relative">
      <img src="/images/matter.jpg" class="absolute object-cover h-128 -ml-48 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div class="pl-112">
        <div class="font-bold">Justina Matter</div>
        <span>Warp Scientist</span>
      </div>
    </div>
  </div>
</example-container>

```html
<div class="overflow-visible ..."></div>
```

### Hiding content that overflows
Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.

<example-container>
  <div class="ex-inner-box overflow-hidden">
    <div class="flex items-center relative">
      <img src="/images/matter.jpg" class="absolute object-cover h-128 -ml-48 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div class="pl-112">
        <div class="font-bold">Justina Matter</div>
        <span>Warp Scientist</span>
      </div>
    </div>
  </div>
</example-container>

```html
<div class="overflow-hidden ..."></div>
```

### Scrolling if needed
Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `overflow-scroll`, which always shows scrollbars, this utility will only show them if scrolling is necessary.

<example-container>
  <div class="ex-inner-box overflow-y-auto p-0 divide-y h-128">
    <div class="flex items-center p-16">
      <img src="/images/matter.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div>
        <div class="font-bold">Justina Matter</div>
        Warp Scientist
      </div>
    </div>
    <div class="flex items-center p-16">
      <img src="/images/profile1.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div>
        <div class="font-bold">Narve Hoops</div>
        Warp Scientist
      </div>
    </div>
    <div class="flex items-center p-16">
      <img src="/images/profile5.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div>
        <div class="font-bold">Dagny Calamity</div>
        Warp Scientist
      </div>
    </div>
    <div class="flex items-center p-16">
      <img src="/images/profile2.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div>
        <div class="font-bold">Joar Quack</div>
        Warp Scientist
      </div>
    </div>
  </div>
</example-container>

```html
<div class="overflow-y-auto h-128 ..."></div>
```

### Scrolling horizontally always
Use `overflow-x-scroll` to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.

<example-container>
  <div class="ex-inner-box overflow-x-scroll max-w-[400] flex gap-24">
    <div class="flex flex-col items-center gap-8 p-12 w-128 shrink-0">
      <img src="/images/matter.jpg" class="rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div class="font-bold">Matter</div>
    </div>
    <div class="flex flex-col items-center gap-8 p-12 w-128 shrink-0">
      <img src="/images/profile1.jpg" class="rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div class="font-bold">Hoops</div>
    </div>
    <div class="flex flex-col items-center gap-8 p-12 w-128 shrink-0">
      <img src="/images/profile2.jpg" class="rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div class="font-bold">Quack</div>
    </div>
    <div class="flex flex-col items-center gap-8 p-12 w-128 shrink-0">
      <img src="/images/profile3.jpg" class="rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div class="font-bold">Sparks</div>
    </div>
    <div class="flex flex-col items-center gap-8 p-12 w-128 shrink-0">
      <img src="/images/profile4.jpg" class="rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div class="font-bold">Hubble</div>
    </div>
    <div class="flex flex-col items-center gap-8 p-12 w-128 shrink-0">
      <img src="/images/profile5.jpg" class="rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div class="font-bold">Calamity</div>
    </div>
    <div class="flex flex-col items-center gap-8 p-12 w-128 shrink-0">
      <img src="/images/profile6.jpg" class="rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div class="font-bold">Glum</div>
    </div>
  </div>
</example-container>

### Scrolling vertically always
Use `overflow-y-scroll` to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.

<example-container>
  <div class="ex-inner-box overflow-y-scroll p-0 divide-y h-128">
    <div class="flex items-center p-16">
      <img src="/images/matter.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div>
        <div class="font-bold">Justina Matter</div>
        Warp Scientist
      </div>
    </div>
    <div class="flex items-center p-16">
      <img src="/images/profile1.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div>
        <div class="font-bold">Narve Hoops</div>
        Warp Scientist
      </div>
    </div>
    <div class="flex items-center p-16">
      <img src="/images/profile5.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div>
        <div class="font-bold">Dagny Calamity</div>
        Warp Scientist
      </div>
    </div>
    <div class="flex items-center p-16">
      <img src="/images/profile2.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
      <div>
        <div class="font-bold">Joar Quack</div>
        Warp Scientist
      </div>
    </div>
  </div>
</example-container>

```html
<div class="overflow-y-scroll ..."></div>
```

### Scrolling in all directions
Use `overflow-scroll` to add scrollbars to an element. Unlike `overflow-auto`, which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.

<example-container>
  <div class="ex-inner-box overflow-scroll p-0 h-[200] max-w-none">
    <img src="/images/50s-scientists.jpg" class="max-w-none" alt="Ai generated picture of warp scientists from the 1950s">
  </div>
</example-container>

```html
<div class="overflow-scroll ..."></div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:overflow-scroll` to apply the `overflow-scroll` utility at only medium screen sizes and above.

```html
<div class="overflow-auto md:overflow-scroll">
  <!-- ... -->
</div>
```
