import { ActionType, User } from "./customTypes";
import { LOGIN, LOGOUT } from "./types";

export const loginAction = (user: User, token: string): ActionType => ({
    type: LOGIN,
    payload: {
        user, token
    }
})

export const logoutAction = () => ({
    type: LOGOUT
})