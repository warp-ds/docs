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

<api-table type="react" component="Badge" />