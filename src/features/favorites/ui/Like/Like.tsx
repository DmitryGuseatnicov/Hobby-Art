import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { AsyncDispatch } from 'entities/store';
import { Icon } from 'shared/ui';
import './Like.scss';
import { userModel } from 'entities/user';
import { toggleFavorites } from '../../actions';

interface ILike {
  id: string;
  isLiked: boolean;
}

const Like: FC<ILike> = (props) => {
  const { id, isLiked } = props;
  const user = userModel.useUser();

  const dispatch = useDispatch<AsyncDispatch>();

  const toggleLike = () => {
    dispatch(toggleFavorites({ userId: user.id, productId: id }));
  };
  return (
    <button className="like" type="button" onClick={toggleLike}>
      <Icon type={isLiked ? 'favorites_big' : 'favorite_border'} />
    </button>
  );
};

export { Like };
