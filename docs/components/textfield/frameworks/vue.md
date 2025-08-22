### Import

> Use in entire app

```js
import { Forms } from '@warp-ds/vue'
app.use(Forms)
```

> Use in one component and special imports

You can import the component like so:
```js
import { wTextfield } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wTextfield } from '@warp-ds/vue/forms';

```

### Syntax

```html
<w-textfield label="A label" hint="A hint" v-model="model" />
```

### Props

The props documented below have defaults set or are unique to this component, all typical HTML5 attributes are valid props.

<api-table type=vue component="TextField"/>

#### Masking

To use input masking, first provide the default export from the `cleave.js` package as shown below. Once you've done that, any [options](https://github.com/nosir/cleave.js/blob/master/doc/options.md) from Cleave are valid options on the mask prop.

```js
// in setup, if you only need masking in one component
import { provide } from 'vue'
import Cleave from 'cleave.js'

export default {
  setup() {
    provide('Cleave', Cleave)
  }
}
// or install app-wide by using the provide method on app
app.provide('Cleave', Cleave)
```

#### Affixes

If you wish to use an affix you must first import the wAffix component

```js
import { wAffix } from '@warp-ds/vue';
```

Then you include it as a child to w-textfield and pass the appropiate props.
You must specify which slot to set the affix into (either prefix or suffix).

> Suffix
```html
<w-textfield #suffix v-model="inputModel" label="Search for items">
  <w-affix suffix search aria-label="Search" @click="handleSearch"/>
</w-textfield>
```

> Prefix
```html
<w-textfield #prefix v-model="inputModel" label="Price">
  <w-affix prefix label="kr"/>
</w-textfield>
```

> For prefixes wider than 40px, push the input further to the right by setting a `--w-prefix-width` value on the w-textfield component.
> This will increase left padding of its input element. This value needs to be hardcoded until we find a more robust solution.
```html
<w-textfield class="[--w-prefix-width:56px]" #prefix label="Price in kroner">
  <w-affix prefix label="kroner"></w-affix>
</w-textfield>
```

> You can also use both a prefix and suffix
```html
<w-textfield v-model="inputModel" label="Price">
  <template #prefix><w-affix prefix label="kr" /></template>
  <template #suffix><w-affix suffix clear aria-label="Clear text" @click="handleClear" /></template>
</w-textfield>
```

### Validation

#### Validating Elements

Every form element accepts a prop rules which takes an array of functions. These functions will be run in order until one returns an object. If all functions return true the field is considered valid.

```js
[v => v.trim().length > 5 || { valid: false, hint: 'This should be longer' }]
```
The function has one argument, the current value of the form element — and can either return true or an object with attributes described below

<api-table type=vue component="InputAttributes"/>

#### Collecting Validation with wForm

The wForm component registers element descendants at any level, and provides the aggregate validation status.

<api-table type=vue component="InputValidation"/>

#### Programmatic validation

The wField component can provide access to programmatic validation beyond what wForm's props can. For information on which methods are available, see the documentation on Field.

```html
<w-field #control="{ form }">
  <button @click="submit(form)">Submit</button>
</w-field>
```

#### Validation and required Form Elements

If the form element is marked required, a special rule will be inserted before any user-defined rules.

The required prop can accept a function that will be used as the required-rule.

### FIELD Syntax 

```html
<w-field label="I can be anything!" hint="Isn't that neat?">
  <your-custom-element />
<w-field>
```

<api-table type=vue component="Field"/>