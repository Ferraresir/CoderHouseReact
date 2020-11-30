import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [Data, setData] = useState([]);
    const [Count, setCount] = useState(Number);
    const [Total, setTotal] = useState(Number);

    const deleteData = ({ id, amount, price }) => {
        Data.splice(id, 1)
        setCount(Count - amount)
        setTotal(Total - (price * amount))
    }

    const cambiarData = ({ data, price, items }) => {
        setData([...Data, { data, items }])
        setTotal(Total + price)
        setCount(Count + items)
    }

    return <CartContext.Provider value={{ Data, Total, Count, cambiarData, deleteData }}>
        {children}
    </CartContext.Provider>
}



