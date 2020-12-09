import React, { useState, useEffect } from 'react'
export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [Data, setData] = useState([]);
    const [Count, setCount] = useState(Number);
    const [Total, setTotal] = useState(Number);

    const productsCount = (prop) => {
        let item = 0
        prop.forEach((e) => item += (e.amount))
        setCount(item)
    }

    const grandTotal = (prop) => {
        let gtotal = 0
        prop.forEach((e) => gtotal += (e.data.price * e.amount))
        setTotal(gtotal)
    }

    const deleteData = ({ id, amount, price }) => {
        let dato = Data
        dato.splice(id, 1)
        setData([...dato])
    }


    const cambiarData = ({ data, price, amount }) => {
        const element = Data.find((item) => item.data.id === data.id)
        if (element === undefined) {
            setData([...Data, { data, amount }])
        } else {
            element.amount += amount
            setData([...Data])
        }
    }

    useEffect(() => {
        productsCount(Data)
        grandTotal(Data)
    }, [Data])

    return <CartContext.Provider value={{ Data, Total, Count, cambiarData, deleteData }}>
        {children}
    </CartContext.Provider>
}



