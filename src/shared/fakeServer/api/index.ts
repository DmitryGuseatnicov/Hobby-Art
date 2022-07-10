import { CartService, Product } from '../modals/cart';
import { Category } from '../modals/category';
import { IProduct, ISeachParamsOfProduct, ProductService } from '../modals/product';
import { INewUser, IUser, UserService } from '../modals/user';

const userService = new UserService();
const productService = new ProductService();
const cartService = new CartService();
const categoryService = new Category();

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

  put<T extends IUser>(id: string, params: Partial<IUser>): Promise<{ data: T }> {
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

type CategoryCommand = 'filter' | 'info';
const category = {
  get(command: CategoryCommand, categoryName: string) {
    if (command === 'filter') {
      return categoryService.getFilterParams(categoryName);
    }
    return categoryService.getAll();
  }
};

/** ****************** CART ******************* */

type CartData = {
  userId: string;
  // FIX-ME Product type
  product: Product;
};

type CartCommand = 'increment' | 'decrement' | 'clear';
const cart = {
  post(userId: string) {
    cartService.create(userId);
  },

  // Fix-ME make distract of card Data
  put(command: CartCommand, cartData: CartData) {
    if (command === 'increment') {
      return cartService.add(cartData.userId, cartData.product);
    }
    if (command === 'decrement') {
      return cartService.remove(cartData.userId, cartData.product);
    }
    if (command === 'clear') {
      return cartService.remove(cartData.userId, cartData.product);
    }
    return undefined;
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
