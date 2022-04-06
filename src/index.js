import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/Theme';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Root from './Root';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
