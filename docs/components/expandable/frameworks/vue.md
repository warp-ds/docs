# Expandable

## Vue

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

<api-table type="vue" component="Expandable" />