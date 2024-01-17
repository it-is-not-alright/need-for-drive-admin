import './style.scss';

import React from 'react';

import Sprite from '~/assets/sprite.svg';

import { IconProps } from './types';

function Icon({ id, width, height }: IconProps) {
  return (
    <svg width={width} height={height}>
      <use href={`${Sprite}#${id}`} />
    </svg>
  );
}

export default Icon;
