import { Router } from '@reach/router';
import React from 'react';
import AddPerson from './components/AddPerson';
import EditPerson from './components/EditPerson';
import Home from './components/Home';
import PeopleContextProvider from './graphql/ContextProvider';
import { RouterPage } from './utils';



function App() {
  console.log("Component: App = render")

  return (
    <PeopleContextProvider>
      <Router>
        <RouterPage path="/" pageComponent={<Home />} />
        <RouterPage path="/add" pageComponent={<AddPerson />} />
        <RouterPage path="/edit/:userId" pageComponent={<EditPerson />} />
      </Router>
    </PeopleContextProvider>
  );
}


export default App;
