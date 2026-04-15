# Animation

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/animation

> Transitions & Animation

Utilities for animating elements with CSS animations.

| Class | Description |
| --- | --- |
| animate-inprogress | .animate-inprogress { background-image: linear-gradient(135deg, rgba(0, 0, 0, .05) 25%, transparent 0, transparent 50%, rgba(0, 0, 0, .05) 0, rgba(0, 0, 0, .05) 75%, transparent 0, transparent) !important background-size: 30px 30px animation: animate-inprogress 3s linear infinite } @keyframes animate-inprogress { 0% { background-position: 0 0 } to { background-position: 60px 0 } } |
| animate-spinner | .animate-spinner { --spinner-size: 24px height: var(--spinner-size) width: var(--spinner-size) border-radius: 50% border: calc(var(--spinner-size) / 8) solid rgba(var(--w-s-rgb-border-primary-subtle), .5) border-top-color: var(--w-s-color-border-primary) position: relative animation: animate-spinner 0.75s infinite linear } .animate-spinner: : before, .animate-spinner: : after { content: ' ' height: calc(var(--spinner-size) / 8) width: calc(var(--spinner-size) / 8) border-radius: 50% position: absolute top: calc(var(--spinner-size) / 180) } .animate-spinner: : after { right: 0 } .animate-spinner: : before { left: 0 } @keyframes animate-spinner { to { transform: rotate(359deg) } } |

Add the `animate-inprogress` utility to add an animated background to indicate that something is in progress.

```html
  <div class="animate-inprogress">Saving...</div>
```

Add the `animate-spinner` utility to add an animated spinner to indicate that something is loading. You can change the size by adjusting `--spinner-size` (default size is 24px).

```html
<div class="animate-spinner [--spinner-size:16px]"></div>
<div class="animate-spinner"></div>
<div class="animate-spinner [--spinner-size:32px]"></div>
```
