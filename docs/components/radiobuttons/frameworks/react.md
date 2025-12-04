# Radio buttons

## React

### Import

The toggle component allows you to render radio buttons in a group. All you have to do is specify `type="radio-button"` for the Toggle and let the component handle the rest. Toggle is built to handle both single and multiple options.

You must keep track of state yourself. The state has to be handled differently depending on whether you want to use single or multiple options. See examples below.

You can import the component like so:
```js
import { Toggle } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Toggle } from '@warp-ds/react/components/toggle';

```

### Syntax

```ts example
type ToggleEntry = {
  label: string;
  value: unknown;
};
```

```jsx example
function Example() {
  const options = [
    { label: 'Oslo', value: 1 },
    { label: 'Lørenskog', value: 2 },
    { label: 'Hamar', value: 3 },
  ];

  const [equalWidth, setEqualWidth] = React.useState(false);

  return (
    <>
      <Button
        className="mb-8"
        onClick={() => setEqualWidth(!equalWidth)}
        primary={equalWidth}
        negative={!equalWidth}
        small
      >
        Equal width: {equalWidth.toString()}
      </Button>
      <div>
        <Toggle
          type="radio-button"
          options={options}
          equalWidth={equalWidth}
          onChange={(e) => console.log(e)}
        />
      </div>
    </>
  );
}
```

Radio buttons have the special property `equalWidth`, which will render each option with equal width.

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