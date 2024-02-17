import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { ButtonProps, ButtonStyle } from './types';

function Button({
  text,
  onClick,
  style: type = ButtonStyle.Primary,
  pending = false,
  isDisabled = false,
}: ButtonProps) {
  const classes = classNames('simple-btn', type, {
    'simple-btn-pending': pending,
  });

  const handleClick = () => {
    if (!pending) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={classes}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
