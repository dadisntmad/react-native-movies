import axios from 'axios';
import { API_TOKEN } from 'react-native-dotenv';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async (page: number = 1, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}&language=en-US&page=${page}`,
      );
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchSimilarMovies = createAsyncThunk(
  'movie/fetchSimilarMovies',
  async (movieId: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_TOKEN}&language=en-US&page=1`,
      );
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
