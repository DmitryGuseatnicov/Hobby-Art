import React from 'react';

import { ProductCardMini } from 'widgets/ProductCard';
import { productModel } from 'entities/product';

import './ProfileFavorites.scss';

const ProfileFavorites = () => {
  const products = productModel.useFavorites();
  return (
    <div className="profile-favorites">
      <div className="profile-favorites__items">
        {products.map((pr) => (
          <div className="profile-favorites__item" key={pr.id}>
            <ProductCardMini
              id={pr.id}
              price={pr.price}
              img={pr.img}
              colors={pr.colors}
              likes={pr.likes}
              type={pr.type}
              brand={pr.brand}
              sku={pr.sku}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProfileFavorites };
