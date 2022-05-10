import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

export const Header = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://img.championat.com/i/n/s/16451144601995604643.jpg',
        }}
        style={styles.image}>
        <AntDesign style={styles.icon} name="search1" size={28} color="white" />
      </ImageBackground>
      <Text style={styles.title}>Popular</Text>
    </View>
  );
};
