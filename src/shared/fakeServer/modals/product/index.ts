/* eslint-disable class-methods-use-this */
import productJson from 'shared/fakeServer/initJson/product.json';
import { paramsFilterMatcher, storageWorker } from 'shared/fakeServer/libs';

type tag = 'top' | 'popular' | 'new';

interface IProduct {
  id: string;
  price: string;
  descriptions: string;
  type: string;
  sku: string;
  weight: string;
  length: string;
  brand: string;
  composition: string;
  country: string;
  colors: Array<string>;
  likes: Array<string>;
  category: string;
  img: string;
  tag: Array<tag>;
}

interface ISeachParamsOfProduct {
  id: string[];
  price: string[];
  descriptions: string[];
  type: string[];
  sku: string[];
  weight: string[];
  length: string[];
  brand: string[];
  composition: string[];
  country: string[];
  colors: Array<string>;
  likes: Array<string>;
  category: string[];
  tag: Array<tag>;
}

class Product {
  constructor() {
    if (storageWorker.get<IProduct>('product').length === 0) {
      this.init();
    }
  }

  public getAll<T extends IProduct>() {
    const products = storageWorker.get<T>('product');
    return { data: products };
  }

  public getByParams<T extends IProduct>(params: Partial<IProduct | ISeachParamsOfProduct>) {
    const products = storageWorker.get<T>('product');
    const matchProducts = paramsFilterMatcher(products, params);
    return { data: matchProducts };
  }

  public toggleLike<T extends IProduct>(userId: string, productId: string) {
    const products = storageWorker.get<T>('product');
    const [triggerProduct] = products.filter((pr) => pr.id === productId);

    if (triggerProduct.likes.includes(userId)) {
      triggerProduct.likes = triggerProduct.likes.filter((lk) => lk !== userId);
    } else {
      triggerProduct.likes.push(userId);
    }

    const updatedProducts = products.filter((pr) => pr.id !== productId);
    updatedProducts.push(triggerProduct);
    storageWorker.set('product', updatedProducts);

    return { data: triggerProduct };
  }

  private init() {
    const productsWithCorrectImg = productJson.product.map((pr) => {
      const productWithCorrectImg = { ...pr };
      productWithCorrectImg.img = `${process.env.REACT_APP_BASE_URL}/${pr.img}`;
      return productWithCorrectImg;
    });
    storageWorker.set('product', productsWithCorrectImg);
  }
}

export type { IProduct, ISeachParamsOfProduct };
export { Product as ProductService };
