import { IProduct, IProductState, ProductActions } from './types';

const initialState: IProductState = {
  isLoading: false,
  error: '',
  product: {} as IProduct,
  products: [],
  favorites: [],
  categories: []
};

const productReducer = (
  // eslint-disable-next-line default-param-last
  state: IProductState = initialState,
  action: ProductActions
): IProductState => {
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
        favorites: (() => {
          const isInFavorites = state.favorites.find((pr) => pr.id === action.payload.id);
          return isInFavorites
            ? state.favorites.filter((pr) => pr.id !== action.payload.id)
            : [...state.favorites, action.payload];
        })()
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
