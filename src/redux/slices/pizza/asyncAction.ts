import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Params, pizza } from './types';

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
