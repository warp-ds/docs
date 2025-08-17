### Import

> Use in entire app
```js
import { Modal } from '@warp-ds/vue'
app.use(Modal)
```

> Use in one component and special imports

You can import the component like so:
```js
import { wModal } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wModal } from '@warp-ds/vue/modal'

```

### Props

<api-table type=vue component="Modal"/>

#### Slots

Note that to dynamically control the left/right slots, one must use the left/right props instead of showing and hiding the slot itself.

<api-table type=vue component="ModalSlots"/>

#### Custom Properties

Use percentage-based units as opposed to `vh` for adjusting heights.
This ensures correct behavior on mobile devices when toolbars show/hide and cause changes to the inner height.

<api-table type=vue component="ModalCustomProperties"/>

### Example

```vue
<w-modal @dismiss="modalIsOpen = false" v-model="modalIsOpen">
  <h1>Hello I am a modal</h1>
</w-modal>
```