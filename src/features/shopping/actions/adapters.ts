import { cartModel } from 'entities/cart';

type CartResponse = {
  count: number;
  product: {
    id: string;
    price: string;
    descriptions: string;
    type: string;
    sku: string;
    weight?: string;
    length?: string;
    brand: string;
    composition?: string;
    country?: string;
    colors: Array<string>;
    likes: Array<string>;
    category: string;
    img: string;
    tag: Array<string>;
  };
};

const cartAdapter = (response: CartResponse[]): cartModel.ICartProduct[] => {
  return response.map((product) => {
    const { count, product: pr } = product;
    return {
      count,
      product: {
        id: pr.id,
        img: pr.img,
        price: pr.price,
        title: `${pr.type} ${pr.brand}, ${pr.sku}`
      }
    };
  });
};

export { cartAdapter };
