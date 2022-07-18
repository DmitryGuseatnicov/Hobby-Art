interface ICartProduct {
  id: string;
  count: number;
}

interface ICartState {
  isLoading: boolean;
  error: string;
  cart: ICartProduct[];
}

interface ISetCartProducts {
  type: 'SET_CART_PRODUCTS';
  payload: ICartProduct[];
}

interface ISetCartError {
  type: 'SET_CART_ERROR';
  payload: string;
}

interface ISetCartLoading {
  type: 'SET_CART_LOADING';
  payload: boolean;
}

type CartActions = ISetCartError | ISetCartLoading | ISetCartProducts;

export type {
  ICartProduct,
  ICartState,
  ISetCartProducts,
  ISetCartError,
  ISetCartLoading,
  CartActions
};
