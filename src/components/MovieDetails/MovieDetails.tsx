import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

import styles from './styles';

type MovieDetailsProps = {
  route: RouteProp<RootStackParamList, 'Detailed'>;
};

export const MovieDetails = ({ route }: MovieDetailsProps) => {
  return (
    <View style={styles.movieContainer}>
      <Text style={styles.title}>{route.params.movie.title}</Text>
      <Text style={styles.releaseDate}>Year: {route.params.movie.release_date.slice(0, 4)}</Text>
      <Text style={styles.rating}>Rating: {route.params.movie.vote_average}</Text>
      <Text style={styles.overview}>{route.params.movie.overview}</Text>
      <Text style={styles.similarMoviesText}>Similar</Text>
    </View>
  );
};
