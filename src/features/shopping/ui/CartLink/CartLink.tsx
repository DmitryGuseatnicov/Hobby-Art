import React, { useEffect } from 'react';

import { cartModel } from 'entities/cart';

import { Button } from 'shared/ui';
import './CartLink.scss';
import { useDispatch } from 'react-redux';
import { AsyncDispatch } from 'entities/store';
import { getCart } from 'features/shopping/actions';
import { userModel } from 'entities/user';

const CartLink = () => {
  const cart = cartModel.useCart();
  const user = userModel.useUser();

  const calcCartItems = () => {
    return cart.reduce((count, product) => count + product.count, 0);
  };

  const dispatch = useDispatch<AsyncDispatch>();
  useEffect(() => {
    dispatch(getCart(user.id));
  }, [user.id]);

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
