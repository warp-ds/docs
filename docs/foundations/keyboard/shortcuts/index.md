# Keyboard shortcuts

Some Warp components come with custom keyboard shortcuts.

To help users discover these shortcuts we show them as popovers in the context of the element they activate, but only if we determine that the user is interacting with the app or page using a keyboard.

## For developers

### Show keyboard shortcut hints

If you have your own keyboard shortcuts and want to highlight them the same way as Warp, look for the presence of the `data-w-keyboardinteraction` attribute on `<html>` and conditionally show a popover with the keyboard shortcut.

- The keyboard shortcut itself must always be possible to use, not just if we have detected keyboard interaction.
  - Some screen readers, such as JAWS, send `click` events even though the user is behind a keyboard.
  - Power users who have learned it might quickly swap from pointer devices to keyboard.
- The keyboard shortcut must be visible to assistive technologies such as screen readers at all times (think [`sr-only`](../../css-classes/screen-readers.md#quick-reference)).

```js
const showKeyboardShortcutHint = document.documentElement.dataset.wKeyboardinteraction === 'true';
```

```html
<w-button>
    Perform action
    <span class="sr-only">
        <kbd>Alt</kbd> + <kbd>Enter</kbd>
    </span>
</w-button>
```
