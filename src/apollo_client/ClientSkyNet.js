import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const clientSkyNet = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_SKYNET,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    cache: new InMemoryCache(),
})

export default clientSkyNet
