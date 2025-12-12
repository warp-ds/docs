# Checkbox

## Web

<ThemeSwitcher />

### Variants

#### Default

<style-isolate>
<w-checkbox name="foobar" value="foo">Check me</w-checkbox>
</style-isolate>

```html
<w-checkbox name="foobar" value="foo">Check me</w-checkbox>
```

#### Invalid

<style-isolate>
<w-checkbox name="invalidfoo" value="bar" invalid="">Invalid checkbox</w-checkbox>
</style-isolate>

```html
<w-checkbox name="invalidfoo" value="bar" invalid="">Invalid checkbox</w-checkbox>
```

#### Disabled

<style-isolate>
<w-checkbox name="disabledfoo" value="bar" disabled="">Disabled checkbox</w-checkbox>
</style-isolate>

```html
<w-checkbox name="disabledfoo" value="bar" disabled="">Disabled checkbox</w-checkbox>
```

#### Bunch Of Checkboxes

<style-isolate>
<w-checkbox-group>
  <w-checkbox name="group" value="foo">Foo</w-checkbox>
  <w-checkbox name="group" value="bar">Bar</w-checkbox>
</w-checkbox-group>
</style-isolate>

```html
<w-checkbox-group>
  <w-checkbox name="group" value="foo">Foo</w-checkbox>
  <w-checkbox name="group" value="bar">Bar</w-checkbox>
</w-checkbox-group>
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string | "" | The name of the checkbox, submitted as a name/value pair with form data. |
| value | string | null | The value of the checkbox, submitted as a name/value pair with form data. |


