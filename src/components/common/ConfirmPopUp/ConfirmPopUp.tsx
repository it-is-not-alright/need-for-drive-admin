import './style.scss';

import React from 'react';

import Button from '../Button/Button';
import { ButtonType } from '../Button/types';
import PopUp from '../PopUp/PopUp';
import { ConfirmPopUpProps } from './types';

function ConfirmPopUp({ isDisplayed, onResponse }: ConfirmPopUpProps) {
  const handleCancelButtonClick = () => {
    onResponse(false);
  };

  const handleConfirmButtonClick = () => {
    onResponse(true);
  };

  return (
    <PopUp isDisplayed={isDisplayed}>
      <p>dfdfd</p>
      <div className="pop-up__footer">
        <Button text="Отмена" onClick={handleCancelButtonClick} />
        <Button
          text="Подтвердить"
          onClick={handleConfirmButtonClick}
          type={ButtonType.Danger}
        />
      </div>
    </PopUp>
  );
}

export default ConfirmPopUp;
