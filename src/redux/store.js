import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/filterSlice';

export default configureStore({
  reducer: { counter: counterSlice },
});
