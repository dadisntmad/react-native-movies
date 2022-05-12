import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Movies } from '../../types/movie';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './styles';

const IMAGE = 'https://image.tmdb.org/t/p/w200';

type MovieProps = {
  movie: Movies;
};

export const Movie = ({ movie }: MovieProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onDetailedView = () => {
    navigation.navigate('Detailed', {
      movie,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onDetailedView}>
        <>
          <Image source={{ uri: IMAGE + movie.poster_path }} style={styles.image} />
          <Text style={styles.title}>{movie.title}</Text>
        </>
      </Pressable>
    </View>
  );
};
