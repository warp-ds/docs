# Pill - Frameworks
Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.

## Elements

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="Elements" 
/>

### Syntax

#### Filter Pill
```html
<w-pill>Filter Pill</w-pill>
```

#### Filter Pill with changed pill screen reader label
```html
<w-pill open-sr-label='Activate Filter'>Filter Pill</w-pill>
```

#### Closable Filter Pill
```html
<w-pill can-close>Closable Filter Pill</w-pill>
```

#### Closable Filter Pill with changed close button screen reader label
```html
<w-pill can-close close-sr-label='Deactivate Filter'>Closable Filter Pill</w-pill>
```

#### Suggestion Pill
```html
<w-pill suggestion>Suggestion Pill<w-pill/>
```

#### Closable Suggestion Pill
```html
<w-pill suggestion can-close>Closable Suggestion Pill</w-pill>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| open-sr-label | string | "Open filter" | Label read by screen readers when targeting the pill |
| close-sr-label | string | "Remove filter {label}" | Label read by screen readers when targeting the close button |
| can-close | boolean | false | Whether the pill should be removable via a close button. |
| suggestion | boolean | false | Whether the pill should be rendered as a suggestion. |

#### Events

| Name | Description |
| --- | --- |
| w-pill-click | Event to be called when the pill is clicked. |
| w-pill-close | Event to be called when the close button is clicked. |