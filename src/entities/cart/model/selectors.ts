import { useTypedSelector } from 'entities/hooks';

const useLoading = () => useTypedSelector((state) => state.cartReducer.isLoading);

const useError = () => useTypedSelector((state) => state.cartReducer.error);

const useCart = () => useTypedSelector((state) => state.cartReducer.cart);

export { useLoading, useError, useCart };
