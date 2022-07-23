import React from 'react';

import { CartCounter } from 'features/shopping';
import { Like } from 'features/favorites';
import { productModel } from 'entities/product';
import { userModel } from 'entities/user';
import { Title } from 'shared/ui';

import { createTitle } from '../../libs/createTitle';
import { ColorList } from '../ColorList/ColorList';
import { CharacteristicList } from '../CharacteristicList/CharacteristicList';
import './ProductCard.scss';

const ProductCard = () => {
  const { id: userId } = userModel.useUser();

  const {
    id: productId,
    img,
    brand,
    sku,
    type,
    price,
    descriptions,
    colors = [],
    likes = [],
    weight,
    length,
    composition,
    country,
    colorsLength
  } = productModel.useProduct();

  return (
    <div className="product-card">
      <div className="product-card__gallery">
        <div className="product-card__photo">
          <img className="product-card__img" src={img} alt="" />
        </div>
        <div className="product-card__colors">
          <ColorList colors={colors} size="big" visibleElements="all" />
        </div>
      </div>
      <div className="product-card__info">
        <div className="product-card__header">
          <div className="product-card__title">
            <Title level={1} size="big">
              {createTitle({ brand, sku, type })}
            </Title>
          </div>
          <div className="product-card__like">
            <Like id={productId} isLiked={likes.includes(userId)} />
          </div>
        </div>
        <div className="product-card__description">{descriptions}</div>
        <div className="product-card__characteristics">
          <div className="product-card__characteristics-title">
            <Title level={5} size="medium-big">
              Характеристики
            </Title>
          </div>
          <div className="product-card__characteristics-list">
            <CharacteristicList
              weight={weight}
              length={length}
              composition={composition}
              country={country}
              colorsLength={colorsLength}
            />
          </div>
          <div className="product-card__counter">
            <CartCounter productId={productId} price={price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
