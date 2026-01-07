# Select - Frameworks
A select is a form input component that lets users choose one option from a predefined list.

## Vue

<!-- Insert framework tabs here !-->

### Import

> Use in entire app
```js
import { Forms } from '@warp-ds/vue'
app.use(Forms)
```

> Use in one component and special imports

You can import the component like so:
```js
import { wSelect } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wSelect } from '@warp-ds/vue/select';

```

### Syntax

```vue
<w-select v-model="model" label="A label">
  <option disabled selected value="">Pick something</option>
  <option value="foo">Foo</option>
</w-select>
```

### Props
All typical HTML5 attributes are valid props for select.

Below are some additional props documented.

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | The content to display as the label |
| hint | string |  | The string can contain HTML. |
| invalid | boolean |  | Renders the field in an invalid state. Often paired with `hint` to provide feedback about the error. |
| label-level | number |  | Usable on toggles, will make the emitted legend element into a heading for accessibility. |
| optional | string |  | Mark label to indicate that this input is optional. |
| read-only | string |  | Whether the input can be selected but not changed by the user. |

### Validation

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

#### Collecting Validation from wForm
The wForm component registers element descendants at any level, and provides the aggregate validation status.

| prop | type | default | notes |
| --- | --- | --- | --- |
| v-model | boolean |  | True when all descendants are valid |
| v-model:completed | boolean |  | True when all descendants are completed - passing their required rule |
| should-validate | boolean |  | Can be used to instruct all descendants to immediately validate. Note that this will not update if the should-validate logic is updated elsewhere. |
| as | string | form | The DOM element to emit for the wrapper |

#### Programmatic validation
The wField component can provide access to programmatic validation beyond what wForm's props can. For information on which methods are available, see the documentation on Field.

```vue
<w-field #control="{ form }">
  <button @click="submit(form)">Submit</button>
</w-field>
```

#### Validation and required Form Elements
If the form element is marked `required`, a special rule will be inserted before any user-defined rules.
The `required` prop can accept a function that will be used as the required-rule.