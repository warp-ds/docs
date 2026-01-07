# Expandable - Frameworks
Expandable is a layout component used for creating content that can be expanded and collapsed.

## Vue

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="Vue" 
/>

### Import

> Use in entire app

```js
import { Expandable } from '@warp-ds/vue';
app.use(Expandable);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wExpandable, wExpandTransition, wWillExpand } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wExpandable, wExpandTransition, wWillExpand } from '@warp-ds/vue/expandable';

```

### Syntax

```vue
<w-expandable title="I am expandable">
  <p>Hello there I am some informative content</p>
</w-expandable>
```

### Visual options

#### Default

```vue
<w-expandable title="I am expandable">
  <p>Hello there I am some informative content</p>
</w-expandable>
```

#### Expandable box

```vue
<w-expandable title="I am expandable" box>
  <p>Hello there I am some informative content</p>
</w-expandable>
```

### Animation

#### You should only use this feature under careful supervision of your friendly local UXer.

The w-expandable component can be animated using the animated prop.

```vue
<w-expandable animated title="I am expandable">
  <p>Hello there I am some informative content</p>
</w-expandable>
```

The wExpandTransition component can wrap one or more wWillExpand components.

```vue
<w-expand-transition group>
  <w-will-expand v-if="expanded">Hello</w-will-expand>
  <w-will-expand v-else>Hi</w-will-expand>
<w-expand-transition>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean | false | If not provided, the component will use an internal value that starts the expandable 'closed' |
| as | string | div | The DOM element to emit |
| box | boolean |  | Will make the expandable a Box |
| bleed | boolean |  | Will make the expandable full-width on sm-size |
| buttonClass | string |  | Additional CSS classes to include on the button part of the component |
| contentClass | string |  | Additional CSS classes to include on the content part of the component |
| chevron | boolean | true | Controls chevron visibility |

#### Slots

| Name | Description |
| --- | --- |
| title | string |
| default | string |

#### Events

| Name | Description |
| --- | --- |
| expand | boolean |
| collapse | boolean |