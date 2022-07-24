import React from 'react';

import { ProductCardMini } from 'widgets/ProductCard';
import { productModel } from 'entities/product';
import { Spinner } from 'shared/ui';

import ProductsSideBar from './ProductsSideBar/ProductsSideBar';
import './Products.scss';

const Products = () => {
  const products = productModel.useProducts();
  const isLoading = productModel.useLoading();

  return (
    <div className="products">
      <div className="products__sidebar">
        <ProductsSideBar />
      </div>
      <div className="products__items">
        {isLoading ? (
          <Spinner />
        ) : (
          products.map((pr) => (
            <div className="products__item" key={pr.id}>
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
          ))
        )}
      </div>
    </div>
  );
};

export { Products };
