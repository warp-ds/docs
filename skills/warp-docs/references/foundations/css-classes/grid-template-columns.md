# Grid Template Columns

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/grid-template-columns

> Flexbox & Grid

Utilities for specifying the columns in a grid layout.

| Class | Description |
| --- | --- |
| grid-cols-{n} | grid-template-columns: repeat({n} ,minmax(0,1fr)) |
| grid-cols-[{col-spec}] | grid-template-columns: {col-spec} |

> Available values  
> `{n}`: `1` through `13`  
> `{col-spec}`: _Any valid value for the `grid-template-columns` property - replace spaces with `_`_  

Use the `grid-cols-{n}` utilities to create grids with `n` equally sized columns.

```html
<div class="grid grid-cols-4 ...">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

If you need to use a one-off `grid-template-columns` value, use square brackets to generate a property on the fly. Replace any spaces in the property with underscore.

```html
<div class="grid grid-cols-[3.2rem_1fr]">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grid-cols-6` to apply the `grid-cols-6` utility at only medium screen sizes and above.

```html
<div class="grid grid-cols-1 md:grid-cols-6">
  <!-- ... -->
</div>
```
