# List Style Type

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/list-style-type

> Typography

Utilities for controlling the bullet/number style of a list.

| Class | Description |
| --- | --- |
| list-none | list-style-type: none |
| list-disc | list-style-type: disc |
| list-decimal | list-style-type: decimal |
| list-checked | .list-checked > li { position: relative padding-left: 1.5em } .list-checked > li: : before { content: "" position: absolute left: 0 width: 1em height: 1.2em background: no-repeat 50%/contain var(--w-icon-list-checked) } |

To create bulleted, checked or numeric lists, use the `list-disc`, `list-checked` and `list-decimal` utilities.

```html
<ul class="list-disc ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
<ul class="list-decimal ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
<ul class="list-checked ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
<ul class="list-none ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
```
