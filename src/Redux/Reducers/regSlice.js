/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/* eslint-disable camelcase */
export const signUp = createAsyncThunk('user/signUp', async ({ full_name, email, password }) => {
  const response = await axios.post('https://luxury-cars-lending-backend.onrender.com/signup', {
    user: { full_name, email, password },
  });
  return response.data;
});

const signUpSlice = createSlice({
  name: 'user',
  initialState: {
    data: null, status: 'idle', error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default signUpSlice.reducer;
