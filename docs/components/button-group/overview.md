# ButtonGroup - Overview

A button group is a type of form input displayed as multiple buttons in a group, typically used as a filter control.

<ComponentsStatus />
<FrameworkTabs />
<ThemeSwitcher />

## Examples

### Multiple selection button group

<elements-example no-code>

```html
<w-checkbox-group label="Filter by color" name="color-filters" type="button">
	<w-checkbox value="red">Red</w-checkbox>
	<w-checkbox value="green">Green</w-checkbox>
	<w-checkbox value="blue">Blue</w-checkbox>
</w-checkbox-group>
```

</elements-example>

### Single selection button group

<elements-example no-code>

```html
<w-radio-group label="Package size" name="package-size" type="button">
	<w-radio value="small">Small</w-radio>
	<w-radio value="medium">Medium</w-radio>
	<w-radio value="large">Large</w-radio>
</w-radio-group>
```

</elements-example>

<component-questions />