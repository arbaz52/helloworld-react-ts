import { ApolloCache } from "@apollo/client"
import { Person } from "../customTypes"
import { fetchUsers } from "./queries"

export const updateCacheAfterAddPerson = (cache: ApolloCache<any>, id: string, person: Person) => {
    const _people = __getPeopleFromCache(cache)
    __putPeopleInCache(cache, [..._people, { ...person, id }])
}

export const updateCacheAfterUpdatePerson = (cache: ApolloCache<any>, id: string, updatedInfo: Person) => {
    const _people = __getPeopleFromCache(cache)
    __putPeopleInCache(cache, _people.map((_person: Person) => _person.id === id + "" ? { ...updatedInfo, id } : _person))
}

export const updateCacheAfterDeletePerson = (cache: ApolloCache<any>, id: string) => {
    const _people = __getPeopleFromCache(cache)
    __putPeopleInCache(cache, _people.filter(_person => _person.id !== id))
}

// helper functions

const __getPeopleFromCache = (cache: ApolloCache<any>) => {
    return cache.readQuery<{ people: Person[] }>({
        query: fetchUsers
    })?.people || []
}

const __putPeopleInCache = (cache: ApolloCache<any>, people: Person[]) => {
    cache.writeQuery({
        query: fetchUsers,
        data: {
            people
        }
    })
}