# Card - Frameworks
Card is an interactive layout component to display information.

<ComponentsStatus />

## Vue

<FrameworkTabs />

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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selected | boolean |  | If the card is selected |
| flat | boolean |  | Removes box shadow around card |
| as | string | div | The DOM element to emit |