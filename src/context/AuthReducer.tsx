import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'singIn' }
    | { type: 'logout' }
    | { type: 'ChangeFawIcon', payload: string }
    | { type: 'ChangeUserName', payload: string }

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'singIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'ChangeFawIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
            case 'ChangeUserName':
            return {
                ...state, 
                username: action.payload
            }

        default:
            return state;
    }



}