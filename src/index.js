import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/Theme';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Root from './Root';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
