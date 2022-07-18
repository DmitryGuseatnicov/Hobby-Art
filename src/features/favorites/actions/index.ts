import { productModel } from 'entities/product';
import { Dispatch } from 'redux';

import { fakeServer } from 'shared/fakeServer';

type ToggleFavoritesArgs = {
  userId: string;
  productId: string;
};

const toggleFavorites =
  (args: ToggleFavoritesArgs) => async (dispatch: Dispatch<productModel.ProductActions>) => {
    try {
      const res = await fakeServer.product.put(args.userId, args.productId);
      const product = res.data;
      dispatch(productModel.setUpdatedProduct(product));
    } catch (error) {
      console.log(error);
    }
  };

const getFavorites =
  (userId: string) => async (dispatch: Dispatch<productModel.ProductActions>) => {
    try {
      const res = await fakeServer.product.get<productModel.IProduct>({ likes: [userId] });
      const product = res.data;
      dispatch(productModel.setFavoritesProducts(product));
    } catch (error) {
      console.log(error);
    }
  };

export { toggleFavorites, getFavorites };
