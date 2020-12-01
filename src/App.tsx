import 'antd/dist/antd.css';

import { Router } from "@reach/router";
import React from "react";
import AddPerson from "./components/AddPerson";
import EditPerson from "./components/EditPerson";
import Home from "./components/Home";
import Login from "./components/screens/Login";
import { Container, Plate } from "./elements/Container";
import { Header } from "./elements/Header";
import PeopleContextProvider from "./graphql/ContextProvider";
import { RouterPage } from "./utils";
import Nav from "./components/Nav";
import AntDesign from './components/screens/AntDesign';
import Polished from './components/screens/Polished';
import AGGrid from './components/screens/AGGrid';

function App() {
  console.log("Component: App = render");

  return (
    <PeopleContextProvider>
      <Header>
        <Container>
          <Plate>
            <b>Welcome to peoplebase.</b>
            <Nav/>
          </Plate>
        </Container>
      </Header>
      <Router>
        <RouterPage path="/" pageComponent={<Home />} />
        <RouterPage path="/login" pageComponent={<Login />} />
        <RouterPage path="/antd" pageComponent={<AntDesign />} />
        <RouterPage path="/aggrid" pageComponent={<AGGrid />} />
        <RouterPage path="/polished" pageComponent={<Polished />} />
        <RouterPage path="/add" pageComponent={<AddPerson />} />
        <RouterPage path="/edit/:userId" pageComponent={<EditPerson />} />
      </Router>
    </PeopleContextProvider>
  );
}

export default App;
