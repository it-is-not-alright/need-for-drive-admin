import './style.scss';

import classNames from 'classnames';
import React from 'react';

import Checkbox from './Checkbox/Checkbox';
import { CheckboxGroupProps } from './types';

function CheckboxGroup({
  name,
  map,
  onChange,
  isDisabled = false,
}: CheckboxGroupProps) {
  const classes = classNames('checkbox-group', {
    'checkbox-group-readonly': isDisabled,
  });

  const handleChange = (key: string, checked: boolean) => {
    onChange({ ...map, [key]: { ...map[key], checked } });
  };

  return (
    <div className={classes}>
      {Object.keys(map).map((key) => (
        <Checkbox
          id={`${name}-${key}`}
          name={name}
          label={map[key].label}
          checked={map[key].checked}
          key={key}
          onChange={(checked) => handleChange(key, checked)}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
}

export default CheckboxGroup;
