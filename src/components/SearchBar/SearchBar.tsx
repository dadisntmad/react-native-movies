import React from 'react';
import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchMovie } from '../../redux/actions/movie';
import { setSearchTerm } from '../../redux/reducers/movieSlice';
import { selectSearchTerm } from '../../selectors/selectors';

import styles from './styles';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSubmit = () => {
    dispatch(fetchSearchMovie(searchTerm));
    dispatch(setSearchTerm(''));
  };

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Search..."
      returnKeyType="search"
      placeholderTextColor="white"
      value={searchTerm}
      onChangeText={(text) => dispatch(setSearchTerm(text))}
      onSubmitEditing={onSubmit}
    />
  );
};
