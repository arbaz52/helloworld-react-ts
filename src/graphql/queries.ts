import { gql } from "@apollo/client";

export const fetchUsers = gql`
    query fetchUsers {
        people: users {
        id
        name
        email
        phone
        gender
        country
    }
}
`