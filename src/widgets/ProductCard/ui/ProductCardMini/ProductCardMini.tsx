import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { AddToCart } from 'features/shopping';
import { Like } from 'features/favorites';
import { userModel } from 'entities/user';
import { Title } from 'shared/ui';

import { ColorList } from '../ColorList/ColorList';
import './ProductCardMini.scss';

interface IProductCardMini {
  id: string;
  price: string;
  img: string;
  colors: string[];
  likes: string[];
  type?: string;
  sku?: string;
  brand?: string;
}

const ProductCardMini: FC<IProductCardMini> = (props) => {
  const { id, price, colors, img, likes, type = '', sku = '', brand = '' } = props;

  const user = userModel.useUser();

  const createTitle = () => {
    return `${type} ${brand} ${sku} `;
  };

  return (
    <div className="product-card-mini">
      <div className="product-card-mini__panel">
        <div className="product-card-mini__like">
          <Like id={id} isLiked={likes.includes(user.id)} />
        </div>
        <div className="product-card-mini__description-button">
          <div className="product-card-mini__description-circle" />
          <div className="product-card-mini__description-circle" />
          <div className="product-card-mini__description-circle" />
        </div>
      </div>
      <NavLink className="product-card-mini__photo" to={`/product/${id}`}>
        <img className="product-card-mini__img" src={img} alt="" />
      </NavLink>
      <div className="product-card-mini__title">
        <Title level={4} size="small">
          {createTitle()}
        </Title>
      </div>
      <div className="product-card-mini__colors">
        <ColorList colors={colors} size="small" visibleElements="reduced" />
      </div>
      <div className="product-card-mini__price">{`${price} ₽`}</div>
      <div className="product-card-mini__button">
        <AddToCart count={1} productId={id} hasIcon>
          В Корзину
        </AddToCart>
      </div>
    </div>
  );
};

export { ProductCardMini };
