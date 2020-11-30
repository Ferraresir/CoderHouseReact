import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [Data, setData] = useState([]);



    const cambiarData = ({ data, count }) => {
        setData([...Data, { data, count }])
    }

    return <CartContext.Provider value={{ Data, cambiarData }}>
        {children}
    </CartContext.Provider>
}



