import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { PaginationItemProps } from './types';

function PaginationItem({
  value,
  isActive = false,
  isDisplayed = true,
  onClick,
}: PaginationItemProps) {
  const classes = classNames('pagination-item', {
    'pagination-item-active': isActive,
  });

  const handleClick = () => {
    onClick?.();
  };

  if (!isDisplayed) {
    return null;
  }

  return (
    <button type="button" className={classes} onClick={handleClick}>
      {value}
    </button>
  );
}

export { PaginationItem };
