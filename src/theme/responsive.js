import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const isDeviceHeightSmall = () => {
  return SCREEN_HEIGHT <= 680;
};

export const isDeviceWidthSmall = () => {
  return SCREEN_WIDTH <= 370;
};
