# Skew

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/skew

> Transforms

Utilities for skewing elements with transform.

| Class | Description |
| --- | --- |
| skew-x-{amount} | transform: skewX({amount}) |
| skew-y-{amount} | transform: skewY({amount}) |

Use the `skew-x-{amount}` and `skew-y-{amount}` utilities to skew an element.

```html
<img class="skew-y-0 ..." />
<img class="skew-x-8 ..." />
<img class="skew-y-6 ..." />
<img class="skew-x-8 skew-y-12 ..." />
```

To use a negative skew value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-skew-y-6 ..." />
```

To remove all transforms on an element at once, use the `transform-none` utility.

```html
<div class="scale-75 translate-x-16 skew-y-12 md:transform-none"></div>
```

If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility.

Use transform-cpu to force things back to the CPU if you need to undo this conditionally.

```html
<div class="skew-y-12 transform-gpu"></div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:skew-y-12` to only apply the `skew-y-12` utility on hover.

```html
<div class="hover:skew-y-12"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:skew-y-12` to apply the \`skew-y-12´ utility at only medium screen sizes and above.

```html
<div class="md:skew-y-12"></div>
```
