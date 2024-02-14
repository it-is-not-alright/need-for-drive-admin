// eslint-disable-next-line simple-import-sort/imports
import './style.scss';

import React from 'react';
import { ProgressBarProps } from './types';

function ProgressBar({ percent }: ProgressBarProps) {
  const value = `${percent}%`;
  return (
    <div className="progress-bar">
      <p className="progress-bar__label">Заполнено</p>
      <p className="progress-bar__percent">{value}</p>
      <div className="progress-bar__row">
        <div className="progress-bar__indicator" style={{ width: value }} />
      </div>
    </div>
  );
}

export default ProgressBar;
