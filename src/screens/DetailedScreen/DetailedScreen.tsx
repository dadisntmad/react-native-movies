import React, { useEffect } from 'react';
import { View, Text, Image, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { Movie } from '../../components/Movie/Movie';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectSimilarMovies } from '../../selectors/selectors';
import { fetchSimilarMovies } from '../../redux/actions/movie';

import { Entypo } from '@expo/vector-icons';

import styles from './styles';

const IMAGE = 'https://image.tmdb.org/t/p/original';

type DetailedScreenRouteProp = RouteProp<RootStackParamList, 'Detailed'>;

export const DetailedScreen = () => {
  const route = useRoute<DetailedScreenRouteProp>();
  const dispatch = useDispatch();

  const similarMovies = useSelector(selectSimilarMovies);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchSimilarMovies(route.params.movie.id));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: IMAGE + route.params.movie.poster_path }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Entypo name="controller-play" size={24} color="black" />
          <Text>Play</Text>
        </Pressable>
      </View>
      <View style={styles.similarMovies}>
        <FlatList
          data={similarMovies}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <Movie movie={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<MovieDetails route={route} />}
          refreshing={isLoading}
          ListFooterComponent={<ActivityIndicator size="small" />}
          onEndReached={() => dispatch(fetchSimilarMovies(similarMovies.length / 20 + 1))}
        />
      </View>
    </View>
  );
};
