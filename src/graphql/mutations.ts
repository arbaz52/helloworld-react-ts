import { gql } from "@apollo/client";

export const deleteUser = gql`
    mutation deleteUser($id: ID!){
        deleteUser(id: $id){
        id
        name
        email
        }
    }
`;

export const updateUser = gql`
    mutation updateUser($user: UserInput){
        updateUser(uinput: $user){
        id
        name
        email
        }
    }
`

export const addUser = gql`
    mutation addUser($user: UserInput) {
        addUser(input: $user) {
            id
        name
        email
        }
    }
`