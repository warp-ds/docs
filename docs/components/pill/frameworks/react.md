# Pill

## React

### Import

You can import the component like so:
```js
import { Pill } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Pill } from '@warp-ds/react/components/pill';

```

### Syntax

#### Filter Pill
```jsx
<Pill label="Filter Pill" />
```

#### Filter Pill with changed pill screen reader label
```jsx
<Pill label="Filter Pill" openSRLabel="Activate Filter" />
```

#### Closable Filter Pill
```jsx
<Pill canClose label="Closable Filter Pill" />
```

#### Closable Filter Pill with changed close button screen reader label
```jsx
<Pill canClose label="Closable Filter Pill" closeSRLabel="Deactivate Filter" />
```

#### Suggestion Pill
```jsx
<Pill suggestion label="Suggestion Pill" />
```

#### Closable Suggestion Pill
```jsx
<Pill suggestion canClose label="Closable Suggestion Pill" />
```

### Props

<api-table type="react" component="Pill" />