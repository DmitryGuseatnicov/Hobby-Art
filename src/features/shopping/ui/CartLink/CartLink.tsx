import React from 'react';

import { cartModel } from 'entities/cart';
import { Button } from 'shared/ui';
import './CartLink.scss';

const CartLink = () => {
  const cart = cartModel.useCart();

  const calcCartItems = () => {
    return cart.reduce((count, product) => count + product.count, 0);
  };

  return (
    <div className="cart-link">
      {cart.length > 0 && <div className="cart-link__count">{calcCartItems()}</div>}
      <Button modification="with-icon" icon="basket" height="short">
        Корзина
      </Button>
    </div>
  );
};

export { CartLink };
