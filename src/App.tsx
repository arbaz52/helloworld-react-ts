import { Router } from '@reach/router';
import React, { createContext, useCallback, useState } from 'react';
import AddPerson from './components/AddPerson';
import Editor from './components/Editor';
import EditPerson from './components/EditPerson';
import Home from './components/Home';
import { PeopleContextInterface, Person } from './customTypes';
import { RouterPage } from './utils';

const initialState: Person[] = [
  {
    name: "Arbaz Ajaz",
    email: "arbaz5256@gmail.com",
    gender: "Female",
    phone: "+923088437740",
    country: "Pakistan"
  }
]

export const PeopleContext = createContext<PeopleContextInterface>({
  people: [],
  addPerson() { },
  updatePerson() { },
  deletePerson() { }
})


function App() {
  const [people, setPeople] = useState(initialState);
  const addPerson = useCallback((_person: Person) => {
    setPeople([...people, _person])
  }, [people])
  const updatePerson = useCallback((_id: number, _updatedInfo: Person) => {
    setPeople(people.map((_person, _index) => {
      if (_index === (_id - 1)) {
        return _updatedInfo
      } else {
        return _person
      }
    })
    )
  }, [people])

  const deletePerson = useCallback((_id: number) => {
    setPeople(people.filter((_person, _index) => _index !== _id))
  }, [people])

  console.log("Component: App = render")

  return (
    <PeopleContext.Provider value={{ people, addPerson, updatePerson, deletePerson }}>
      <Router>
        <RouterPage path="/" pageComponent={<Home />} />
         <RouterPage path="/add" pageComponent={<AddPerson />} />
         <RouterPage path="/edit/:userId" pageComponent={<EditPerson />} />
      </Router>
    </PeopleContext.Provider>
  );
}

export default App;
