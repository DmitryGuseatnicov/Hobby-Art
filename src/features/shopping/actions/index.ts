import { Dispatch } from 'redux';

import { cartModel } from 'entities/cart';
import { fakeServer } from 'shared/fakeServer';
import { cartAdapter } from './adapters';

const getCart = (userId: string) => async (dispatch: Dispatch<cartModel.CartActions>) => {
  try {
    dispatch(cartModel.setCartLoading(true));

    const res = await fakeServer.cart.get(userId);
    dispatch(cartModel.setCartProducts(cartAdapter(res.data)));

    dispatch(cartModel.setCartLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export { getCart };
