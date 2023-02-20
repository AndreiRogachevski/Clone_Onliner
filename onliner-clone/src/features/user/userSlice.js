import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../API/userAPI';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: '',
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userApi.login.pending, (state, action) => {})
      .addCase(userApi.login.fulfilled, (state, action) => {
        state.data = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(userApi.login.rejected, (state, action) => {
        console.log('rejected: ', state);
        console.log('rejected: ', action.payload);
      });
  },
});

export const selectUser = (state) => state.user.data;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
