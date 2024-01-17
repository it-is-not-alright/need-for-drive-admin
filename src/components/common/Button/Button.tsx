import './style.scss';

import React from 'react';

import { ButtonProps, ButtonType } from './types';

function Button({ text, type = ButtonType.Primary, onClick }: ButtonProps) {
  return (
    <button type="button" className={type} onClick={onClick}>
      <p className="fs-1">{text}</p>
    </button>
  );
}

export default Button;
