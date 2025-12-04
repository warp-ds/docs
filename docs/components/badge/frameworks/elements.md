# Badge

## Elements

### Syntax

```html
<w-badge>Default badge rendered as neutral variant</w-badge>
<w-badge variant="info">Info variant badge</w-badge>
<w-badge variant="price" position="top-left">Price badge with a top-left position</w-badge>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored'` | 'neutral' |  |
| position | `'top-left', 'top-right', 'bottom-right', 'bottom-left'` | undefined | Used for absolute positioning of the badge within a container |