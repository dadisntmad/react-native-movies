import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'cover',
    marginBottom: 24,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 14,
  },
  button: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 350,
    borderRadius: 5,
  },
  similarMovies: {
    flex: 1,
    paddingHorizontal: 14,
  },
});

export default styles;
