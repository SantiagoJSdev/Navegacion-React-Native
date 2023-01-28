import React, { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

 
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string; 
}

export const authInitialState: AuthState = {
    isLoggedIn: false
}

export interface AuthContextProps {
    authState: AuthState;
    singIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUserName: (iconName: string) => void;
}

export const AuthContext = createContext( {} as AuthContextProps )


export const AuthProvider = ({ children }: {children: JSX.Element[]}) => {

    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    const singIn = () => {
        dispatch({type: 'singIn'})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'ChangeFawIcon', payload: iconName}) 
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeUserName = (userName: string) => {
        dispatch({type: 'ChangeUserName', payload: userName})
    }
    return (
        <AuthContext.Provider value={{
            authState,
            singIn,
            changeFavoriteIcon,
            logout,
            changeUserName
        }}>
            { children }
        </AuthContext.Provider>
    )
}