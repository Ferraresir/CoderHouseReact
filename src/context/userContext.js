import React, {} from 'react'
export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const user='Ramiro Ferraresi'



    return <UserContext.Provider value={{user }}>
        {children}
    </UserContext.Provider>
}