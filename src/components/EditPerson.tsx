import { useNavigate, useParams } from '@reach/router';
import React, { useContext, useMemo } from 'react';
import { PeopleContext } from '../App';
import { Person } from '../customTypes';
import { Container, NavigationButton, Centered } from '../elements/Container';
import UserInfoForm from './UserInfoForm';
const EditPerson = () => {
    const navigate = useNavigate()
    const { people, updatePerson } = useContext(PeopleContext);

    const { userId: id } = useParams()
    const [initialValues, userFound] = useMemo(() => {
        const initialValues: Person = {
            name: "",
            country: "",
            email: "",
            gender: "",
            phone: ""
        }
        if (people[id - 1])
            return [people[id - 1], true]
        return [initialValues, false]

    }, [id, people])

    const handleFormSubmission = (person: Person) => {
        updatePerson(id, person)
        navigate("/")
    }

    console.log("Component: EditPerson = render")
    return (
        <Container>
            {userFound ?
                <UserInfoForm action="EDIT" handleFormSubmission={handleFormSubmission} initialValues={initialValues} />
                :
                <Centered>
                    <h2>User not found!</h2>
                    <NavigationButton onClick={() => {
                        navigate("/")
                    }}>Goto Home</NavigationButton>
                </Centered>
            }
        </Container>
    )
}

export default EditPerson