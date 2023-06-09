/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createCar = createAsyncThunk('cars/create', async (formData) => {
  const response = await axios.post('https://luxury-cars-lending-backend.onrender.com/api/v1/cars', { car: formData });
  return response.data;
});

export const deleteCar = createAsyncThunk(
  'cars/deleteCar',
  async (carId) => {
    const response = await axios.delete(`https://luxury-cars-lending-backend.onrender.com/api/v1/cars/${carId}`);
    return response.data;
  },
);
const addCarSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCar.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = state.cars.filter((car) => car.id !== action.payload.id);
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default addCarSlice.reducer;
