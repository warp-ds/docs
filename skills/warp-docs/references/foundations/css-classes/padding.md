# Padding

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/padding

> Spacing

Utilities for controlling an element's padding.

| Class | Description |
| --- | --- |
| p-{size} | padding: {size} |
| p{side}-{size} | padding-{side}: {size} |
| px-{size} | padding-left: {size}padding-right: {size} |
| py-{size} | padding-top: {side}padding-bottom: {size} |

> Available values  
> `{side}`: `t`(top), `r`(right), `b`(bottom), `l`(left)  
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144`  

Control the padding on all sides of an element using the `p-{size}` utilities.

```html
<div class="p-32 ...">p-32</div>
```

Control the padding on one side of an element using the `p{t|r|b|l|x|y}-{size}` utilities.

For example,`pt-16` would add `1.6rem` which is equivalent of 16px of padding to the top of an element, `pr-8` would add `0.8rem` (8px) of padding to the right of an element, `pb-32` would add `3.2rem` (32px) of padding to the bottom of an element, and `pl-64` would add `6.4rem` (64px) of padding to the left of an element.

```html
<div class="pt-16 ...">pt-16</div>
<div class="pr-24 ...">pr-24</div>
<div class="pb-8 ...">pb-8</div>
<div class="pl-32 ...">pl-32</div>
```

Control the horizontal padding of an element using the `px-{size}` utilities.

```html
<div class="px-32 ...">px-32</div>
```

Control the vertical padding of an element using the `py-{size}` utilities.

```html
<div class="px-16 ...">px-16</div>
```

If you need to use a one-off padding value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="p-[113]">
  <!-- ... -->
</div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:py-32` to only apply the `py-32` utility on hover.

```html
<div class="py-24 hover:py-32">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:py-8` to apply the `py-8` utility at only medium screen sizes and above.

```html
<div class="py-4 md:py-8">
  <!-- ... -->
</div>
```
