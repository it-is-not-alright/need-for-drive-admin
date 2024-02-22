import './style.scss';

import React from 'react';
import { createPortal } from 'react-dom';

import Icon from '../Icon/Icon';
import { SuccessPopUpProps } from './types';

function SuccessPopUp({ message, isDisplayed, onHide }: SuccessPopUpProps) {
  const rootElement = document.getElementById('root');

  if (!isDisplayed) {
    return null;
  }

  return createPortal(
    <div className="success-pop-up">
      <div className="success-pop-up__main">
        <Icon id="check" />
        <p>{message}</p>
      </div>
      <button type="button" aria-label="cancel" onClick={onHide}>
        <Icon id="cancel" />
      </button>
    </div>,
    rootElement,
  );
}

export default SuccessPopUp;
