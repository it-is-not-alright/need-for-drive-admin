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
  const select = useRef<HTMLDivElement>();
  const classes = classNames('select', { 'select-expanded': isExpanded });

  const handleToggleClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
      return;
    }
    setIsExpanded(true);
    const collapse = (event: MouseEvent) => {
      const { target } = event;
      if (
        select.current === null ||
        !(target instanceof Node) ||
        !select.current.contains(target)
      ) {
        setIsExpanded(false);
        window.removeEventListener('click', collapse);
      }
    };
    window.addEventListener('click', collapse);
  };

  const handleItemClick = (item: T) => {
    onChange(item);
  };

  return (
    <div className={classes} ref={select}>
      <button
        type="button"
        className="select__toggle"
        onClick={handleToggleClick}
      >
        <p>{selectedItem?.label ?? placeholder}</p>
        <Icon id="select" />
      </button>
      <div className="select__menu">
        {items.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={classNames('select__item', {
              'select__item-active': item.id === selectedItem?.id,
            })}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export { Select };
