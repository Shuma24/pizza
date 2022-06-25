import { RootState } from '../../store';

export const cartSelector = (state: RootState) => state.cart;

export const cartSelectorById = (id: string) => (state: RootState) =>
  state.cart.product.find((obj: { id: string }) => obj.id === id);
