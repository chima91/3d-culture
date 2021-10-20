import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from "recoil";

import { RootRouter } from './Route';
import GlobalStyle from './GlobalStyle';
import { AuthStateListener } from './providers/AuthStateListener';
import { GlobalAccount } from './providers/GlobalAccount';
import { ApolloProvider } from './providers/ApolloClient';

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider>
        <ThemeProvider theme={theme}>
          <AuthStateListener>
            <GlobalAccount>
              <BrowserRouter>
                <RootRouter />
                <CssBaseline />
                <GlobalStyle />
              </BrowserRouter>
            </GlobalAccount>
          </AuthStateListener>
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);