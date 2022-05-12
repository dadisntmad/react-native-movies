import { Movies } from './movie';

export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  Search: undefined;
  Upcoming: undefined;
  Detailed: {
    movie: Movies;
  };
};
