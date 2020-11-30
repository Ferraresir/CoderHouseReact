import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import './cart.scss';



const Cart = () => {
    const [total, setTotal] = useState(Number);
    const context = useContext(CartContext);
    const MostrarCart = () => {
        const cartlist = context.Data.map(({ count, data }, index) => {
            return <div key={index}>
                <img src={data.thumbnail} alt="" />
                <span>{data.name}</span>
                <span>Precio: {data.price}</span>
                <span>{data.warranty}</span>
                <span>Cantidad: {count}</span>
            </div>
        })
        return cartlist
    }


    return (
        <div className='carlist'>
            <div className="w3">
                <MostrarCart />
            </div>
            <div className='w1'>
                <span>Total:{total}</span>
            </div>
        </div>

    )
}

export default Cart
