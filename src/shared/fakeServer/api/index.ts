import { cartService, ICartResponse, Product } from '../modals/cart';
import { categoryService, ICategory } from '../modals/category';
import { IProduct, ISeachParamsOfProduct, productService } from '../modals/product';
import { INewUser, IUser, userService } from '../modals/user';

/** ****************** USER ******************* */

const user = {
  get<T extends Partial<IUser>>(params?: Partial<IUser>): Promise<{ data: T[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (params === undefined) {
          resolve(userService.getAll());
        } else {
          resolve(userService.getByParams(params));
        }
      }, 500);
    });
  },

  post<T extends IUser>(params: INewUser): Promise<{ data: T }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userService.create<T>(params));
      }, 500);
    });
  },

  put<T extends Partial<IUser>>(id: string, params: Partial<IUser>): Promise<{ data: T }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userService.update(id, params));
      }, 500);
    });
  }
};

/** ****************** PRODUCT ******************* */

type ProductParams = Partial<IProduct | ISeachParamsOfProduct>;
const product = {
  get<T extends IProduct>(params?: ProductParams): Promise<{ data: T[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (params === undefined) {
          resolve(productService.getAll<T>());
        } else {
          resolve(productService.getByParams<T>(params));
        }
      }, 500);
    });
  },

  put<T extends IProduct>(userId: string, productId: string): Promise<{ data: T }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productService.toggleLike(userId, productId));
      }, 500);
    });
  }
};

/** ****************** Category ******************* */

const category = {
  get<T extends ICategory>(): Promise<{ data: T[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryService.getAll<T>());
      }, 500);
    });
  }
};

/** ****************** CART ******************* */

type CartData = {
  userId: string;
  product: Product;
};

type CartCommand = 'increment' | 'decrement' | 'clear';
const cart = {
  post(userId: string) {
    cartService.create(userId);
  },

  get<T extends ICartResponse>(userId: string): Promise<{ data: T[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cartService.get(userId));
      }, 500);
    });
  },

  put<T extends ICartResponse>(command: CartCommand, cartData: CartData): Promise<{ data: T[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (command === 'increment') {
          resolve(cartService.add(cartData.userId, cartData.product));
        }
        if (command === 'decrement') {
          resolve(cartService.remove(cartData.userId, cartData.product));
        }
      }, 500);
    });
  }
};

const initFakeServer = () => {
  return {
    userService,
    productService,
    categoryService,
    cartService
  };
};

export { initFakeServer, user, product, cart, category };
