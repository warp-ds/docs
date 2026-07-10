# Snackbar - Overview

A Snackbar shows brief user feedback messages that overlay content, with an optional action such as Undo.

<ComponentsStatus />
<ThemeSwitcher />

## Example

See [more examples on the Elements page](./frameworks/elements.md#examples).

<elements-example no-code>

```html
<w-button data-testid="neutral-action">Neutral variant with action</w-button>

<script>
  document.querySelector('w-button[data-testid="neutral-action"]').onclick =
    () => {
      document.querySelector("w-snackbar").create("Snackbar message", {
        action: {
          label: "Undo",
          onclick(e) {
            console.log(e);
          },
        },
      });
    };
</script>
```

</elements-example>

<component-questions />
