import { cartItem } from '../redux/slices/cart/types';

export const calcTotalPrice = (product: cartItem[]) => {
  return product.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
