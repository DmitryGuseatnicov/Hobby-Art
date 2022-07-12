import React, { useState } from 'react';

import { Title } from 'shared/ui';

import { ProfileSidebar } from './ProfileSidebar/ProfileSidebar';
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileBonuses } from './ProfileBonuses/ProfileBonuses';
import { ProfileFavorites } from './ProfileFavorites/ProfileFavorites';
import { ProfileHistory } from './ProfileHistory/ProfileHistory';
import { ProfileMailing } from './ProfileMailing/ProfileMailing';
import { ProfileReviews } from './ProfileReviews/ProfileReviews';
import './PersonalProfile.scss';

const PersonalProfile = () => {
  const [tabs, setTabs] = useState({
    data: true,
    bonuses: false,
    favorites: false,
    history: false,
    mailing: false,
    reviews: false
  });

  const tabsHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    const { tab } = e.target.dataset;

    const tabsOptions = Object.keys(tabs).reduce((dataTabs: any, key) => {
      return tab && tab === key ? { ...dataTabs, [key]: true } : { ...dataTabs, [key]: false };
    }, {});

    setTabs(tabsOptions);
  };

  return (
    <div className="personal-profile">
      <div className="personal-profile__title">
        <Title level={1} size="big">
          Личный кабинет
        </Title>
      </div>
      <div className="personal-profile__widget">
        <div className="personal-profile__sidebar">
          <ProfileSidebar onClick={tabsHandler} tabsIndicator={tabs} />
        </div>
        <div className="personal-profile__content">
          <div className="personal-profile__content-title">
            <Title level={3} size="medium-big">
              {(tabs.data && 'Мои данные') ||
                (tabs.bonuses && 'Бонусный счет') ||
                (tabs.favorites && 'Избранные товары') ||
                (tabs.history && 'История заказов') ||
                (tabs.mailing && 'Рассылка') ||
                (tabs.reviews && 'Отзывы')}
            </Title>
          </div>
          {(tabs.data && <ProfileData />) ||
            (tabs.bonuses && <ProfileBonuses />) ||
            (tabs.favorites && <ProfileFavorites />) ||
            (tabs.history && <ProfileHistory />) ||
            (tabs.mailing && <ProfileMailing />) ||
            (tabs.reviews && <ProfileReviews />)}
        </div>
      </div>
    </div>
  );
};

export { PersonalProfile };
