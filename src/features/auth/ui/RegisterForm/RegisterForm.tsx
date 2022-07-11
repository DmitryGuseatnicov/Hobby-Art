import React from 'react';

import { Button, Icon, Input, Title } from 'shared/ui';
import './RegisterForm.scss';

const RegisterForm = () => {
  return (
    <form className="register-form">
      <button type="button" className="register-form__close">
        <Icon type="close" />
      </button>
      <div className="register-form__title">
        <Title level={3} size="medium-big">
          Регистрация
        </Title>
      </div>
      <div className="register-form__container">
        <div className="register-form__input">
          <Input type="text" name="name" placeholder="Имя" />
        </div>
        <div className="register-form__input">
          <Input type="text" name="lastName" placeholder="Фамилия" />
        </div>
        <div className="register-form__input">
          <Input type="text" name="patronymic" placeholder="Отчество" />
        </div>
        <div className="register-form__input">
          <Input type="text" name="phone" placeholder="Номер телефона" />
        </div>
        <div className="register-form__input">
          <Input type="mail" name="mail" placeholder="E-mail" />
        </div>
        <div className="register-form__input">
          <Input type="password" name="password" placeholder="Придумайте пароль" />
        </div>
        <div className="register-form__input">
          <Input type="password" name="password-copy" placeholder="Повторите пароль" />
        </div>
        <div className="register-form__message">Пароль должен содержать от 6 символов</div>
        <div className="register-form__register-button">
          <Button modification="pink" height="standard">
            Зарегистрироваться
          </Button>
        </div>
        <div className="register-form__login-block">
          <div className="register-form__question">Есть аккаунт? </div>
          <div className="register-form__login-button">
            <Button modification="transparent" height="standard">
              войти
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export { RegisterForm };
