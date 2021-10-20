import { ApolloProvider as Provider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { PropsWithChildren } from "react";

import { fireAuth } from "../../utils/Firebase/config";

// GraphQL APIのエンドポイントを指定する
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_END_POINT_ORIGIN,
});

const authLink = setContext(async () => {
  const token = await fireAuth.currentUser?.getIdToken(true);

  // Bearerトークンでトークンを送信する
  // headersのプロパティは`Authorization`
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return { headers };
  // return {
  //   headers: {
  //     "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET_KEY,
  //   }
  // }
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export const ApolloProvider = ({ children }: PropsWithChildren<{}>) => {
  return <Provider client={apolloClient}>{children}</Provider>
}