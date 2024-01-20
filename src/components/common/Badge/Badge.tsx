import './style.scss';

import React from 'react';

import BadgeProps from './types';

function Badge({ value }: BadgeProps) {
  return <span className="badge">{value}</span>;
}

export default Badge;
