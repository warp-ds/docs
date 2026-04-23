# Box - Elements

Box is a layout component used for separating content areas on a page.

<ComponentsStatus />

<FrameworkTabs />

<ThemeSwitcher />

## Accessibility

Use the ARIA role attribute to provide semantic meaning to a box element.

It will default to role="region". To remove the default role attribute, supply an empty role (role="").

Consider using more suitable roles for your specific Box, as described on [Using ARIA: Roles, states and properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Techniques).

## Examples

### Syntax

```js
<w-box info>
    <p>This is <strong>info</strong> variant of the box component</p>
</w-box>
```

## API

<!--generated-->

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| bleed | boolean | false | Will make a box full-width on sm-size |
| bordered | boolean | false | Adds a lovely border |
| info | boolean | false | Will style the box with colors for indicating that it has informative content |
| neutral | boolean | false | Will style the box in a neutral fashion |
| role | string | region | Sets the ARIA `role` attribute to provide semantic meaning. To remove the default role attribute, supply an empty role (`role=""`). |

<!--/generated-->

<component-questions />