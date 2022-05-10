import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movies, MovieSliceState } from '../../types/movie';
import { fetchMovies } from '../actions/movie';

const initialState: MovieSliceState = {
  isLoading: false,
  error: '',
  movies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled.type]: (state, action: PayloadAction<Movies[]>) => {
      state.isLoading = false;
      state.error = '';
      state.movies = [...state.movies, ...action.payload];
    },
    [fetchMovies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
