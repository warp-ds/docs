# User Select

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/user-select

> Interactivity

Utilities for controlling whether the user can select text in an element.

| Class | Description |
| --- | --- |
| select-none | user-select: none |
| select-text | user-select: text |
| select-all | user-select: all |
| select-auto | user-select: auto |

Use `select-none` to prevent selecting text in an element and its children.

```html
<div class="select-none ...">
  The quick smart warp scientist
  <strong>fails to select the text</strong>,
  and drinks the hazy coffee.
</div>
```

Use `select-text` to allow selecting text in an element and its children.

```html
<div class="select-none ...">
  The quick smart warp scientist
  <strong class="select-text">selects only this text</strong>,
  and drinks the hazy coffee.
</div>
```

Use `select-all` to automatically select all the text in an element when a user clicks.

```html
<div class="select-all ...">
  The quick smart warp scientist eagerly
  <strong>selects all the text</strong>,
  and drinks the hazy coffee.
</div>
```

Use `select-auto` to use the default browser behavior for selecting text. Useful for undoing other classes like `select-none` at different breakpoints or whatever.

```html
<div class="select-auto ...">
  The quick smart warp scientist drinks the hazy coffee.
</div>
```

Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:select-all` to only apply the `select-all` utility on hover.

```html
<div class="hover:select-all">
  <!-- ... -->
</div>
```

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:select-all` to apply the `select-all` utility at only medium screen sizes and above.

```html
<div class="md:select-all">
  <!-- ... -->
</div>
```
