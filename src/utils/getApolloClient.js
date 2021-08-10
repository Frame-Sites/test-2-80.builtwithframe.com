import { ApolloClient, InMemoryCache } from '@apollo/client';

const getApolloClient = () => {
  const client = new ApolloClient({
    uri: process.env.GATSBY_API_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      'x-api-key': process.env.GATSBY_API_KEY,
    },
  });
  return client;
};

export default getApolloClient;
