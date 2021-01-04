import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './carticon.scss'
import {RiShoppingCartLine} from 'react-icons/ri'

const Carticon = () => {
    const context = useContext(CartContext)
    return (
        <>
            <RiShoppingCartLine size={22}/>
            {context.Count === 0 ? '' : <div className='carcount'>{context.Count}</div>}

        </>
    )
}
export default Carticon
