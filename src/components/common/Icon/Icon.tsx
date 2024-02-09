import './style.scss';

import React from 'react';

import Sprite from '~/assets/sprite.svg';

import { IconProps } from './types';

function Icon({ id, width, height, className }: IconProps) {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${Sprite}#${id}`} />
    </svg>
  );
}

export default Icon;
