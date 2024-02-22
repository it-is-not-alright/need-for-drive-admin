import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';

import Icon from '../Icon/Icon';
import { TextInputProps } from './types';

function TextInput({
  id,
  value,
  onChange,
  isSecure = false,
  isInvalid = false,
  maxLength,
  autoComplete = 'off',
}: TextInputProps) {
  const [hidden, setHidden] = useState<boolean>(isSecure);
  const classes = classNames('text-input', {
    'text-input-invalid': isInvalid,
  });

  const handleShowButtonClick = () => {
    setHidden(!hidden);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={classes}>
      <input
        id={id}
        type={hidden ? 'password' : 'text'}
        value={value}
        onChange={(event) => handleChange(event)}
        maxLength={maxLength}
        autoComplete={autoComplete}
      />
      {isSecure && (
        <button
          type="button"
          onClick={handleShowButtonClick}
          aria-label="show-button"
        >
          <Icon id={hidden ? 'show' : 'hide'} />
        </button>
      )}
    </div>
  );
}

export default TextInput;
