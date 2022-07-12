import React, { useEffect, useState } from 'react';

import { CatalogNav } from 'features/catalog';
import { productModel } from 'entities/product';
import * as fakeServer from 'shared/fakeServer';

import { ProductSwitcher } from './ProductSwitcher/ProductSwitcher';
import { Banner } from './Banner/Banner';
import './Home.scss';

interface IProductsByTag {
  top: productModel.IProduct[];
  new: productModel.IProduct[];
  popular: productModel.IProduct[];
}

const Home = () => {
  const [products, setProducts] = useState<IProductsByTag>({
    top: [],
    new: [],
    popular: []
  });

  const getProducts = async () => {
    const topProducts = await fakeServer.product.get({ tag: ['top'] });
    const newProducts = await fakeServer.product.get({ tag: ['new'] });
    const popularProducts = await fakeServer.product.get({ tag: ['popular'] });

    setProducts({
      top: topProducts.data,
      new: newProducts.data,
      popular: popularProducts.data
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home">
      <div className="home__banner">
        <Banner products={products.top} />
      </div>
      <div className="home__product-switcher">
        <ProductSwitcher newProducts={products.new} popularProducts={products.popular} />
      </div>
      <div className="home__catalog">
        <CatalogNav />
      </div>
    </div>
  );
};

export { Home };
