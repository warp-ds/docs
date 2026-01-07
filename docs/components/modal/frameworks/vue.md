# Modal - Frameworks
A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

## Vue

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' },
    { name: 'Figma', url: './figma' },
  ]" 
  activeTab="Vue" 
/>

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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean |  | Whether or not to show the modal |
| left | boolean \|object |  | When truthy, will show the left button of the header. Object properties will be used as attributes on the button. |
| right | boolean \|object |  | When truthy, will show the right button of the header. Object properties will be used as attributes on the button. |
| title | string |  |  |
| titleAttrs | object |  | Properties will be set as attributes of the title in the header. |
| headerClasses | string \|object |  | Classes here will be set on the wrapper for the header. |
| contentClasses | string \|object |  | Classes here will be set on the wrapper for the content. |
| contentId | string |  | This id is useful if you need to programmatically scroll content in the modal. |

#### Events

| Name | Description |
| --- | --- |
| dismiss | A user presses ESC or clicks outside the dialog |
| left | The left title-button has been clicked |
| right | The right title-button has been clicked |
| shown | Modal entrance transitions are complete and content has been mounted |
| hidden | Modal exit transitions are complete and content has been torn down or hidden |

#### Slots

Note that to dynamically control the left/right slots, one must use the left/right props instead of showing and hiding the slot itself.

#### Slots

| Name | Description |
| --- | --- |
| default | Content for the modal |
| footer | Footer (button drawer) for the modal - the footer is sticky |
| left | Overrides the default icon (a back arrow) |
| right | Overrides the default icon (an X symbol) |

#### Custom Properties

Use percentage-based units as opposed to `vh` for adjusting heights.
This ensures correct behavior on mobile devices when toolbars show/hide and cause changes to the inner height.

| name | notes |
| --- | --- |
| --w-modal-max-height | The max-height of the modal dialog |
| --w-modal-height | The height of the modal dialog |
| --w-modal-width | The max-width of the modal dialog |

### Example

```vue
<w-modal @dismiss="modalIsOpen = false" v-model="modalIsOpen">
  <h1>Hello I am a modal</h1>
</w-modal>
```