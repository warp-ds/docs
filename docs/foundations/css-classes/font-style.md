> Typography

# Font Style
Utilities for controlling the style of text.

## Quick reference

| Class | Description |
|-------|-------------|
| `italic` | `font-style: italic` |
| `not-italic` | `font-style: normal` |

## Basic usage

### Italicizing text
The `italic` utility can be used to make text italic. Likewise, the `not-italic` utility can be used to display text normally — typically to reset italic text at different breakpoints.

<example-container>
  <div class="ex-inner-box s-text">
    <strong class="italic">italic</strong>
    <p class="italic">The quick smart warp scientist</p>
    <strong class="not-italic">not-italic</strong>
    <p class="not-italic">The quick smart warp scientist</p>
  </div>
</example-container>

```html
<p class="italic ...">The quick smart warp scientist ...</p>
<p class="not-italic ...">The quick smart warp scientist ...</p>
```
