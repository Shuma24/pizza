import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLs } from '../../../utils/getCartLs';
import { calcTotalPrice } from '../../../utils/calcTotalPirce';
import { cartItem, IState } from './types';

const initialState: IState = getCartFromLs();

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

      state.totalPrice = calcTotalPrice(state.product);
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

export const { addProduct, removeProduct, clearProduct, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
