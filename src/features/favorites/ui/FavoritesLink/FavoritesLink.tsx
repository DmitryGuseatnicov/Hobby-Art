import React, { FC } from 'react';

import { productModel } from 'entities/product';
import { Button } from 'shared/ui';
import './FavoritesLink.scss';

const FavoritesLink: FC = () => {
  const favorites = productModel.useFavorites();

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
