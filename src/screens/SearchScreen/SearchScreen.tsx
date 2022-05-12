import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Movie } from '../../components/Movie/Movie';
import { useSelector } from 'react-redux';
import { selectSearchMovies } from '../../selectors/selectors';

import styles from './styles';

export const SearchScreen = () => {
  const movies = useSelector(selectSearchMovies);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <FlatList
        data={movies}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Movie movie={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
