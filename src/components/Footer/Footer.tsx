import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import RouteUtil from '../App/route-util';

function Footer() {
  return (
    <footer>
      <Link to={RouteUtil.main.path}>На главную</Link>
      <p>Copyright © 2020 SimbirSoft</p>
    </footer>
  );
}

export default Footer;
