import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { ButtonProps, ButtonType } from './types';

function Button({
  text,
  onClick,
  type = ButtonType.Primary,
  pending = false,
}: ButtonProps) {
  const classList = classNames(type, { pending });

  const handleClick = () => {
    if (!pending) {
      onClick();
    }
  };

  return (
    <button type="button" className={classList} onClick={handleClick}>
      <p className="fs-1">{text}</p>
    </button>
  );
}

export default Button;
