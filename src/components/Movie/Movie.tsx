import React from 'react';
import { View, Text, Image } from 'react-native';
import { Movies } from '../../types/movie';

import styles from './styles';

const IMAGE = 'https://image.tmdb.org/t/p/w200';

type MovieProps = {
  movie: Movies;
};

export const Movie = ({ movie }: MovieProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: IMAGE + movie.poster_path }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
};
