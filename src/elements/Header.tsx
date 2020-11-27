import styled from "styled-components";
import breakpoints from "./index";
export const Header = styled.header`
  padding: 8px 16px;
`;
export const LogoutButton = styled.button`
  border: none;
  border-radius: 4px;
  background: #bdc3c7;
  padding: 8px 16px;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
    // display: none;
    display: flex;
    min-width: 100%;
    gap: 8px;
    margin-top: 16px;

    button {
      margin: 0;
    }
    a {
      padding: 0;
    }
  }
`;

export const NavBarToggler = styled.button`
  width: 32px;
  height: 32px;
  background: #ccc;
  border: none;
  border-radius: 4px;
  display: none;
  justify-content: center;
  align-items: center;

  @media only screen and ${breakpoints.device.sm} {
    display: flex;
  }
`;