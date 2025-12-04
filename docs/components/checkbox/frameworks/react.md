# Checkbox

## React

### Import

The toggle component allows you to render checkboxes. All you have to do is specify `type="checkbox"` for the Toggle and let the component handle the rest. Toggle is built to handle both single and multiple options.

You must keep track of state yourself. The state has to be handled differently depending on whether you want to use single or multiple options. See examples below.


You can import the component like so:
```js
import { Toggle } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Toggle } from '@warp-ds/react/components/toggle'

```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `"radio" \|"checkbox" \|"radio-button"` |  | The type of Toggle |
| title | string |  | The option(s) title |
| invalid | boolean |  | Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error. |
| helpText | string |  | Help text beneath options |
| options | ToggleEntry[] |  | An array of options to render |
| selected | ToggleEntry[] |  | An array of options to be selected / checked (controlled) |
| defaultSelected | ToggleEntry[] |  | An array of options to be selected / checked on mount (uncontrolled) |
| label | string |  | If you only need to render a single option, use this prop instead |
| noVisibleLabel | boolean |  | Whether label should be invisible |
| checked | boolean |  | Whether the single option should be checked (controlled) |
| defaultChecked | boolean |  | Whether the single option should be checked on mount (uncontrolled) |
| indeterminate | boolean |  | Whether a single option is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked. |
| optional | boolean |  | Whether the toggle is optional Appends (optional) to the end of the title for indication |
| className | string |  | Custom classes applied to the wrapping container |
| equalWidth | boolean |  | Will make each option equal width, only applied when "radio-button" type is set |
| small | boolean |  | Whether the elements should be small, only applied when "radio-button" type is set |

```ts example
type ToggleEntry = {
  label: string;
  value: unknown;
};
```

### Checkbox with single option

When you only want a single option, please use the `label` property over passing a single option to the `options` property. This results in the `onChange` callback function returning a single boolean value indicating the current state of the toggle.

```jsx example
function Example() {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <p className="h4">{checked.toString()}</p>
      <Toggle
        type="checkbox"
        label="Apple"
        defaultChecked={checked}
        onChange={(checked) => setChecked(checked)}
      />
    </>
  );
}
```

**Note** the `defaultChecked` property, which is only used to set the default value on component mount (uncontrolled). **It does not** actively pass down the state of the checkbox. Feel free to omit this property if you are not setting the default value of the checkbox or use the `checked` property (controlled) to actively pass down state.

**Note** the `onChange` property returning a boolean value. This is because we're working with a single option. When using the `options` property, as seen in examples below, the option which has been selected is returned on the callback and we must handle this state ourselves.

### Checkbox with multiple options

Let's have a look at using the Toggle with multiple options. As mentioned above, using the `options` property will change the returning value of the `onChange` callback. It will now return the option which was selected.

```jsx example
function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Microsoft', value: 'microsoft' },
  ]);

  const handleSelect = (entry) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  return (
    <>
      <p className="h4">{JSON.stringify(selected)}</p>
      <Toggle
        type="checkbox"
        title="Companies"
        defaultSelected={selected}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Microsoft', value: 'microsoft' },
        ]}
        onChange={handleSelect}
      />
    </>
  );
}
```

**Note** the `defaultSelected` property (uncontrolled). Similar to the single option checked property, this will render the passed options as `checked` by default when the component mounts. If you wish to actively pass the state down use the `selected` property instead (controlled).

**Note** the `title` property. This gives you the option to label the options, but is not required.


### Checkbox with invisible label

You can hide the label by passing a `noVisibleLabel` prop to Toggle component.

```jsx example
function Example() {
  const [checked, setChecked] = React.useState('No');
  const answer = checked ? 'Yes' : 'No';

  return (
    <>
      <p className="h4">Is checkbox selected? {answer}</p>
      <Toggle
        type="checkbox"
        label={answer}
        defaultChecked={checked}
        onChange={(checked) => setChecked(checked)}
        noVisibleLabel
      />
    </>
  );
}
```

### Checkbox with indeterminate state

Sometimes we need to indicate that the state of a single checkbox is indeterminate, or "partially checked". The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.

```jsx example
function Example() {
  const [selectAllChecked, setSelectAllChecked] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState([
    { label: 'Apple pie', value: 'apple pie' },
    { label: 'Pavlova', value: 'pavlova' },
  ]);

  const options = [
    { label: 'Apple pie', value: 'apple pie' },
    { label: 'Carrot cake', value: 'carrot cake' },
    { label: 'Pavlova', value: 'pavlova' },
  ];

  const handleSelectAll = (checked) => {
    if (checked === false) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
    setSelectAllChecked(checked);
  };

  const handleSelect = (selected) => {
    let updatedSelected = selectedOptions;

    if (selectedOptions.some((option) => option.value === selected.value)) {
      updatedSelected = selectedOptions.filter(
        (option) => option.value !== selected.value,
      );
    } else {
      updatedSelected = [...selectedOptions, selected];
    }

    if (selectedOptions.length === options.length) setSelectAllChecked(false);
    if (updatedSelected.length === options.length) setSelectAllChecked(true);

    setSelectedOptions(updatedSelected);
  };

  return (
    <>
      <Toggle
        onChange={handleSelectAll}
        checked={selectAllChecked}
        type="checkbox"
        label="Select all desserts"
        indeterminate={
          selectedOptions.length > 0 &&
          selectedOptions.length !== options.length
        }
      />
      <Toggle
        title="Favourite desserts"
        type="checkbox"
        selected={selectedOptions}
        options={options}
        onChange={handleSelect}
      />
    </>
  );
}
```

### Validation

Validation is as easy as passing the property `invalid` with a `helpText` to further explain the error. `helpText` can also be used as an assistance label before an error occurs as long as `invalid` is set to false.

```jsx example
function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText="Blue surely isn't amongst your favorites?"
      invalid
      selected={selected}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
```

In the next example, we'll take a closer look at one way to conditionally render error and help messages. You should probably take this a step further and implement your own error handler, but for the sake of the demo we've kept it quite simple.

```jsx example
function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  const handleSelect = (entry) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText={
        selected.some((e) => e.value === 'blue')
          ? "Blue surely isn't amongst your favorites?"
          : 'Choose your favorite colors'
      }
      invalid={!!selected.some((e) => e.value === 'blue')}
      selected={selected}
      onChange={handleSelect}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
```