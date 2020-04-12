const theme = {
  breakpoints: ['36em', '48em', '64em', '78em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80],
  colors: {
    primary: '#171717',
    text: '#333',
    gray: '#666',
    grayLight: '#C2C2C2',
    grayLighter: '#E5E5E5',
    offWhite: '#F8F8F8',
    white: '#fff',
    purple: '#6E1EFF',
    purpleLight: '#D3BBFF',
    purpleLighter: '#F8F3FF',
    green: '#0EDA83',
    yellow: '#F1AF1B',
    red: '#F7625A',
  },
  space: [0, 4, 8, 16, 32, 64, 96, 128, 256],
  fonts: {
    body: 'acumin-pro, sans-serif',
    heading: 'acumin-pro, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      ':hover': {
        bg: 'purple',
      },
    },
  },
};

theme.mediaQueries = {
  sm: `@media screen and (min-width: ${theme.breakpoints[0]})`,
  md: `@media screen and (min-width: ${theme.breakpoints[1]})`,
  lg: `@media screen and (min-width: ${theme.breakpoints[2]})`,
  xl: `@media screen and (min-width: ${theme.breakpoints[3]})`,
};

export default theme;
