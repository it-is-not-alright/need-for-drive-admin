import './style.scss';

import React from 'react';

import Icon from '../Icon/Icon';
import { ButtonGroupProps } from './types';

function ButtonGroup({ items }: ButtonGroupProps) {
  return (
    <div className="button-group">
      {items.map((item) => (
        <button key={item.text} type="button">
          <Icon id={item.iconId} className={item.iconClass} />
          {item.text}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
