import { useMutation, useQuery } from '@apollo/client';
import React, { createContext, useCallback } from 'react';

import { Person } from '../customTypes';
import { onlyChildren } from './GraphQLPeopleProvider';
import { addUser, deleteUser, updateUser } from './mutations';
import { fetchUsers } from './queries';
import { updateCacheAfterAddPerson, updateCacheAfterDeletePerson, updateCacheAfterUpdatePerson } from './updatePeopleCache';

export interface PeopleContextInterface {
    addPerson: (person: Person) => Promise<any>;
    updatePerson: (id: number, person: Person) => Promise<any>;
    deletePerson: (id: number) => Promise<any>;
    [key: string]: any;
}



const _pcb = () => { }
export const PeopleContext = createContext<PeopleContextInterface>({
    addPerson: () => new Promise(_pcb),
    updatePerson: () => new Promise(_pcb),
    deletePerson: () => new Promise(_pcb)
})




const PeopleContextProvider = (props: onlyChildren) => {
    const { loading, data, error } = useQuery(fetchUsers)



    const [_addPerson] = useMutation(addUser)


    const addPerson = useCallback((_person: Person) => {
        return _addPerson({
            variables: {
                "user": _person
            },
            update(cache, { data: { addUser: { id } } }) {
                updateCacheAfterAddPerson(cache, id, _person)
            }
        })
    }, [_addPerson])




    const [_updatePerson] = useMutation(updateUser)


    const updatePerson = useCallback((_id: number, _updatedInfo: Person) => {
        return _updatePerson({
            variables: {
                "user": { ..._updatedInfo, id: _id }
            },
            update(cache) {
                updateCacheAfterUpdatePerson(cache, _id+"", _updatedInfo)
            }
        })
    }, [_updatePerson])





    const [_deletePerson] = useMutation(deleteUser)

    const deletePerson = useCallback((_id: number) => {
        return _deletePerson({
            variables: {
                "id": _id
            },
            update(cache) {
                updateCacheAfterDeletePerson(cache, _id+"")
            }
        })
    }, [_deletePerson])


    return (
        <PeopleContext.Provider value={{ addPerson, updatePerson, deletePerson, loading, data, error }}>
            {props.children}
        </PeopleContext.Provider>
    )
}


export default PeopleContextProvider