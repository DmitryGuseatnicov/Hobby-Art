import { Dispatch } from 'redux';

import { productModel } from 'entities/product';
import * as FakeServer from 'shared/fakeServer';

const getProductsByParams = (args: Partial<productModel.IProduct>) => {
  return async (dispatch: Dispatch<productModel.ProductActions>) => {
    try {
      const res = await FakeServer.product.get<productModel.IProduct>(args);
      const products = res.data;
      dispatch(productModel.setProducts(products));
    } catch (error) {
      console.log(error);
    }
  };
};

export { getProductsByParams };
