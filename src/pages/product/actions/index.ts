import { Dispatch } from 'redux';
import { productModel } from 'entities/product';
import { fakeServer } from 'shared/fakeServer';

const getProduct =
  (productId: string) => async (dispatch: Dispatch<productModel.ProductActions>) => {
    try {
      dispatch(productModel.setLoading(true));

      const res = await fakeServer.product.get({ id: productId });
      const [product] = res.data;

      dispatch(productModel.setProduct(product));
      dispatch(productModel.setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

export { getProduct };
