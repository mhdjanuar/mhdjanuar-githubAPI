import { configureStore } from '@reduxjs/toolkit';
import reposSlice from './slices/repoSlices';

/**
 * Creates a store and includes all the slices as reducers.
 */
export const store = configureStore({
    reducer: {
      repos: reposSlice,
    },
  });

export default store