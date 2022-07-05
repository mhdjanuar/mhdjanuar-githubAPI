import { configureStore } from '@reduxjs/toolkit';
import userSlices from './slices/usersSlices';

/**
 * Creates a store and includes all the slices as reducers.
 */
export const store = configureStore({
    reducer: {
      user: userSlices,
    },
  });

export default store