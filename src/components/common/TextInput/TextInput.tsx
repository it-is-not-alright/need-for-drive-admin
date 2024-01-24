import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';

import Icon from '../Icon/Icon';
import { TextInputProps } from './types';

function TextInput({
  title,
  value,
  error,
  onChange,
  isSecure = false,
  maxLength,
}: TextInputProps) {
  const [hidden, setHidden] = useState<boolean>(isSecure);

  const handleShowButtonClick = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <p className="fs-1 gray">{title}</p>
      <div className={classNames('text-input', { invalid: error })}>
        <input
          type={hidden ? 'password' : 'text'}
          className="police-blue"
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
        {isSecure && (
          <button
            type="button"
            onClick={handleShowButtonClick}
            aria-label="show-button"
          >
            <Icon id={hidden ? 'show' : 'hide'} width="20" height="16" />
          </button>
        )}
      </div>
      <p className="fs-1">{error}</p>
    </>
  );
}

export default TextInput;
