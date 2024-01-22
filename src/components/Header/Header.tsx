import './style.scss';

import React from 'react';

import Dropdown from './Dropdown/Dropdown';
import NotificationButton from './NotificationButton/NotificationButton';
import SearchBar from './SearchBar/SearchBar';

function Header() {
  return (
    <header>
      <SearchBar />
      <NotificationButton />
      <Dropdown />
    </header>
  );
}

export default Header;
