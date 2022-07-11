import React, { FC, useState } from 'react';

import { userModel } from 'entities/user';
import { Button, Popup } from 'shared/ui';

import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';

const AuthPanel: FC = () => {
  const isAuth = userModel.useAuth();
  const { name } = userModel.useUser();

  const [modals, setModals] = useState({
    login: false,
    register: false
  });

  const openLogin = () => {
    setModals({ login: true, register: false });
  };

  const openRegister = () => {
    setModals({ login: false, register: true });
  };

  const close = () => {
    setModals({ login: false, register: false });
  };

  const modalHandler = {
    openLogin,
    openRegister,
    close
  };

  if (isAuth && (modals.login || modals.register)) close();

  return (
    <>
      {isAuth ? (
        <Button modification="with-icon" height="short" icon="entry" link="/personal-area">
          {name}
        </Button>
      ) : (
        <Button
          modification="with-icon"
          height="short"
          icon="entry"
          onClick={modalHandler.openLogin}>
          Войти
        </Button>
      )}
      <Popup isVisible={!!(modals.login || modals.register)}>
        {(modals.login && <LoginForm modalHandler={modalHandler} />) ||
          (modals.register && <RegisterForm modalHandler={modalHandler} />)}
      </Popup>
    </>
  );
};

export { AuthPanel };
