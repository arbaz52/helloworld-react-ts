import { Link, Router } from "@reach/router";
import React from "react";
import AddPerson from "./components/AddPerson";
import EditPerson from "./components/EditPerson";
import Home from "./components/Home";
import Login from "./components/screens/Login";
import { Container, NavigationLink, Plate } from "./elements/Container";
import { Header } from "./elements/Header";
import PeopleContextProvider from "./graphql/ContextProvider";
import { RouterPage } from "./utils";

function App() {
  console.log("Component: App = render");

  return (
    <PeopleContextProvider>
      <Header>
        <Container>
          <Plate>
            <b>Welcome to peoplebase.</b>
            <div>
              <NavigationLink to="/">Home</NavigationLink>
              <NavigationLink to="/add">Add a Person</NavigationLink>
              <NavigationLink to="/login">Login</NavigationLink>
            </div>
          </Plate>
        </Container>
      </Header>
      <Router>
        <RouterPage path="/" pageComponent={<Home />} />
        <RouterPage path="/login" pageComponent={<Login />} />
        <RouterPage path="/add" pageComponent={<AddPerson />} />
        <RouterPage path="/edit/:userId" pageComponent={<EditPerson />} />
      </Router>
    </PeopleContextProvider>
  );
}

export default App;
