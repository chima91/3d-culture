import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from 'react-router-dom';

import { RootRouter } from './Route';
import GlobalStyle from './GlobalStyle';

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RootRouter />
        <CssBaseline />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);