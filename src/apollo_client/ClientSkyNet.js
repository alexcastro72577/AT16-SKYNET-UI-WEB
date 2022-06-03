import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'

const clientSkyNet = new ApolloClient({
    link: createUploadLink({
      uri: process.env.REACT_APP_GRAPHQL_SKYNET
    }),
    cache: new InMemoryCache(),
})

export default clientSkyNet
