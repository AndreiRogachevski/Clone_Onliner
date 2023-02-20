import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const productsApi = {
  fetchProducts: createAsyncThunk('products/fetchProducts', async () => {
    return axios
      .get(
        'https://dummyjson.com/products?select=id,thumbnail,price,discountPercentage'
      )
      .then((res) => res.data);
  }),
};
