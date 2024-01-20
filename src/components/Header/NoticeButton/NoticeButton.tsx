import './style.scss';

import React from 'react';

import Badge from '../../common/Badge/Badge';
import Icon from '../../common/Icon/Icon';
import { NOTICE_QUANTITY } from '../constants';

function NoticeButton() {
  return (
    <button className="notice-btn" type="button" aria-label="notice">
      <div>
        <Icon id="notice" />
        <Badge value={NOTICE_QUANTITY} />
      </div>
    </button>
  );
}

export default NoticeButton;
