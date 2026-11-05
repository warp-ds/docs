> Typography

# Text Align

Utilities for controlling the alignment of text.

## Quick reference

| Class | Description |
|-------|-------------|
| `text-left` | `text-align: left` |
| `text-center` | `text-align: center` |
| `text-right` | `text-align: right` |
| `text-justify` | `text-align: justify` |
| `text-start` | `text-align: start` |
| `text-end` | `text-align: end` |

## Basic usage

### Setting the text alignment
Control the text alignment of an element using the `text-left`, `text-center`, `text-right`, and `text-justify` utilities.

<example-container>
  <p class="ex-inner-box text-left">
    In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.
  </p>
</example-container>

```html
<p class="text-left">In some respects ...</p>
```

<example-container>
  <p class="ex-inner-box text-center">
    In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.
  </p>
</example-container>

```html
<p class="text-center">In some respects ...</p>
```

<example-container>
  <p class="ex-inner-box text-right">
    In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.
  </p>
</example-container>

```html
<p class="text-right">In some respects ...</p>
```

<example-container>
  <p class="ex-inner-box text-justify">
    In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.
  </p>
</example-container>

```html
<p class="text-justify">In some respects ...</p>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:text-center` to apply the `text-center` utility at only medium screen sizes and above.

```html
<p class="text-left md:text-center">
  <!-- ... -->
</p>
```
