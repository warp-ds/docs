# Icons

## Elements

<icon-code-example />

### Import

You can import the component like so:

```js
import '@warp-ds/components/icon';
```

### Example

Use icon name from above list

```jsx
<w-icon name="ActiveAds" size="small" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="medium" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="large" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="42px" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="64px" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="96px" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="128px" locale="nb"></w-icon>
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | The name of the icon to render |
| size | `'small' \| 'medium' \| 'large' \| 'xypx'` | medium | The size of the icon: `small`, `medium`, `large`, or a custom size in pixels like `32px`. |
| locale | string |  | The locale to use for the icon, e.g. "nb" for Norwegian Bokmål |

