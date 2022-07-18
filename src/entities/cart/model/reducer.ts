import { CartActions, ICartState } from './types';

const initialState: ICartState = {
  isLoading: false,
  error: '',
  cart: []
};

// eslint-disable-next-line default-param-last
const cartReducer = (state: ICartState = initialState, action: CartActions) => {
  switch (action.type) {
    case 'SET_CART_PRODUCTS':
      return {
        ...state,
        cart: action.payload
      };

    case 'SET_CART_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };

    case 'SET_CART_ERROR':
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export { cartReducer };
