### Import

You can import the component like so:
```js
import { TextArea } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { TextArea } from '@warp-ds/react/components/textarea';

```

### Syntax

```jsx
<TextArea label="Description" />
```

### Props

<api-table type=react component="TextArea" />

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

### Validation

TextAreas can communicate to the user whether the current value is invalid.
Implement your own validation logic in your app and set the `invalid` prop to display it as invalid.

`invalid` is often paired with `helpText` to provide feedback to the user about the error.

```jsx
<TextArea label="Description" invalid helpText="Maximum 200 characters" />
```

### Visual options

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

The `readOnly` boolean prop makes the TextArea's text content immutable. Unlike `disabled` the TextArea remains focusable and the contents can still be copied. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
 for more information.

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