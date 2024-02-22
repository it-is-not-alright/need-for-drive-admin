import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AccountImage from '~/assets/images/account.png';
import { requestLogOut } from '~/src/redux/auth/actions';

import Badge from '../../common/Badge/Badge';
import { BadgeType } from '../../common/Badge/types';
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';
import Icon from '../../common/Icon/Icon';
import useClickAway from '../../hooks/use-click-away';
import { NUM_OF_NOTIFICATIONS } from '../constants';

function Dropdown() {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  const classes = classNames('dropdown', { 'dropdown-expanded': isExpanded });
  useClickAway('.dropdown__toggle', () => setIsExpanded(false));

  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogOutItemClick = () => {
    setModalIsDisplayed(true);
  };

  const handleModalConfirm = (confirmed: boolean) => {
    if (confirmed) {
      dispatch(requestLogOut());
    }
    setModalIsDisplayed(false);
  };

  return (
    <div className={classes}>
      <button
        className="dropdown__toggle"
        type="button"
        onClick={handleToggleClick}
      >
        <div className="dropdown__img-wrapper">
          <img src={AccountImage} alt="account" />
          <Badge value={NUM_OF_NOTIFICATIONS} type={BadgeType.Notification} />
        </div>
        <div className="dropdown__additional-content">
          <p>Admin</p>
          <Icon id="arrow-down" />
        </div>
      </button>
      <div className="dropdown__menu">
        <button type="button" className="dropdown__item">
          Уведомления
          <Badge value={NUM_OF_NOTIFICATIONS} type={BadgeType.Pill} />
        </button>
        <button
          type="button"
          className="dropdown__item"
          onClick={handleLogOutItemClick}
        >
          Выход
        </button>
      </div>
      <ConfirmationModal
        title="Выход"
        message="Вы действительно хотите выйти?"
        confirmLabel="Выйти"
        cancelLabel="Остаться"
        isDisplayed={modalIsDisplayed}
        onResponse={handleModalConfirm}
      />
    </div>
  );
}

export default Dropdown;
