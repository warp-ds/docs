### Import

> Use in entire app

```js
import { Alert } from '@warp-ds/vue';
app.use(Alert);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wAlert } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wAlert } from '@warp-ds/vue/alert';

```

### Syntax

```vue
<w-alert v-model="showAlert" info title="I am a title">
  <p>I am an excellent message for the user.</p>
</w-alert>
```

### Props

<api-table type=vue component="Alert" />