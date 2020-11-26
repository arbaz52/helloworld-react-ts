import React, { createContext, ReactNode, useReducer } from "react";
import { loginAction, logoutAction } from "./actions";
import {
  ActionType,
  User,
  UserAuthState,
} from "./customTypes";

const initialState: UserAuthState = {
  user: null,
  token: null,
};

const ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const userAuthReducer = (state: UserAuthState, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.LOGOUT:
      return initialState;

    case ACTIONS.LOGIN:
      return {
        user: action.payload?.user,
        token: action.payload?.token,
      };

    default:
      return state;
  }
};

const UserAuthWrapper = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userAuthReducer, initialState);

  const login = (user: User, token: string) => {
    dispatch(loginAction(user, token));
  };
  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <UserAuthContext.Provider value={{ state, login, logout }}>
      {props.children}
    </UserAuthContext.Provider>
  );
};

export const UserAuthContext = createContext({
  state: initialState,
  login: (user: User, token: string) => {},
  logout: () => {},
});

export default UserAuthWrapper;
