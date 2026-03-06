> Layout

# Floats

Utilities for controlling the wrapping of content around an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `float-right` | `float: right` |
| `float-left` | `float: left` |
| `float-none` | `float: none` |

## Basic usage

### Floating elements to the right
Use `float-right` to float an element to the right of its container.

<width-controller>
  <example-container>
    <img class="float-right w-144 ml-16 rounded-16" src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
  </example-container>
</width-controller>

```html
<img class="float-right ..." src="..." alt="...">
<p>Maybe we can live without libraries, people like you and me. ...</p>
```

### Floating elements to the left
Use `float-left` to float an element to the left of its container.

<width-controller>
  <example-container>
    <img class="float-left w-144 mr-16 rounded-16" src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
  </example-container>
</width-controller>

```html
<img class="float-left ..." src="..." alt="...">
<p>Maybe we can live without libraries, people like you and me. ...</p>
```

### Disabling a float
Use `float-none` to reset any floats that are applied to an element. This is the default value for the float property.

<width-controller>
  <example-container>
    <img class="float-none w-144 rounded-16" src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
  </example-container>
</width-controller>

```html
<img class="float-none ..." src="..." alt="...">
<p>Maybe we can live without libraries, people like you and me. ...</p>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:float-right` to apply the `float-right` utility at only medium screen sizes and above.

```html
<img class="float-right md:float-left" src="..." alt="..." />
```
