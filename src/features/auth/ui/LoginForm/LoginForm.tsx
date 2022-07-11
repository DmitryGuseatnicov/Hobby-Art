import React, { FC } from 'react';

import { Button, Icon, Input, Title } from 'shared/ui';

import './LoginForm.scss';

type ModalHandler = {
  close: () => void;
  openRegister: () => void;
};

interface ILoginForm {
  modalHandler: ModalHandler;
}

const LoginForm: FC<ILoginForm> = (props) => {
  const { modalHandler } = props;

  return (
    <form className="login-form">
      <button type="button" className="login-form__close" onClick={modalHandler.close}>
        <Icon type="close" />
      </button>
      <div className="login-form__title">
        <Title level={3} size="medium-big">
          Войти в личный кабинет
        </Title>
      </div>
      <div className="login-form__container">
        <div className="login-form__input">
          <Input type="text" placeholder="Номер телефона" value="" name="login" />
        </div>
        <div className="login-form__input">
          <Input type="password" placeholder="Пароль" value="" name="password" />
        </div>
        <div className="login-form__login-block">
          <div className="login-form__login-button">
            <Button modification="pink" height="standard" isSubmit>
              Войти
            </Button>
          </div>
          <div className="login-form__restore-password">Забыли пароль?</div>
        </div>
        <div className="login-form__question">Вы еще не зарегистрированы?</div>
        <div className="login-form__register-button">
          <Button modification="transparent" height="standard" onClick={modalHandler.openRegister}>
            регистрация
          </Button>
        </div>
      </div>
    </form>
  );
};

export { LoginForm };
