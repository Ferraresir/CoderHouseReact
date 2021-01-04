import React, { useContext } from 'react';
import CartItem from '../../components/cart-item/cart-item'
import { Link, useHistory } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';

import 'firebase/firestore'
import './cart.scss';


const Cart = () => {
    const history = useHistory()
    const context = useContext(CartContext);

    const handleDelAll = () => {
        context.deleteAll()
    }

    const handleCompra = () => {
        history.push('/checkout')
    }


    const MostrarCart = () => {
        const cartlist = context.Data.map(({ amount, data }, index) => {
            return <CartItem key={index} data={data} index={index} amount={amount} />
        })
        return cartlist
    }

    if (context.Count === 0) {
        return <div className='cart-page'>
            <div className='no-items'><p>No tiene items en el carrito</p><br /><Link to="/"><button>Volver Al Catalogo</button></Link></div>
               </div>
    } else {
        return <div className='cart-page'>
            <div className='cart-items w3'>
                <MostrarCart />
            </div>
            <div className="total w1">
                <div>
               <p>Total: $<b>{context.Total}</b></p>
                <button onClick={handleDelAll} className='btnborrar'>Borrar Carrito</button>
                <button onClick={handleCompra}>Realizar Compra</button>
            </div>
            </div>
        </div>
    }
}
export default Cart
