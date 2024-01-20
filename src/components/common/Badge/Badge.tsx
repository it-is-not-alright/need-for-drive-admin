import './style.scss';

import classNames from 'classnames';
import React from 'react';

import { BadgeProps } from './types';

function Badge({ value, type }: BadgeProps) {
  if (!value) {
    return null;
  }
  return <span className={classNames('badge', type)}>{value}</span>;
}

export default Badge;
