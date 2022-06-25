export type cartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: string;
  count: number;
  sizes: number;
};

export interface IState {
  totalPrice: number;
  product: cartItem[];
}
