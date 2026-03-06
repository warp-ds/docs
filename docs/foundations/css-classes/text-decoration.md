> Typography

# Text Decoration
Utilities for controlling the decoration of text.

## Quick reference

| Class | Description |
|-------|-------------|
| `underline` | `text-decoration-line: underline` |
| `line-through` | `text-decoration-line: line-through` |
| `no-underline` | `text-decoration: none` |

## Basic usage

### Setting the text decoration
Control how text is decorated with the `underline`, `no-underline`, and `line-through` utilities.

<example-container>
  <div class="ex-inner-box s-text text-body">
    <strong class="pd-font-mono text-s">underline</strong>
    <p class="underline">The quick smart warp scientist</p>
    <strong class="pd-font-mono text-s">line-through</strong>
    <p class="line-through">The quick smart warp scientist</p>
    <strong class="pd-font-mono text-s">no-underline</strong>
    <p class="no-underline">The quick smart warp scientist</p>
  </div>
</example-container>

```html
<p class="underline...">The quick smart warp scientist ...</p>
<p class="line-through ...">The quick smart warp scientist ...</p>
<p class="no-underline ...">The quick smart warp scientist ...</p>
```

