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

interface IFilters {
  name: string;
  key: string;
  variants: string[];
}

interface ICategory {
  id: string;
  name: string;
  image: string;
  filters: IFilters[];
}

interface IProductState {
  isLoading: boolean;
  error: string;
  product: IProduct;
  products: IProduct[];
  categories: ICategory[];
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

interface ISetCategories {
  type: 'SET_CATEGORIES';
  payload: ICategory[];
}

type ProductActions =
  | ISetProducts
  | ISetProduct
  | ISetProductError
  | ISetProductLoading
  | ISetUpdatedProduct
  | ISetCategories;

export type {
  IProduct,
  IProductState,
  ICategory,
  ProductActions,
  ISetProducts,
  ISetProduct,
  ISetUpdatedProduct,
  ISetProductLoading,
  ISetProductError,
  ISetCategories
};
