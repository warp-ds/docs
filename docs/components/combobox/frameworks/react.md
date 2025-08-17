### Import

You can import the component like so:
```js
import { Combobox } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Combobox } from '@warp-ds/react/components/combobox'

```

### Props

<api-table type=react component="Combobox" />

```tsx
export type ComboboxOption = {
  value: string;
  label?: string;
};
```

### Example

```jsx
function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
```

### Highlight matched text segments

If you want to highlight the matched text you can set the `matchTextSegments` prop.

```jsx
function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      matchTextSegments
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
```

Note that this prop only enables the component's default styling for text matches. You can style text matches however you'd like by overriding styles on `[data-combobox-text-match]`. For example:

```css
[data-combobox-text-match] {
  background: yellow;
}
```

The `matchTextSegments` uses the default algorithm for input/option matching. To write your own matching algorithm, pass a function to the `highlightValueMatch` prop. In most cases you won't have to alter this.

```jsx
// PSEUDO CODE
function highlightValueMatch(optionValue: string, inputValue: string) {
  // ADDITIONAL CODE?
  if (match) ;// return JSX string value with additional visual styling
  else ;// return JSX string value
}
```

### Asynchronous option fetching

When you fetch options asynchronously, it is often preferred to pass the `disableStaticFiltering` prop so that you don't filter the options client side.

### Custom rendering in ComboboxOption

Sometimes you need to render something other than the value as the visible option, in these cases you can pass a `label`. The label is only for display. The `value` is what gets sent back when selected.

```jsx
function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      placeholder="Custom Option Rendering"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      matchTextSegments
      options={[
        { value: 'Apple', label: '🍎 Apple' },
        { value: 'Banana', label: '🍌 Banana' },
        { value: 'Orange', label: '🍊 Orange' },
        { value: 'Pineapple', label: '🍍 Pineapple' },
      ]}
    />
  );
}
```

### Client side search

This example searches an API of Star Wars characters. Combobox does not implement any matching on your list (aside from highlighting the matched phrases in an option). Instead, you render an option for each result you want in the list. So your job is to:

- Establish the search term state
- Match the search to your list
- Render an option for each match
There is nothing special about managing state for a combobox, it's like managing state for any other list in your app. As the input changes, you figure out what state you need, then render as many options as you want.

```jsx
function Example() {
  const [value, setValue] = React.useState('');
  const characters = useDebouncedSearch(value, 300);

  // Generic debouncer
  function useDebouncedSearch(query, delay) {
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
      if (!query.length) setCharacters([]);

      const handler = setTimeout(() => {
        fetch('https://swapi.dev/api/people/?search=' + query.trim())
          .then((res) => res.json())
          .then((res) => {
            console.log('Results from API', query);
            setCharacters(res.results.map((c) => ({ value: c.name })));
          });
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [query]);

    return characters;
  }

  return (
    <Combobox
      label="Star Wars character"
      disableStaticFiltering
      matchTextSegments
      openOnFocus
      value={value}
      onChange={(val) => {
        setValue(val);
      }}
      onSelect={(val) => {
        setValue(val);
        action('select')(val);
      }}
      options={characters}
    >
      <Affix
        suffix
        clear
        aria-label="Clear text"
        onClick={() => {
          setValue('');
        }}
      />
    </Combobox>
  );
}
```

### Affix

If you wish to use an affix you must first import the Affix component.

```jsx
import { Affix } from '@warp-ds/react';
```

Then you include it as a child of Combobox component and pass the appropriate props (see bottom of this page for types).

```jsx
function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      placeholder="Your favorite fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      matchTextSegments
      options={[
        { value: 'Apple', label: '🍎 Apple' },
        { value: 'Banana', label: '🍌 Banana' },
        { value: 'Orange', label: '🍊 Orange' },
        { value: 'Pineapple', label: '🍍 Pineapple' },
      ]}
    >
      <Affix
        suffix
        clear
        aria-label="Clear text"
        onClick={() => setValue('')}
      />
    </Combobox>
  );
}
```

*Note* that when using the Affix component without a `label` you should specify an `aria-label`.
See props at the bottom of this page. See [TextField](/components/textfield/) for more details on Affix.

<api-table type=react component="Affix" />

### Clearing input on select

If you want, you can have the input field cleared after a value has been selected:

```jsx
function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => {
        alert(val);
        setValue('');
      }}
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
```

### Optional prop

Add the optional prop to indicate that the combobox field is not required.

```jsx
function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      optional
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => {
        alert(val);
        setValue('');
      }}
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
```