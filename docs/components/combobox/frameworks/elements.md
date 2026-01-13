### Usage Notes

`<w-combobox>` is a text input with a selectable list of options.

- Provide options via the `options` property (array of objects: `{ value: string; label?: string; key?: string }`).
- The component dispatches bubbling `change`, `select`, `focus`, and `blur` `CustomEvent`s.
- Static filtering is enabled by default (options are filtered by substring match against `value`, case-insensitive). Set `disable-static-filtering` to disable this filtering.
- Keyboard navigation is supported (ArrowUp/ArrowDown, Home/End, PageUp/PageDown). `Enter` selects the active option.

### Example

```html
<w-combobox id="demo-combobox"></w-combobox>

<script type="module">
  const el = document.querySelector('#demo-combobox');

  el.options = [
    { value: 'Oslo' },
    { value: 'Bergen' },
    { value: 'Trondheim' },
    { value: 'Tromsø' },
  ];

  el.addEventListener('change', (event) => {
    // event.detail = { value: string }
    console.log('change', event.detail.value);
  });

  el.addEventListener('select', (event) => {
    // event.detail = { value: string }
    console.log('select', event.detail.value);
  });
</script>
```

### Props

<api-table type=elements component="Combobox" />

#### Options (`options`)

The available options to select from.

Type: `ComboboxOption[]`

Each option is an object:

- `value: string` (required)
- `label?: string` (optional display label; falls back to `value`)
- `key?: string` (optional stable key; falls back to `value`)

Default: `[]`

```html example
<w-combobox id="combobox-options"></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-options');
  el.options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];
</script>
```

#### Label (`label`)

Label above input.

Type: `string`

Default: `undefined`

```html example
<w-combobox label="Fruit"></w-combobox>
```

#### Placeholder (`placeholder`)

Input placeholder.

Type: `string`

Default: `undefined`

```html example
<w-combobox placeholder="Search…"></w-combobox>
```

#### Value (`value`)

The input value.

Type: `string`

Default: `''`

```html example
<w-combobox value="Os"></w-combobox>
```

#### Open on focus (`open-on-focus`)

Whether the popover opens when focus is on the text field.

Type: `boolean`

Default: `false`

```html example
<w-combobox open-on-focus></w-combobox>
```

#### Select on blur (`select-on-blur`)

Select active option on blur.

Behavior:
- If the user has navigated to an option, that option will be selected on blur.
- If the current `value` exactly matches an option value, it will be selected on blur.

Type: `boolean`

Default: `true`

```html example
<w-combobox select-on-blur></w-combobox>
```

#### Match text segments (`match-text-segments`)

Whether the matching text segments in the options should be highlighted.

Type: `boolean`

Default: `false`

```html example
<w-combobox match-text-segments></w-combobox>
```

#### Disable static filtering (`disable-static-filtering`)

Disable client-side static filtering.

- When `false` (default), options are filtered by checking whether `option.value` includes `value` (case-insensitive).
- When `true`, the component does not filter options; it displays the provided options as-is.

Type: `boolean`

Default: `false`

```html example
<w-combobox disable-static-filtering></w-combobox>
```

#### Invalid (`invalid`)

Renders the input field in an invalid state.

Type: `boolean`

Default: `false`

```html example
<w-combobox invalid></w-combobox>
```

#### Help text (`help-text`)

The content to display as the help text.

Type: `string`

Default: `undefined`

```html example
<w-combobox help-text="Choose a city"></w-combobox>
```

#### Disabled (`disabled`)

Whether the element is disabled.

Type: `boolean`

Default: `false`

```html example
<w-combobox disabled></w-combobox>
```

#### Required (`required`)

Whether the element is required.

Type: `boolean`

Default: `false`

```html example
<w-combobox required></w-combobox>
```

#### Optional (`optional`)

Whether to show optional text.

Type: `boolean`

Default: `false`

```html example
<w-combobox optional></w-combobox>
```

#### Name (`name`)

Name attribute for form submission.

Type: `string`

Default: `undefined`

```html example
<form>
  <w-combobox name="city"></w-combobox>
  <button type="submit">Submit</button>
</form>
```

#### Autocomplete (`autocomplete`)

autocomplete attribute that provides autofill hints to the browser. [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete)

Type: `string`

Default: `off`

```html example
<form>
  <w-combobox autocomplete="on"></w-combobox>
</form>
```

### Events

#### Change (`change`)

Dispatched when the input value changes.

- Type: `CustomEvent`
- Bubbles: `true`
- Composed: `true`
- Detail: `{ value: string }`

```html example
<w-combobox id="combobox-change"></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-change');
  el.addEventListener('change', (e) => {
    console.log('value:', e.detail.value);
  });
</script>
```

#### Select (`select`)

Dispatched when an option is selected.

- Type: `CustomEvent`
- Bubbles: `true`
- Composed: `true`
- Detail: `{ value: string }`

```html example
<w-combobox id="combobox-select"></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-select');
  el.addEventListener('select', (e) => {
    console.log('selected:', e.detail.value);
  });
</script>
```

#### Focus (`focus`)

Dispatched when the input receives focus **only when** `open-on-focus` is `true`.

- Type: `CustomEvent`
- Bubbles: `true`
- Composed: `true`

```html example
<w-combobox id="combobox-focus" open-on-focus></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-focus');
  el.addEventListener('focus', () => {
    console.log('focus (open-on-focus)');
  });
</script>
```

#### Blur (`blur`)

Dispatched when the input loses focus.

- Type: `CustomEvent`
- Bubbles: `true`
- Composed: `true`
- Detail: `{ value: string }` (the current input value at the time of blur)

```html example
<w-combobox id="combobox-blur"></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-blur');
  el.addEventListener('blur', (e) => {
    console.log('blur value:', e.detail.value);
  });
</script>
```

### Accessibility

The internal text field is rendered with `role="combobox"` and associated ARIA attributes:

- `aria-autocomplete="list"`
- `aria-expanded` reflects whether the popover is open and has options
- `aria-activedescendant` points at the active option while navigating
- `aria-controls` points at the listbox element

Options are rendered as a `role="listbox"` containing `role="option"` elements.

A screen-reader-only `role="status"` element announces the number of results (or “No results”) based on the current value.