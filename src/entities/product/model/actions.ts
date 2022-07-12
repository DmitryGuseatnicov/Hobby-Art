import {
  ICategory,
  IProduct,
  ISetCategories,
  ISetProduct,
  ISetProductError,
  ISetProductLoading,
  ISetProducts,
  ISetUpdatedProduct
} from './types';

const setProduct = (product: IProduct): ISetProduct => ({
  type: 'SET_PRODUCT',
  payload: product
});

const setProducts = (products: IProduct[]): ISetProducts => ({
  type: 'SET_PRODUCTS',
  payload: products
});

const setLoading = (isLoading: boolean): ISetProductLoading => ({
  type: 'SET_PRODUCT_LOADING',
  payload: isLoading
});

const setError = (message: string): ISetProductError => ({
  type: 'SET_PRODUCT_ERROR',
  payload: message
});

const setUpdatedProduct = (product: IProduct): ISetUpdatedProduct => ({
  type: 'SET_UPDATED_PRODUCT',
  payload: product
});

const setCategories = (categories: ICategory[]): ISetCategories => ({
  type: 'SET_CATEGORIES',
  payload: categories
});

export { setProduct, setProducts, setError, setLoading, setUpdatedProduct, setCategories };
