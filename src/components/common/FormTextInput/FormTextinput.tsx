import React from 'react';

import { isNotEmpty } from '~/src/utils/general';

import FormControlWrapper from '../FormControlWrapper/FormControlWrapper';
import TextInput from '../TextInput/TextInput';
import { FormTextInputProps } from './types';

function FormTextInput({
  id,
  value,
  onChange,
  isSecure,
  maxLength,
  autoComplete,
  label,
  error,
}: FormTextInputProps) {
  return (
    <FormControlWrapper id={id} label={label} error={error}>
      <TextInput
        id={id}
        value={value}
        onChange={onChange}
        isSecure={isSecure}
        isInvalid={isNotEmpty(error)}
        maxLength={maxLength}
        autoComplete={autoComplete}
      />
    </FormControlWrapper>
  );
}

export default FormTextInput;
