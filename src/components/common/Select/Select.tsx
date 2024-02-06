import './style.scss';

import classNames from 'classnames';
import React, { useRef, useState } from 'react';

import { ControlItem } from '../../types';
import Icon from '../Icon/Icon';
import { SelectProps } from './types';

function Select<T extends ControlItem>({
  items,
  placeholder,
  selectedItem,
  onChange,
}: SelectProps<T>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleButton = useRef<HTMLButtonElement>();
  const classes = classNames('select', {
    'select-expanded': isExpanded,
    'select-filled': selectedItem,
  });

  const collapse = (event: MouseEvent) => {
    const { target } = event;
    if (
      toggleButton.current === null ||
      !(target instanceof Node) ||
      !toggleButton.current.contains(target)
    ) {
      setIsExpanded(false);
      window.removeEventListener('click', collapse);
    }
  };

  const handleToggleClick = () => {
    if (isExpanded) {
      return;
    }
    setIsExpanded(true);
    window.addEventListener('click', collapse);
  };

  const handleChange = (item: T) => {
    onChange(item);
  };

  return (
    <div className={classes}>
      <button
        ref={toggleButton}
        type="button"
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
            const handleClick = () => handleChange(item);
            return (
              <li
                key={item.id}
                tabIndex={0}
                role="option"
                onClick={handleClick}
                onKeyDown={handleClick}
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
