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

<api-table type="react" component="RangeSlider" />