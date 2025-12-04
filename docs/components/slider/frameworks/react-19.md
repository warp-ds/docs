# Slider

## React-19

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

<api-table type="react" component="SliderBeta" />