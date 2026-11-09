# Button group

<ComponentsStatus />

A button group is a form input shown as a row of buttons, typically used as a filter control. Users pick one option (single selection) or several (multiple selection).

## Example

<ThemeSwitcher />

<elements-example>

```html
<w-checkbox-group label="Filter by color" name="color-filters" type="button">
	<w-checkbox value="red">Red</w-checkbox>
	<w-checkbox value="green">Green</w-checkbox>
	<w-checkbox value="blue">Blue</w-checkbox>
</w-checkbox-group>
```

</elements-example>

## Usage

- Use a multiple selection button group (a checkbox group) when users can combine options, for example several filters.
- Use a single selection button group (a radio group) when exactly one option applies. See also [Radio buttons](/web/components/radio-buttons/overview.md).
- The group's purpose should be clear from its surroundings and contents, so it has no visible label. It still needs a label for assistive technology: see [Code](/web/components/button-group/code.md).

<component-questions />
