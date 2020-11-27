import { ActionType, User } from "./customTypes";
import { INIT_FROM_LOCAL, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESSFUL, LOGOUT } from "./types";

export const loginAction = (): ActionType => ({
    type: LOGIN_LOADING
})


export const loginSuccessfulAction = (user: User, token: string): ActionType => ({
    type: LOGIN_SUCCESSFUL,
    payload: {
        user, token
    }
})

export const loginFailedAction = (error: Error): ActionType => ({
    type: LOGIN_FAILED,
    payload: {
        error
    }
})

export const logoutAction = () => ({
    type: LOGOUT
})

export const initFromLocalAction = (user: User, token: string) => ({
    type: INIT_FROM_LOCAL,
    payload: {
        user, token
    }
})