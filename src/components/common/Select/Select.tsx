import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';

import useClickAway from '../../hooks/use-click-away';
import { ControlItem } from '../../types';
import Icon from '../Icon/Icon';
import { SelectProps } from './types';

function Select<T extends ControlItem>({
  id,
  items,
  placeholder,
  selectedItem,
  onChange,
}: SelectProps<T>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const classes = classNames('select', {
    'select-expanded': isExpanded,
    'select-filled': selectedItem,
  });
  useClickAway(`#${id}`, () => setIsExpanded(false));

  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (item: T) => {
    onChange(item);
  };

  return (
    <div className={classes}>
      <button
        type="button"
        id={id}
        className="select__toggle"
        onClick={handleToggleClick}
      >
        <p>{selectedItem?.label ?? placeholder}</p>
        <Icon id="select" />
      </button>
      <div className="select__menu">
        <button
          type="button"
          className="select__clear-button"
          onClick={() => handleChange(null)}
        >
          Очистить
        </button>
        <ul className="select__list">
          {items.map((item) => {
            const isSelected = item.id === selectedItem?.id;
            return (
              <li
                key={item.id}
                tabIndex={0}
                role="option"
                onClick={() => handleChange(item)}
                onKeyDown={() => handleChange(item)}
                aria-selected={isSelected ? 'true' : 'false'}
                className={classNames('select__option', {
                  'select__option-selected': isSelected,
                })}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Select;
