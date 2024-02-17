import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import RouteUtil from '../../route/util';
import { FooterProps } from './types';

function Footer({ isDisplayed }: FooterProps) {
  if (!isDisplayed) {
    return null;
  }
  return (
    <footer>
      <Link to={RouteUtil.main.path}>На главную</Link>
      <p>Copyright © 2020 SimbirSoft</p>
    </footer>
  );
}

const memoizedFooter = React.memo(Footer);

export default memoizedFooter;
