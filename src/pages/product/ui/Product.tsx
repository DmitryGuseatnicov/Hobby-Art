import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ProductCard } from 'widgets/ProductCard';
import { AsyncDispatch } from 'entities/store';
import { getProduct } from '../actions';

const Product = () => {
  const { id = '' } = useParams();
  const dispatch = useDispatch<AsyncDispatch>();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  return (
    <div className="product">
      <div className="product__cart">
        <ProductCard />
      </div>
    </div>
  );
};

export { Product };
