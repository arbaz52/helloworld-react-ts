import { GiHamburgerMenu } from "react-icons/gi";
import React, { useContext, useState } from "react";
import { LogoutButton, NavBar, NavBarToggler } from "../elements/Header";
import { NavigationLink } from "../elements/Container";
import { UserAuthContext } from "../contexts/userAuthContext/provider";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const { isLoggedIn, logout } = useContext(UserAuthContext);
  const toggle = () => setVisible(!visible);
  return (
    <>
      <NavBarToggler onClick={toggle}>
        <GiHamburgerMenu />
      </NavBarToggler>
      {visible && (
        <NavBar>
          <NavigationLink onClick={toggle} to="/">Home</NavigationLink>
          <NavigationLink onClick={toggle} to="/add">Add a Person</NavigationLink>
          {!isLoggedIn ? (
            <NavigationLink onClick={toggle} to="/login">Login</NavigationLink>
          ) : (
            <LogoutButton onClick={e=>{logout(); toggle()}}>Logout</LogoutButton>
          )}
        </NavBar>
      )}
    </>
  );
};

export default Nav;
