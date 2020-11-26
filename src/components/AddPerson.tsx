import { useNavigate } from '@reach/router';
import React, { useContext } from 'react';
import { Person } from '../customTypes';
import { Container } from '../elements/Container';
import { PeopleContext } from '../graphql/ContextProvider';
import UserInfoForm from './UserInfoForm';
const AddPerson = () => {
    const navigate = useNavigate()
    const { addPerson } = useContext(PeopleContext);


    const handleFormSubmission = (person: Person) => {
        addPerson(person).then(() => {
            navigate("/")
        })
    }
    const initialValues: Person = {
        name: "",
        country: "",
        email: "",
        gender: "",
        phone: ""
    }

    console.log("Component: AddPerson = render")
    return (
        <Container>
            <UserInfoForm action="ADD" handleFormSubmission={handleFormSubmission} initialValues={initialValues} />
        </Container>
    )
}

export default AddPerson