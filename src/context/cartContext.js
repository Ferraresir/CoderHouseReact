import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [data, setData] = useState({});

    const cambiarData = (id, Count) => {
        setData({ id, Count })
    }

    return <CartProvider.Provider value={{ data, cambiarData }}>
        {children}
    </CartProvider.Provider>
}



