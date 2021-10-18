import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RecoilRoot } from "recoil";

import { RootRouter } from './Route';
import GlobalStyle from './GlobalStyle';

const theme = createTheme();

// GraphQL APIのエンドポイントを指定する
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_END_POINT_ORIGIN,
});

const authLink = setContext(async () => {
  return {
    headers: {
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET_KEY,
    }
  }
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <RootRouter />
            <CssBaseline />
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);