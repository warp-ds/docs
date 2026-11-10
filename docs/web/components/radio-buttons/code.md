# Radio buttons

<ComponentsStatus />

<FrameworkTabs />
<ThemeSwitcher />

In WARP Elements, radio buttons are a single selection [button group](/web/components/button-group/code.md): a [radio group](/web/components/radio/code.md) with `type="button"`. Give the group a `label`; it is visually hidden but read by assistive technology.

<elements-example>

```html
<w-radio-group label="Package size" name="package-size" type="button">
	<w-radio value="small">Small</w-radio>
	<w-radio value="medium">Medium</w-radio>
	<w-radio value="large">Large</w-radio>
</w-radio-group>
```

</elements-example>

For attributes, events and the styling API, see [`w-radio-group` and `w-radio`](/web/components/radio/code.md).

<component-questions />
