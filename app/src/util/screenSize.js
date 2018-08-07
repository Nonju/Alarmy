import { Dimensions } from 'react-native';

const getWindow = () => Dimensions.get('window');

export const getWidth = () => getWindow().width;
export const getHeight = () => getWindow().height;

export default () => ({ // getSizes
  width: getWidth(),
  height: getHeight(),
});

