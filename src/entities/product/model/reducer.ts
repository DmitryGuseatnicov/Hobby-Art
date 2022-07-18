import { IProduct, IProductState, ProductActions } from './types';

const initialState: IProductState = {
  isLoading: false,
  error: '',
  product: {} as IProduct,
  products: [],
  favorites: [],
  categories: []
};

type State = typeof initialState;

// eslint-disable-next-line default-param-last
const productReducer = (state: State = initialState, action: ProductActions): State => {
  switch (action.type) {
    case 'SET_PRODUCT': {
      return {
        ...state,
        product: action.payload
      };
    }

    case 'SET_PRODUCTS': {
      return {
        ...state,
        products: action.payload
      };
    }

    case 'SET_FAVORITES_PRODUCTS': {
      return {
        ...state,
        favorites: action.payload
      };
    }

    case 'SET_UPDATED_PRODUCT': {
      return {
        ...state,
        product: action.payload,
        products: state.products.map((pr) => (pr.id === action.payload.id ? action.payload : pr)),
        favorites: state.favorites.map((pr) => (pr.id === action.payload.id ? action.payload : pr))
      };
    }

    case 'SET_PRODUCT_ERROR': {
      return {
        ...state,
        error: action.payload
      };
    }

    case 'SET_PRODUCT_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      };
    }

    case 'SET_CATEGORIES': {
      return {
        ...state,
        categories: action.payload
      };
    }

    default:
      return state;
  }
};

export { productReducer };
