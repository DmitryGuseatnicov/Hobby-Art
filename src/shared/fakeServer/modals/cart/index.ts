/* eslint-disable class-methods-use-this */
import cartJson from 'shared/fakeServer/initJson/cart.json';
import { storageWorker } from 'shared/fakeServer/libs';
import { IProduct, productService } from '../product';

type Product = {
  count: number;
  id: string;
};

interface ICart {
  user: string;
  products: Product[];
}

interface ICartResponse {
  count: number;
  product: IProduct;
}

class Cart {
  constructor() {
    if (storageWorker.get<ICart>('cart').length === 0) {
      this.init();
    }
  }

  public create(userId: string) {
    const cart: ICart = {
      user: userId,
      products: []
    };

    const carts = storageWorker.get<ICart>('cart');
    carts.push(cart);
    storageWorker.set('cart', carts);
  }

  public get<T extends ICartResponse>(userId: string) {
    const carts = storageWorker.get<ICart>('cart');
    const [concreteCart] = carts.filter((cr) => cr.user === userId);

    const response = concreteCart.products.map((pr) => {
      const { data } = productService.getByParams({ id: pr.id });
      return {
        count: pr.count,
        product: data[0]
      };
    });

    return { data: response as T[] };
  }

  public add<T extends ICartResponse>(userId: string, product: Product) {
    const carts = storageWorker.get<ICart>('cart');
    const [concreteCart] = carts.filter((cr) => cr.user === userId);

    const { products } = concreteCart;
    const [concreteProduct = { id: '', count: 0 }] = products.filter((pr) => pr.id === product.id);

    if (concreteProduct.id) {
      concreteProduct.count += product.count;
    } else {
      concreteProduct.id = product.id;
      concreteProduct.count = product.count;
    }

    const isInCart = products.find((pr) => pr.id === concreteProduct.id);
    let updatedProducts = [] as Product[];
    if (isInCart) {
      updatedProducts = products.map((pr) => (pr.id === concreteProduct.id ? concreteProduct : pr));
    } else {
      updatedProducts = [...products, concreteProduct];
    }

    concreteCart.products = updatedProducts;
    const updatedCarts = carts.map((cr) => (cr.user === concreteCart.user ? concreteCart : cr));
    storageWorker.set('cart', updatedCarts);

    const response = concreteCart.products.map((pr) => {
      const { data } = productService.getByParams({ id: pr.id });
      return {
        count: pr.count,
        product: data[0]
      };
    });

    return { data: response as T[] };
  }

  public remove<T extends ICartResponse>(userId: string, product: Product) {
    const carts = storageWorker.get<ICart>('cart');
    const [concreteCart] = carts.filter((cr) => cr.user === userId);

    const { products } = concreteCart;
    const [concreteProduct] = products.filter((pr) => pr.id === product.id);

    if (concreteProduct.id) {
      concreteProduct.count -= product.count;
      let updatedProducts = [] as Product[];

      if (concreteProduct.count <= 0) {
        updatedProducts = products.filter((pr) => pr.id !== concreteProduct.id);
      } else {
        updatedProducts = products.map((pr) =>
          pr.id === concreteProduct.id ? concreteProduct : pr
        );
      }

      concreteCart.products = updatedProducts;
      const updatedCarts = carts.map((cr) => (cr.user === concreteCart.user ? concreteCart : cr));

      storageWorker.set('cart', updatedCarts);

      const response = concreteCart.products.map((pr) => {
        const { data } = productService.getByParams({ id: pr.id });
        return {
          count: pr.count,
          product: data[0]
        };
      });

      return { data: response as T[] };
    }

    return { data: [] };
  }

  public removeAll(userId: string) {
    const carts = storageWorker.get<ICart>('cart');
    const [concreteCart] = carts.filter((cr) => cr.user === userId);

    concreteCart.products = [];
    const updatedCarts = carts.map((cr) => (cr.user === concreteCart.user ? concreteCart : cr));
    storageWorker.set('cart', updatedCarts);
    return { data: concreteCart.products };
  }

  private init() {
    const carts = cartJson.cart;
    storageWorker.set('cart', carts);
  }
}

const cartService = new Cart();

export type { ICart, Product, ICartResponse };
export { cartService };
