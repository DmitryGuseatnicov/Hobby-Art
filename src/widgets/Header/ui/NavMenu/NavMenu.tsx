import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavMenu.scss';

const NavMenu = () => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__item">
        <NavLink className="nav-menu__link" to="/catalog">
          Каталог
        </NavLink>
      </div>
      <div className="nav-menu__item">
        <NavLink to="/delivery-info" className="nav-menu__link">
          Оплата и доставка
        </NavLink>
      </div>
      <div className="nav-menu__item">
        <NavLink to="/bonus-program" className="nav-menu__link">
          Бонусная программа
        </NavLink>
      </div>
      <div className="nav-menu__item">
        <NavLink to="/about" className="nav-menu__link">
          О компании
        </NavLink>
      </div>
      <div className="nav-menu__item">
        <NavLink to="/refund" className="nav-menu__link">
          Гарантия и возврат
        </NavLink>
      </div>
    </div>
  );
};

export { NavMenu };
