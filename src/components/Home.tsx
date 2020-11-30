import { useNavigate } from '@reach/router';
import React, { useContext } from 'react';
import { Person } from '../customTypes';
import { Container, Error, NavigationButton, Plate } from '../elements/Container';
import { Table, DeleteButton, EditButton } from '../elements/Table';
import { FiEdit } from 'react-icons/fi'
import { TiDeleteOutline } from 'react-icons/ti'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { PeopleContext } from '../graphql/ContextProvider';

const Home = () => {
    const { loading, data, error, deletePerson } = useContext(PeopleContext)

    const navigate = useNavigate()

    const _deletePerson = (_person: Person) => {
        if (!_person.id)
            return

        deletePerson(parseInt(_person.id))
    }

    console.log("Component: Home = render")

    return (
        <Container>
            <Plate>
                <h1>Homescreen</h1>
                <NavigationButton onClick={() => navigate("/add")}><AiOutlinePlusCircle color="white" /> <span>Person</span></NavigationButton>
            </Plate>
            {loading ? (
                <h2>Please wait, loading users</h2>
            ) : (
                    error ? (
                        <>
                            <h2>Error occured while fetching user data!</h2>
                            <Error>{error.message}</Error>
                        </>
                    ) : (

                            <Table>
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Gender</th>
                                        <th>Country</th>
                                        <th>Actions</th>
                                    </tr>
                                    {
                                        data.people.map((_person: Person, _index: number) => {
                                            return (
                                                <tr key={_index}>
                                                    <td>{_person.id || -1}</td>
                                                    <td>{_person.name}</td>
                                                    <td>{_person.email}</td>
                                                    <td>{_person.phone}</td>
                                                    <td>{_person.gender}</td>
                                                    <td>{_person.country}</td>
                                                    <td className='actionsWrapper'>
                                                        <EditButton onClick={() => navigate(`edit/${_person.id || -1}`)}><FiEdit /></EditButton>
                                                        <DeleteButton onClick={() => _deletePerson(_person)}><TiDeleteOutline /></DeleteButton>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        )
                )}
        </Container>
    )
}
export default Home 
