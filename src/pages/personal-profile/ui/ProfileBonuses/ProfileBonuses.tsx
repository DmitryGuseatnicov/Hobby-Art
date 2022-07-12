import React from 'react';

import { userModel } from 'entities/user';
import './ProfileBonuses.scss';

const ProfileBonuses = () => {
  const { bonus } = userModel.useUser();
  return (
    <p className="profile-bonuses">
      На вашем счете <span className="profile-bonuses_text-marked">{`${bonus} бонусов`}</span>,
      которые вы можете потратить
    </p>
  );
};

export { ProfileBonuses };
