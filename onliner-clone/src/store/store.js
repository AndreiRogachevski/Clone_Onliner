import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productSlice';
import postsReducer from '../features/posts/postsSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    posts: postsReducer,
    user: userReducer,
  },
});
