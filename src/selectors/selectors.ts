import { RootState } from '../redux/store';

export const selectMovies = ({ movie }: RootState) => movie.movies;
export const selectIsLoading = ({ movie }: RootState) => movie.isLoading;
