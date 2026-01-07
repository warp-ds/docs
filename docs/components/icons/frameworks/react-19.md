# Icons - Frameworks
Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

## React 19

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'React 19', url: './react-19' },
  ]" 
  activeTab="React 19" 
/>

<icon-code-example />

### Import

You can import the component like so:

```js
import { WIcon } from '@warp-ds/components/react/icon';
```

### Example

Use icon name from above list

```jsx
<WIcon name="ActiveAds" size="small" locale="nb" />
<WIcon name="ActiveAds" size="medium" locale="nb" />
<WIcon name="ActiveAds" size="large" locale="nb" />
<WIcon name="ActiveAds" size="42px" locale="nb" />
<WIcon name="ActiveAds" size="64px" locale="nb" />
<WIcon name="ActiveAds" size="96px" locale="nb" />
<WIcon name="ActiveAds" size="128px" locale="nb" />
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | The name of the icon to render |
| size | `'small' \| 'medium' \| 'large' \| 'xypx'` | medium | The size of the icon: `small`, `medium`, `large`, or a custom size in pixels like `32px`. |
| locale | string |  | The locale to use for the icon, e.g. "nb" for Norwegian Bokmål |

