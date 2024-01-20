import './style.scss';

import React from 'react';

import Dropdown from './Dropdown/Dropdown';
import NoticeButton from './NoticeButton/NoticeButton';
import SearchBar from './SearchBar/SearchBar';
import { HeaderProps } from './types';

function Header({ isDisplayed }: HeaderProps) {
  if (!isDisplayed) {
    return null;
  }

  return (
    <header>
      <SearchBar />
      <NoticeButton />
      <Dropdown />
    </header>
  );
}

export default Header;
