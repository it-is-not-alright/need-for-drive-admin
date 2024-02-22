import './style.scss';

import classNames from 'classnames';
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
  style,
}: CheckboxProps) {
  return (
    <div className={classNames('checkbox', style)}>
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
