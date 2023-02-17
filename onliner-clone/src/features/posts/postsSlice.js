import { createSlice } from '@reduxjs/toolkit';
import { postsApi } from '../../API/PostsAPI';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsApi.fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postsApi.fetchPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload.posts;
      });
  },
});

export const selectPosts = (state) => state.posts.data;

export default postsSlice.reducer;
