import {StyleSheet} from 'react-native';
import {primaryColor} from '../styles';

export const headerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  addButton: {
    borderColor: primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 3,
    borderWidth: 1,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    borderLeftWidth: 3,
    paddingLeft: 10,
    borderLeftColor: primaryColor,
  },
  
});

