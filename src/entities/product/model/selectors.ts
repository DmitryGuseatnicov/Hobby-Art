import { useTypedSelector } from 'entities/hooks';

const useProduct = () => useTypedSelector((state) => state.productReducer.product);

const useProducts = () => useTypedSelector((state) => state.productReducer.products);

const useLoading = () => useTypedSelector((state) => state.productReducer.isLoading);

const useError = () => useTypedSelector((state) => state.productReducer.error);

const useCategories = () => useTypedSelector((state) => state.productReducer.categories);

const useFilters = (categoryName: string) =>
  useTypedSelector((state) => {
    const [category] = state.productReducer.categories.filter((cr) => cr.name === categoryName);
    return category ? category.filters : [];
  });

export { useProduct, useProducts, useLoading, useError, useCategories, useFilters };
