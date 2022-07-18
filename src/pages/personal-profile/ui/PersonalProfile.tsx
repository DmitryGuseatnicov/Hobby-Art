import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const { state } = useLocation() as { state: { link: string } };
  const link = state?.link ? state?.link : 'data';

  const [tabs, setTabs] = useState({
    data: link === 'data',
    bonuses: link === 'bonuses',
    favorites: link === 'favorites',
    history: link === 'history',
    mailing: link === 'mailing',
    reviews: link === 'reviews'
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
          <div className="personal-profile__content-info">
            {(tabs.data && <ProfileData />) ||
              (tabs.bonuses && <ProfileBonuses />) ||
              (tabs.favorites && <ProfileFavorites />) ||
              (tabs.history && <ProfileHistory />) ||
              (tabs.mailing && <ProfileMailing />) ||
              (tabs.reviews && <ProfileReviews />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PersonalProfile };
