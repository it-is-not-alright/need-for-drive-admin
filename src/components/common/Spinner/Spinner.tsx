import './style.scss';

import React from 'react';

import Dialog from '../Dialog/Dialog';
import { SpinnerProps } from './types';

function Spinner({ isDisplayed = true }: SpinnerProps) {
  return (
    <Dialog isDisplayed={isDisplayed}>
      <div className="spinner">
        <span className="spinner__kernel" />
      </div>
    </Dialog>
  );
}

export default Spinner;
