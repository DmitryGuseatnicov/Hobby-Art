import React from 'react';
import { Button, Input, Popup } from 'shared/ui';

import './UserPanel.scss';

const UserPanel = () => {
  return (
    <div className="user-panel">
      <div className="user-panel__item">
        <Input type="text" />
      </div>
      <div className="user-panel__item">
        <Button modification="with-icon" height="short" icon="entry">
          Войти
        </Button>
      </div>
      <div className="user-panel__item">
        <Button modification="with-icon" height="short" icon="favorites">
          Избраное
        </Button>
      </div>
      <div className="user-panel__item">
        <Button modification="with-icon" height="short" icon="basket">
          Корзна
        </Button>
      </div>
      <Popup>
        <div>qwewewewq</div>
      </Popup>
    </div>
  );
};

export { UserPanel };
