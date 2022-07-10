type Tag = 'top' | 'popular' | 'new';

interface IProduct {
  id: string;
  price: string;
  descriptions: string;
  type: string;
  sku: string;
  brand: string;
  colors: Array<string>;
  likes: Array<string>;
  category: string;
  img: string;
  tag: Array<Tag>;
  weight?: string;
  length?: string;
  composition?: string;
  country?: string;
  colorsLength?: string;
}

interface IProductState {
  isLoading: boolean;
  error: string;
  product: IProduct;
  products: IProduct[];
}

interface ISetProducts {
  type: 'SET_PRODUCTS';
  payload: IProduct[];
}

interface ISetProduct {
  type: 'SET_PRODUCT';
  payload: IProduct;
}

interface ISetProductError {
  type: 'SET_PRODUCT_ERROR';
  payload: string;
}

interface ISetProductLoading {
  type: 'SET_PRODUCT_LOADING';
  payload: boolean;
}

interface ISetUpdatedProduct {
  type: 'SET_UPDATED_PRODUCT';
  payload: IProduct;
}

type ProductActions =
  | ISetProducts
  | ISetProduct
  | ISetProductError
  | ISetProductLoading
  | ISetUpdatedProduct;

export type {
  IProduct,
  IProductState,
  ProductActions,
  ISetProducts,
  ISetProduct,
  ISetUpdatedProduct,
  ISetProductLoading,
  ISetProductError
};
