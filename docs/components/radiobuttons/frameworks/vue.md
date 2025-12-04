# Radio buttons

## Vue

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
<w-toggle radio-button v-model="model" label="A label" :toggles="[
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 }
]" />
```

### Props

The props documented below have defaults set or are unique to this component, all typical HTML5 attributes are valid props. See Field for additional props.

<api-table type=vue component="Toggle"/>

### Validation

#### Validating Elements
Every form element accepts a prop rules which takes an array of functions. These functions will be run in order until one returns an object. If all functions return true the field is considered valid.

```js
[v => v.trim().length > 5 || { valid: false, hint: 'This should be longer' }]
```

The function has one argument, the current value of the form element — and can either return true or an object with attributes described below

<api-table type=vue component="InputAttributes"/>

#### Collecting Validation from wForm
The wForm component registers element descendants at any level, and provides the aggregate validation status.

<api-table type=vue component="InputValidation"/>

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