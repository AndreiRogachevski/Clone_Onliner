import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postsApi = {
  fetchPosts: createAsyncThunk('posts/fetchPosts', async () => {
    return axios.get('https://dummyjson.com/posts?limit=0').then((res) => res.data);
  }),
};
