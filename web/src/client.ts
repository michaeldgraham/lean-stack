
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

const uri =
  'http://localhost:4001/graphql';

export const link = new HttpLink({ uri });

const cache =
  new InMemoryCache();

export const client =
  new ApolloClient({ cache, link });
