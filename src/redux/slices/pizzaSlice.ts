import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
};

enum Status {
  PENDING = 'pending',
  FULLFILED = 'fulfilled',
  REJECTED = 'rejected',
}

interface IPizzaState {
  pizza: pizza[];
  status: Status;
}

const initialState: IPizzaState = {
  pizza: [],
  status: Status.PENDING,
};

interface Params {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: string;
}

export const fetchPizzas = createAsyncThunk<pizza[], Params>(
  'pizza/fetchByStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<pizza[]>(
      `https://62a3ae4f21232ff9b22442a9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizza(state, action) {
      state.pizza = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.PENDING;
      state.pizza = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizza = action.payload;
      state.status = Status.FULLFILED;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.REJECTED;
      state.pizza = [];
    });
  },
});

export const pizzaSelector = (state: RootState) => state.pizza;

export const { setPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
