import React, { FC, useState } from 'react';

import { Counter } from 'shared/ui';

import { AddToCart } from '../AddToCart/AddToCart';
import './CartCounter.scss';

interface ICartCounter {
  productId: string;
  price: string;
}

const CartCounter: FC<ICartCounter> = (props) => {
  const { productId, price } = props;

  const [count, setCount] = useState(1);

  const handleCounterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    const { action = '' } = e.target.dataset;

    if (action === 'increment') setCount(count + 1);
    if (action === 'decrement') setCount(count === 1 ? count : count - 1);
  };

  return (
    <div className="cart-counter">
      <div className="cart-counter__price">{price} ₽</div>
      <div className="cart-counter__counter">
        <Counter onClick={handleCounterClick} value={count} />
      </div>
      <div className="cart-counter__add-to-cart">
        <AddToCart count={count} hasIcon={false} productId={productId}>
          Добавить в корзину
        </AddToCart>
      </div>
    </div>
  );
};

export { CartCounter };
