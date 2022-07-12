import { Dispatch } from 'react';
import { productModel } from 'entities/product';
import * as fakeServer from 'shared/fakeServer';

const getCategories = () => async (dispatch: Dispatch<productModel.ProductActions>) => {
  try {
    const res = await fakeServer.category.get<productModel.ICategory>();
    const categories = res.data;
    if (categories) {
      dispatch(productModel.setCategories(categories));
    } else {
      dispatch(productModel.setError('Что-то пошло не так'));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export { getCategories };
