import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userModel } from 'entities/user';
import { productModel } from 'entities/product';
import { AsyncDispatch } from 'entities/store';
import { Button } from 'shared/ui';

import { getFavorites } from '../../actions';
import './FavoritesLink.scss';

const FavoritesLink: FC = () => {
  const favorites = productModel.useFavorites();
  const user = userModel.useUser();

  const dispatch = useDispatch<AsyncDispatch>();

  useEffect(() => {
    dispatch(getFavorites(user.id));
  }, [user.id]);

  return (
    <div className="favorites-link">
      {favorites.length > 0 && <div className="favorites-link__count">{favorites.length}</div>}
      <Button
        modification="with-icon"
        icon="favorites"
        height="short"
        link="/personal-profile"
        state={{ link: 'favorites' }}>
        Избраное
      </Button>
    </div>
  );
};

export { FavoritesLink };
