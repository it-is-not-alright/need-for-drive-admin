import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import RouteUtil from '../App/route-util';
import Icon from '../common/Icon/Icon';
import { links } from './constants';
import SideBarItem from './SideBarItem/SideBarItem';

function SideBar() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const classes = classNames('side-bar', { 'side-bar-expanded': isExpanded });

  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={classes}>
      <button
        className="side-bar__toggle"
        type="button"
        onClick={handleToggleClick}
      >
        <div>
          <Icon id="logo" />
          <p className="police-blue">Need for drive</p>
        </div>
      </button>
      <div className="side-bar__menu">
        {links.map((link) => (
          <SideBarItem
            link={link}
            isActive={RouteUtil.isActive(link.route, location.pathname)}
            key={link.route.path}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
