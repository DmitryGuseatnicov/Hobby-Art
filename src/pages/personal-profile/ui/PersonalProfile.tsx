import React from 'react';
import { Title } from 'shared/ui';

import './PersonalProfile.scss';

const PersonalProfile = () => {
  return (
    <div className="personal-profile">
      <div className="personal-profile__title">
        <Title level={1} size="big">
          Личный кабинет
        </Title>
      </div>
      <div className="personal-profile__widget">
        <div className="personal-profile__sidebar">< /></div>
        <div className="personal-profile__content">sasasasasas</div>
      </div>
    </div>
  );
};

export { PersonalProfile };
