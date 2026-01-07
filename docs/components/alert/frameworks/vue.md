# Alert - Frameworks
Alerts show high-signal messages meant to be noticed and prompting users.

<WarpBadge status="Released" framework="Android" />
<WarpBadge status="Released" framework="iOS" />
<WarpBadge status="Released" framework="React-19" />
<WarpBadge status="Released" framework="React" />
<WarpBadge status="Released" framework="Vue" />
<WarpBadge status="Released" framework="Web" />

## Vue

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'React 19', url: './react-19' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="Vue" 
/>

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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean | undefined | Controls when the alert shows |
| title | string | undefined | The title for the alert |
| role | string | alert | The aria role for the alert |
| negative | boolean | undefined | Creates a negative alert |
| positive | boolean | undefined | Creates a positive alert |
| warning | boolean | undefined | Creates a warning alert |
| info | boolean | undefined | Creates an info alert |