import { cartItem } from '../redux/slices/cart/types';
import { calcTotalPrice } from './calcTotalPirce';

export const getCartFromLs = () => {
  const data = localStorage.getItem('cart');
  const product = data ? JSON.parse(data) : [];
  const totalPrice: number = calcTotalPrice(product);

  return {
    product: product as cartItem[],
    totalPrice,
  };
};
