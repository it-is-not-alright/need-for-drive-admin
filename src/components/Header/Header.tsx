import './style.scss';

import React from 'react';

import Dropdown from './Dropdown/Dropdown';
import NotificationButton from './NotificationButton/NotificationButton';
import SearchBar from './SearchBar/SearchBar';
import { HeaderProps } from './types';

function Header({ isDisplayed }: HeaderProps) {
  if (!isDisplayed) {
    return null;
  }
  return (
    <header>
      <SearchBar />
      <NotificationButton />
      <Dropdown />
    </header>
  );
}

export default Header;
