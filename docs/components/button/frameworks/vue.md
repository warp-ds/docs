# Button - Frameworks
Buttons initiate events or actions within a page, informing users of what to expect next.

<ComponentsStatus />

## Vue

<FrameworkTabs />

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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | Interchangeable with the default slot for labelling |
| href | string |  | When set, an anchor tag will be used instead of a button. Should not be combined with variant `link` |
| type | string | button | Controls the button's type, unused when `href` is present |
| fullWidth | boolean |  | Sets the button's width to its parent's width. Useful especially on mobile when button should take full width. |

#### Variants

| Variant | Modifiers | Notes |
| --- | --- | --- |
| primary | quiet, small, loading |  |
| secondary | quiet, small, loading |  |
| negative | quiet, small, loading |  |
| link | small |  |
| utility | small, loading, quiet |  |
| ~~pill~~ |  | @deprecated use `utility` together with `quiet` instead. |