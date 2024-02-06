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
  isDisabled,
}: CheckboxProps) {
  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={isDisabled}
      />
      <div className="checkbox__checkmark">
        <Icon id="check" />
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
