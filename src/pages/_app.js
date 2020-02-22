import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../utils/theme';
import GlobalStyle from '../components/GlobalStyle';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
