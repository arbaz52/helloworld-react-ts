import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
  useState
} from "react";
import {
  initFromLocalAction,
  loginAction,
  loginFailedAction,
  loginSuccessfulAction,
  logoutAction
} from "./actions";
import { DecodedToken, User, UserAuthState } from "./customTypes";
import { initialState, userAuthReducer } from "./reducer";

import jwt_decode from "jwt-decode";
import { useMutation } from "@apollo/client";
import { loginUser } from "../../graphql/mutations";

const LOCAL_STORAGE_KEY = "USER_AUTH_STATE";

const UserAuthWrapper = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userAuthReducer, initialState);

  //default true: so it does not remove it from the local storage on load.
  let [_keepLoggedIn, set_KeepLoggedIn] = useState(true);
  //graphql
  const [_login] = useMutation(loginUser, {
    onError: error => {
      dispatch(loginFailedAction(error));
    },
    onCompleted: ({ Login: { accessToken } }) => {
      let decoded: DecodedToken | null = null;
      try {
        decoded = jwt_decode(accessToken);
      } catch (err) {
        console.log(`TOKEN: ${accessToken}, decoding failed!`);
        dispatch(loginFailedAction(err));
      }
      if (decoded) {
        let user: User = {
          id: decoded.userId + "",
          email: decoded.userEmail
        };
        dispatch(loginSuccessfulAction(user, accessToken));
      }
    }
  });

  //get value from localstorage if it exists
  useEffect(() => {
    const local = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (local) {
      let parsed: Partial<UserAuthState> = JSON.parse(local);
      if (parsed?.user && parsed?.token)
        dispatch(initFromLocalAction(parsed.user, parsed.token));
      else dispatch(logoutAction());
    }
  }, []);

  const isLoggedIn = useMemo(() => {
    console.log("evaluating login status");

    let decoded: DecodedToken | null = null;
    try {
      decoded = jwt_decode(state?.token || "");
    } catch (err) {
      return false;
    }
    if (decoded) {
      const expired = decoded.exp < new Date().getTime();
      console.log(!state.error, !state.loading, state.user, !expired);
      return !!(!state.error && !state.loading && state.user);
    }
    return false;
  }, [state]);

  useEffect(() => {
    if (isLoggedIn) {
      const _state = JSON.stringify(state);
      if (_keepLoggedIn) localStorage.setItem(LOCAL_STORAGE_KEY, _state);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [isLoggedIn, state, _keepLoggedIn]);

  const login = (
    email: string,
    password: string,
    keepLoggedIn: boolean = false
  ) => {
    set_KeepLoggedIn(keepLoggedIn)
    console.log("Logging in, please wait!");
    dispatch(loginAction());
    _login({
      variables: { email, password }
    });
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <UserAuthContext.Provider value={{ state, login, logout, isLoggedIn }}>
      {props.children}
    </UserAuthContext.Provider>
  );
};

export const UserAuthContext = createContext({
  state: initialState,
  login: (email: string, password: string, keepLoggedIn: boolean = false) => {},
  logout: () => {},
  isLoggedIn: false
});

export default UserAuthWrapper;
