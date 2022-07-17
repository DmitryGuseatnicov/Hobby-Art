import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ProductCardMini } from 'widgets/ProductCard';
import { productModel } from 'entities/product';
import { AsyncDispatch } from 'entities/store';
import { userModel } from 'entities/user';

import { getFavorites } from '../../actions';
import './ProfileFavorites.scss';

const ProfileFavorites = () => {
  const products = productModel.useProducts();
  const user = userModel.useUser();

  const dispatch = useDispatch<AsyncDispatch>();
  useEffect(() => {
    dispatch(getFavorites(user.id));
  });

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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProfileFavorites };
