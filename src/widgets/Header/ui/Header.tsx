import React from 'react';

import { Logo } from 'shared/ui';

import { InfoPanel } from './InfoPanel/InfoPanel';
import { NavMenu } from './NavMenu/NavMenu';
import { UserPanel } from './UserPanel/UserPanel';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__info">
        <InfoPanel />
      </div>
      <div className="container">
        <div className="header__menu">
          <div className="header__menu-item">
            <NavMenu />
          </div>
          <div className="header__menu-item">
            <Logo />
          </div>
          <div className="header__menu-item">
            <UserPanel />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
