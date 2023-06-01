import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
import carsReducer from './Reducers/carSlice';
import carReducer from './Reducers/carDetailsSlice';
import signUpReducer from './Reducers/regSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: signUpReducer,
    cars: carsReducer,
    carDetail: carReducer,
  },
});

export default store;
