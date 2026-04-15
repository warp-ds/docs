# Transition Delay

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/transition-delay

> Transitions & Animation

Utilities for controlling the delay of CSS transitions.

| Class | Description |
| --- | --- |
| delay-{amount(ms)} | transition-delay: {amount} |

> Available values  
> `{amount}`: Accepts any value in ms (1000 = 1 s)  

Use the `delay-{amount}` utilities to control an element’s transition-delay.

```html
<div class="transition duration-300 delay-150 ...">Hover me</div>
<div class="transition duration-300 delay-300 ...">Hover me</div>
<div class="transition duration-300 delay-700 ...">Hover me</div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:delay-300` to only apply the `delay-300` utility on hover.

```html
<div class="transition duration-300 delay-150 hover:delay-300"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:delay-300` to apply the `delay-300` utility at only medium screen sizes and above.

```html
<div class="transition duration-300 delay-150 md:delay-300"></div>
```
