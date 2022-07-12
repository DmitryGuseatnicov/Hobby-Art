import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { userModel } from 'entities/user';
import { Avatar, Icon, Title } from 'shared/ui';
import './ProfileSidebar.scss';

type TabsIndicator = {
  data: boolean;
  bonuses: boolean;
  favorites: boolean;
  history: boolean;
  mailing: boolean;
  reviews: boolean;
};

interface IProfileSidebar {
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tabsIndicator: TabsIndicator;
}

const ProfileSidebar: FC<IProfileSidebar> = (props) => {
  const { onClick, tabsIndicator } = props;

  const { avatar, name, lastName } = userModel.useUser();

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userModel.removeUser());
  };

  return (
    <div className="profile-sidebar">
      <div className="profile-sidebar__info">
        <div className="profile-sidebar__avatar">
          <Avatar img={avatar} />
        </div>
        <div className="profile-sidebar__name">
          <Title level={4} size="medium">{`${name} ${lastName}`}</Title>
        </div>
      </div>
      <div className="profile-sidebar__tabs">
        <div className="profile-sidebar__tab">
          <button
            className={`profile-sidebar__tab-button ${
              tabsIndicator.data ? 'profile-sidebar__tab-button_active' : ''
            }`}
            type="button"
            data-tab="data"
            onClick={onClick}>
            Мои данные
          </button>
        </div>
        <div className="profile-sidebar__tab">
          <button
            className={`profile-sidebar__tab-button ${
              tabsIndicator.bonuses ? 'profile-sidebar__tab-button_active' : ''
            }`}
            type="button"
            data-tab="bonuses"
            onClick={onClick}>
            Бонусный счет
          </button>
        </div>
        <div className="profile-sidebar__tab">
          <button
            className={`profile-sidebar__tab-button ${
              tabsIndicator.favorites ? 'profile-sidebar__tab-button_active' : ''
            }`}
            type="button"
            data-tab="favorites"
            onClick={onClick}>
            Избранные товары
          </button>
        </div>
        <div className="profile-sidebar__tab">
          <button
            className={`profile-sidebar__tab-button ${
              tabsIndicator.history ? 'profile-sidebar__tab-button_active' : ''
            }`}
            type="button"
            data-tab="history"
            onClick={onClick}>
            История заказов
          </button>
        </div>
        <div className="profile-sidebar__tab">
          <button
            className={`profile-sidebar__tab-button ${
              tabsIndicator.mailing ? 'profile-sidebar__tab-button_active' : ''
            }`}
            type="button"
            data-tab="mailing"
            onClick={onClick}>
            Рассылка
          </button>
        </div>
        <div className="profile-sidebar__tab">
          <button
            className={`profile-sidebar__tab-button ${
              tabsIndicator.reviews ? 'profile-sidebar__tab-button_active' : ''
            }`}
            type="button"
            data-tab="reviews"
            onClick={onClick}>
            Отзывы
          </button>
        </div>
      </div>
      <button className="profile-sidebar__exit-button" type="button" onClick={logout}>
        <span className="profile-sidebar__exit-button-icon">
          <Icon type="exit" />
        </span>
        <span className="profile-sidebar__exit-button-text">Выйти из личного кабинета</span>
      </button>
    </div>
  );
};

export { ProfileSidebar };
