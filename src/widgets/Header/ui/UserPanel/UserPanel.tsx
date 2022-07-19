import React from 'react';

import { CartLink } from 'features/shopping';
import { FavoritesLink } from 'features/favorites';
import { AuthPanel } from 'features/auth';
import { Input } from 'shared/ui';
import './UserPanel.scss';

const UserPanel = () => {
  return (
    <div className="user-panel">
      <div className="user-panel__item">
        <Input type="text" />
      </div>
      <div className="user-panel__item">
        <AuthPanel />
      </div>
      <div className="user-panel__item">
        <FavoritesLink />
      </div>
      <div className="user-panel__item">
        <CartLink />
      </div>
    </div>
  );
};

export { UserPanel };
