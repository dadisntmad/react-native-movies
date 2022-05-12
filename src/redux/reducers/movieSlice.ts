import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movies, MovieSliceState } from '../../types/movie';
import { fetchMovies, fetchSearchMovie, fetchSimilarMovies } from '../actions/movie';

const initialState: MovieSliceState = {
  isLoading: false,
  error: '',
  movies: [],
  similarMovies: [],
  searchTerm: '',
  searchMovies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
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
    [fetchSearchMovie.fulfilled.type]: (state, action: PayloadAction<Movies[]>) => {
      state.isLoading = false;
      state.error = '';
      state.searchMovies = action.payload;
    },
    [fetchSearchMovie.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSearchMovie.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setSearchTerm } = movieSlice.actions;

export default movieSlice.reducer;
