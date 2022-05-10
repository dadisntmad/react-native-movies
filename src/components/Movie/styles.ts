import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    margin: -24,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    margin: 14,
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default styles;
