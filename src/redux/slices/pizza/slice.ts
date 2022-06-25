import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from './asyncAction';
import { IPizzaState, Status } from './types';

const initialState: IPizzaState = {
  pizza: [],
  status: Status.PENDING,
};

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

export const { setPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
