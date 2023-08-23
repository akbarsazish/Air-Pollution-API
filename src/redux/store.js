import { configureStore } from '@reduxjs/toolkit';
import pollutionReducer from './slice';

export default configureStore({
  reducer: {
    pollution: pollutionReducer,
  },
});
