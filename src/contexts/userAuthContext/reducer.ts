import { ActionType, UserAuthState } from "./customTypes";
import { INIT_FROM_LOCAL, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESSFUL, LOGOUT } from "./types";

export const initialState: UserAuthState = {
    user: null,
    token: null,
    error: null,
    loading: false,
};

export const userAuthReducer = (state: UserAuthState, action: ActionType): UserAuthState => {
    switch (action.type) {
        case LOGOUT:
            return initialState;

        case LOGIN_LOADING:
            return {
                ...initialState,
                loading: true,
                error: null,
            }

        case LOGIN_SUCCESSFUL:
            return {
                user: action.payload?.user,
                token: action.payload?.token,
                error: null,
                loading: false
            };

        case LOGIN_FAILED:
            return {
                user: null,
                token: null,
                error: action.payload?.error,
                loading: false
            };

        case INIT_FROM_LOCAL:
            return {
                ...initialState,
                user: action.payload?.user,
                token: action.payload?.token,
            }

        default:
            return state;
    }
};