import {StyleSheet} from 'react-native';
import {primaryColor} from '../styles';

export const chartStyles = StyleSheet.create({
  chart: {
    marginLeft: 15,
    borderRadius: 10,
  },
});

export const chartConfig = {
  backgroundColor: primaryColor,
  backgroundGradientFrom: primaryColor,
  backgroundGradientTo: '#FFA726',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};