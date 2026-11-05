> Typography

# Content

Utilities for controlling the content of the before and after pseudo-elements.

## Quick reference

| Class             | Description      |
|-------------------|------------------|
| `content-none`    | `content: none`  |
| `content-empty`   | `content: ""`    |
| `content-[{str}]` | `content: {str}` |

> Available values <br />
> `{str}`: Can be any string, will usually contain single-quotes as seen in the examples below

## Basic usage

### Setting a pseudo-element's content
Use the square bracket notation to define any arbitrary content value on the fly with the `content-[{value}]` utilities.
Prefix with the `before:` and `after:` variant modifiers to set the contents of the `::before` and `::after` pseudo-elements.

<example-container>
  <div class="ex-inner-box s-text text-body text-center">
    <span class="before:content-['Before'] after:content-['after'] before:pd-text-indigo-400 after:pd-text-indigo-400"> I am </span>.
  </div>
</example-container>

```html
<span class="before:content-['Before'] after:content-['after'] ..."> I am </span>.
```

### Setting an empty content for pseudo-elements
Use the `content-empty` utilities along with the `before:` and `after:` variant modifiers
to set an empty content for the `::before` and `::after` pseudo-elements.

<example-container>
  <div class="ex-inner-box s-text text-body text-center">
    <span class="before:content-empty before:inline-block before:pd-bg-pink-500 before:h-14 before:w-14"> I am after a pink square</span>.
  </div>
</example-container>

```html
<span class="before:content-empty before:inline-block before:h-14 before:w-14 ..."> I am after a pink square</span>.
```

### Using spaces and underscores
Since whitespace denotes the end of a class in HTML, replace any spaces in an arbitrary value with an underscore.

<example-container>
  <div class="ex-inner-box s-text text-body text-center">
    <span class="before:content-['Hello_World'] before:pd-text-indigo-400">!</span>
  </div>
</example-container>

```html
<div class="before:content-['Hello_World!']">!</div>
```

If you need to include an actual underscore, you can do this by escaping it with a backslash.

<example-container>
  <div class="ex-inner-box s-text text-body text-center">
    <span class="before:content-['Hello\_World'] before:pd-text-indigo-400">!</span>
  </div>
</example-container>

```html
<div class="before:content-['Hello\_World']">!</div>
```

