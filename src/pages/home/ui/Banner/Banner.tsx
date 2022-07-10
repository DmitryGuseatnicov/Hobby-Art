import React, { FC } from 'react';

import { productModel } from 'entities/product';
import { BannerCarousel } from 'shared/ui';
import './Banner.scss';

const mask = require('./assets/img/banner-mask.png');
const bestseller = require('./assets/img/bestseller.png');

interface IBanner {
  products: productModel.IProduct[];
}

const Banner: FC<IBanner> = (props) => {
  const { products } = props;

  const slides = products.map((product) => ({
    id: product.id,
    img: product.img,
    title: `${product.type} ${product.brand}`,
    text: product.descriptions,
    buttonText: 'Подробние'
  }));

  return (
    <div className="banner">
      <img className="banner__mask" src={mask} alt="" />
      <div className="banner__bestseller">
        <img className="banner__bestseller-img" src={bestseller} alt="" />
      </div>
      <BannerCarousel slides={slides} />
    </div>
  );
};

export { Banner };
