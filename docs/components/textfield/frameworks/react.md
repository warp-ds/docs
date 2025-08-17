### Import

You can import the component like so:
```js
import { TextField } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { TextField } from '@warp-ds/react/components/textfield';

```

### Syntax

```jsx
<TextField label="Name" />
```

### Props

<api-table type=react component="TextField" />

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

### Validation

TextFields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `invalid` prop to display it as invalid.

`invalid` is often paired with `helpText` to provide feedback to the user about the error.

```jsx
<TextField label="Email" invalid helpText="Ugyldig e-post" />
```

### Visual options

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

<api-table type=react component="Affix" />

#### Read only

The readOnly boolean prop makes the TextField's text content immutable. Unlike disabled the TextField remains focusable and the contents can still be copied. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
 for more information.

```jsx
<div className="flex flex-col space-y-32">
  <TextField label="E-post" readOnly value="puse@finn.no" />
  <TextField label="E-post" readOnly />
</div>
```