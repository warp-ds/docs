# Box - Frameworks
Box is a layout component used for separating content areas on a page.

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

```js
<w-box info>
    <p>This is <strong>info</strong> variant of the box component</p>
</w-box>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| bleed | boolean | false | Will make a box full-width on sm-size |
| bordered | boolean | false | Adds a lovely border |
| info | boolean | false | Will style the box with colors for indicating that it has informative content |
| neutral | boolean | false | Will style the box in a neutral fashion |
| role | string | region | Sets the ARIA `role` attribute to provide semantic meaning. To remove the default role attribute, supply an empty role (`role=""`). |