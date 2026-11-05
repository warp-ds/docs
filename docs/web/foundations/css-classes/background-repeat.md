> Backgrounds

# Background Repeat

Utilities for controlling the repetition of an element's background image.

## Quick reference

| Class | Description |
|-------|-------------|
| `bg-repeat` | `background-repeat: repeat` |
| `bg-no-repeat` | `background-repeat: no-repeat` |
| `bg-repeat-x` | `background-repeat: repeat-x` |
| `bg-repeat-y` | `background-repeat: repeat-y` |
| `bg-repeat-round` | `background-repeat: round` |
| `bg-repeat-space` | `background-repeat: space` |

## Basic usage

### Repeat
Use `bg-repeat` to repeat the background image both vertically and horizontally.

<example-container class="p-0! overflow-hidden">
<div class="h-[200] bg-repeat bg-[url(../../images/repeatable.png)]" style="background-size:20%"></div>
</example-container>

```html
<div class="bg-repeat ..."></div>
```

### No Repeat
Use `bg-no-repeat` when you don’t want to repeat the background image.

<example-container class="p-0! overflow-hidden">
<div class="h-[200] bg-no-repeat bg-center bg-[url(../../images/repeatable.png)]" style="background-size:20%"></div>
</example-container>

```html
<div class="bg-no-repeat ..."></div>
```

### Repeat Horizontally
Use `bg-repeat-x` to repeat the background image only horizontally.

<example-container class="p-0! overflow-hidden">
<div class="h-[200] bg-repeat-x bg-center bg-[url(../../images/repeatable.png)]" style="background-size:20%"></div>
</example-container>

```html
<div class="bg-repeat-x ..."></div>
```

### Repeat Vertically
Use `bg-repeat-y` to repeat the background image only vertically.

<example-container class="p-0! overflow-hidden">
<div class="h-[200] bg-repeat-y bg-center rounded-8 bg-[url(../../images/repeatable.png)]" style="background-size:20%"></div>
</example-container>

```html
<div class="bg-repeat-y ..."></div>
```
