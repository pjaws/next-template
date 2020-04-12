import { createGlobalStyle } from 'styled-components';

import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
	/* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul,
  ol {
    padding: 0;
  }

  /* Remove default margin */
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  /* Set core body defaults */
  body {
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.body};
    line-height: ${theme.lineHeights.body};
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  body:::before {
    content:"";
    width:100%;
    height:100%;
    display:block;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.heading};
    line-height: ${theme.lineHeights.heading};
    text-rendering: optimizeLegibility;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul,
  ol {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not() {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: ${theme.lineHeights.body};
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
