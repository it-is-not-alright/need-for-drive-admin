import './style.scss';

import classNames from 'classnames';
import React from 'react';

import Checkbox from './Checkbox/Checkbox';
import { CheckboxStyle } from './Checkbox/types';
import { CheckboxGroupProps } from './types';

function CheckboxGroup({
  name,
  map,
  onChange,
  isDisabled = false,
  style = CheckboxStyle.Blue,
}: CheckboxGroupProps) {
  const classes = classNames('checkbox-group', {
    'checkbox-group-disabled': isDisabled,
  });

  return (
    <div className={classes}>
      {Object.keys(map).map((key) => (
        <Checkbox
          id={`${name}-${key}`}
          name={name}
          label={map[key].label}
          checked={map[key].checked}
          key={key}
          onChange={(event) => onChange(key, event)}
          isDisabled={isDisabled}
          style={style}
        />
      ))}
    </div>
  );
}

export default CheckboxGroup;
