import React, { FC } from 'react';
import './Avatar.scss';

const avatarPlaceholder = require('./assets/img/avatar-placeholder.png');

interface IAvatar {
  img?: string;
}

const Avatar: FC<IAvatar> = (props) => {
  const { img } = props;

  return (
    <div className="avatar">
      <img className="avatar__img" src={img || avatarPlaceholder} alt="" />
    </div>
  );
};

export { Avatar };
