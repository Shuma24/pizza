import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type cartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: string;
  count: number;
  sizes: number;
};

interface IState {
  totalPrice: number;
  product: cartItem[];
}

const initialState: IState = {
  totalPrice: 0,
  product: [],
};

const cartSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<cartItem>) {
      const findProduct = state.product.find((obj) => obj.id === action.payload.id);

      if (findProduct) {
        findProduct.count++;
      } else {
        state.product.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.product.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, action: PayloadAction<string>) {
      const findProduct = state.product.find((obj) => obj.id === action.payload);
      if (findProduct) {
        if (findProduct.count > 1) {
          findProduct.count--;
          state.totalPrice = state.totalPrice - findProduct.price;
        } else {
          findProduct.count = 1;
        }
      }
    },
    removeProduct(state, action: PayloadAction<string>) {
      const findProduct = state.product.find((obj) => obj.id === action.payload);
      if (findProduct) {
        state.totalPrice = state.totalPrice - findProduct.price;
        state.product = state.product.filter((obj) => obj.id !== action.payload);
      }
    },

    clearProduct(state) {
      state.product = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;

export const cartSelectorById = (id: string) => (state: RootState) =>
  state.cart.product.find((obj) => obj.id === id);

export const { addProduct, removeProduct, clearProduct, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
