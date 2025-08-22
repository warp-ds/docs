### Import

> Use in entire app
```js
import { Card } from '@warp-ds/vue'
app.use(Card)
```

> Use in one component and special imports

You can import the component like so:
```js
import { wCard } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wCard } from '@warp-ds/vue/card'

```

### Props

<api-table type=vue component="Card"/>