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


    const cambiarData = ({ data, price, amount }) => {
        const element = Data.find((item) => item.data.id === data.id)
        if (element === undefined) {
            setData([...Data, { data, amount }])
        } else {
            element.amount += amount
            setData([...Data])
        }
        setTotal(Total + price)
        setCount(Count + amount)
    }

    return <CartContext.Provider value={{ Data, Total, Count, cambiarData, deleteData}}>
        {children}
    </CartContext.Provider>
}



