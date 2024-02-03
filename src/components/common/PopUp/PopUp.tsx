import './style.scss';

import React from 'react';
import { createPortal } from 'react-dom';

import { PopUpProps } from './types';

function PopUp({ isDisplayed, children }: PopUpProps) {
  const rootElement = document.getElementById('root');

  if (!isDisplayed) {
    return null;
  }

  return createPortal(
    <div className="pop-up">
      <div className="pop-up__body">{children}</div>
    </div>,
    rootElement,
  );
}

export default PopUp;
