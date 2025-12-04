# Alert

## React

### Import

You can import the component like so:
```js
import { Alert } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Alert } from '@warp-ds/react/components/alert';

```

### Syntax

```js
<Alert type="info" show>
  This is "info" variant of the alert element
</Alert>
```

### Accessibility

Use the ARIA live region `role` attribute to provide meaning to the alert
element (defaults to "alert"). If you want to remove the role from the alert and
assign it to its particular child (e.g. title), you can do so by setting `role`
property of the `Alert` component to an empty string and assigning a respective
`role` attribute on the child element. Read more about live region `role`
attribute on
[MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes).

#### Alert with "alert" role on a descendant element

```js
<Alert type="info" show={show} role="">
  <h3 role="alert" className="t5">
    This is "info" variant of the alert element
  </h3>
  <p>With an additional description</p>
</Alert>
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `'negative' \| 'positive' \| 'warning' \| 'info'` | undefined | Type of Alert |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| show | boolean | undefined | Controls when the alert shows |
| role | string | alert | ARIA live region "role" attribute value |
| className | string | undefined | Additional classes to include |
| style | string | undefined | Additional CSS styles for the container |