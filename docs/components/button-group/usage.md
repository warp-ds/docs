# ButtonGroup - Usage

A button group is a type of form input displayed as multiple buttons in a group, typically used as a filter control.

<ComponentsStatus />
<FrameworkTabs />
<ThemeSwitcher />

## Usage

A button group is typically used in filters when a horizontal layout of options is preferable to the standard checkbox and radio groups.

### Button group label

A button group's purpose should be evident from its surroundings and contents. The group itself should have no visual label.

For accessibility reasons you must name the button group in code even though the label is not visible.

### Variants

A button group comes in two variants:

- Multiple selection
- Single selection

Semantically speaking a button group is either a checkbox group (for selecting multiple values) or a radio group (for selecting a single value).

#### Multiple selection button group

<elements-example no-code>

```html
<w-checkbox-group label="Filter by color" name="color-filters" type="button">
	<w-checkbox value="red">Red</w-checkbox>
	<w-checkbox value="green">Green</w-checkbox>
	<w-checkbox value="blue">Blue</w-checkbox>
</w-checkbox-group>
```

</elements-example>

#### Single selection button group

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
