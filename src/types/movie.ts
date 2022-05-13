export type MovieSliceState = {
  isLoading: boolean;
  error: string;
  movies: Movies[];
  similarMovies: Movies[];
  searchTerm: string;
  searchMovies: Movies[];
  upcomingMovies: Movies[];
};

export type Movies = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
};
