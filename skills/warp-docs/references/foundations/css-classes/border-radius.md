# Border Radius

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/border-radius

> Borders

Utilities for controlling the border radius of an element.

| Class | Description |
| --- | --- |
| rounded | border-radius: 4px |
| rounded-full | border-radius: 9999px |
| rounded-{size} | border-radius: {size} |
| rounded-t-{size} | border-top-radius: {size} |
| rounded-tr-{size} | border-top-radius: {size}border-right-radius: {size} |
| rounded-r-{size} | border-right-radius: {size} |
| rounded-br-{size} | border-bottom-radius: {size}border-right-radius: {size} |
| rounded-b-{size} | border-bottom-radius: {size} |
| rounded-bl-{size} | border-bottom-radius: {size}border-left-radius: {size} |
| rounded-l-{size} | border-left-radius: {size} |
| rounded-tl-{size} | border-top-radius: {size}border-left-radius: {size} |

> Available values  
> `{size}`: `0`, `2`, `4`, `8`, `16`  

Use utilities like `.rounded`, or `.rounded-full` to apply different border radius sizes to an element.

```html
<div class="rounded ...">01</div>
<div class="rounded-8 ...">02</div>
<div class="rounded-16 ...">03</div>
<div class="rounded-full ...">04</div>
```

Use `rounded-0` to remove an existing border radius from an element.

This is most commonly used to remove a border radius that was applied at a smaller breakpoint.

```html
<div class="rounded-0 ..."></div>
```

Use `rounded-{t|r|b|l}{-size}` to only round one side of an element.

```html
<div class="rounded-t-16 ...">01</div>
<div class="rounded-r-16 ...">02</div>
<div class="rounded-b-16 ...">03</div>
<div class="rounded-l-16 ...">04</div>
```

Use `rounded-{tl|tr|br|bl}{-size}` to only round one corner an element.

```html
<div class="rounded-tl-16 ...">01</div>
<div class="rounded-tr-16 ...">02</div>
<div class="rounded-br-16 ...">03</div>
<div class="rounded-bl-16 ...">04</div>
```

If you need to use a one-off `border-radius` value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="rounded-[31]"></div>
```

You can conditionally apply utility classes in different states using variant modifiers. For example, use `hover:rounded-8` to only apply the `rounded-8` utility on hover.

```html
<div class="rounded hover:rounded-8"></div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:rounded-16` to apply the `rounded-16` utility at only medium screen sizes and above.

```html
<div class="rounded md:rounded-16"></div>
```
