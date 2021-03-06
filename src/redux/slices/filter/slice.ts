import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterState, Sort } from './types';

const initialState: IFilterState = {
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
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },

    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },

    setSearch(state, action: any) {
      state.searchValue = action.payload;
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },

    setFilters(state, action: any) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const { setCategoryId, setSort, setFilters, setCurrentPage, setSearch } =
  filterSlice.actions;

export default filterSlice.reducer;
