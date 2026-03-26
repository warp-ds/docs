# Content

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/content

> Typography

Utilities for controlling the content of the before and after pseudo-elements.

| Class | Description |
| --- | --- |
| content-none | content: none |
| content-empty | content: "" |
| content-[{str}] | content: {str} |

> Available values  
> `{str}`: Can be any string, will usually contain single-quotes as seen in the examples below

Use the square bracket notation to define any arbitrary content value on the fly with the `content-[{value}]` utilities. Prefix with the `before:` and `after:` variant modifiers to set the contents of the `::before` and `::after` pseudo-elements.

```html
<span class="before:content-['Before'] after:content-['after'] ..."> I am </span>.
```

Use the `content-empty` utilities along with the `before:` and `after:` variant modifiers to set an empty content for the `::before` and `::after` pseudo-elements.

```html
<span class="before:content-empty before:inline-block before:h-14 before:w-14 ..."> I am after a pink square</span>.
```

Since whitespace denotes the end of a class in HTML, replace any spaces in an arbitrary value with an underscore.

```html
<div class="before:content-['Hello_World!']">!</div>
```

If you need to include an actual underscore, you can do this by escaping it with a backslash.

```html
<div class="before:content-['Hello\_World']">!</div>
```
