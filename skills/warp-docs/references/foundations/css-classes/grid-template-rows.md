# Grid Template Rows

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/grid-template-rows

> Flexbox & Grid

Utilities for specifying the rows in a grid layout.

| Class | Description |
| --- | --- |
| grid-rows-{n} | grid-template-rows: repeat({n} ,minmax(0, 1fr)) |
| grid-rows-[{row-spec}] | grid-template-rows: {row-spec} |

> Available values  
> `{n}`: `1` through `7`  
> `{row-spec}`: _Any valid value for the `grid-template-rows` property - replace spaces with `_`_  

Use the `grid-rows-{n}` utilities to create grids with n equally sized rows.

```html
<div class="grid grid-rows-4 grid-flow-col ...">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

If you need to use a one-off `grid-template-rows` value, use square brackets to generate a property on the fly. Replace any spaces in the property with underscore.

```html
<div class="grid grid-rows-[3.2rem_1fr]">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grid-rows-6` to apply the `grid-rows-6` utility at only medium screen sizes and above.

```html
<div class="grid grid-rows-2 md:grid-rows-6">
  <!-- ... -->
</div>
```
