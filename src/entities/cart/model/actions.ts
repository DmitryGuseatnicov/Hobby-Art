import { ICartProduct, ISetCartError, ISetCartLoading, ISetCartProducts } from './types';

const setCartProducts = (cart: ICartProduct[]): ISetCartProducts => ({
  type: 'SET_CART_PRODUCTS',
  payload: cart
});

const setCartLoading = (isLoading: boolean): ISetCartLoading => ({
  type: 'SET_CART_LOADING',
  payload: isLoading
});

const setCartError = (message: string): ISetCartError => ({
  type: 'SET_CART_ERROR',
  payload: message
});

export { setCartProducts, setCartError, setCartLoading };
