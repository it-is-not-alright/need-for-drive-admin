import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';

import Icon from '../Icon/Icon';
import { TextInputProps } from './types';

function TextInput({
  title,
  isSecure = false,
  value,
  error,
  onChange,
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
          tabIndex={0}
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
      <p className="fs-1">{error}</p>
    </>
  );
}

export default TextInput;
