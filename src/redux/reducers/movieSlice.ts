import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movies, MovieSliceState } from '../../types/movie';
import { fetchMovies, fetchSimilarMovies } from '../actions/movie';

const initialState: MovieSliceState = {
  isLoading: false,
  error: '',
  movies: [],
  similarMovies: [],
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
    [fetchSimilarMovies.fulfilled.type]: (state, action: PayloadAction<Movies[]>) => {
      state.isLoading = false;
      state.error = '';
      state.similarMovies = [...state.similarMovies, ...action.payload];
    },
    [fetchSimilarMovies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSimilarMovies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
