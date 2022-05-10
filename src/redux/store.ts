import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './reducers/movieSlice';

const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
