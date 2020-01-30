import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
  boxWidth: width * 0.9,
  boxHeight: height * 0.13,
};

export const colors = {
  primary: '#17519d',
  secondary: 'red',
  button: 'black',
  grey: '#6a6a6a',
  secondaryTwo: '#78c22d',
  background: '#EEEEEE',
  white: '#fff',
  black: '#000',
  monochromatic: '#2f7cd9',
};
export const button = {
  colors: {
    monochromatic: '#2f7cd9',
  },
  radius: {
    sm: 5,
    md: 10,
    lg: 30,
    xl: 40,
  },
  TopUpWidth: width * 0.83,
  TopUpHeight: height * 0.055,
};

export const heightScale = {
  header: height * 0.1,
  headerInfo: height * 0.13,
  icon: height * 0.01,
  investmentBreakdown: height * 0.43,
  breakdownBoxHeight: height * 0.3,
  breakdownBoxWidth: width * 0.92,
};
export const appBorderRadius = {
  thin: width * 0.02,
  sm: width * 0.04,
  md: width * 0.8,
  lg: width * 0.15,
  xl: width * 0.2,
};
export const padding = {
  thin: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const componentShadow = {
  color: '#000',
  boxradius: 5,
  offset: {
    width: 0,
    height: 2,
  },
  opacity: 0.29,
  radius: 3.84,
  elevation: 4,
};

// ALl font styles throughout the AddyFlex mobile Application
export const font = {
  xsm: 12,
  sm: 14,
  reg: 16,
  md: 18,
  lg: 20,
  xl: 30,
  family: 'Gill Sans',
  bold: '700',
  extraBold: '800',
  regular: '500',
  thin: '300',
};
