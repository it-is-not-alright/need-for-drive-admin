import './style.scss';

import React from 'react';

import { FormControlWrapperProps } from './types';

function FormControlWrapper({
  id,
  label,
  error,
  children,
}: FormControlWrapperProps) {
  return (
    <div className="form-control-wrapper" id={`${id}-wrapper`}>
      {label && (
        <label htmlFor={id} className="form-control-wrapper__label">
          {label}
        </label>
      )}
      {children}
      {error !== undefined && (
        <p className="form-control-wrapper__error">{error}</p>
      )}
    </div>
  );
}

export default FormControlWrapper;
