import { useMutation, useQuery } from '@apollo/client';
import React, { createContext, useCallback, useEffect, useState } from 'react';

import { PeopleContextInterface, Person } from '../customTypes';
import GraphQLPeopleProvider, { onlyChildren } from './GraphQLPeopleProvider';
import { addUser, deleteUser, updateUser } from './mutations';
import { fetchUsers } from './queries';


const initialState: Person[] = []
const _pcb = () => {}
export const PeopleContext = createContext<PeopleContextInterface>({
    people: initialState,
    addPerson: () => new Promise(_pcb),
    updatePerson: () => new Promise(_pcb),
    deletePerson: () => new Promise(_pcb)
})

const PeopleContextProvider = (props: onlyChildren) => {
    const { loading, data, error, refetch } = useQuery(fetchUsers, {fetchPolicy: "cache-only"})
    useEffect(() => {
        if (!loading) {
            if (!error) {
                setPeople(data)
            }
        }
    }, [loading, data, error])
    const [people, setPeople] = useState<Person[]>([]);





    const [_addPerson, { data: addPersonResponse }] = useMutation(addUser)

    useEffect(() => {
        if (addPersonResponse)
            refetch()
    }, [addPersonResponse, refetch])

    const addPerson = useCallback((_person: Person) => {
        return _addPerson({
            variables: {
                "user": _person
            }
        })
    }, [_addPerson])




    const [_updatePerson, { data: updatePersonResponse }] = useMutation(updateUser)

    useEffect(() => {
        if (updatePersonResponse)
            refetch()
    }, [updatePersonResponse, refetch])

    const updatePerson = useCallback((_id: number, _updatedInfo: Person) => {
        console.log({ ..._updatedInfo, id: _id })
        return _updatePerson({
            variables: {
                "user": { ..._updatedInfo, id: _id }
            }
        })
    }, [_updatePerson])





    const [_deletePerson, { data: deletePersonResponse }] = useMutation(deleteUser)


    useEffect(() => {
        if (deletePersonResponse) {
            console.log("record deleted")
        }
        refetch()
    }, [deletePersonResponse, refetch])

    const deletePerson = useCallback((_id: number) => {

        return _deletePerson({
            variables: {
                "id": _id
            }
        })
    }, [_deletePerson])


    return (
        <PeopleContext.Provider value={{ people, addPerson, updatePerson, deletePerson, loading, data, error }}>
            {props.children}
        </PeopleContext.Provider>
    )
}


export default PeopleContextProvider