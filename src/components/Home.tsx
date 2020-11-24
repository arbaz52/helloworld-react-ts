import { useNavigate } from '@reach/router';
import React, { useContext } from 'react';
import { PeopleContext } from '../App';
import { Person } from '../customTypes';
import { Container, NavigationButton, Plate } from '../elements/Container';
import { Table, DeleteButton, EditButton } from '../elements/Table';
import { FiEdit } from 'react-icons/fi'
import { TiDeleteOutline } from 'react-icons/ti'
const Home = () => {
    const { people, deletePerson } = useContext(PeopleContext);
    const navigate = useNavigate()

    console.log("Component: Home = render")

    return (
        <Container>
            <Plate>
                <h1>Homescreen</h1>
                <NavigationButton onClick={() => navigate("/add")}>Add a new Person</NavigationButton>
            </Plate>
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
                        people.map((_person: Person, _index: number) => {
                            return (
                                <tr key={_index}>
                                    <td>{_index + 1}</td>
                                    <td>{_person.name}</td>
                                    <td>{_person.email}</td>
                                    <td>{_person.phone}</td>
                                    <td>{_person.gender}</td>
                                    <td>{_person.country}</td>
                                    <td className='actionsWrapper'>
                                        <EditButton onClick={() => navigate(`edit/${_index + 1}`)}><FiEdit /></EditButton>
                                        <DeleteButton onClick={() => deletePerson(_index)}><TiDeleteOutline /></DeleteButton>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}
export default Home 
