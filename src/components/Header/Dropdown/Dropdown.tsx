import './style.scss';

import React from 'react';

import AccountImage from '~/assets/images/account.png';

import Badge from '../../common/Badge/Badge';
import { NOTICE_QUANTITY } from '../constants';

function Dropdown() {
  return (
    <button className="dropdown" type="button">
      <div className="dropdown__img-wrapper">
        <img src={AccountImage} alt="account" />
        <Badge value={NOTICE_QUANTITY} />
      </div>
      <p className="gray">Admin</p>
    </button>
  );
}

export default Dropdown;
