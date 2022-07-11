import { AsyncDispatch } from 'entities/store';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Icon, Input, Title } from 'shared/ui';

import { login } from '../../actions';
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

  const [data, setData] = useState({
    phone: '',
    password: ''
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'phone') setData({ ...data, phone: e.target.value });
    if (e.target.name === 'password') setData({ ...data, password: e.target.value });
  };
  const dispatch = useDispatch<AsyncDispatch>();
  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(data));
  };

  return (
    <form className="login-form" onSubmit={formHandler}>
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
          <Input
            type="text"
            placeholder="Номер телефона"
            name="phone"
            value={data.phone}
            onChange={inputHandler}
          />
        </div>
        <div className="login-form__input">
          <Input
            type="password"
            placeholder="Пароль"
            name="password"
            value={data.password}
            onChange={inputHandler}
          />
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
