> Layout

# Position

Utilities for controlling how an element is positioned in the DOM.

## Quick reference

| Class | Description |
|-------|-------------|
| `static` | `position: static` |
| `fixed` | `position: fixed` |
| `absolute` | `position: absolute` |
| `relative` | `position: relative` |
| `sticky` | `position: sticky` |

## Basic usage

### Statically positioning elements
Use `static` to position an element according to the normal flow of the document.

Any `offsets` will be ignored and the element will not act as a position reference for absolutely positioned children.

<example-container>
  <div class="ex-bg--striped ex-bg--fuchsia rounded-8 p-16 relative">
    <div class="static pd-bg-fuchsia-500 p-16 h-128 rounded-4 ex-font">
      Static parent
      <div class="absolute bottom-0 left-0 pd-bg-purple-600 pd-shadow-lg rounded-4 p-16 pd-text-white ex-font">
        Absolute child
      </div>
    </div>
  </div>
</example-container>

```html{2}
<div class="relative ...">
  <div class="static ...">
    Static parent
    <div class="absolute bottom-0 left-0 ...">
      Absolute child
    </div>
  </div>
</div>
```

### Relatively positioning elements
Use `relative` to position an element according to the normal flow of the document.

Any `offsets` are calculated relative to the element’s normal position and the element will act as a position reference for absolutely positioned children.

<example-container>
  <div class="ex-bg--striped ex-bg--blue rounded-8 p-16">
    <div class="relative pd-bg-blue-500 p-16 h-128 rounded-4 ex-font">
      Relative parent
      <div class="absolute bottom-0 left-0 pd-bg-indigo-600 pd-shadow-lg rounded-4 p-16 pd-text-white ex-font">
        Absolute child
      </div>
    </div>
  </div>
</example-container>

```html
<div class="relative ...">
  <p>Relative parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

### Absolutely positioning elements
Use `absolute` to position an element outside the normal flow of the document, causing neighboring elements to act as if the element doesn't exist.

Any `offsets` are calculated relative to the nearest parent that has a position other than static, and the element will act as a position reference for other absolutely positioned children.

<example-container>
  <h4>With static positioning</h4>
  <div class="relative ex-bg--striped ex-bg--fuchsia rounded-8 p-16 ex-font pd-text-black">
    Relative parent
    <div class="static pd-bg-fuchsia-500 p-8 h-144 mt-8 rounded-4 pd-text-white">
      Static parent
      <div class="flex gap-16 my-8">
        <div class="static pd-bg-purple-600 pd-shadow-lg rounded-4 p-8">
          Static child
        </div>
        <div class="static pd-bg-white pd-shadow-lg rounded-4 p-8 pd-text-black">
          Static sibling
        </div>
      </div>
    </div>
  </div>

  <h4 class="mt-24">With absolute positioning</h4>
  <div class="relative ex-bg--striped ex-bg--blue rounded-8 p-16 ex-font pd-text-black">
    Relative parent
    <div class="static pd-bg-blue-500 p-8 h-144 mt-8 rounded-4 pd-text-white">
      Static parent
      <div class="flex gap-16 my-8">
        <div class="absolute top-0 right-0 pd-bg-indigo-500 pd-shadow-lg rounded-4 p-8">
          Absolute child
        </div>
        <div class="static pd-bg-white pd-shadow-lg rounded-4 p-8 pd-text-black">
          Static sibling
        </div>
      </div>
    </div>
  </div>
</example-container>

```html
<div class="static ...">
  <!-- Static parent -->
  <div class="static ..."><p>Static child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
  <!-- Static parent -->
  <div class="absolute ..."><p>Absolute child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
</div>
```

### Fixed positioning elements
Use `fixed` to position an element relative to the browser window.

Any `offsets` are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children.

<example-container>
  <div class="ex-inner-box p-0 pd-bg-blue-500 p-4 rounded-4">
    <div class="pd-text-white ex-font pb-4 px-2">Imaginary browser window</div>
    <div class="relative s-bg h-[200] overflow-y-scroll">
      <h4 class="sticky border-b s-border/50 s-bg/50 left-0 right-0 top-0 px-16 py-8 backdrop-blur-m">Warp Scientists</h4>
      <ul class="divide-y">
        <li class="flex items-center p-16">
          <img src="/images/matter.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div>
            <div class="font-bold">Justina Matter</div>
            Warp Scientist
          </div>
        </li>
        <li class="flex items-center p-16">
          <img src="/images/profile1.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div>
            <div class="font-bold">Narve Hoops</div>
            Warp Scientist
          </div>
        </li>
        <li class="flex items-center p-16">
          <img src="/images/profile5.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div>
            <div class="font-bold">Dagny Calamity</div>
            Warp Scientist
          </div>
        </li>
        <li class="flex items-center p-16">
          <img src="/images/profile2.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div>
            <div class="font-bold">Joar Quack</div>
            Warp Scientist
          </div>
        </li>
    </ul>
    </div>
  </div>
</example-container>

```html{2}
<div>
  <h4 class="fixed top-0 left-0 right-0">Warp Scientists</h4>
  <ul>
    <li>
      <img src="..." />
      <div>Justina Matter</div>
    </li>
    <li>
      <img src="..." />
      <div>Narve Hoops</div>
    </li>
    <!-- ... -->
  </ul>
</div>
```

### Sticky positioning elements
Use `sticky` to position an element as `relative` until it crosses a specified threshold, then treat it as fixed until its parent is off screen.

Any `offsets` are calculated relative to the element’s normal position and the element will act as a position reference for absolutely positioned children.

<example-container>
  <div class="ex-inner-box relative p-0">
    <div class="overflow-y-scroll h-[200]">
      <div>
        <h4 class="sticky border-b s-border/50 s-bg-primary/10 left-0 right-0 top-0 px-16 py-8 backdrop-blur-m mb-0">A - Warp Scientists</h4>
        <ul class="divide-y">
          <li class="flex items-center px-12 py-8">
            <img src="/images/matter.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Ainsley Matter</strong>
          </li>
          <li class="flex items-center px-12 py-8">
            <img src="/images/profile1.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Alarik Hoops</strong>
          </li>
          <li class="flex items-center px-12 py-8">
            <img src="/images/profile5.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Ambrose Calamity</strong>
          </li>
          <li class="flex items-center px-12 py-8">
            <img src="/images/profile2.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Anders Quack</strong>
          </li>
        </ul>
      </div>
      <div class="pt-32">
        <h4 class="sticky border-b s-border/50 s-bg-positive/10 left-0 right-0 top-0 px-16 py-8 backdrop-blur-m mb-0">B - Warp Scientists</h4>
        <ul class="divide-y">
          <li class="flex items-center px-12 py-8">
            <img src="/images/matter.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Bella Matter</strong>
          </li>
          <li class="flex items-center px-12 py-8">
            <img src="/images/profile1.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Brayden Hoops</strong>
          </li>
          <li class="flex items-center px-12 py-8">
            <img src="/images/profile1.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Bailey Calamity</strong>
          </li>
          <li class="flex items-center px-12 py-8">
            <img src="/images/profile5.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Bentley Quack</strong>
          </li>
        </ul>
      </div>
      <div class="pt-32">
        <h4 class="sticky border-b s-border/50 s-bg-negative/10 left-0 right-0 top-0 px-16 py-8 backdrop-blur-m mb-0">C - Warp Scientists</h4>
        <ul class="divide-y">
          <li class="flex items-center px-12 py-8">
            <img src="/images/matter.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Charlotte Matter</strong>
          </li>
          <li class="flex items-center px-12 py-8">
            <img src="/images/profile1.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Carter Hoops</strong>
          </li>
          <li class="flex items-center px-12 py-8">
            <img src="/images/profile1.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Claire Calamity</strong>
          </li>
          <li class="flex items-center px-12 py-8">
            <img src="/images/profile5.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <strong>Cora Quack</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</example-container>

```html{3,17}
<div>
  <div>
    <h4 class="sticky top-0 left-0 right-0 ...">A - Warp Scientists</h4>
    <ul>
      <li>
        <img src="..." />
        <strong>Ainsley Matter</strong>
      </li>
      <li>
        <img src="..." />
        <strong>Alarik Hoops</strong>
      </li>
      <!-- ... -->
    </ul>
  </div>
  <div>
    <h4 class="sticky top-0 left-0 right-0 ...">B - Warp Scientists</h4>
    <ul>
      <li>
        <img src="..." />
        <strong>Bella Matter</strong>
      </li>
      <!-- ... -->
    </ul>
  </div>
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:absolute` to apply the `absolute` utility at only medium screen sizes and above.

```html
<div class="relative md:absolute">
  <!-- ... -->
</div>
```
