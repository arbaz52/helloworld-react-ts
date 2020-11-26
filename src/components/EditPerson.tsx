import { useNavigate, useParams } from '@reach/router';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Person } from '../customTypes';
import { Container, NavigationButton, Centered, Error } from '../elements/Container';
import { PeopleContext } from '../graphql/ContextProvider';
import UserInfoForm from './UserInfoForm';
const EditPerson = () => {
    const navigate = useNavigate()


    const [people, setPeople] = useState<Person[]>([]);
    const { loading, data, error, updatePerson } = useContext(PeopleContext)
    useEffect(() => {
        if (!loading) {
            if (!error) {
                setPeople(data.people)
            }
        }
    }, [loading, data, error])

    const { userId: id } = useParams()
    const [initialValues, userFound] = useMemo(() => {
        const initialValues: Person = {
            id: "",
            name: "",
            country: "",
            email: "",
            gender: "",
            phone: ""
        }
        const _filtered = people.filter(_person =>
            _person.id && _person.id === id
        )
        if (_filtered.length > 0) {
            return [_filtered[0], true]
        }
        return [initialValues, false]

    }, [id, people])

    const handleFormSubmission = (person: Person) => {
        updatePerson(parseInt(id), person).then(_ => {
            navigate("/")
        })
    }

    console.log("Component: EditPerson = render")
    return (
        <Container>
            {loading ? (
                <h2>Please wait, loading users</h2>
            ) : (
                    error ? (
                        <>
                            <h2>Error occured while fetching user data!</h2>
                            <Error>{error.message}</Error>
                        </>
                    ) : (
                            userFound ?
                                <UserInfoForm action="EDIT" handleFormSubmission={handleFormSubmission} initialValues={initialValues} />
                                :
                                <Centered>
                                    <h2>User not found!</h2>
                                    <NavigationButton onClick={() => {
                                        navigate("/")
                                    }}>Goto Home</NavigationButton>
                                </Centered>
                        )
                )}
        </Container>
    )
}

export default EditPerson