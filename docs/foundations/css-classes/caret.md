> Interactivity

# Caret Color

Utilities for controlling the color of the text input cursor.

::: tip Note
If you are using the Warp input components (and you probably should use them for theming purposes) `caret` is already set as default.
:::

## Quick reference

| Class | Description |
|-------|-------------|
| ~~`caret`~~ | Unsupported |
| `caret-current` | `caret-color: currentColor` |
| `caret-inherit` | `caret-color: inherit` |
| `caret-transparent` | `caret-color: transparent` |

## Basic usage

### Setting the caret color
Use the `caret-{color}` utilities to change the color of the text input cursor.

<example-container>
  <textarea class="caret-current w-full h-96"></textarea>
</example-container>

```html
<textarea class="caret-current ..."></textarea>
```
