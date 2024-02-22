import React from 'react';

import { isNotEmpty } from '~/src/utils/general';

import FormControlWrapper from '../FormControlWrapper/FormControlWrapper';
import Select from '../Select/Select';
import { SelectItem } from '../Select/types';
import { FormSelectProps } from './types';

function FormSelect<T extends SelectItem>({
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
        isInvalid={isNotEmpty(error)}
      />
    </FormControlWrapper>
  );
}

export default FormSelect;
