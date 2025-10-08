import { RegularSlider } from '@warp-ds/components/react/slider';
import { TextField } from '@warp-ds/react/components/textfield';
import React, { useState } from 'react';

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
        <TextField label="value" value={value.toString()} onChange={(e) => setValue(+e.target.value)} />
      </div>
    </div>
  );
}
