# Combo Box

A combo box combines a dropdown list with an editable text input, allowing users to either select an option or type their own.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/combo-box/overview), [Usage](https://warp-ds.github.io/docs/components/combo-box/usage), [React](https://warp-ds.github.io/docs/components/combo-box/frameworks/react), [Elements](https://warp-ds.github.io/docs/components/combo-box/frameworks/elements)

**Framework support:** Elements, React

## Overview

A combo box combines a dropdown list with an editable text input, allowing users to either select an option or type their own.

A combo box is the combination of an `<input type="text"/>` and a list. The list is designed to help the user arrive at a value, but the value does not necessarily have to come from that list. Don't think of it like a `<select/>`, but more of an input with some suggestions. You can, however, validate that the value comes from the list, that's up to your app.

## Example

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

A combo box combines a dropdown list with an editable text input, allowing users to either select an option or type their own.

[Elements](https://warp-ds.github.io/docs/components/combo-box/frameworks/elements)[React](https://warp-ds.github.io/docs/components/combo-box/frameworks/react)

You can import the component like so:

```js
import { Combobox } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Combobox } from '@warp-ds/react/components/combobox'
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | ComboboxOption[] |  | The available options to select from |
| value | string |  | The TextField input value |
| onChange | (value: string) => void |  | Called when the value of the input changes |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | string |  | Unique identifier for the input field |
| label | string |  | Label above input |
| placeholder | string |  | Input placeholder |
| openOnFocus | boolean | false | Whether the popover opens when focus is on the text field |
| selectOnBlur | boolean | true | Select active option on blur |
| matchTextSegments | boolean | false | Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override [data-combobox-text-match]. This uses the default matching algorithm. Use the highlightValueMatch to pass your own matching function. |
| disableStaticFiltering | boolean | false | Disable client-side static filtering |
| highlightValueMatch | (optionValue: string, inputValue: string) => ReactNode |  | Pass your own function for highlight matching |
| invalid | boolean |  | Renders the input field in an invalid state. Often paired together with helpText to provide feedback about the error |
| helpText | ReactNode |  | The content to display as the help text |
| className | string |  | Additional container styling |
| listClassName | string |  | Additional list styling |
| aria-label | number |  | Defines a string value that labels the current element. Must be set if aria-labelledby is not defined. Defines a string value that labels the current element. @see aria-labelledby. |
| aria-labelledby | string |  | Identifies the element (or elements) that labels the current element. Must be set if aria-label is not defined. Identifies the element (or elements) that labels the current element. |
| children | ReactNode |  | For Affix use |
| optional | boolean |  | Mark label to indicate that this combobox is optional. |

#### Events 

| Name | Description |
| --- | --- |
| onSelect | ((value: string) => void) & ReactEventHandler |
| onFocus | (() => void) & FocusEventHandler |
| onBlur | ((value: string) => void) & FocusEventHandler |

```tsx
export type ComboboxOption = {
  value: string;
  label?: string;
};
```

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

When you fetch options asynchronously, it is often preferred to pass the `disableStaticFiltering` prop so that you don't filter the options client side.

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

This example searches an API of Star Wars characters. Combobox does not implement any matching on your list (aside from highlighting the matched phrases in an option). Instead, you render an option for each result you want in the list. So your job is to:

-   Establish the search term state
-   Match the search to your list
-   Render an option for each match There is nothing special about managing state for a combobox, it's like managing state for any other list in your app. As the input changes, you figure out what state you need, then render as many options as you want.

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

_Note_ that when using the Affix component without a `label` you should specify an `aria-label`. See props at the bottom of this page. See [TextField](https://warp-ds.github.io/docs/components/text-field/overview) for more details on Affix.

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

### Elements

A combo box combines a dropdown list with an editable text input, allowing users to either select an option or type their own.

[Elements](https://warp-ds.github.io/docs/components/combo-box/frameworks/elements)[React](https://warp-ds.github.io/docs/components/combo-box/frameworks/react)

`<w-combobox>` is a text input with a selectable list of options.

-   Provide options via the `options` property (array of objects: `{ value: string; label?: string; key?: string }`).
-   The component dispatches bubbling `change`, `select`, `focus`, and `blur` `CustomEvent`s.
-   Static filtering is enabled by default (options are filtered by substring match against `value`, case-insensitive). Set `disable-static-filtering` to disable this filtering.
-   Keyboard navigation is supported (ArrowUp/ArrowDown, Home/End, PageUp/PageDown). `Enter` selects the active option.

```html
<w-combobox id="demo-combobox"></w-combobox>

<script type="module">
  const el = document.querySelector('#demo-combobox');

  el.options = [
    { value: 'Oslo' },
    { value: 'Bergen' },
    { value: 'Trondheim' },
    { value: 'Tromsø' },
  ];

  el.addEventListener('change', (event) => {
    // event.detail = { value: string }
    console.log('change', event.detail.value);
  });

  el.addEventListener('select', (event) => {
    // event.detail = { value: string }
    console.log('select', event.detail.value);
  });
</script>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | array | [] | The available options to select from. Each option is an object: { value: string; label?: string; key?: string }. |
| label | string |  | Label above input |
| placeholder | string |  | Input placeholder |
| value | string | '' | The input value (controlled). |
| open-on-focus | boolean | false | Whether the options list opens when focus is on the text field |
| select-on-blur | boolean | true | Select active option on blur |
| match-text-segments | boolean | false | Whether matching text segments in the options should be highlighted |
| disable-static-filtering | boolean | false | Disable client-side static filtering |
| invalid | boolean | false | Renders the input field in an invalid state |
| help-text | string |  | The content to display as the help text |
| disabled | boolean | false | Whether the element is disabled |
| required | boolean | false | Whether the element is required |
| optional | boolean | false | Whether to show optional text |
| name | string |  | Name attribute for form submission |
| autocomplete | string | off | Autocomplete attribute for the input element. Gives a hint to the browser for autofill purposes. |

#### Events 

| Name | Description |
| --- | --- |
| change | CustomEvent |
| select | CustomEvent |
| focus | CustomEvent |
| blur | CustomEvent |

Each event object (except focus) includes a `detail.value` property which contains the selected value as a `string`.

#### Options (`options`) 

The available options to select from.

Type: `ComboboxOption[]`

Each option is an object:

-   `value: string` (required)
-   `label?: string` (optional display label; falls back to `value`)
-   `key?: string` (optional stable key; falls back to `value`)

Default: `[]`

```html
<w-combobox id="combobox-options"></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-options');
  el.options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];
</script>
```

#### Label (`label`) 

Label above input.

Type: `string`

Default: `undefined`

```html
<w-combobox label="Fruit"></w-combobox>
```

#### Placeholder (`placeholder`) 

Input placeholder.

Type: `string`

Default: `undefined`

```html
<w-combobox placeholder="Search…"></w-combobox>
```

#### Value (`value`) 

The input value.

Type: `string`

Default: `''`

```html
<w-combobox value="Os"></w-combobox>
```

#### Open on focus (`open-on-focus`) 

Whether the popover opens when focus is on the text field.

Type: `boolean`

Default: `false`

```html
<w-combobox open-on-focus></w-combobox>
```

#### Select on blur (`select-on-blur`) 

Select active option on blur.

Behavior:

-   If the user has navigated to an option, that option will be selected on blur.
-   If the current `value` exactly matches an option value, it will be selected on blur.

Type: `boolean`

Default: `true`

```html
<w-combobox select-on-blur></w-combobox>
```

#### Match text segments (`match-text-segments`) 

Whether the matching text segments in the options should be highlighted.

Type: `boolean`

Default: `false`

```html
<w-combobox match-text-segments></w-combobox>
```

#### Disable static filtering (`disable-static-filtering`) 

Disable client-side static filtering.

-   When `false` (default), options are filtered by checking whether `option.value` includes `value` (case-insensitive).
-   When `true`, the component does not filter options; it displays the provided options as-is.

Type: `boolean`

Default: `false`

```html
<w-combobox disable-static-filtering></w-combobox>
```

#### Invalid (`invalid`) 

Renders the input field in an invalid state.

Type: `boolean`

Default: `false`

```html
<w-combobox invalid></w-combobox>
```

#### Help text (`help-text`) 

The content to display as the help text.

Type: `string`

Default: `undefined`

```html
<w-combobox help-text="Choose a city"></w-combobox>
```

#### Disabled (`disabled`) 

Whether the element is disabled.

Type: `boolean`

Default: `false`

```html
<w-combobox disabled></w-combobox>
```

#### Required (`required`) 

Whether the element is required.

Type: `boolean`

Default: `false`

```html
<w-combobox required></w-combobox>
```

#### Optional (`optional`) 

Whether to show optional text.

Type: `boolean`

Default: `false`

```html
<w-combobox optional></w-combobox>
```

#### Name (`name`) 

Name attribute for form submission.

Type: `string`

Default: `undefined`

```html
<form>
  <w-combobox name="city"></w-combobox>
  <button type="submit">Submit</button>
</form>
```

#### Autocomplete (`autocomplete`) 

autocomplete attribute that provides autofill hints to the browser. [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete)

Type: `string`

Default: `off`

```html
<form>
  <w-combobox autocomplete="on"></w-combobox>
</form>
```

#### Change (`change`) 

Dispatched when the input value changes.

-   Type: `CustomEvent`
-   Bubbles: `true`
-   Composed: `true`
-   Detail: `{ value: string }`

```html
<w-combobox id="combobox-change"></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-change');
  el.addEventListener('change', (e) => {
    console.log('value:', e.detail.value);
  });
</script>
```

#### Select (`select`) 

Dispatched when an option is selected.

-   Type: `CustomEvent`
-   Bubbles: `true`
-   Composed: `true`
-   Detail: `{ value: string }`

```html
<w-combobox id="combobox-select"></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-select');
  el.addEventListener('select', (e) => {
    console.log('selected:', e.detail.value);
  });
</script>
```

#### Focus (`focus`) 

Dispatched when the input receives focus **only when** `open-on-focus` is `true`.

-   Type: `CustomEvent`
-   Bubbles: `true`
-   Composed: `true`

```html
<w-combobox id="combobox-focus" open-on-focus></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-focus');
  el.addEventListener('focus', () => {
    console.log('focus (open-on-focus)');
  });
</script>
```

#### Blur (`blur`) 

Dispatched when the input loses focus.

-   Type: `CustomEvent`
-   Bubbles: `true`
-   Composed: `true`
-   Detail: `{ value: string }` (the current input value at the time of blur)

```html
<w-combobox id="combobox-blur"></w-combobox>
<script type="module">
  const el = document.querySelector('#combobox-blur');
  el.addEventListener('blur', (e) => {
    console.log('blur value:', e.detail.value);
  });
</script>
```

The internal text field is rendered with `role="combobox"` and associated ARIA attributes:

-   `aria-autocomplete="list"`
-   `aria-expanded` reflects whether the popover is open and has options
-   `aria-activedescendant` points at the active option while navigating
-   `aria-controls` points at the listbox element

Options are rendered as a `role="listbox"` containing `role="option"` elements.

A screen-reader-only `role="status"` element announces the number of results (or “No results”) based on the current value.

## Inline Demo Markup

```html
<w-combobox></w-combobox>
```

```html
<w-combobox label="Fruit"></w-combobox>
```

```html
<w-combobox placeholder="Search…"></w-combobox>
```

```html
<w-combobox invalid></w-combobox>
```

```html
<w-combobox help-text="Choose a city"></w-combobox>
```

```html
<w-combobox disabled></w-combobox>
```
