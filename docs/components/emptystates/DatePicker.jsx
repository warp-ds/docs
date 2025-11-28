import { DatePicker } from '@warp-ds/components/react/datepicker';
import { isBefore, startOfDay } from 'date-fns';
import React from 'react';

export default function DatePickerExample() {
  const [value, setValue] = React.useState('');

  const isDayDisabled = (day) => {
    return isBefore(startOfDay(day), startOfDay(new Date()));
  };

  return <DatePicker value={value} label="Dato" onChange={setValue} isDayDisabled={isDayDisabled} />;
}
