import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cartContext';
import './cart.scss';


const Cart = () => {
    const context = useContext(CartContext);
    const handleBtn = (props) => {
        context.deleteData(props)
    }
    const MostrarCart = () => {
        const cartlist = context.Data.map(({ items, data }, index) => {
            return <div key={index}>
                <img src={data.thumbnail} alt="" />
                <span>{data.name}</span>
                <span>Precio: {data.price}</span>
                <span>{data.warranty}</span>
                <span>Cantidad: {items}</span>
                <button onClick={() => handleBtn({ id: index, amount: items, price: data.price })}>x</button>
            </div>
        })
        return cartlist
    }

    useEffect(() => {
        console.log(context);
    }, [context])
    return (
        <div className='carlist'>
            <div className="w3">
                <MostrarCart />
            </div>
            <div className='w1'>
                <p>Total:{context.Total}</p>
            </div>
        </div>

    )
}

export default Cart
