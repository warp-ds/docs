import { RangeSlider } from '@warp-ds/components/react/slider';
import { TextField } from '@warp-ds/react/components/textfield';
import React, { useState } from 'react';

export default function RangedSimple() {
  const [value, setValue] = useState([0, 100]);

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
}
