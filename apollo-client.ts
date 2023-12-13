import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
  const client = new ApolloClient({
    uri: "https://vyazma.stepzen.net/api/bald-alligator/__graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `apiKey vyazma::stepzen.net+1000::8cfa9476eb05b52fdad9f325a64c690fd317a5a0721bc1b2f20ec9337c2201e6`,
    },
  });
  return client;
};
