import React from 'react';

import { ProductCardMini } from 'widgets/ProductCard';
import { productModel } from 'entities/product';

import ProductsSideBar from './ProductsSideBar/ProductsSideBar';
import './Products.scss';

const Products = () => {
  const products = productModel.useProducts();

  return (
    <div className="products">
      <div className="products__sidebar">
        <ProductsSideBar />
      </div>
      <div className="products__items">
        {products.map((pr) => (
          <div className="products__item" key={pr.id}>
            <ProductCardMini id={pr.id} price={pr.price} img={pr.img} colors={pr.colors} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Products };
