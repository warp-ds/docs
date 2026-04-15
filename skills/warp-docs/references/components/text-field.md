# Text field

A text field is a single-line input component used for entering and editing textual data.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/text-field/overview), [Usage](https://warp-ds.github.io/docs/components/text-field/usage), [Accessibility](https://warp-ds.github.io/docs/components/text-field/accessibility), [React](https://warp-ds.github.io/docs/components/text-field/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/text-field/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/text-field/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/text-field/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/text-field/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

A text field is a single-line input component used for entering and editing textual data.

It supports a wide range of behaviours, labels, icons, prefixes/suffixes, tooltips, and error handling to support various use cases and accessibility needs. Text fields are a fundamental element of forms and search experiences across the product ecosystem.

Related components: [Text area](https://warp-ds.github.io/docs/components/text-area/overview), [Select](https://warp-ds.github.io/docs/components/select/overview).

![Default text field with label, placeholder and help text](https://warp-ds.github.io/docs/components/textfield/overview-variants-default.svg)

Standard input with a label, placeholder, and optional help text below. Use this variant in most cases, when clarity is important, and the field needs context both before (Label) and after (Help text) user interaction.

![Text field with label only](https://warp-ds.github.io/docs/components/textfield/overview-variants-label_only.svg)

An input with a label above the field and no help text. Use when space is limited or help text is not necessary. Ideal in short or repeated forms (e.g. settings, profile forms).

![Text field only](https://warp-ds.github.io/docs/components/textfield/overview-variants-text_field_only.svg)

A bare input with only a placeholder inside, and no label or help text. Use with **extreme caution**. Best suited for one-off interactions, short filters, or embedded in UI elements like search bar, toolbars, etc.

![Text field with label, followed by optional text and info icon, and help text](https://warp-ds.github.io/docs/components/textfield/overview-variants-optional.svg)

An input field with an optional label indicator (Optional). Use this variant when the field is not required. The Optional label and the Info tooltip are **independent options**, they can be **enabled or disabled separately** depending on the use case.

![Text field with label, followed by optional text and info icon, and help text](https://warp-ds.github.io/docs/components/textfield/overview-variants-info_tooltip.svg)

An input field with an info icon that opens a tooltip. Use this variant when users may need extra clarification on how to fill it in. The Optional label and the Info tooltip are **independent options**, they can be **enabled or disabled separately** depending on the use case.

![Text field with label, help text and affixes in the text field](https://warp-ds.github.io/docs/components/textfield/overview-variants-affixes.svg)

Visual indicators inside the input field, before (prefix) or after (suffix) the user-entered value: e.g. `kr`, `kg`, `%`. These help users understand the expected format or unit of input. Prefix and Suffix can be used **independently**, **together**, or **not at all**, they are **not tied to each other**.

![Text field with label, help text and icon affixes in the text field](https://warp-ds.github.io/docs/components/textfield/overview-variants-icon.svg)

Icons placed inside the input field on the left, right, or both sides. Provides visual affordance or quick actions related to the field. Left and Right icons are **separate, independent options**, that’s possible to use either one, both, or none **based on need**.

![Anatomy illustration, 1-7](https://warp-ds.github.io/docs/components/textfield/overview-anatomy-1.svg)  
![Anatomy illustration, 8-10](https://warp-ds.github.io/docs/components/textfield/overview-anatomy-2.svg)

1.  Input label (optional)
2.  Input field
3.  Optional indicator (optional)
4.  Info tooltip (optional)
5.  Placeholder
6.  Left icon (optional)
7.  Right icon (optional)
8.  Suffix (optional)
9.  Prefix (optional)
10.  Help text (optional)

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Standard with hint</h3>
        <w-textfield label="A label" help-text="A hint"></w-textfield>
    </div>
    <div>
        <h3 class="h4">Optional with placeholder</h3>
        <w-textfield label="A label" placeholder="This is a placeholder"></w-textfield>
    </div>
    <div>
        <h3 class="h4">Disabled</h3>
        <w-textfield label="A label" disabled></w-textfield>
    </div>
    <div>
        <h3 class="h4">Read Only</h3>
        <w-textfield label="A label" read-only value="This is a readOnly textfield"></w-textfield>
    </div>
    <div>
        <h3 class="h4">Invalid</h3>
        <w-textfield label="A label" invalid required></w-textfield>
    </div>
    <div>
        <h3 class="h4">Suffix + Prefix</h3>
        <w-textfield label="A label">
            <w-affix slot="prefix" label="kr"></w-affix>
            <w-affix slot="suffix" clear aria-label="Clear text"></w-affix>
        </w-textfield>
    </div>
    <div>
        <h3 class="h4">Wider Prefix</h3>
        <w-textfield label="Price in kroner" class="[--w-prefix-width:56px]" placeholder="1 000 000">
            <w-affix slot="prefix" label="kroner"></w-affix>
        </w-textfield>
    </div>
```

## Usage

A text field is a single-line input component used for entering and editing textual data.

-   A user needs to input short, single-line information.
-   Placed in forms, filters, modals, or toolbars.

-   **Multi-line input is needed**: use [Text area](https://warp-ds.github.io/docs/components/text-area/overview) component.
-   **Selecting from fixed options**: use [Select](https://warp-ds.github.io/docs/components/select/overview) component.
-   **The content is fixed or system-generated**: use a Read-only state.

-   Placeholder text is shown when the field is empty.
-   Icons and affixes (prefix/suffix) are non-interactive by default. Icons can optionally be used for actions related to the input content, e.g. clearing the field, toggling password visibility, opening the date picker, etc.
-   Icons must clearly indicate their function, in case of interaction, support keyboard navigation and screen reader, and should not interfere with typing or focus behaviour.
-   Error state overrides help text.
-   Optional tooltip appears on hover/focus of info icon.
-   Read-only disables keyboard input but keeps visual clarity.
-   Field supports keyboard navigation.

Text field supports full keyboard and pointer interaction across platforms. Users can focus the field via tab or click, enter and edit text, and navigate using arrow keys.

All interactive elements of the text field, such as info tooltip or clear buttons must be keyboard-accessible and support focus states.

-   Use a input label to clearly describe the purpose of the input, don’t rely on placeholder alone.
-   Keep input label text short and concise.
-   Use Placeholder text to provide brief instructions for the expected input. Since placeholder disappear when users start typing, avoid adding critical information.
-   Use the help text area for any examples or formatting hints, so that it's visible after the user enters text in the input area. Only use this where clarification is required, and try to avoid overuse.
-   Error text should be short, clear, and solution focused.

Visit our Language Specialists [Text input](https://www.astro-contentguide.com/05b2d7be6/p/58387b-text-input) guidance and best practices to ensure clear, consistent communication in all text inputs.

![Default text field with label, placeholder and help text](https://warp-ds.github.io/docs/components/textfield/usage-states-default.svg)

Empty field with placeholder.

![Default text field with hover state](https://warp-ds.github.io/docs/components/textfield/usage-states-hover.svg)

Field border highlights on mouse hover.

![Default text field with active state](https://warp-ds.github.io/docs/components/textfield/usage-states-active.svg)

Field is focused and ready for user input.

![Default text field with filled state](https://warp-ds.github.io/docs/components/textfield/usage-states-filled.svg)

Field contains user’s input.

![Default text field with error state](https://warp-ds.github.io/docs/components/textfield/usage-states-error.svg)

Failed input validation. It shows red border and actionable message below (help text).

![Default text field with active error state](https://warp-ds.github.io/docs/components/textfield/usage-states-error_hover.svg)

Errored field border highlights on mouse hover.

![Default text field with active error state](https://warp-ds.github.io/docs/components/textfield/usage-states-error_active.svg)

Field is focused but still in error state.

![Default text field with disabled state](https://warp-ds.github.io/docs/components/textfield/usage-states-disabled.svg)

Field cannot be interacted with, grayed out out visually.

![Default text field with read-only state](https://warp-ds.github.io/docs/components/textfield/usage-states-read_only.svg)

Input is visible but not editable.

## Accessibility

A text field is a single-line input component used for entering and editing textual data.

If a visible label isn't specified, an **aria-label** must be provided to the text field for accessibility. If the field is labeled by a separate element, an **aria-labelledby** prop must be provided using the id of the labeling element instead.

-   Always provide a visible label (do not rely on placeholder alone).
-   Do not rely on color alone for interaction feedback (e.g. error states).
-   Interaction patterns should follow platform-native expectations (e.g. tap zones, keyboard navigation, etc) and must not block accessibility tools.

## Frameworks

### React

A text field is a single-line input component used for entering and editing textual data.

You can import the component like so:

```js
import { TextField } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { TextField } from '@warp-ds/react/components/textfield';
```

```jsx
<TextField label="Name" />
```

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | "number" \|"text" \|"search" \|"email" \|"password" \|"url" \|"tel" |  | The type of input to render. See MDN. |
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
| optional | boolean |  | Indicates that the textfield is not required. |

#### Value 

A TextField's value is empty by default, but an initial, uncontrolled, value can be provided using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

```js
function Example() {
  let [value, setValue] = React.useState('me@email.com');

  return (
    <div className="flex space-x-32">
      <TextField label="Email (Uncontrolled)" defaultValue="me@email.com" />

      <TextField
        label="Email (Controlled)"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
```

#### Labeling 

A visual label should be provided for the TextField using the `label` prop.

#### Optional 

Add the `optional` prop to indicate that the textfield is not required.

```jsx
<TextField label="Telefonnummer" optional />
```

#### Help text 

TextFields can provide additional context with `helpText` if the label and placeholder aren't enough.

```jsx
<TextField
  label="Telefonnummer"
  helpText="Vil kun brukes til brukerverifisering"
/>
```

TextFields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `invalid` prop to display it as invalid.

`invalid` is often paired with `helpText` to provide feedback to the user about the error.

```jsx
<TextField label="Email" invalid helpText="Ugyldig e-post" />
```

#### Placeholder 

```jsx
<TextField label="E-post" placeholder="puse@finn.no" />
```

Placeholder text can be used to describe the expected value or formatting for the TextField. Placeholder text will only appear when the TextField is empty, and should not be used as a substitute for labeling the component with a visible label.

#### Disabled 

Keep in mind that using disabled in its current form is an anti-pattern. There will always be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.

```jsx
<div className="flex flex-col space-y-32">
  <TextField label="E-post" disabled value="puse@finn.no" />
  <TextField label="E-post" disabled />
</div>
```

#### Affix 

If you wish to use an affix you must first import the Affix component.

```js
import { Affix } from '@warp-ds/react';
```

Then you include it as a child of TextField component and pass the appropiate props (see bottom of this page for types)

```jsx
<TextField label="Price" placeholder="1 000 000">
  <Affix suffix label="kr" />
</TextField>
```

```jsx
<TextField label="Price" placeholder="1 000 000">
  <Affix prefix label="kr" />
</TextField>
```

```jsx
<TextField>
  <Affix suffix clear aria-label="Clear text" onClick={() => alert('clear')} />
</TextField>
```

```jsx
<TextField>
  <Affix suffix search aria-label="Search" onClick={() => alert('search')} />
</TextField>
```

For prefixes wider than 40px, push the input further to the right by setting a `--w-prefix-width` value on the TextField component. This will increase left padding of its input element. This value needs to be hardcoded until we find a more robust solution.

```jsx
<TextField className="[--w-prefix-width:56px]" label="Price in kroner">
  <Affix prefix label="kroner" />
</TextField>
```

You can also use both a prefix and suffix

```jsx
<TextField>
  <Affix prefix label="kr" />
  <Affix suffix search aria-label="Search" onClick={() => alert('search')} />
</TextField>
```

You cannot set the `type` of the Affix. `type` of the button rendered as `Affix` will be `submit` if you pass `search` as a prop, `reset` if you pass `clear` and `undefined` in other cases.

#### Affix props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string |  | Defines a string value that labels the affix element |
| prefix | boolean |  | Affix added at the beginning of input |
| suffix | boolean |  | Affix added at the end of input |
| clear | boolean |  | Displays a clear icon |
| search | boolean |  | Displays a search icon |
| label | string |  | Displays a string |

#### Events 

| Name | Description |
| --- | --- |
| onClick | () => void |

#### Read only 

The readOnly boolean prop makes the TextField's text content immutable. Unlike disabled the TextField remains focusable and the contents can still be copied. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```jsx
<div className="flex flex-col space-y-32">
  <TextField label="E-post" readOnly value="puse@finn.no" />
  <TextField label="E-post" readOnly />
</div>
```

### Vue

A text field is a single-line input component used for entering and editing textual data.

> Use in entire app

```js
import { Forms } from '@warp-ds/vue'
app.use(Forms)
```

> Use in one component and special imports

You can import the component like so:

```js
import { wTextfield } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wTextfield } from '@warp-ds/vue/forms';
```

```html
<w-textfield label="A label" hint="A hint" v-model="model" />
```

The props documented below have defaults set or are unique to this component, all typical HTML5 attributes are valid props.

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | string | text | Allowed types are: text \| search \| email \| password \| url \| tel \| number |
| autocomplete | string | off |  |
| mask | object |  | See the Masking section below for more information |

#### Masking 

To use input masking, first provide the default export from the `cleave.js` package as shown below. Once you've done that, any [options](https://github.com/nosir/cleave.js/blob/master/doc/options.md) from Cleave are valid options on the mask prop.

```js
// in setup, if you only need masking in one component
import { provide } from 'vue'
import Cleave from 'cleave.js'

export default {
  setup() {
    provide('Cleave', Cleave)
  }
}
// or install app-wide by using the provide method on app
app.provide('Cleave', Cleave)
```

#### Affixes 

If you wish to use an affix you must first import the wAffix component

```js
import { wAffix } from '@warp-ds/vue';
```

Then you include it as a child to w-textfield and pass the appropiate props. You must specify which slot to set the affix into (either prefix or suffix).

> Suffix

```html
<w-textfield #suffix v-model="inputModel" label="Search for items">
  <w-affix suffix search aria-label="Search" @click="handleSearch"/>
</w-textfield>
```

> Prefix

```html
<w-textfield #prefix v-model="inputModel" label="Price">
  <w-affix prefix label="kr"/>
</w-textfield>
```

> For prefixes wider than 40px, push the input further to the right by setting a `--w-prefix-width` value on the w-textfield component. This will increase left padding of its input element. This value needs to be hardcoded until we find a more robust solution.

```html
<w-textfield class="[--w-prefix-width:56px]" #prefix label="Price in kroner">
  <w-affix prefix label="kroner"></w-affix>
</w-textfield>
```

> You can also use both a prefix and suffix

```html
<w-textfield v-model="inputModel" label="Price">
  <template #prefix><w-affix prefix label="kr" /></template>
  <template #suffix><w-affix suffix clear aria-label="Clear text" @click="handleClear" /></template>
</w-textfield>
```

#### Validating Elements 

Every form element accepts a prop rules which takes an array of functions. These functions will be run in order until one returns an object. If all functions return true the field is considered valid.

```js
[v => v.trim().length > 5 || { valid: false, hint: 'This should be longer' }]
```

The function has one argument, the current value of the form element — and can either return true or an object with attributes described below

| attribute | type | notes |
| --- | --- | --- |
| valid | boolean |  |
| hint | string |  |
| always | boolean |  |

#### Collecting Validation with wForm 

The wForm component registers element descendants at any level, and provides the aggregate validation status.

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

```html
<w-field label="I can be anything!" hint="Isn't that neat?">
  <your-custom-element />
<w-field>
```

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | The content to display as the label |
| hint | string |  | The string can contain HTML. |
| invalid | boolean |  | Renders the field in an invalid state. Often paired with hint to provide feedback about the error. |
| label-level | number |  | Usable on toggles, will make the emitted legend element into a heading for accessibility. |
| optional | string |  | Mark label to indicate that this input is optional. |
| read-only | string |  | Whether the input can be selected but not changed by the user. |

### Elements

A text field is a single-line input component used for entering and editing textual data.

```html
<w-textfield label="Email"></w-textfield>
```

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | "number" \|"text" \|"search" \|"email" \|"password" \|"url" \|"tel" |  | The type of input to render. See MDN. |
| disabled | boolean |  | Whether the input is disabled. |
| invalid | boolean |  | Renders the field in an invalid state. Often paired together with helpText to provide feedback about the error. |
| help-text | string |  | The content to display as the help text. |
| label | string |  | The content to display as the label. |
| max | number |  | Standard input max attribute, to be used with type="number". See MDN. |
| min | number |  | Standard input min attribute, to be used with type="number". See MDN. |
| max-Length | number |  | The maximum number of characters supported by the input. See MDN. |
| min-Length | number |  | The minimum number of characters supported by the input. See MDN. |
| name | string |  | The name of the input element, used when submitting an HTML form. See MDN. |
| pattern | string |  | Regex pattern that the value of the input must match to be valid. See MDN. |
| placeholder | string |  | Text hint that occupies the text input when it is empty. |
| readOnly | boolean |  | Whether the input can be selected but not changed by the user. |
| required | boolean |  | Whether user input is required on the input before form submission. |
| value | string |  | The current value (controlled). |

Text fields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `invalid` attribute to display it as invalid. `invalid` is often paired with `help-text` to provide feedback to the user about the error.

```html
<w-textfield label="Email" invalid help-text="Invalid email"></w-textfield>
```

Placeholder text can be used to describe the expected value or formatting for the w-textfield. Placeholder text will only appear when the w-textfield is empty, and should not be used as a substitute for labeling the element with a visible label.

```html
<w-textfield label="Email"></w-textfield>
```

Keep in mind that using disabled in its current form is an anti-pattern. There will always be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.

```html
<div class="flex flex-col space-y-32">
  <w-textfield label="Email" disabled value="puse@finn.no"></w-textfield>
  <w-textfield label="Email" disabled></w-textfield>
</div>
```

If you wish to use an affix you must first use the w-affix element in conjunction with w-textfield. Include the affix as a child of w-textfield and set the appropiate attributes. You must specify which slot to set the affix into (either prefix or suffix).

> Suffix

```html
<w-textfield label="Price">
  <w-affix slot="suffix" label="kr"></w-affix>
</w-textfield>
```

> Prefix

```html
<w-textfield label="Price">
  <w-affix slot="prefix" label="kr"></w-affix>
</w-textfield>
```

> For prefixes wider than 40px, push the input further to the right by setting a `--w-prefix-width` value on the w-textfield element. This will increase left padding of its input element. This value needs to be hardcoded until we find a more robust solution.

```html
<w-textfield class="[--w-prefix-width:56px]" label="Price in kroner">
  <w-affix slot="prefix" label="kroner"></w-affix>
</w-textfield>
```

> You can also use both a prefix and suffix

```html
<w-textfield label="Price">
  <w-affix slot="prefix" label="kr"></w-affix>
  <w-affix slot="suffix" search aria-label="Search"></w-affix>
</w-textfield>
```

#### Affix props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string |  | Defines a string value that labels the affix element |
| clear | boolean |  | Displays a clear icon |
| search | boolean |  | Displays a search icon |
| label | string |  | Displays a string |

The read-only boolean attribute makes the w-textfield's text content immutable. Unlike disabled the w-textfield remains focusable and the contents can still be copied. See the MDN docs for more information.

```html
<div class="flex flex-col space-y-32">
  <w-textfield label="Email" read-only value="puse@finn.no"></w-textfield>
  <w-textfield label="Email" read-only></w-textfield>
</div>
```

### Android

A text field is a single-line input component used for entering and editing textual data.

```kotlin
@Composable
fun WarpTextField(
    value: String, 
    onValueChange: (String) -> Unit, 
    modifier: Modifier = Modifier, 
    label: String? = null,
    enabled: Boolean = true, 
    readOnly: Boolean = false, 
    optionalLabel: String? = null, 
    placeholderText: String? = null, 
    helpText: String? = null, 
    prefixText: String? = null,
    suffixText: String? = null,
    leadingIcon: @Composable () -> Unit? = null, 
    trailingIcon: @Composable () -> Unit? = null, 
    isError: Boolean = false, 
    visualTransformation: VisualTransformation = VisualTransformation.None, 
    keyboardOptions: KeyboardOptions = KeyboardOptions(capitalization = KeyboardCapitalization.Sentences), 
    keyboardActions: KeyboardActions = KeyboardActions.Default, 
    singleLine: Boolean = true, 
    minLines: Int = 1,
    maxLines: Int = Int.MAX_VALUE, 
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
)
```

A TextField's value is empty by default, but an initial value can be provided using the `value` param.

```kotlin
var text by rememberSaveable { mutableStateOf("0") }

WarpTextField(
    value = text,
    onValueChange = { text = it },            
    label = "Price",           
    )
```

A visual label should be provided for the TextField using the `label` param. Add the `optionalLabel` param to indicate that the textfield is not required.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Price",         
    optionalLabel = "(optional)"  
    )
```

TextFields can provide additional context with `helpText` if the label and placeholder aren't enough.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Address",         
    helpText = "Street name & house nr"  
    )
```

TextFields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `isError` prop to display it as invalid.

`isError` is often paired with `helpText` to provide feedback to the user about the error.

```kotlin
var text by rememberSaveable { mutableStateOf("") }
var isError by remember { mutableStateOf(false)}
var errorText by remember { mutableStateOf("")}

WarpTextField(
    value = text,
    onValueChange = { text = it },            
    label = "Zipcode",
    isError = isError,          
    helpText = errorText  
    )
```

Placeholder text can be used to describe the expected value or formatting for the TextField. Placeholder text will only appear when the TextField is empty, and should not be used as a substitute for labeling the component with a visible label.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "E-mail",         
    placeholderText = "email@mail.com"  
    )
```

Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "E-mail",         
    enabled = false  
    )
```

The readOnly boolean prop makes the TextField's text content immutable.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Name",
    readOnly = true 
    )
```

WarpTextField supports showing a leading and/or a trailing icon. The component expects a @Composable which ideally should be an icon composable.

```kotlin
val leadingIcon: @Composable () -> Unit = { Icon(Icons.Filled.Email, contentDescription = "Content description for the leading icon") }

WarpTextField(
    value = "",
    onValueChange = { },            
    label = "E-mail",
    leadingIcon = leadingIcon 
    )
```

WarpTextField supports showing a prefix or suffix text. When set this text will appear permanently infront of or behind the value.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Price",
    suffixText = "kr" 
    )
    
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Price",
    prefixText = "kronor" 
    )
```

To support layouts still written in xml the WarpTextField can be used as a custom view.

```xml
<com.schibsted.nmp.warp.components.WarpTextFieldView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        app:label="Label"
        app:optionalLabel="(optional)"
        app:placeholderText="Placeholder/hint"
        app:helpText="Help text under the textfield"
        app:textFieldEnabled="true"
        app:readOnly="false"
        app:leadingIcon="@drawable/leading_icon"
        app:leadingIconContentDescr="Leading icon description"
        app:trailingIcon="@drawable/trailing_icon"
        app:trailingIconContentDescr="Trailing icon description"
        app:isError="false"
        app:prefixText="kronor"
        app:suffixText="kr"
        app:maxLines="6"
        app:minLines="2"
        app:singleLine="false"
        />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | String |  | The text displayed currently in the textfield |
| onValueChange | (String) -> Unit |  | Lambda to be invoked when input value changes |

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the textfield |
| label | String | null | The text to display as the label above the textfield |
| enabled | Boolean | true | Sets the textfield in disabled mode |
| readOnly | Boolean | false | Sets the textfield in read-only mode |
| optionalLabel | String | null | The optional text to display next to the label above the textfield |
| placeholderText | String | null | Text hint that occupies the textfield when it is empty |
| helpText | String | null | The text to display as the help text below the textfield |
| prefixText | String | null | The text to display infront of the value inside the textfield |
| suffixText | String | null | The text to display after the value inside the textfield |
| leadingIcon | @Composable () -> Unit? | null | Sets the composable in front of the input value |
| trailingIcon | @Composable () -> Unit? | null | Sets the composable behind the input value |
| isError | Boolean | false | Renders the field in an invalid state. Often paired together with helpText to provide feedback about the error |
| visualTransformation | VisualTransformation | VisualTransformation.None | Interface used for changing visual output of the input field |
| keyboardOptions | KeyboardOptions | KeyboardOptions(capitalization = KeyboardCapitalization.Sentences) | The keyboard configuration options |
| keyboardActions | KeyboardActions | KeyboardActions.Default | The KeyboardActions that specify actions that will be triggered in response to triggering IME action on the software keyboard |
| singleLine | Boolean | true | Sets the textfield to a single line |
| minLines | Int | 1 | Sets the minimum amount of lines |
| maxLines | Int | Int.MAX_VALUE | Sets the maximum amount of lines allowed |
| interactionSource | MutableInteractionSource | MutableInteractionSource | MutableInteractionSource represents a stream of Interactions corresponding to events emitted by a component |

### iOS

A text field is a single-line input component used for entering and editing textual data.

```swift
Warp.TextField(
    title: String = "",
    additionalInformation: String? = nil,
    tooltipContent: AnyView? = nil,
    leftIcon: Warp.Icon? = nil,
    prefix: String? = nil,
    text: Binding<String>,
    placeholder: String = "",
    suffix: String? = nil,
    rightIcon: Warp.Icon? = nil,
    rightIconAction: @escaping () -> Void? = { nil },
    style: Warp.TextFieldStyle = .default,
    helpText: String? = nil
)
```

There are a variety of variants supported for the TextField component:

```swift
enum Warp.TextFieldStyle {
    case `default`
    case disabled
    case error
    case readOnly
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.TextField(
    title: "Title",
    text: $text,
    placeholder: "Please fill me"
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | Binding String |  | Binding to the text content. |

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String | empty | The main title text to display. |
| additionalInformation | String? | nil | Optional text to display after the title. |
| tooltipContent | AnyView? | nil | An optional view to display when the tooltip icon is tapped. |
| leftIcon | Warp.Icon? | nil | An optional Warp.Icon displayed on the left side of the text field. |
| prefix | String? | nil | An optional string displayed before the text input. |
| placeholder | String | empty | Text to display when the text field is empty. |
| suffix | String? | nil | An optional string displayed after the text input. |
| rightIcon | Warp.Icon? | nil | An optional Warp.Icon displayed on the right side of the text field. |
| rightIconAction | () -> Void? | nil | An optional action for right icon |
| style | Warp.TextFieldStyle | .default | The style of the text field. Use one of the predefined TextFieldStyle values: .default, .disabled, .error, or .readOnly |
| helpText | String? | nil | Optional String to display below the text field. |
