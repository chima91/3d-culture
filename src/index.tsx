import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { RootRouter } from './Route';

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RootRouter />
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);