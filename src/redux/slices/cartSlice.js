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
      state.product = [...state.product, action.payload];
      state.totalPirce = state.product.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },

    removeProduct(state, action) {
      state.product.filter((obj) => obj.id !== action.payload);
    },

    clearProduct(state) {
      state.product = [];
    },
  },
});

export const { addProduct, removeProduct, clearProduct } = cartSlice.actions;

export default cartSlice.reducer;
