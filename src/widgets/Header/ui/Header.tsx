import React from 'react';

import InfoPanel from './InfoPanel/InfoPanel';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__info">
        <InfoPanel />
      </div>
      <div className="container">
        <div className="header__menu">
          <div className="header__menu-item">NavMenu</div>
          <div className="header__menu-item">LOgo</div>
          <div className="header__menu-item">UserPanel</div>
        </div>
      </div>
    </header>
  );
};

export { Header };
