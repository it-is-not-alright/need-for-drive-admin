import './style.scss';

import React from 'react';

import Badge from '../../common/Badge/Badge';
import { BadgeType } from '../../common/Badge/types';
import Icon from '../../common/Icon/Icon';
import { NUM_OF_NOTIFICATIONS } from '../constants';

function NotificationButton() {
  return (
    <button
      className="notification-btn"
      type="button"
      aria-label="notification"
    >
      <div>
        <Icon id="notification" />
        <Badge value={NUM_OF_NOTIFICATIONS} type={BadgeType.Notification} />
      </div>
    </button>
  );
}

export default NotificationButton;
