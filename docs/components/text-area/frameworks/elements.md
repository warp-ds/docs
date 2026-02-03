# Text area - Frameworks
A text area allows users to input extended text content that covers multiple lines.

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Usage Notes

The textarea component is a custom element that provides a multi-line text input with built-in form validation, auto-resizing, and styling support.

- `<w-textarea>` - A multi-line text input with label, help text, and validation support

The component automatically handles:

- Form integration via `FormControlMixin`
- Auto-resizing based on content and row constraints
- Built-in validation with customizable error messages
- Accessibility attributes and labeling

### Example

<style-isolate>
  <w-textarea label="Description" placeholder="Enter your description here"></w-textarea>
</style-isolate>

```html
<w-textarea label="Description" placeholder="Enter your description here"></w-textarea>

<script type="module">
  const textarea = document.querySelector('w-textarea');

  textarea.addEventListener('input', (event) => {
    console.log('Value:', event.target.value);
  });
</script>
```

### Props

#### Optional Props

| Name         | Type    | Default | Description                                                                 |
| ------------ | ------- | ------- | --------------------------------------------------------------------------- |
| disabled     | boolean | false   | Whether the textarea is disabled.                                           |
| help-text    | string  | ''      | Help text displayed below the textarea.                                     |
| invalid      | boolean | false   | Renders the field in an invalid state.                                      |
| label        | string  | ''      | The content to display as the label.                                        |
| maximum-rows | number  | -       | Maximum number of text rows before scrolling.                               |
| minimum-rows | number  | -       | Minimum number of text rows to display.                                     |
| name         | string  | -       | The name of the input element, used when submitting an HTML form.           |
| optional     | boolean | false   | Indicates that the textarea is not required, displays "(optional)" label.   |
| placeholder  | string  | -       | Text hint that occupies the textarea when it is empty.                      |
| read-only    | boolean | false   | Whether the input can be selected but not changed by the user. Deprecated, use `readonly` instead. |
| readonly     | boolean | false   | Whether the input can be selected but not changed by the user.              |
| required     | boolean | false   | Whether user input is required before form submission.                      |
| value        | string  | ''      | The current value of the textarea.                                          |

#### Events

| Name    | Description                                        |
| ------- | -------------------------------------------------- |
| input   | Fired when the value changes.                      |
| invalid | Fired when the textarea fails validation.          |

#### Methods

| Name               | Parameters      | Returns       | Description                                                    |
| ------------------ | --------------- | ------------- | -------------------------------------------------------------- |
| checkValidity      | -               | boolean       | Checks whether the textarea passes constraint validation.      |
| reportValidity     | -               | boolean       | Checks validity and shows the browser's validation message if invalid. |
| setCustomValidity  | message: string | void          | Sets a custom validation message. Pass an empty string to clear. |
| resetFormControl   | -               | void          | Resets the textarea to its initial value.                      |

#### Validation Properties

| Name              | Type          | Description                                                   |
| ----------------- | ------------- | ------------------------------------------------------------- |
| validationMessage | string        | Returns the validation message if the textarea is invalid, otherwise an empty string. |
| validity          | ValidityState | Returns the validity state of the textarea.                   |

### Label (`label`)

A visual label displayed above the textarea.

Type: `string`

```html example
<w-textarea label="Description"></w-textarea>
```

### Optional (`optional`)

Displays "(optional)" next to the label to indicate the field is not required.

Type: `boolean`

Default: `false`

```html example
<w-textarea label="Description" optional></w-textarea>
```

### Help Text (`help-text`)

Provides additional context below the textarea.

Type: `string`

```html example
<w-textarea label="Description" help-text="Maximum 500 characters"></w-textarea>
```

### Validation

#### Invalid (`invalid`)

Renders the textarea in an invalid state. Often paired with `help-text` to provide feedback about the error.

Type: `boolean`

Default: `false`

```html example
<w-textarea label="Description" invalid help-text="This field is required"></w-textarea>
```

#### Required (`required`)

When set, the textarea must have a value before form submission. The component integrates with native form validation.

Type: `boolean`

Default: `false`

```html example
<form id="validation-form">
  <w-textarea label="Description" required></w-textarea>
  <w-button type="submit" style="margin-top: 8px;">Submit</w-button>
</form>
<script type="module">
  const form = document.querySelector('#validation-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const textarea = form.querySelector('w-textarea');
    if (textarea.reportValidity()) {
      console.log('Form is valid!');
    }
  });
</script>
```

#### Custom Validation

Use `setCustomValidity()` to set a custom validation message:

```html example
<w-textarea id="custom-validation" label="Description"></w-textarea>
<script type="module">
  const textarea = document.querySelector('#custom-validation');
  textarea.addEventListener('input', () => {
    if (textarea.value.length < 10) {
      textarea.setCustomValidity('Please enter at least 10 characters');
    } else {
      textarea.setCustomValidity('');
    }
  });
</script>
```

### Visual Options

#### Placeholder (`placeholder`)

Text hint that appears when the textarea is empty. Placeholder text should not be used as a substitute for a visible label.

Type: `string`

```html example
<w-textarea label="Description" placeholder="Enter a detailed description..."></w-textarea>
```

#### Disabled (`disabled`)

Disables the textarea. Consider using more informative alternatives before choosing to use disabled, as some users may not understand why an element is disabled.

Type: `boolean`

Default: `false`

```html example
<w-textarea label="Description" disabled value="This content cannot be edited"></w-textarea>
```

#### Read Only (`readonly`)

Makes the textarea content immutable while remaining focusable. The contents can still be copied.

Type: `boolean`

Default: `false`

```html example
<w-textarea label="Description" readonly value="This content is read-only"></w-textarea>
```

### Height (Text Rows)

#### Minimum Rows (`minimum-rows`)

Sets the minimum number of text rows the textarea should display.

Type: `number`

```html example
<w-textarea label="Description" minimum-rows="3"></w-textarea>
```

#### Maximum Rows (`maximum-rows`)

Sets the maximum number of text rows before scrolling is enabled.

Type: `number`

```html example
<w-textarea label="Description" maximum-rows="3" value="Line 1
Line 2
Line 3
Line 4
Line 5"></w-textarea>
```

### Programmatic Control

You can programmatically control the textarea value:

```html example
<w-textarea id="controlled-textarea" label="Description"></w-textarea>
<w-button id="set-value-btn" style="margin-top: 8px;">Set Value</w-button>
<script type="module">
  const textarea = document.querySelector('#controlled-textarea');
  const button = document.querySelector('#set-value-btn');

  button.addEventListener('click', () => {
    textarea.value = 'This value was set programmatically';
  });
</script>
```

### Form Integration

The textarea component works with native HTML forms:

```html example
<form id="textarea-form">
  <w-textarea name="description" label="Description" required></w-textarea>
  <w-button type="submit" style="margin-top: 8px;">Submit</w-button>
</form>
<script type="module">
  const form = document.querySelector('#textarea-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('Description:', formData.get('description'));
  });
</script>
```

<component-questions />