# Slider - Frameworks

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range Slider](/components/range-slider/overview.md).

<ComponentsStatus />

## React 19

<FrameworkTabs />

### Import

You can import the component like so:

```js
import { RegularSlider } from "@warp-ds/components/react/slider";
```

### Examples

#### Enabled

```jsx
export default function RegularSimple() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <RegularSlider
        label="Pris"
        onChange={(value) => setValue(value)}
        min={0}
        max={100}
        step={10}
        value={value}
        showMarks={true}
      />
      <div className="w-slider__input">
        <TextField
          label="value"
          value={value.toString()}
          onChange={(e) => setValue(+e.target.value)}
        />
      </div>
    </div>
  );
}
```

#### Disabled

```jsx
export const DisabledRegular = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <RegularSlider
        label="Pris"
        disabled
        onChange={(value) => setValue(value)}
        min={0}
        max={100}
        step={10}
        value={value}
      />
      <div className="w-slider__input">
        <TextField
          label="value"
          disabled
          value={value.toString()}
          onChange={(e) => setValue(+e.target.value)}
        />
      </div>
    </div>
  );
};
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | ReactNode |  | Label for the slider |
| value | number |  | The current value |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| max | number | 100 | The greatest value in the range of permitted values |
| min | number | 0 | The lowest value in the range of permitted values |
| step | number | 1 | Specifies the value granularity |
| showMarks | boolean | true | Whether to show marks on the slider |
| disabled | boolean | false | Whether the slider is disabled |
| className | string |  | Additional classes to include for the container |
| aria-label | string |  | String value for aria-label |
| aria-labelledby | string |  | Identifies the element that labels the slider |
| aria-valuetext | string |  | Human readable text alternative for the value |

#### Events

| Name | Description |
| --- | --- |
| onChange | (value: number) => void |
| onInput | (value: number) => void |

<component-questions />