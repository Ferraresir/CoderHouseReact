import React, { useContext } from 'react';
import Cart from '../../imagenes/shopping-cart.svg';
import { CartContext } from '../../context/cartContext';
import './carticon.scss'

const Carticon = () => {
    const context = useContext(CartContext)


    return (
        <>
            <img src={Cart} alt="" />
            {context.Count === 0 ? '' : <div className='carcount'>{context.Count}</div>}

        </>
    )
}

export default Carticon
