import './style.scss';

import React from 'react';

import Icon from '../../Icon/Icon';
import { CheckboxProps } from './types';

function Checkbox({
  id,
  name,
  label,
  checked,
  onChange,
  isReadOnly,
}: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        readOnly={isReadOnly}
      />
      <div className="checkbox__checkmark">
        <Icon id="check" />
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
