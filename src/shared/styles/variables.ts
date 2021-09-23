import {Dimensions} from 'react-native';
export const colors = {
  primary: '#ed3237', /* color principal */
  primaryLigth: '#434242', /* color secundario */
  primaryDark: '#2330d7',
  accent: '#006099',
  accentLight: '#ec4a4f',  /* color secundario -Seed */
  white: '#ffffff',
  whiteDark: '#ebe8e8',
  black: '#121212',
  blackLigth: '#c9c5c5',
  blackTransparent: 'rgba(0,0,0,0.8)',
  blackTransparentLight: 'rgba(0,0,0,0.3)',
  gray: '#cfd8dc',
  lightGray: '#eceff1',
  error: 'rgba(221, 44, 0, 0.87)',
  pink: '#fce4ec'
};

export const borderRadius = (percentage: number) =>
  `${(Dimensions.get('window').width * percentage) / 100}px`;
