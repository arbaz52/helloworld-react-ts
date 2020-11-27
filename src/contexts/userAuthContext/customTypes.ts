
export interface User {
    id: string;
    email: string;
}
export interface UserAuthState {
    user: User | null | undefined;
    token: string | null | undefined;
    loading: boolean;
    error: Error | null | undefined;
}

export interface ActionType {
    type: string;
    payload?: Partial<UserAuthState>;
}


export interface DecodedToken {
    userId: number,
    username: string;
    userEmail: string,
    iat: number;
    exp: number;
}