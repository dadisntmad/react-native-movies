import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { Movie } from '../../components/Movie/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../../redux/actions/movie';
import { selectIsLoading, selectUpcomingMovies } from '../../selectors/selectors';

import styles from './styles';

export const UpcomingMovieScreen = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(selectUpcomingMovies);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.soonTitle}>Upcoming</Text>
      <View style={styles.movieContainer}>
        <FlatList
          data={upcomingMovies}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => <Movie movie={item} />}
          numColumns={2}
          refreshing={isLoading}
          onEndReached={() => dispatch(fetchUpcomingMovies(upcomingMovies.length / 20 + 1))}
          ListFooterComponent={<ActivityIndicator size="small" />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
