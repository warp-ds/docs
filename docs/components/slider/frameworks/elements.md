# Slider - Frameworks

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](/components/range-slider/overview.md).

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Usage notes

The Slider component consists of two custom elements that work together:

- `<w-slider>` - A container that creates a `<fieldset>` and coordinates shared state and attributes.
- `<w-slider-thumb>` - The `<input type="range">`, tooltip and text field.

### Example

<style-isolate>
   <w-slider label="Volume" min="0" max="100">
    <w-slider-thumb name="volume"></w-slider-thumb>
  </w-slider>
</style-isolate>

```html
<form id="audio">
  <w-slider label="Volume" min="0" max="100">
    <w-slider-thumb name="volume"></w-slider-thumb>
  </w-slider>
</form>
<script>
  document.forms["audio"].addEventListener("input", function () {
    const formData = new FormData(this);
    const value = formData.get("volume");
  });
</script>
```

### Props - w-slider

#### Optional attributes

These attributes can be set in HTML or as [attribute expressions in Lit](https://lit.dev/docs/templates/expressions/#attribute-expressions).

| Name             | Type    | Default | Description                                                                                                  |
| ---------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| label            | string  |         | **NB**: You must either use this prop or the `label` slot (`<legend slot="label">Production year</legend>`). |
| min              | number  | 0       | The minimum allowed value in the range inputs.                                                               |
| max              | number  | 100     | The maximum allowed value in the range inputs.                                                               |
| suffix           | string  |         | Shows a suffix in the tooltip and text inputs.                                                               |
| help-text        | string  |         | Additional description to show below the fieldset.                                                           |
| invalid          | boolean | false   | Sets the form fields and fieldset in an invalid state.                                                       |
| required         | boolean | false   | Whether a value is required or not. In practice a range input will always produce a value.                   |
| error            | string  |         | Validation error text, if any.                                                                               |
| open-ended       | boolean | false   | Whether the slider's text field allow values outside the minimum and maximum of the range input.             |
| step             | number  |         | Sets step on the range input to jump between values when dragging.                                           |
| hidden-textfield | boolean | false   | See usage notes about exceptions.                                                                            |
| disabled         | boolean | false   | See usage notes about disabled form fields.                                                                  |

#### Optional properties

These properties can be set using JavaScript or [property expressions in Lit](https://lit.dev/docs/templates/expressions/#property-expressions).

| Name           | Type                                         | Default | Description                                                              |
| -------------- | -------------------------------------------- | ------- | ------------------------------------------------------------------------ |
| valueFormatter | (value: string, slot: SliderSlot) => string; |         | Function that lets you format the output in tooltips and the textfields. |
| labelFormatter | (slot: SliderSlot) => string;                |         | Function that lets you format the range labels.                          |

### Props - w-slider-thumb

#### Required attributes

These attributes can be set in HTML or as [attribute expressions in Lit](https://lit.dev/docs/templates/expressions/#attribute-expressions).

| Name | Type   | Description                                                                                    |
| ---- | ------ | ---------------------------------------------------------------------------------------------- |
| name | string | The name of this input field in the form. The canonical source of the value is the text field. |

#### Optional attributes

These attributes can be set in HTML or as [attribute expressions in Lit](https://lit.dev/docs/templates/expressions/#attribute-expressions).

| Name             | Type   | Default                                | Description                                                           |
| ---------------- | ------ | -------------------------------------- | --------------------------------------------------------------------- |
| aria-label       | string | The `label` attribute from `w-slider`. | Label for the range input.                                            |
| aria-description | string |                                        | Contextual information for assistive technology, should it be needed. |
| value            | string |                                        | The initial value, if any.                                            |
| placeholder      | string |                                        | Placeholder in empty text fields.                                     |
