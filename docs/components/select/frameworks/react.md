# Select - Frameworks
A select is a form input component that lets users choose one option from a predefined list.

<ComponentsStatus />

## React

<FrameworkTabs />

### Import

You can import the component like so:
```js
import { Select } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Select } from '@warp-ds/react/components/select';

```

### Syntax

```jsx example
<Select label="Berries">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | string |  | The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id). |
| name | string |  | The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname). |
| defaultValue | string & (string\|number\|readonly string[]) |  | The default value (uncontrolled). |
| value | string |  | The current value (controlled). |
| label | ReactNode |  | The content to display as the label. |
| optional | boolean |  | Mark label to indicate that this select is optional. |
| hint | ReactNode |  | The content to display as the hint. |
| always | boolean |  | Whether to always show hint. |
| invalid | boolean |  | Renders the field in an invalid state. Often paired together with `hint` to provide feedback about the error. |
| disabled | boolean |  | Whether the input is disabled. |
| readOnly | boolean |  | Whether the input can be selected but not changed by the user. |
| required | boolean |  | Whether user input is required on the input before form submission. |
| children | ReactNode |  | The `option` elements to populate the select with. |
| className | string |  | Additional classes to include. |
| style | CSSProperties |  | Additional CSS styles for the container. |
| autoFocus | boolean |  | Whether the element should receive focus on render. |

#### Value

An initial, uncontrolled, value can be provided using the `defaultValue` prop.
Alternatively, a controlled value can be provided using the `value` prop.

```jsx example
function Example() {
  let [value, setValue] = React.useState('c');

  return (
    <div className="flex flex-col space-y-32">
      <Select label="Berries (uncontrolled)">
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>

      <Select
        label="Berries (controlled)"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>
    </div>
  );
}
```

#### Labelling

A visual label should be provided for the Select using the `label` prop.


#### Optional

Add the `optional` prop to indicate that the select is not required.

```jsx example
<Select label="Berries" optional>
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

#### Hint text

Selects can provide additional context with `hint` if the label and placeholder
aren't enough. You can force the hint text to always display by setting the
`always` prop.

```jsx example
<Select label="Berries" hint="We'll make jam of your selection" always>
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

### Validation

Selects can communicate to the user whether the current value is invalid.
Implement your own validation logic in your app and set the `invalid` prop to
display it as invalid.

`invalid` is often paired with `hint` to provide feedback to the user about the
error.

```jsx example
<Select label="Berries" invalid hint="The wrong selection gets you berried">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

### Disabled

Using disabled is considered an anti-pattern and is therefore not supported.
There will always be users who don't understand why an element is disabled, or
users who can't even see that it is disabled because of poor lighting conditions
or other reasons. Please consider more informative alternatives.