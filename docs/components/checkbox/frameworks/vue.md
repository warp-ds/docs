# Checkbox - Frameworks
Checkboxes allow users to select one or more options from a number of choices.

## Vue

<FrameworkTabs 
  :tabs="[
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' },
    { name: 'Web', url: './web' }
  ]" 
  activeTab="Vue" 
/>

### Import

> Use in entire app
```js
import { Forms } from '@warp-ds/vue'
app.use(Forms)
```

> Use in one component and special imports

You can import the component like so:
```js
import { wToggle } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wToggle } from '@warp-ds/vue/toggle';

```

### Syntax

```vue
<w-toggle checkbox v-model="model" label="A label" :toggles="[
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 }
]" />
```

### Props

The props documented below have defaults set or are unique to this component, all typical HTML5 attributes are valid props. See Field for additional props.

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| radio | boolean |  |  |
| checkbox | boolean |  |  |
| radio-button | boolean |  |  |
| toggles | array |  | An array of objects. Each object must at least have a value and label attribute. Any other attributes will be transferred directly to the individual toggle |
| invalid | boolean |  | Whether elements should be styled as invalid |
| disabled | boolean |  | Whether elements should be styled as disabled |
| indeterminate | boolean |  | Whether a single option is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked. |
| equal-width | boolean |  | Will make each option equal width, only applied when radio-button is set |
| small | boolean |  | Whether the elements should be small, only applied when radio-button is set |

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

```html
<w-field #control="{ form }">
  <button @click="submit(form)">Submit</button>
</w-field>
```

#### Validation and required Form Elements
If the form element is marked `required`, a special rule will be inserted before any user-defined rules.
The `required` prop can accept a function that will be used as the required-rule.