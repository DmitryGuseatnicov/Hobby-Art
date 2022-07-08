import { CartService, Product } from '../modals/cart';
import { IProduct, ProductService } from '../modals/product';
import { INewUser, IUser, UserService } from '../modals/user';

const userService = new UserService();
const productService = new ProductService();
const cartService = new CartService();

const user = {
  get<T>(params?: Partial<IUser>): Promise<{ data: T[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (params === undefined) {
          resolve(userService.getAll());
        } else {
          resolve(userService.getByParams(params));
        }
      });
    });
  },

  post(params: INewUser) {
    return userService.create(params);
  },

  put(id: string, params: Partial<IUser>) {
    return userService.update(id, params);
  }
};

const product = {
  get(params?: Partial<IProduct>) {
    if (params === undefined) {
      return productService.getAll();
    }
    return productService.getByParams(params);
  },

  put(userId: string, productId: string) {
    return productService.toggleLike(userId, productId);
  }
};

type CartData = {
  event: 'increment' | 'decrement' | 'clear';
  product: Product;
};
const cart = {
  post(userId: string) {
    cartService.create(userId);
  },

  put(userId: string, cartData: CartData) {
    if (cartData.event === 'increment') {
      return cartService.add(userId, cartData.product);
    }
    if (cartData.event === 'decrement') {
      return cartService.remove(userId, cartData.product);
    }
    if (cartData.event === 'clear') {
      return cartService.remove(userId, cartData.product);
    }
    return undefined;
  }
};

const initFakeServer = () => {
  return {
    userService,
    productService,
    cartService
  };
};

export { initFakeServer, user, product, cart };
