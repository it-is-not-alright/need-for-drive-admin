import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';

import Icon from '../Icon/Icon';
import { TextInputProps } from './types';

function TextInput({
  id,
  title,
  value,
  error,
  onChange,
  isSecure = false,
  maxLength,
  autoComplete = 'off',
}: TextInputProps) {
  const [hidden, setHidden] = useState<boolean>(isSecure);

  const handleShowButtonClick = () => {
    setHidden(!hidden);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label className="gray" htmlFor={id}>
        {title}
      </label>
      <div className={classNames('text-input', { invalid: error })}>
        <input
          id={id}
          type={hidden ? 'password' : 'text'}
          className="police-blue"
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
      <p>{error}</p>
    </>
  );
}

export default TextInput;
