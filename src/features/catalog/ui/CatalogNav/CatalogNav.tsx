import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AsyncDispatch } from 'entities/store';
import { productModel } from 'entities/product';
import { LinkCard, Title } from 'shared/ui';

import { getCategories } from '../../actions';
import './CatalogNav.scss';

const CatalogNav: FC = () => {
  const categories = productModel.useCategories();

  const dispatch = useDispatch<AsyncDispatch>();
  useEffect(() => {
    dispatch(getCategories());
  });

  return (
    <div className="catalog-nav">
      <div className="catalog-nav__title">
        <Title level={2} size="big">
          Каталог товаров
        </Title>
      </div>
      <div className="catalog-nav__items">
        {categories.map((cr) => (
          <div className="catalog-nav__item" key={cr.id}>
            <LinkCard title={cr.name} price={0} img={cr.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { CatalogNav };
