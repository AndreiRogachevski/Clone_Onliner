import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../../API/productAPI';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsApi.fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productsApi.fetchProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload.products;
      });
  },
});

export const selectProducts = (state) => state.products.data;

export default productSlice.reducer;
