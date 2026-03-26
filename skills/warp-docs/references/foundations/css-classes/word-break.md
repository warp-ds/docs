# Word Break

**Full documentation:** https://warp-ds.github.io/docs/foundations/css-classes/word-break

> Typography

Utilities for controlling word breaks in an element.

| Class | Description |
| --- | --- |
| break-normal | overflow-wrap: normal word-break: normal |
| break-words | overflow-wrap: break-word |
| break-all | word-break: break-all |
| break-keep | word-break: keep-all |

Use `break-normal` to only add line breaks at normal word break points.

```html
<p class="break-normal ...">...</p>
```

Use `break-words` to add line breaks mid-word if needed.

```html
<p class="break-words ...">...</p>
```

Use `break-all` to add line breaks whenever necessary, without trying to preserve whole words.

```html
<p class="break-all ...">...</p>
```
