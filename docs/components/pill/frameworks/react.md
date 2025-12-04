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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string | undefined | The text content of the pill. |
| ~~icon~~ | ReactNode | undefined | Used to render an icon inside the pill. You can pass any valid HTML. This will override the label property. @deprecated Do not use. |
| canClose | boolean | false | Whether the pill should be removable via a close button. |
| openSRLabel | string | "Open filter" | Label read by screen readers when targeting the pill. |
| closeSRLabel | string | "Remove filter {label}" | Label read by screen readers when targeting the close button. |
| suggestion | boolean | false | Whether the pill should be rendered as a suggestion. |
| className | string | undefined | Additional classes applied to the button element of the pill as long as canClose is set to false. |

#### Events

| Name | Description |
| --- | --- |
| onClick | Action to be called when the pill is clicked. |
| onClose | Action to be called when the close button is clicked. |