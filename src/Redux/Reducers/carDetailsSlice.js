/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarById = createAsyncThunk('houses/fetchCarById', async (id) => {
  const response = await axios.get(`http://localhost:4000/api/v1/cars/${id}`);
  return response.data;
});

const carSlice = createSlice({
  name: 'car',
  initialState: { car: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.house = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default carSlice.reducer;