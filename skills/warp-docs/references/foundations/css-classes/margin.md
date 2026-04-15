# Margin

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/margin

> Spacing

Utilities for controlling an element's margin.

| Class | Description |
| --- | --- |
| m-{size} | margin: {size}; |
| m{side}-{size} | margin-{side}: {size}; |
| mx-{size} | margin-left: {size}margin-right: {size} |
| my-{size} | margin-top: {side}margin-bottom: {size} |

> Available values  
> `{side}`: `t`(top), `r`(right), `b`(bottom), `l`(left), `x`(horizontal), `y`(vertical)  
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144`  

Control the margin on all sides of an element using the `m-{size}` utilities.

```html
<div class="m-32 ...">m-32</div>
```

Control the margin on one side of an element using the `m{t|r|b|l}-{size}` utilities.

For example,`mt-16` would add `1.6rem`which should be equivalent of 16px of margin to the top of an element, `mr-8` would add `0.8rem` (8px) of margin to the right of an element, `pb-32` would add `3.2rem` (32px) of margin to the bottom of an element, and `pl-64` would add `6.4rem` (64px) of margin to the left of an element.

```html
<div class="ml-16 ...">ml-32</div>
<div class="mt-16 ...">mt-16</div>
<div class="mb-32 ...">mb-32</div>
<div class="mr-24 ...">mr-24</div>
```

Control the horizontal margin of an element using the `mx-{size}` utilities.

```html
<div class="mx-32 ...">mx-32</div>
```

Control the vertical margin of an element using the `my-{size}` utilities.

```html
<div class="my-24 ...">my-24</div>
```

To use a negative margin value, prefix the class name with a dash to convert it to a negative value.

```html
<div class="-mt-32 ...">-mt-32</div>
```

If you need to use a one-off margin value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="m-[7]">
  <!-- ... -->
</div>
```

You can conditionally apply utility classes in different states using variant modifiers. For example, use `hover:mt-8` to only apply the `mt-8` utility on hover.

```html
<div class="mt-4 hover:mt-8">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:mt-8` to apply the `mt-8` utility at only medium screen sizes and above.

```html
<div class="mt-4 md:mt-8">
  <!-- ... -->
</div>
```
