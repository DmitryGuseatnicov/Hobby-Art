import React from 'react';

import { Link } from 'react-router-dom';
import './Logo.scss';

const logo = require('./img/Logo.png');

const Logo = () => (
  <div className="logo">
    <Link to="/" className="logo-link">
      <img src={logo} alt="" className="logo__img" />
    </Link>
  </div>
);

export { Logo };
