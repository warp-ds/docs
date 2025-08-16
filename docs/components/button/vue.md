### Import

> Use in entire app

```js
import { Button } from '@warp-ds/vue';
app.use(Button);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wButton } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wButton } from '@warp-ds/vue/button';

```

### Syntax

```html
<w-button primary>Click me</w-button>
<w-button>Click me</w-button>
```

### Props

<api-table type=vue component="Button" />
