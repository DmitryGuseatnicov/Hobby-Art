import { Dispatch } from 'redux';

import { productModel } from 'entities/product';
import { fakeServer } from 'shared/fakeServer';

const getProductsByParams = (args: Partial<productModel.IProduct>) => {
  return async (dispatch: Dispatch<productModel.ProductActions>) => {
    try {
      dispatch(productModel.setLoading(true));
      const res = await fakeServer.product.get<productModel.IProduct>(args);
      const products = res.data;
      dispatch(productModel.setProducts(products));
      dispatch(productModel.setLoading(false));
    } catch (error) {
      dispatch(productModel.setError('Что-то пошло не так'));
    }
  };
};

export { getProductsByParams };
