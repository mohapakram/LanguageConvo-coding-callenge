import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(null)

export const GlobalContextProvider = ({ children }) => {
    const [state, setState] = useState("hi")
    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    );
};

