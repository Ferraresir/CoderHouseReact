import React, { useState } from 'react'
export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [user,setUser] = useState()
    const [orders, setOrders] = useState()

    const cambiarUser=(userdata)=>{
        setUser(userdata)
    }

    const clearUser =()=>{
        setUser()
        setOrders()
    }

    const cambiarOrders =(orders)=>{
        setOrders(orders)
    }


    return <UserContext.Provider value={{user, orders,cambiarUser,clearUser,cambiarOrders}}>
        {children}
    </UserContext.Provider>
}