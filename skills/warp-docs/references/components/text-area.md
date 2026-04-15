# Text area

A text area allows users to input extended text content that covers multiple lines.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/text-area/overview), [Usage](https://warp-ds.github.io/docs/components/text-area/usage), [Accessibility](https://warp-ds.github.io/docs/components/text-area/accessibility), [React](https://warp-ds.github.io/docs/components/text-area/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/text-area/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/text-area/frameworks/elements), [iOS](https://warp-ds.github.io/docs/components/text-area/frameworks/ios)

**Framework support:** Elements, iOS, React, Vue

## Overview

A text area allows users to input extended text content that covers multiple lines.

A text area is used to capture extended user input, such as messages, item descriptions, comments, or reviews. Unlike the Text field component, Text area offers a more spacious input experience.

Related components: [Text field](https://warp-ds.github.io/docs/components/text-field/overview).

![Default text area with label, placeholder and help text](https://warp-ds.github.io/docs/components/textarea/overview-variants-default.svg)

Input with a label, placeholder, and help text below. Useful for most cases, when clarity is important and the field needs context (Label) and guidance (Help text).

![Text area with label only](https://warp-ds.github.io/docs/components/textarea/overview-variants-label_only.svg)

Input with a label above the text area and no help text. Useful for compact layouts or when additional guidance isn’t required. Common in short or repeated forms (e.g. settings, profile forms).

![Text area with label only](https://warp-ds.github.io/docs/components/textarea/overview-variants-text_area_only.svg)

A bare input with only a placeholder inside, and no label or help text. Use with **extreme caution**. Best suited for one-off interactions.

![Text area with label, followed by optional tag](https://warp-ds.github.io/docs/components/textarea/overview-variants-optional.svg)

Input with an optional label, indicating that user input is not required. Useful in longer forms where not all fields must be filled out.

![Text area with label, followed by info icon](https://warp-ds.github.io/docs/components/textarea/overview-variants-info_tooltip.svg)

Input with an info icon that opens a tooltip. Useful when users may need additional context or guidance on how to fill out the area.

![Anatomy illustration, 1-6](https://warp-ds.github.io/docs/components/textarea/overview-anatomy.svg)

1.  Input label
2.  Optional indicator (optional)
3.  Info tooltip icon (optional)
4.  Input area
5.  Resize handle
6.  Help text (optional)

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Standard with hint</h3>
        <w-textarea label="A label" help-text="A hint"></w-textarea>
    </div>
    <div>
        <h3 class="h4">Optional</h3>
        <w-textarea label="A label" optional></w-textarea>
    </div>
    <div>
        <h3 class="h4">Disabled</h3>
        <w-textarea label="A label" disabled></w-textarea>
    </div>
    <div>
        <h3 class="h4">Read Only</h3>
        <w-textarea label="A label" readonly value="This is a readOnly textarea"></w-textarea>
    </div>
    <div>
        <h3 class="h4">Invalid</h3>
        <w-textarea label="A label" invalid required></w-textarea>
    </div>
```

## Usage

A text area allows users to input extended text content that covers multiple lines.

-   For detailed or open-ended input, like comments, feedback, descriptions, or messages.

-   **For short input**: Use [Text field](https://warp-ds.github.io/docs/components/text-field/overview) instead.

-   Placeholder text is shown when the field is empty.
-   Height can be set to auto-grow with content or have a fixed height with scrolling inside.
-   Can be manually resized using the resize handle.
-   Error state overrides help text.
-   Optional tooltip appears on hover/focus of the info icon.
-   Read-only disables keyboard input but keeps visual clarity.
-   Field supports keyboard navigation.

Text areas support keyboard and pointer interaction across platforms. Users can focus the field via tab or click, enter and edit text, and navigate using arrow keys.

The Info tooltip must be keyboard accessible and support the focus state.

The resize handle can be used with pointer interaction to change the text area content view.

-   Use a input label to clearly describe the purpose of the input, don’t rely on placeholder alone.
-   Keep input label text short and concise.
-   Use Hint (placeholder) text to provide brief instructions for the expected input. Since placeholder disappear when users start typing, avoid adding critical information.
-   Use the help text area for any examples or formatting hints, so that it's visible after the user enters text in the input area. Only use this where clarification is required, and try to avoid overuse.
-   Error text should be short, clear, and solution focused.

Visit our Language Specialists [Text input](https://www.astro-contentguide.com/05b2d7be6/p/58387b-text-input) guidance and best practices to ensure clear, consistent communication in all text inputs.

![Default text area with label, placeholder and help text](https://warp-ds.github.io/docs/components/textarea/usage-states-default.svg)

Empty area with placeholder.

![Default text area with hover state](https://warp-ds.github.io/docs/components/textarea/usage-states-hover.svg)

Area border highlights on mouse hover.

![Default text area with active state](https://warp-ds.github.io/docs/components/textarea/usage-states-active.svg)

Area is focused and ready for user input.

![Default text area with filled state](https://warp-ds.github.io/docs/components/textarea/usage-states-filled.svg)

Area contains user’s input.

![Default text area with error state](https://warp-ds.github.io/docs/components/textarea/usage-states-error.svg)

Failed input validation. It shows red border and actionable message below (help text).

![Default text area with active error state](https://warp-ds.github.io/docs/components/textarea/usage-states-error_hover.svg)

Errored area border highlights on mouse hover.

![Default text area with active error state](https://warp-ds.github.io/docs/components/textarea/usage-states-error_active.svg)

Area is focused but still in error state.

![Default text area with disabled state](https://warp-ds.github.io/docs/components/textarea/usage-states-disabled.svg)

Area cannot be interacted with, grayed out out visually.

![Default text area with read-only state](https://warp-ds.github.io/docs/components/textarea/usage-states-read_only.svg)

Input is visible but not editable.

## Accessibility

A text area allows users to input extended text content that covers multiple lines.

If a visible label isn't specified, an **aria-label** must be provided to the text field for accessibility. If the field is labeled by a separate element, an **aria-labelledby** prop must be provided using the id of the labeling element instead.

-   Always provide a visible label (do not rely on placeholder alone)
-   Do not rely on color alone for interaction feedback (e.g. error states)
-   Interaction patterns should follow platform-native expectations (e.g. tap zones, keyboard navigation, etc) and must not block accessibility tools.

## Frameworks

### React

A text area allows users to input extended text content that covers multiple lines.

You can import the component like so:

```js
import { TextArea } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { TextArea } from '@warp-ds/react/components/textarea';
```

```jsx
<TextArea label="Description" />
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| autoFocus | boolean |  | Whether the element should receive focus on render. |
| className | string |  | Additional classes to include. |
| style | CSSProperties |  | Additional CSS styles for the container. |
| defaultValue | string & (string\|number\|readonly string[]) |  | The default value (uncontrolled). |
| disabled | boolean |  | Whether the input is disabled. |
| error | boolean |  | Renders the field in an invalid state. Often paired together with helpText to provide feedback about the error. @deprecated use invalid instead. |
| invalid | boolean |  | Renders the field in an invalid state. Often paired together with helpText to provide feedback about the error. |
| helpText | ReactNode |  | The content to display as the help text. |
| id | string |  | The element's unique identifier. See MDN. |
| label | ReactNode |  | The content to display as the label. |
| max | string\|number |  | Standard input max attribute, to be used with type="number". See MDN. |
| min | string\|number |  | Standard input min attribute, to be used with type="number". See MDN. |
| maxLength | number |  | The maximum number of characters supported by the input. See MDN. |
| minLength | number |  | The minimum number of characters supported by the input. See MDN. |
| name | string |  | The name of the input element, used when submitting an HTML form. See MDN. |
| pattern | string |  | Regex pattern that the value of the input must match to be valid. See MDN. |
| placeholder | string |  | Text hint that occupies the text input when it is empty. |
| readOnly | boolean |  | Whether the input can be selected but not changed by the user. |
| required | boolean |  | Whether user input is required on the input before form submission. |
| children | ReactNode |  | For affix use. |
| value | string |  | The current value (controlled). |
| optional | boolean |  | Indicates that the textarea is not required. |

#### Value 

A TextArea's value is empty by default, but an initial, uncontrolled, value can be provided using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

```js
function Example() {
  let [value, setValue] = React.useState('Lorem ipsum');

  return (
    <div className="flex space-x-32">
      <TextArea label="Description (Uncontrolled)" defaultValue="Lorem ipsum" />

      <TextArea
        label="Description (Controlled)"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </div>
  );
}
```

#### Labeling 

A visual label should be provided for the TextArea using the `label` prop.

#### Optional 

Add the `optional` prop to indicate that the textarea is not required.

```jsx
<TextArea label="Description" optional />
```

#### Help text 

TextAreas can provide additional context with `helpText` if the label and placeholder aren't enough.

```jsx
<TextArea label="Description" helpText="Maximum 200 characters" />
```

TextAreas can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `invalid` prop to display it as invalid.

`invalid` is often paired with `helpText` to provide feedback to the user about the error.

```jsx
<TextArea label="Description" invalid helpText="Maximum 200 characters" />
```

#### Placeholder 

```jsx
<TextArea label="Description" placeholder="Lorem ipsum dolor sit amet" />
```

Placeholder text can be used to describe the expected value or formatting for the TextArea. Placeholder text will only appear when the TextArea is empty, and should not be used as a substitute for labeling the component with a visible label.

#### Disabled 

Keep in mind that using disabled in its current form is an anti-pattern. There will always be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.

```jsx
<div className="flex flex-col y-space-32">
  <TextArea label="Description" disabled value="Lorem ipsum dolor sit amet" />
  <TextArea label="Description" disabled />
</div>
```

#### Read only 

The `readOnly` boolean prop makes the TextArea's text content immutable. Unlike `disabled` the TextArea remains focusable and the contents can still be copied. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```jsx
<div className="flex flex-col y-space-32">
  <TextArea
    label="Description"
    readOnly
    defaultValue="Lorem ipsum dolor sit amet"
  />
  <TextArea label="Description" readOnly />
</div>
```

#### Height (text rows) 

The minimumRows prop sets the minimum number of text rows the TextArea should show.

```jsx
<TextArea label="Description" minimumRows={3} />
```

The `maximumRows` prop sets the maximum number of text rows the TextArea should show.

```jsx
<TextArea
  label="Description"
  maximumRows={3}
  defaultValue={'Lorem\nipsum\ndolor\nsit\namet'}
/>
```

### Vue

A text area allows users to input extended text content that covers multiple lines.

> Use in entire app

```js
import { Forms } from '@warp-ds/vue'
app.use(Forms)
```

> Use in one component and special imports

You can import the component like so:

```js
import { wTextarea } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wTextarea } from '@warp-ds/vue/forms';
```

```vue
<w-textarea label="A label" hint="A hint" v-model="model" />
```

All typical HTML5 attributes are valid props for textarea.

Below are some additional props documented.

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | The content to display as the label |
| hint | string |  | The string can contain HTML. |
| invalid | boolean |  | Renders the field in an invalid state. Often paired with hint to provide feedback about the error. |
| label-level | number |  | Usable on toggles, will make the emitted legend element into a heading for accessibility. |
| optional | string |  | Mark label to indicate that this input is optional. |
| read-only | string |  | Whether the input can be selected but not changed by the user. |

#### Validating Elements 

Every form element accepts a prop `rules` which takes an array of functions. These functions will be run in order until one returns an object. If all functions return `true` the field is considered valid.

```js
[v => v.trim().length > 5 || { valid: false, hint: 'This should be longer' }]
```

The function has one argument, the current value of the form element — and can either return `true` or an object with attributes described below

| attribute | type | notes |
| --- | --- | --- |
| valid | boolean |  |
| hint | string |  |
| always | boolean |  |

#### Collecting Validation with wForm 

The `wForm` component registers element descendants at any level, and provides the aggregate validation status.

| prop | type | default | notes |
| --- | --- | --- | --- |
| v-model | boolean |  | True when all descendants are valid |
| v-model:completed | boolean |  | True when all descendants are completed - passing their required rule |
| should-validate | boolean |  | Can be used to instruct all descendants to immediately validate. Note that this will not update if the should-validate logic is updated elsewhere. |
| as | string | form | The DOM element to emit for the wrapper |

#### Programmatic validation 

The wField component can provide access to programmatic validation beyond what wForm's props can. For information on which methods are available, see the documentation on Field.

```html
<w-field #control="{ form }">
  <button @click="submit(form)">Submit</button>
</w-field>
```

#### Validation and required Form Elements 

If the form element is marked required, a special rule will be inserted before any user-defined rules.

The required prop can accept a function that will be used as the required-rule.

### Elements

A text area allows users to input extended text content that covers multiple lines.

The textarea component is a custom element that provides a multi-line text input with built-in form validation, auto-resizing, and styling support.

-   `<w-textarea>` - A multi-line text input with label, help text, and validation support

The component automatically handles:

-   Form integration
-   Auto-resizing based on content and row constraints
-   Built-in validation with customizable error messages
-   Accessibility attributes and labeling

```html
<w-textarea label="Description" placeholder="Enter your description here"></w-textarea>

<script type="module">
  const textarea = document.querySelector('w-textarea');

  textarea.addEventListener('input', (event) => {
    console.log('Value:', event.target.value);
  });
</script>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| disabled | boolean | false | Whether the textarea is disabled. |
| help-text | string | '' | Help text displayed below the textarea. |
| invalid | boolean | false | Renders the field in an invalid state. |
| label | string | '' | The content to display as the label. |
| maximum-rows | number | - | Maximum number of text rows before scrolling. |
| minimum-rows | number | - | Minimum number of text rows to display. |
| name | string | - | The name of the input element, used when submitting an HTML form. |
| optional | boolean | false | Indicates that the textarea is not required, displays "(optional)" label. |
| placeholder | string | - | Text hint that occupies the textarea when it is empty. |
| read-only | boolean | false | Whether the input can be selected but not changed by the user. Deprecated, use readonly instead. |
| readonly | boolean | false | Whether the input can be selected but not changed by the user. |
| required | boolean | false | Whether user input is required before form submission. |
| value | string | '' | The current value of the textarea. |

#### Events 

| Name | Description |
| --- | --- |
| input | Fired when the value changes. |
| invalid | Fired when the textarea fails validation. |

#### Methods 

| Name | Parameters | Returns | Description |
| --- | --- | --- | --- |
| checkValidity | - | boolean | Checks whether the textarea passes constraint validation. |
| reportValidity | - | boolean | Checks validity and shows the browser's validation message if invalid. |
| setCustomValidity | message: string | void | Sets a custom validation message. Pass an empty string to clear. |
| resetFormControl | - | void | Resets the textarea to its initial value. |

#### Validation Properties 

| Name | Type | Description |
| --- | --- | --- |
| validationMessage | string | Returns the validation message if the textarea is invalid, otherwise an empty string. |
| validity | ValidityState | Returns the validity state of the textarea. |

A visual label displayed above the textarea.

Type: `string`

```html
<w-textarea label="Description"></w-textarea>
```

Displays "(optional)" next to the label to indicate the field is not required.

Type: `boolean`

Default: `false`

```html
<w-textarea label="Description" optional></w-textarea>
```

Provides additional context below the textarea.

Type: `string`

```html
<w-textarea label="Description" help-text="Maximum 500 characters"></w-textarea>
```

#### Invalid (`invalid`) 

Renders the textarea in an invalid state. Often paired with `help-text` to provide feedback about the error.

Type: `boolean`

Default: `false`

```html
<w-textarea label="Description" invalid help-text="This field is required"></w-textarea>
```

#### Required (`required`) 

When set, the textarea must have a value before form submission. The component integrates with native form validation.

Type: `boolean`

Default: `false`

```html
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

```html
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

#### Placeholder (`placeholder`) 

Text hint that appears when the textarea is empty. Placeholder text should not be used as a substitute for a visible label.

Type: `string`

```html
<w-textarea label="Description" placeholder="Enter a detailed description..."></w-textarea>
```

#### Disabled (`disabled`) 

Disables the textarea. Consider using more informative alternatives before choosing to use disabled, as some users may not understand why an element is disabled.

Type: `boolean`

Default: `false`

```html
<w-textarea label="Description" disabled value="This content cannot be edited"></w-textarea>
```

#### Read Only (`readonly`) 

Makes the textarea content immutable while remaining focusable. The contents can still be copied.

Type: `boolean`

Default: `false`

```html
<w-textarea label="Description" readonly value="This content is read-only"></w-textarea>
```

#### Minimum Rows (`minimum-rows`) 

Sets the minimum number of text rows the textarea should display.

Type: `number`

```html
<w-textarea label="Description" minimum-rows="3"></w-textarea>
```

#### Maximum Rows (`maximum-rows`) 

Sets the maximum number of text rows before scrolling is enabled.

Type: `number`

```html
<w-textarea label="Description" maximum-rows="3" value="Line 1
Line 2
Line 3
Line 4
Line 5"></w-textarea>
```

You can programmatically control the textarea value:

```html
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

The textarea component works with native HTML forms:

```html
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

## Inline Demo Markup

```html
<w-textarea label="Description" placeholder="Enter your description here"></w-textarea>
```

### iOS

A text area allows users to input extended text content that covers multiple lines.

```swift
Warp.TextArea(
    title: String = "",
    additionalInformation: String? = nil,
    tooltipContent: AnyView? = nil,
    text: Binding<String>,
    placeholder: String = "",
    style: Warp.TextAreaStyle = .default,
    helpText: String? = nil,
    minHeight: CGFloat = 88
)
```

```swift
Warp.TextArea(
    title: "Title",
    text: $text,
    placeholder: "Please fill me"
)
```

There are a variety of variants supported for the TextArea component:

```swift
enum Warp.TextAreaStyle {
    case `default`
    case disabled
    case error
    case readOnly
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.TextArea(
    title: "Title",
    text: $text,
    placeholder: "Please fill me"
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | Binding String |  | Binding to the text content. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String | empty | The main title text to display. |
| additionalInformation | String? | nil | Optional text to display after the title. |
| tooltipContent | AnyView? | nil | An optional view to display when the tooltip icon is tapped. |
| placeholder | String | empty | Text to display when the text area is empty. |
| style | Warp.TextAreaStyle | .default | The style of the text area. Use one of the predefined TextAreaStyle values: .default, .disabled, .error, or .readOnly |
| helpText | String? | nil | Optional String to display below the text area. |
| minHeight | CGFloat | 88 | Minimum height for the text area. |
