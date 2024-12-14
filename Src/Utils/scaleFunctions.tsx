import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = width / 375;
const verticalScaleFactor = height / 667;
const diagonalScale = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 1000; //

export function scaleDimens(value:any) {
  return value * diagonalScale;
}

export function horizontalScale(value:any) {
  return value * scale;
}

export function verticalScale(value:any) {
  return value * verticalScaleFactor;
}

export function moderateScale(value:any, factor = 0.5) {
  return value + (diagonalScale * factor);
}
