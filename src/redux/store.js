import { configureStore } from '@reduxjs/toolkit';
import rent from './rent/reducer';

export const store = configureStore({
  reducer: {
    rent,
  },
});
