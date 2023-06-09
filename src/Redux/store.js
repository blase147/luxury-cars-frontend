import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
import carsReducer from './Reducers/carSlice';
import carReducer from './Reducers/carDetailsSlice';
import signUpReducer from './Reducers/regSlice';
import reservationsReducer from './Reducers/reservationsSlice';
import addCarReducer from './Reducers/addCarSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: signUpReducer,
    cars: carsReducer,
    carDetail: carReducer,
    reservations: reservationsReducer,
    addCar: addCarReducer,
  },
});

export default store;
