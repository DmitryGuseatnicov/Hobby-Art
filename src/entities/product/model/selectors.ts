import { useTypedSelector } from 'entities/hooks';

const useProduct = () => useTypedSelector((state) => state.productReducer.product);
const useProducts = () => useTypedSelector((state) => state.productReducer.products);
const useLoading = () => useTypedSelector((state) => state.productReducer.isLoading);
const useError = () => useTypedSelector((state) => state.productReducer.error);

export { useProduct, useProducts, useLoading, useError };
