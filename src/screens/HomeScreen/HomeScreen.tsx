import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Movie } from '../../components/Movie/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectMovies } from '../../selectors/selectors';
import { fetchMovies } from '../../redux/actions/movie';

import styles from './styles';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Movie movie={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header}
        onEndReached={() => dispatch(fetchMovies(movies.length / 20 + 1))}
        refreshing={isLoading}
        ListFooterComponent={<ActivityIndicator size="small" />}
      />
    </View>
  );
};
