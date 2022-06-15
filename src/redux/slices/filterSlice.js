import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },

    setSort(state, action) {
      state.sort = action.payload;
    },

    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.categoryId = action.payload.categoryId;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setCategoryId, setSort, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
