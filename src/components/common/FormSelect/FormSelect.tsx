import React from 'react';

import { ControlItem } from '../../types';
import FormControlWrapper from '../FormControlWrapper/FormControlWrapper';
import Select from '../Select/Select';
import { FormSelectProps } from './types';

function FormSelect<T extends ControlItem>({
  id,
  items,
  placeholder,
  selectedItem,
  onChange,
  label,
  error,
}: FormSelectProps<T>) {
  return (
    <FormControlWrapper id={id} label={label} error={error}>
      <Select
        id={id}
        items={items}
        placeholder={placeholder}
        selectedItem={selectedItem}
        onChange={onChange}
      />
    </FormControlWrapper>
  );
}

export default FormSelect;
