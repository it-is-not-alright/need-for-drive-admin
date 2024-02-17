import React from 'react';

import FormControlWrapper from '../FormControlWrapper/FormControlWrapper';
import NumberInput from '../NumberInput/NumberInput';
import { FormNumberInputProps } from './types';

function FormNumberInput({
  id,
  unit,
  value,
  onChange,
  max,
  label,
  error,
}: FormNumberInputProps) {
  return (
    <FormControlWrapper id={id} label={label} error={error}>
      <NumberInput
        id={id}
        unit={unit}
        value={value}
        onChange={onChange}
        max={max}
      />
    </FormControlWrapper>
  );
}

export default FormNumberInput;
