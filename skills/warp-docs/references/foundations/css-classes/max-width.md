# Max-Width

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/max-width

> Sizing

Utilities for setting the maximum width of an element.

| Class | Description |
| --- | --- |
| max-w-none | max-width: none |
| max-w-full | max-width: 100% |
| max-w-min | max-width: min-content |
| max-w-max | max-width: max-content |
| max-w-fit | max-width: fit-content |
| max-w-prose | max-width: 65ch |
| max-w-{size} | max-width: {size} |
| max-w-{fraction} | max-width: {fraction} |
| max-w-{breakpoint} | max-width: {breakpoint} (Unsupported) |

> Available values  
> `{size}`: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `40`, `44`, `48`, `56`, `64`, `80`, `96`, `112`, `128`, `144`  
> `{fraction}`: _Any fraction is valid - e.g. `1/5`_  
> `{breakpoint}`: `sm`, `md`, `lg`

`max-w-{breakpoint}` not yet supported

This functionality is not yet supported! If you need this, reach out to us on [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).

Set the maximum width of an element using the `max-w-{size}` utilities.

```html
<div class="max-w-[300] ...">
  <!-- ... -->
</div>
```

If you need to use a one-off `max-width` value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="max-w-[50]">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:max-w-lg` to apply the `max-w-lg` utility at only medium screen sizes and above.

```html
<div class="max-w-sm md:max-w-lg">
  <!-- ... -->
</div>
```
