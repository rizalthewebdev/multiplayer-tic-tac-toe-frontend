import React, { createContext, useReducer } from "react";

const AppContext = createContext()

const initialState = {
    user: {}
}

const reducer = {}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}