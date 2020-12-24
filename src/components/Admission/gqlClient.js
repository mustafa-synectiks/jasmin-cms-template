import { ApolloClient, InMemoryCache } from '@apollo/client';
export const gqlClient = new ApolloClient({
  uri: "http://100.81.5.26:9094/graphql",
  cache: new InMemoryCache()
});