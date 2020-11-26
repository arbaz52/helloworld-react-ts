
export interface User {
    id: string;
    email: string;
}
export interface UserAuthState {
    user: User | null | undefined;
    token: string | null | undefined;
}

export interface ActionType {
    type: string;
    payload?: UserAuthState;
}
