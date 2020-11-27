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



// user login and register
export const loginUser = gql`
    mutation loginUser($email:String!, $password:String!){
        Login(email:$email, password:$password){
            accessToken
        }
    }
`
export const registerUser = gql`
    mutation registerUser($name:String!, $email:String!,$password:String!) {
        Register(name:$name, email:$email, password:$password)
    }
`