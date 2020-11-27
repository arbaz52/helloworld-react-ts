import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://10.38.255.115:4000/graphql",
    cache: new InMemoryCache()
})

export default client;