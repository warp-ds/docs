# Range slider - Frameworks
Range sliders allow users to adjust minimum and maximum numeric values within a given range.

<ComponentsStatus />

## React 19

<FrameworkTabs />

### Import

You can import the component like so:
```js
import { RangeSlider } from '@warp-ds/components/react/slider';
```

### Examples

#### Enabled
```jsx
export const RangedSimple = () => {
  const [value, setValue] = useState<[number, number]>([0, 100]);

  return (
    <div>
        <RangeSlider
          label="Pris"
          onChange={setValue}
          min={0}
          max={100}
          step={5}
          value={value}
          aria-label={['Fra kr', 'Til kr']}
          aria-valuetext={[`${value[0]} kr`, `${value[1]} kr`]}
        />
        <div className="w-slider__input">
          <TextField label="Min" value={value[0].toString()} onChange={(e) => setValue([+e.target.value, value[1]])} />
          <TextField label="Max" value={value[1].toString()} onChange={(e) => setValue([value[0], +e.target.value])} />
        </div>
    </div>
  );
};
```

#### Disabled

```jsx
export const DisabledRanged = () => {
  const [value, setValue] = useState<[number, number]>([1000000, 10000000]);

  return (
    <div>
        <RangeSlider
          label="Pris"
          disabled
          onChange={setValue}
          min={1000000}
          max={10000000}
          step={50000}
          value={value}
        />
        <div className="w-slider__input">
          <TextField
            label="Min"
            disabled
            value={value[0].toString()}
            onChange={(e) => setValue([+e.target.value, value[1]])}
          />
          <TextField
            label="Max"
            disabled
            value={value[1].toString()}
            onChange={(e) => setValue([value[0], +e.target.value])}
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
| label | ReactNode |  | Label for the range slider |
| value | [number, number] |  | The current values |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| max | number | 100 | The greatest value in the range of permitted values |
| min | number | 0 | The lowest value in the range of permitted values |
| step | number | 1 | Specifies the value granularity |
| showMarks | boolean | true | Whether to show marks on the slider |
| disabled | boolean | false | Whether the slider is disabled |
| className | string |  | Additional classes to include for the container |
| aria-label | [string, string] |  | String value for aria-label |
| aria-labelledby | [string, string] |  | Identifies the element that labels the slider |
| aria-valuetext | [string, string] |  | Human readable text alternative for the value |

#### Events

| Name | Description |
| --- | --- |
| onChange | (value: [number, number]) => void |
| onInput | (value: [number, number]) => void |