import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userApi = {
  login: createAsyncThunk('user/login', async (payload) => {
    return await axios
      .post('https://dummyjson.com/auth/login', JSON.stringify(payload), {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => res.data);
  }),
};
