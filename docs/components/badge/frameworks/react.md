# Badge - Frameworks

Badges are used to highlight a relevant piece of information, like status or category.

<ComponentsStatus />

## React

<FrameworkTabs />

### Import

You can import the component like so:
```js
import { Badge } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Badge } from '@warp-ds/react/components/badge';

```

### Syntax

```jsx
<Badge>Default badge rendered as neutral variant</Badge>
<Badge variant="info">Info variant badge</Badge>
<Badge variant="price" position="top-left">Price badge with a top-left position</Badge>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| as | string | div | The DOM element to emit |
| variant | `'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored'` | 'neutral' |  |
| position | `'top-left', 'top-right', 'bottom-right', 'bottom-left'` | undefined | Used for absolute positioning of the badge within a container |
| children | Element \| Element[] \| string |  | Content of the Badge component |
| className | string |  | Additional CSS classes to apply to the component |
| style | CSSProperties |  | CSS styles to inline on the component |