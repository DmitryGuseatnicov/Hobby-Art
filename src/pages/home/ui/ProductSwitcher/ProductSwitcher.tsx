import React, { FC, useState } from 'react';

import { Carousel } from 'shared/ui';
import { productModel } from 'entities/product';

import './ProductSwitcher.scss';

interface IProductSwitcher {
  newProducts: productModel.IProduct[];
  popularProducts: productModel.IProduct[];
}

const ProductSwitcher: FC<IProductSwitcher> = (props) => {
  const { newProducts, popularProducts } = props;

  const [checked, setChecked] = useState('new');

  const clickHandler = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const { productOption = 'new' } = e.target.dataset;
      setChecked(productOption);
    }
  };

  const keyEvent = (e: React.KeyboardEvent) => {
    if (e.target instanceof HTMLElement && e.key === ' ') {
      e.preventDefault();
      const { productOption = checked } = e.target.dataset;
      setChecked(productOption);
    }
  };

  const isChecked = (param: string) => checked === param;

  return (
    <div className="product-switch">
      <div className="product-switch__panel">
        <div
          className={`product-switch__label ${
            isChecked('new') ? 'product-switch__label_checked' : ''
          }`}
          data-product-option="new"
          role="button"
          tabIndex={0}
          onClick={clickHandler}
          onKeyDown={keyEvent}>
          Новинки
        </div>

        <div
          className={`product-switch__toggle ${
            isChecked('popular') ? 'product-switch__toggle_checked' : ''
          }`}>
          <div className="product-switch__handle" />
        </div>

        <div
          className={`product-switch__label ${
            isChecked('popular') ? 'product-switch__label_checked' : ''
          }`}
          data-product-option="popular"
          role="button"
          tabIndex={0}
          onClick={clickHandler}
          onKeyDown={keyEvent}>
          популярное
        </div>
      </div>

      <div className="product-switch__carousel">
        <Carousel
          slides={
            checked === 'new'
              ? newProducts.map((pr) => ({
                  img: pr.img,
                  link: `/product${pr.id}`,
                  name: `${pr.brand} ${pr.sku}`
                }))
              : popularProducts.map((pr) => ({
                  img: pr.img,
                  link: `/product${pr.id}`,
                  name: `${pr.brand} ${pr.sku}`
                }))
          }
        />
      </div>
    </div>
  );
};

export { ProductSwitcher };
