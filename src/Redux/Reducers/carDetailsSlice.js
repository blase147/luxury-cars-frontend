/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarById = createAsyncThunk('cars/fetchCarById', async (id) => {
  const response = await axios.get(`https://luxury-cars-lending-backend.onrender.com/api/v1/cars/${id}`);
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
        state.car = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default carSlice.reducer;
