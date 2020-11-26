import React from 'react';
import { ApolloProvider } from "@apollo/client"
import { ReactNode } from "react"
import client from "./client"

export interface onlyChildren {
    children: ReactNode
}
const GraphQLPeopleProvider = (props: any) => (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
)



export default GraphQLPeopleProvider