import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'contain',
    marginBottom: 14,
  },
  icon: {
    alignSelf: 'flex-end',
    marginVertical: 48,
    marginHorizontal: 14,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 14,
    paddingHorizontal: 14,
  },
});

export default styles;
