import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  left: {
    flexDirection: 'row',
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#666',
  },
});

export default styles;
