import { GiHamburgerMenu } from "react-icons/gi";
import React, { useContext, useState } from "react";
import { LogoutButton, NavBar, NavBarToggler } from "../elements/Header";
import { NavigationLink } from "../elements/Container";
import { UserAuthContext } from "../contexts/userAuthContext/provider";
import useWindowSize from "../hooks/useWindowSize";
import breakpoints from "./../elements/index";

const Nav = () => {
  const [visible, setVisible] = useState(true);
  const { isLoggedIn, logout } = useContext(UserAuthContext);
  

  const windowSize = useWindowSize((windowSize) => {
    if (windowSize.width && windowSize.width > parseInt(breakpoints.size.sm))
      setVisible(true);
  });

  const toggle = () => {
    if (windowSize.width && windowSize.width <= parseInt(breakpoints.size.sm))
      setVisible(!visible);
  };
  return (
    <>
      <NavBarToggler onClick={toggle}>
        <GiHamburgerMenu />
      </NavBarToggler>
      {visible && (
        <NavBar>
          <NavigationLink onClick={toggle} to="/">
            Home
          </NavigationLink>
          <NavigationLink onClick={toggle} to="/antd">
            Ant Designs
          </NavigationLink>
          <NavigationLink onClick={toggle} to="/aggrid">
            AG Grid
          </NavigationLink>
          <NavigationLink onClick={toggle} to="/polished">
            Polished
          </NavigationLink>
          <NavigationLink onClick={toggle} to="/add">
            Add a Person
          </NavigationLink>
          {!isLoggedIn ? (
            <NavigationLink onClick={toggle} to="/login">
              Login
            </NavigationLink>
          ) : (
            <LogoutButton
              onClick={e => {
                logout();
                toggle();
              }}
            >
              Logout
            </LogoutButton>
          )}
        </NavBar>
      )}
    </>
  );
};

export default Nav;
