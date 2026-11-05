> Transitions & Animation

# Transition Delay

Utilities for controlling the delay of CSS transitions.

## Quick reference

| Class                 | Description                  |
|-----------------------|------------------------------|
| `delay-{amount(ms)}`  | `transition-delay: {amount}` |

> Available values <br />
> `{amount}`: Accepts any value in ms (1000 = 1 s)<br />

## Basic usage

### Delaying transitions
Use the `delay-{amount}` utilities to control an element’s transition-delay.

<example-container>
 <div class="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around pd-text-white pd-text-sm font-bold leading-6">
  <div class="flex flex-col items-center shrink-0">
    <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-16 dark:pd-text-slate-400">delay-150</p>
    <div class="ex-box pd-bg-indigo-500 pd-text-white hover:scale-125 ease-in-out delay-150 duration-300">Hover me</div>
  </div>
  <div class="flex flex-col items-center shrink-0">
    <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-16 dark:pd-text-slate-400">delay-300</p>
    <div class="ex-box pd-bg-blue-500 pd-text-white hover:scale-125 ease-in-out delay-300 duration-300">Hover me</div>
  </div>
  <div class="flex flex-col items-center shrink-0">
    <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-16 dark:pd-text-slate-400">delay-700</p>
    <div class="ex-box pd-bg-cyan-500 pd-text-white hover:scale-125 ease-in-out delay-1700 duration-300">Hover me</div>
  </div>
 </div>
</example-container>

```html
<div class="transition duration-300 delay-150 ...">Hover me</div>
<div class="transition duration-300 delay-300 ...">Hover me</div>
<div class="transition duration-300 delay-700 ...">Hover me</div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:delay-300` to only apply the `delay-300` utility on hover.

```html
<div class="transition duration-300 delay-150 hover:delay-300"></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:delay-300` to apply the `delay-300` utility at only medium screen sizes and above.

```html
<div class="transition duration-300 delay-150 md:delay-300"></div>
```