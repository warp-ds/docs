### Example

```html
<w-link href="https://example.com">Go to example.com</w-link>
```

### Props

<api-table type=elements component="Link" />

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
- `pill`
- `link`
- `quiet`

If you provide an unsupported value, the component throws an error when it connects.

```html example
<w-link variant="primary" href="https://example.com">Primary</w-link>
<w-link variant="secondary" href="https://example.com">Secondary</w-link>
<w-link variant="negative" href="https://example.com">Negative</w-link>
<w-link variant="utility" href="https://example.com">Utility</w-link>
<w-link variant="utilityQuiet" href="https://example.com">Utility</w-link>
<w-link variant="pill" href="https://example.com">Pill</w-link>
<w-link variant="link" href="https://example.com">Link</w-link>
<w-link variant="quiet" href="https://example.com">Link</w-link>
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

#### Inline link variant

```html example
<p>
  This is an
  <w-link variant="link" href="https://example.com">inline link</w-link>
  inside a paragraph.
</p>
```

#### Full width

```html example
<div style="max-width: 360px">
  <w-link full-width href="https://example.com">Full width link</w-link>
</div>
```

### Accessibility

If the button doesn't have visible text content, such as when used with only an icon, an aria-label prop must be provided for accessibility.