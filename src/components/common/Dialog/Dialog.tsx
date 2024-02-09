import './style.scss';

import React from 'react';
import { createPortal } from 'react-dom';

import { DialogProps } from './types';

function Dialog({ isDisplayed = true, children }: DialogProps) {
  const rootElement = document.getElementById('root');

  if (!isDisplayed) {
    return null;
  }

  return createPortal(<div className="dialog">{children}</div>, rootElement);
}

export default Dialog;
