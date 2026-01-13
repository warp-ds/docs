### Usage Notes

**Do:**
* Use the `<w-link>` component when you need a link that looks like a button.

**Do Not:**
* Use the `<w-link>` component when you need a link that looks like a link. In that case, use the native `<a>`tag.
* Use the `<w-link>` component when you need a button that looks like a button. In that case, use the native `<w-button>`tag.
* Use the `<w-link>` component when you need a button that looks like a link. In that case, use the native `<w-button>`tag.

The following table illustrates use cases and which element to use for the purpose.

| if desired behaviour is | and desired styling is | then use |
| ----------------------- | ---------------------- | -------- |
| link                    | button                 | w-link   |
| button                  | button                 | w-button |
| link                    | link                   | a        |
| button                  | link                   | w-button |

### Example

```html
<w-link href="https://example.com">Go to example.com</w-link>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| autofocus | boolean | false | Focus the link after it is rendered. |
| variant | `'primary' \| 'secondary' \| 'negative' \| 'negativeQuiet' \| 'utility' \| 'utilityQuiet' \| 'overlay' \| 'quiet' \| 'overlayInverted' \| 'overlayQuiet' \| 'overlayInvertedQuiet'` | 'secondary' | Visual style for the link/button. Throws an error if an unsupported value is provided. |
| small | boolean | false | Render a smaller version. |
| href | string |  | The URL the link points to. |
| disabled | boolean | false | Disables interaction and applies disabled styling. |
| target | string |  | Where to display the linked URL (e.g. `_blank`). |
| rel | string |  | Relationship of the linked URL. If `target="_blank"` and `rel` is not provided, the component uses `noopener`. |
| full-width | boolean | false | Makes the link take up the full width of its parent. |

#### Slots

| Name | Description |
| --- | --- |
| default | Link text / content. |

#### Href (`href`)

The URL the link points to.

```html example
<w-link href="https://example.com">Go to example.com</w-link>
```

#### Variant (`variant`)

Controls the visual style.

Default: `secondary`

Supported values (validated at runtime):

- `primary`
- `secondary`
- `negative`
- `negativeQuiet`
- `utility`
- `utilityQuiet`
- `quiet`
- `overlay`
- `overlayInverted`
- `overlayQuiet`
- `overlayInvertedQuiet`

If you provide an unsupported value, the component throws an error when it connects.

```html example
<w-link variant="primary" href="https://example.com">Primary</w-link>
<w-link variant="secondary" href="https://example.com">Secondary</w-link>
<w-link variant="negative" href="https://example.com">Negative</w-link>
<w-link variant="utility" href="https://example.com">Utility</w-link>
<w-link variant="utilityQuiet" href="https://example.com">Utility</w-link>
<w-link variant="quiet" href="https://example.com">Quiet</w-link>
<w-link variant="overlay" href="https://example.com">Overlay</w-link>
<w-link variant="overlayInverted" href="https://example.com">Overlay Inverted</w-link>
<w-link variant="overlayQuiet" href="https://example.com">Overlay Quiet</w-link>
<w-link variant="overlayInvertedQuiet" href="https://example.com">Overlay Inverted Quiet</w-link>
```

#### Small (`small`)

Renders a smaller version.

```html example
<w-link small href="https://example.com">Small link</w-link>
```

#### Full width (`full-width`)

Makes the link take up the full width of its parent.

```html example
<w-link full-width href="https://example.com">Full width</w-link>
```

#### Disabled (`disabled`)

Applies disabled styling.

Note: the component renders an `<a>` element; `disabled` affects styling, but does not inherently prevent navigation. If you need to fully disable interaction, omit `href` and/or prevent default click behavior.

```html example
<w-link disabled href="https://example.com">Disabled (styled)</w-link>
```

#### Target (`target`) and rel (`rel`)

- Use `target` to control where to open the link (e.g. `_blank`).
- When `target="_blank"`, the component sets `rel` to `noopener` if you don't provide a `rel` value.

```html example
<w-link target="_blank" href="https://example.com">Opens in new tab (noopener)</w-link>
<w-link target="_blank" rel="noopener noreferrer" href="https://example.com">Custom rel</w-link>
```

#### Autofocus (`autofocus`)

Focuses the component after it is rendered.

```html example
<w-link autofocus href="https://example.com">Autofocused link</w-link>
```

### Events

`w-link` does not dispatch custom events.

You can listen to native events on the rendered anchor element (for example `click`) as usual.

```html example
<w-link id="link-events" href="https://example.com">Click me</w-link>
<script>
  const el = document.querySelector('#link-events');
  el.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
  });
</script>
```

### Examples

#### Button-like variants

```html example
<w-link variant="primary" href="https://example.com">Primary</w-link>
<w-link variant="secondary" href="https://example.com">Secondary</w-link>
<w-link variant="negative" href="https://example.com">Negative</w-link>
<w-link variant="utility" href="https://example.com">Utility</w-link>
```

#### Full width

```html example
<div style="max-width: 360px">
  <w-link full-width href="https://example.com">Full width link</w-link>
</div>
```

### Accessibility

If the button doesn't have visible text content, such as when used with only an icon, an aria-label prop must be provided for accessibility.