import { CartService, Product } from '../modals/cart';
import { Category } from '../modals/category';
import { IProduct, ProductService } from '../modals/product';
import { INewUser, IUser, UserService } from '../modals/user';

const userService = new UserService();
const productService = new ProductService();
const cartService = new CartService();
const categoryService = new Category();

const user = {
  get<T>(params?: Partial<IUser>): Promise<{ data: T[] }> {
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

  post(params: INewUser) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userService.create(params));
      }, 500);
    });
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

type CategoryCommand = 'filter' | 'info';
const category = {
  get(command: CategoryCommand, categoryName: string) {
    if (command === 'filter') {
      return categoryService.getFilterParams(categoryName);
    }
    return categoryService.getAll();
  }
};

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
