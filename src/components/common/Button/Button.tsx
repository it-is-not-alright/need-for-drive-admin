import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { ButtonProps, ButtonType } from './types';

function Button({
  text,
  onClick,
  type = ButtonType.Primary,
  pending = false,
  isDisabled = false,
}: ButtonProps) {
  const classList = classNames('simple-btn', type, { pending });

  const handleClick = () => {
    if (!pending) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={classList}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
