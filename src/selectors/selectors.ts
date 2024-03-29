import { RootState } from '../redux/store';

export const selectMovies = ({ movie }: RootState) => movie.movies;
export const selectIsLoading = ({ movie }: RootState) => movie.isLoading;
export const selectSimilarMovies = ({ movie }: RootState) => movie.similarMovies;
export const selectSearchTerm = ({ movie }: RootState) => movie.searchTerm;
export const selectSearchMovies = ({ movie }: RootState) => movie.searchMovies;
export const selectUpcomingMovies = ({ movie }: RootState) => movie.upcomingMovies;
