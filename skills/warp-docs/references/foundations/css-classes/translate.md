# Translate

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/translate

> Transforms

Utilities for translating elements with transform.

| Class | Description |
| --- | --- |
| translate-x-{amount} | translateX({amount}) |
| translate-y-{amount} | translateY({amount}) |

> Available values  
> `{amount}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144`  

Use the `translate-x-{amount}` and `translate-y-{amount}` utilities to translate an element.

```html
<img class="translate-y-32 ..." />
<img class="-translate-y-32 ..." />
<img class="translate-x-32 ..." />
```

To use a negative translate value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-translate-y-8 ..." />
```

If you need to use a one-off translate value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="translate-y-[75]"></div>
```

To remove all transforms on an element at once, use the `transform-none` utility. This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.

```html
<div class="scale-75 translate-x-16 skew-y-32 md:transform-none"></div>
```

If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility.

Use transform-cpu to force things back to the CPU if you need to undo this conditionally.

```html
<div class="translate-y-8 transform-gpu"></div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:translate-y-16` to only apply the `translate-y-16` utility on hover.

```html
<div class="hover:translate-y-16"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:translate-y-16` to apply the \`translate-y-16? utility at only medium screen sizes and above.

```html
<div class="md:translate-y-16"></div>
```
