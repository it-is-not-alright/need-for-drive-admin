import './style.scss';

import React, { useRef } from 'react';

import Icon from '../../common/Icon/Icon';

function SearchBar() {
  const input = useRef<HTMLInputElement>();

  const handleClick = () => {
    input.current.focus();
  };

  return (
    <button
      className="search-bar"
      onClick={handleClick}
      type="button"
      aria-label="search"
    >
      <Icon id="search" />
      <input placeholder="Поиск..." ref={input} />
    </button>
  );
}

export default SearchBar;
