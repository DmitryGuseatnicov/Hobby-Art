import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AsyncDispatch } from 'entities/store';
import { userModel } from 'entities/user';
import { Button } from 'shared/ui';

import { ProfileInput } from '../ProfileInput/ProfileInput';
import { updateUserData, UpdateUserArgs } from '../../actions';
import './ProfileData.scss';

const ProfileData = () => {
  const { id, name, middleName, lastName, dateOfBirth, phone, mail, address } = userModel.useUser();

  const [data, setData] = useState<UpdateUserArgs>({
    name,
    middleName,
    lastName,
    dateOfBirth,
    phone,
    mail,
    address,
    password: ''
  });

  const labels: UpdateUserArgs = {
    name: 'Имя:',
    middleName: 'Отчество:',
    lastName: 'Фамилия:',
    dateOfBirth: 'Дата рождения:',
    phone: 'Номер телефона:',
    mail: 'E-mail:',
    address: 'Адрес:',
    password: 'Пароль:'
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch<AsyncDispatch>();
  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    dispatch(updateUserData(id, data));
  };

  return (
    <div className="profile-data">
      <form className="profile-data__form" onSubmit={formHandler}>
        <div className="profile-data__input-widgets">
          {Object.entries(data).map((entry) => {
            const [key, value] = entry;
            if (key === 'password') {
              return (
                <div className="profile-data__input-widget" key={key}>
                  <ProfileInput
                    value={value}
                    label={labels[key]}
                    name={key}
                    type="password"
                    onChange={inputHandler}
                  />
                </div>
              );
            }
            return (
              <div className="profile-data__input-widget" key={key}>
                <ProfileInput
                  value={value}
                  label={labels[key as keyof UpdateUserArgs]}
                  name={key}
                  type="text"
                  onChange={inputHandler}
                />
              </div>
            );
          })}
        </div>
        <div className="profile-data__submit-button">
          <Button modification="pink" height="standard" isSubmit>
            Сохранить данные
          </Button>
        </div>
      </form>
    </div>
  );
};

export { ProfileData };
