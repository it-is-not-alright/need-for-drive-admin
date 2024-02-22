import './style.scss';

import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../common/Icon/Icon';
import { SideBarItemProps } from './types';

function SideBarItem({ link, isActive }: SideBarItemProps) {
  const classes = classNames('side-bar__item', {
    'side-bar__item-active': isActive,
  });

  return (
    <Link to={link.route.path} className={classes}>
      <Icon id={link.iconId} />
      <p>{link.label}</p>
    </Link>
  );
}

export default SideBarItem;
