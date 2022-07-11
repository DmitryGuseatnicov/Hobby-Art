import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { userModel } from 'entities/user';
import { AsyncDispatch } from 'entities/store';
import { Button, Icon, Input, Title } from 'shared/ui';

import { register } from '../../actions';
import './RegisterForm.scss';

type ModalController = {
  close: () => void;
  openLogin: () => void;
};

interface IRegisterForm {
  modalController: ModalController;
}

const RegisterForm: FC<IRegisterForm> = (props) => {
  const { modalController } = props;

  const [data, setData] = useState({
    name: '',
    middleName: '',
    lastName: '',
    mail: '',
    phone: '',
    password: '',
    password2: ''
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch<AsyncDispatch>();
  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const { password2, ...registerArgs } = data;
    if (data.password === data.password2) {
      dispatch(register(registerArgs));
    } else {
      dispatch(userModel.setUserError('пароли не совпадают'));
    }
  };

  return (
    <form className="register-form" onSubmit={formHandler}>
      <button type="button" className="register-form__close" onClick={modalController.close}>
        <Icon type="close" />
      </button>
      <div className="register-form__title">
        <Title level={3} size="medium-big">
          Регистрация
        </Title>
      </div>
      <div className="register-form__container">
        <div className="register-form__input">
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            value={data.name}
            onChange={inputHandler}
          />
        </div>
        <div className="register-form__input">
          <Input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={data.lastName}
            onChange={inputHandler}
          />
        </div>
        <div className="register-form__input">
          <Input
            type="text"
            name="middleName"
            placeholder="Отчество"
            value={data.middleName}
            onChange={inputHandler}
          />
        </div>
        <div className="register-form__input">
          <Input
            type="text"
            name="phone"
            placeholder="Номер телефона"
            value={data.phone}
            onChange={inputHandler}
          />
        </div>
        <div className="register-form__input">
          <Input
            type="mail"
            name="mail"
            placeholder="E-mail"
            value={data.mail}
            onChange={inputHandler}
          />
        </div>
        <div className="register-form__input">
          <Input
            type="password"
            name="password"
            placeholder="Придумайте пароль"
            value={data.password}
            onChange={inputHandler}
          />
        </div>
        <div className="register-form__input">
          <Input
            type="password"
            name="password2"
            placeholder="Повторите пароль"
            value={data.password2}
            onChange={inputHandler}
          />
        </div>
        <div className="register-form__message">Пароль должен содержать от 6 символов</div>
        <div className="register-form__register-button">
          <Button modification="pink" height="standard" isSubmit>
            Зарегистрироваться
          </Button>
        </div>
        <div className="register-form__login-block">
          <div className="register-form__question">Есть аккаунт? </div>
          <div className="register-form__login-button">
            <Button
              modification="transparent"
              height="standard"
              onClick={modalController.openLogin}>
              войти
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export { RegisterForm };
