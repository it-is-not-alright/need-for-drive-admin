import './style.scss';

import React from 'react';

import Button from '../Button/Button';
import { ButtonType } from '../Button/types';
import Dialog from '../Dialog/Dialog';
import Icon from '../Icon/Icon';
import { ConfirmationModalProps } from './types';

function ConfirmationModal({
  title,
  message,
  confirmLabel,
  cancelLabel,
  isDisplayed,
  onResponse,
}: ConfirmationModalProps) {
  const handleCancelButtonClick = () => {
    onResponse(false);
  };

  const handleConfirmButtonClick = () => {
    onResponse(true);
  };

  return (
    <Dialog isDisplayed={isDisplayed}>
      <div className="confirmation-modal">
        <div className="confirmation-modal__header">
          <h2 className="title">{title}</h2>
          <button
            type="button"
            aria-label="cancel"
            onClick={handleCancelButtonClick}
          >
            <Icon id="cancel" />
          </button>
        </div>
        <div className="confirmation-modal__main">
          <p>{message}</p>
        </div>
        <div className="confirmation-modal__footer">
          <Button text={cancelLabel} onClick={handleCancelButtonClick} />
          <Button
            text={confirmLabel}
            onClick={handleConfirmButtonClick}
            type={ButtonType.Danger}
          />
        </div>
      </div>
    </Dialog>
  );
}

export default ConfirmationModal;
