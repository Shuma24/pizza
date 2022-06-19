import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchByStatus', async (params) => {
  const { order, sortBy, category, search, currentPage } = params;
  const res = await axios.get(
    `https://62a3ae4f21232ff9b22442a9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return res.data;
});

const initialState = {
  pizza: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizza(state, action) {
      state.pizza = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'pending';
      state.pizza = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizza = action.payload;
      state.status = 'fulfilled';
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.pizza = [];
    },
  },
});

export const pizzaSelector = (state) => state.pizza;

export const { setPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
