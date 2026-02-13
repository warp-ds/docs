# Range slider - Frameworks

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](/components/slider/overview.md).

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Usage notes

The Range slider component consists of two custom elements that work together:

- `<w-slider>` - A container that creates a `<fieldset>` and coordinates shared state and attributes.
- `<w-slider-thumb>` - The `<input type="range">`, tooltip and text field for each slider in the range (from and to values).

### Example

<style-isolate>
  <w-slider
    label="Production year"
    min="1950"
    max="2025"
    open-ended
  >
    <w-slider-thumb slot="from" name="from-year"></w-slider-thumb>
    <w-slider-thumb slot="to" name="to-year"></w-slider-thumb>
  </w-slider>
</style-isolate>

```html
<form id="openended">
  <w-slider label="Production year" min="1950" max="2025" open-ended>
    <w-slider-thumb slot="from" name="from-year"></w-slider-thumb>
    <w-slider-thumb slot="to" name="to-year"></w-slider-thumb>
  </w-slider>
</form>
<script>
  const openEndedSlider = document.querySelector("w-slider");

  openEndedSlider.labelFormatter = function (slot) {
    if (slot === "from") {
      return "Before 1950";
    }
    return "2025+";
  };
  openEndedSlider.valueFormatter = function (value, slot) {
    if (slot === "from" && value === "") {
      return "Min";
    }
    if (slot === "to" && value === "") {
      return "Max";
    }
    return value;
  };

  document.forms["openended"].addEventListener("input", function () {
    const formData = new FormData(this);
    const from = formData.get("from-year");
    const to = formData.get("to-year");
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
| open-ended       | boolean | false   | Whether the range slider's text fields allow values outside the minimum and maximum of the range input.      |
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

| Name | Type         | Description                                                                                                                                 |
| ---- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| name | string       | The name of this input field in the form. The canonical source of the value is the text field.                                              |
| slot | "from", "to" | To layout the two slider thumbs correctly you must set the `slot` attribute to `"from"` and `"to"` for the from and to values respectively. |

#### Optional attributes

These attributes can be set in HTML or as [attribute expressions in Lit](https://lit.dev/docs/templates/expressions/#attribute-expressions).

| Name             | Type   | Default | Description                                                                                                       |
| ---------------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------------- |
| aria-label       | string |         | In range sliders we recommend you set this yourself. Default labels are there as a fallback, set by `<w-slider>`. |
| aria-description | string |         | Contextual information for assistive technology, should it be needed.                                             |
| value            | string |         | The initial value, if any.                                                                                        |
| placeholder      | string |         | Placeholder in empty text fields.                                                                                 |
