### Usage Notes

`<w-switch>` is a form-associated toggle component.

- It reflects its `name`, `value`, `checked`, and `disabled` properties to attributes.
- It dispatches a bubbling `change` `CustomEvent` when toggled (when not disabled).
- When used in a form, the control submits `value` only when `checked` is `true` (otherwise it submits nothing).

### Example

```html
<w-switch id="demo-switch" name="marketing" value="yes"></w-switch>

<script>
  const el = document.querySelector('#demo-switch');
  el.addEventListener('change', (event) => {
    // event.detail = { checked: boolean, value: string | null }
    console.log('changed', event.detail);
  });
</script>
```

### Props

<api-table type=elements component="Switch" />

#### Name (`name`)

Name used when submitting an HTML form.

Default: `''`

```html example
<form>
  <w-switch name="notifications" value="on"></w-switch>
  <button type="submit">Submit</button>
</form>
```

#### Value (`value`)

Value submitted when the switch is checked.

Default: `''`

Notes:
- The component reports `null` as the value in the `change` event when `value` is an empty string.

```html example
<w-switch value="enabled"></w-switch>
```

#### Checked (`checked`)

Whether the switch is on (checked).

Default: `false`

```html example
<w-switch checked></w-switch>
```

#### Disabled (`disabled`)

Whether the switch is disabled.

Default: `false`

```html example
<w-switch disabled></w-switch>
<w-switch checked disabled></w-switch>
```

### Events

#### Change (`change`)

Dispatched when the switch toggles (only when not disabled).

- Type: `CustomEvent`
- Bubbles: `true`
- Composed: `true`
- Detail: `{ checked: boolean; value: string | null }`

```html example
<w-switch id="switch-events" value="yes"></w-switch>
<script>
  const el = document.querySelector('#switch-events');
  el.addEventListener('change', (e) => {
    console.log('checked:', e.detail.checked);
    console.log('value:', e.detail.value);
  });
</script>
```

### Accessibility

The internal control is rendered as a native `button` with `role="switch"` and `aria-checked` / `aria-disabled`.
