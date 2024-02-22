import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { NumberInputProps } from './types';

function NumberInput({
  id,
  unit,
  value,
  onChange,
  max = Infinity,
  isInvalid = false,
}: NumberInputProps) {
  const classes = classNames('number-input', {
    'number-input-invalid': isInvalid,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(event.target.value, 10);
    if (Number.isNaN(newValue)) {
      onChange(null);
    } else if (newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={classes}>
      <input
        id={id}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value ?? ''}
        onChange={handleChange}
      />
      <span>{unit}</span>
    </div>
  );
}

export default NumberInput;
