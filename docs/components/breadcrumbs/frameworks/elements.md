# Breadcrumbs - Frameworks
Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step. 

## Elements

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
  ]" 
  activeTab="Elements" 
/>

### Syntax

```html
<w-breadcrumbs>
  <a href="/url/1">Page 1</a>
  <a href="/url/2">Page 2</a>
  <span aria-current="page">Current Page</a>
</w-breadcrumbs>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string | Her er du | Defines a string value that labels the current element. |