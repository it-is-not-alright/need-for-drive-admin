import './style.scss';

import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import AccountImage from '~/assets/images/account.png';
import { logOutRequest } from '~/src/redux/actions/auth';

import Badge from '../../common/Badge/Badge';
import { BadgeType } from '../../common/Badge/types';
import Icon from '../../common/Icon/Icon';
import { NUM_OF_NOTIFICATIONS } from '../constants';

function Dropdown() {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement>();
  const classList = classNames('dropdown', { 'dropdown-expanded': isExpanded });

  const handleToggleClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
      return;
    }
    setIsExpanded(true);
    const collapse = (event: MouseEvent) => {
      const { target } = event;
      if (
        dropdown.current === null ||
        !(target instanceof Node) ||
        !dropdown.current.contains(target)
      ) {
        setIsExpanded(false);
        window.removeEventListener('click', collapse);
      }
    };
    window.addEventListener('click', collapse);
  };

  const handleLogOutItemClick = () => {
    dispatch(logOutRequest());
  };

  return (
    <div className={classList} ref={dropdown}>
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
          <p className="gray">Admin</p>
          <Icon id="arrow-down" />
        </div>
      </button>
      <div className="dropdown__menu">
        <button type="button" className="dropdown__item fs-1">
          Уведомления
          <Badge value={NUM_OF_NOTIFICATIONS} type={BadgeType.Pill} />
        </button>
        <button
          type="button"
          className="dropdown__item fs-1"
          onClick={handleLogOutItemClick}
        >
          Выход
        </button>
      </div>
    </div>
  );
}

export default Dropdown;
