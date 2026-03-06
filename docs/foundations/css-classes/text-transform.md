> Typography

# Text Transform

Utilities for controlling the transformation of text.

## Quick reference

| Class | Description |
|-------|-------------|
| `uppercase` | `text-transform: uppercase` |
| `lowercase` | `text-transform: lowercase` |
| `capitalize` | `text-transform: capitalize` |
| `normal-case` | `text-transform: none` |

## Basic usage

### Transforming text
The `uppercase` and `lowercase` will uppercase and lowercase text respectively, whereas `capitalize` utility will convert text to title-case.
The `normal-case` utility can be used to preserve the original casing — typically to reset capitalization at different breakpoints.

<example-container>
  <div class="ex-inner-box s-text text-body max-w-[400]">
    <strong class="pd-font-mono text-s">normal-case</strong>
    <p class="normal-case">The quick smart warp scientist</p>
    <strong class="pd-font-mono text-s">uppercase</strong>
    <p class="uppercase">The quick smart warp scientist</p>
    <strong class="pd-font-mono text-s">lowercase</strong>
    <p class="lowercase">The quick smart warp scientist</p>
    <strong class="pd-font-mono text-s">capitalize</strong>
    <p class="capitalize">The quick smart warp scientist</p>
  </div>
</example-container>

```html
<p class="normal-case...">The quick smart warp scientist ...</p>
<p class="uppercase ...">The quick smart warp scientist ...</p>
<p class="lowercase ...">The quick smart warp scientist ...</p>
<p class="capitalize ...">The quick smart warp scientist ...</p>
```
