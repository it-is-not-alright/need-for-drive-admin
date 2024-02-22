import React from 'react';

import { isNotEmpty } from '~/src/utils/general';

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
        isInvalid={isNotEmpty(error)}
      />
    </FormControlWrapper>
  );
}

export default FormNumberInput;
