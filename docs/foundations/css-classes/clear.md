> Layout

# Clear

Utilities for controlling the wrapping of content around an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `clear-left` | `clear: left` |
| `clear-right` | `clear: right` |
| `clear-both` | `clear: both` |
| `clear-none` | `clear: none` |

## Basic usage

### Clearing left-floated elements
Use `clear-left` to position an element below any preceding left-floated elements.

<width-controller>
  <example-container>
    <img class="float-left w-64 mr-16 rounded-16 " src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <img class="float-right w-144 ml-16 rounded-16 " src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <p class="clear-left">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
  </example-container>
</width-controller>

```html{3}
<img class="float-left ..." src="..." alt="...">
<img class="float-right ..." src="..." alt="...">
<p class="clear-left">Maybe we can live without libraries, people like you and me. ...</p>
```

### Clearing right-floated elements
Use `clear-right` to position an element below any preceding right-floated elements.

<width-controller>
  <example-container>
    <img class="float-left w-144 mr-16 rounded-16 " src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <img class="float-right w-64 ml-16 rounded-16 " src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <p class="clear-right">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
  </example-container>
</width-controller>

```html{3}
<img class="float-left ..." src="..." alt="...">
<img class="float-right ..." src="..." alt="...">
<p class="clear-right">Maybe we can live without libraries, people like you and me. ...</p>
```

### Clearing all floated elements
Use `clear-both` to position an element below all preceding floated elements.

<width-controller>
  <example-container>
    <img class="float-left w-64 mr-16 rounded-16 " src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <img class="float-right w-144 ml-16 rounded-16 " src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <p class="clear-both">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
  </example-container>
</width-controller>

```html{3}
<img class="float-left ..." src="..." alt="...">
<img class="float-right ..." src="..." alt="...">
<p class="clear-both">Maybe we can live without libraries, people like you and me. ...</p>
```

### Disabling applied clears
Use `clear-none` to reset any clears that are applied to an element. This is the default value for the clear property.

<width-controller>
  <example-container>
    <img class="float-left w-64 mr-16 rounded-16 " src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <img class="float-right w-144 ml-16 rounded-16 " src="/images/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    <p class="clear-none">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
  </example-container>
</width-controller>

```html{3}
<img class="float-left ..." src="..." alt="...">
<img class="float-right ..." src="..." alt="...">
<p class="clear-none">Maybe we can live without libraries, people like you and me. ...</p>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:clear-none` to apply the `clear-none` utility at only medium screen sizes and above.

```html
<p class="clear-left md:clear-none">
  <!-- ... -->
</p>
```
