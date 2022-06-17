import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPirce: 0,
  product: [],
};

const cartSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addProduct(state, action) {
      const findProduct = state.product.find((obj) => obj.id === action.payload.id);

      if (findProduct) {
        findProduct.count++;
      } else {
        state.product.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPirce = state.product.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, action) {
      const findProduct = state.product.find((obj) => obj.id === action.payload.id);

      if (findProduct.count > 1) {
        findProduct.count--;
        state.totalPirce = state.totalPirce - findProduct.price;
      } else {
        findProduct.count = 1;
      }
    },
    removeProduct(state, action) {
      const findProduct = state.product.find((obj) => obj.id === action.payload);
      state.totalPirce = state.totalPirce - findProduct.price;

      state.product = state.product.filter((obj) => obj.id !== action.payload);
    },

    clearProduct(state) {
      state.product = [];
      state.totalPirce = 0;
    },
  },
});

export const { addProduct, removeProduct, clearProduct, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
