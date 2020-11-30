import React, { useContext, useEffect, useState } from 'react';
import Cart from '../../imagenes/shopping-cart.svg';
import { CartContext } from '../../context/cartContext';
import './carticon.scss'

const Carticon = () => {
    const context = useContext(CartContext)
    const [itemCount, setItemCount] = useState(Number)

    useEffect(() => {
        context.Data.map((obj) => {
            return setItemCount(itemCount + obj.count)
        })
    }, [context.Data])

    return (
        <>
            <img src={Cart} alt="" />
            <div className='carcount'>{itemCount}</div>
        </>
    )
}

export default Carticon
