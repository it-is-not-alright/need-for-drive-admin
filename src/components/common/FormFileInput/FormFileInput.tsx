import React from 'react';

import { isNotEmpty } from '~/src/utils/general';

import FileInput from '../FileInput/FileInput';
import FormControlWrapper from '../FormControlWrapper/FormControlWrapper';
import { FormFileInputProps } from './types';

function FormFileInput({
  id,
  placeholder,
  accept,
  file,
  pending,
  onChange,
  label,
  error,
}: FormFileInputProps) {
  return (
    <FormControlWrapper id={id} label={label} error={error}>
      <FileInput
        id={id}
        placeholder={placeholder}
        accept={accept}
        file={file}
        pending={pending}
        onChange={onChange}
        isInvalid={isNotEmpty(error)}
      />
    </FormControlWrapper>
  );
}

export default FormFileInput;
