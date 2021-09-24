import {Dimensions} from 'react-native';
export const colors = {
  primary: '#ff4824', /* color principal */
  primaryLigth: 'rgba(255, 72, 36, 0.5)', /* color secundario */
  primaryDark: '#2330d7',
  accent: '#006099',
  accentLight: '#ec4a4f',  /* color secundario -Seed */
  white: '#ffffff',
  whiteLight: 'rgba(255, 255, 255, 0.1)',
  black: '#121212',
  blackLigth: '#c9c5c5',
  blackTransparent: 'rgba(0,0,0,0.8)',
  blackTransparentLight: 'rgba(0,0,0,0.3)',
  gray: '#cfd8dc',
  lightGray: '#eceff1',
  error: '#B00020',
  pink: '#fce4ec'
};

export const borderRadius = (percentage: number) =>
  `${(Dimensions.get('window').width * percentage) / 100}px`;
