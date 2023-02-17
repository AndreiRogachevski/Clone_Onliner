import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    posts: postsReducer,
  },
});
