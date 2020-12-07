import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';
import './cart.scss';


const Cart = () => {
    const context = useContext(CartContext);
    const handleBtn = (props) => {
        context.deleteData(props)
    }
    const MostrarCart = () => {
        const cartlist = context.Data.map(({ amount, data }, index) => {
            return <tr key={index}>
                <td>
                    <div className='cart-info'>
                        <img src={data.image} alt="" />
                    </div>
                    <div>
                        <p>{data.title}</p>
                        <small>Precio: ${data.price}</small>
                        <p onClick={() => handleBtn({ id: index, amount: amount, price: data.price })}>Quitar</p>
                    </div>
                </td>
                <td>{amount}</td>
                <td>{data.price * amount}</td>
            </tr>
        })
        return cartlist
    }


    const WithItems = () => {
        return <>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    <MostrarCart />
                </tbody>
            </table>
            <div className="total">
                <table>
                    <tbody>
                        <tr>
                            <td>Envio</td>
                            <td>{context.Total > 10000 ? <span>Gratis</span> : <span>$200</span>}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td><b>{context.Total > 10000 ? context.Total : context.Total +200}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    }

    return (
        <div className='small-container cart-page'>
            {context.Count > 0 ? <WithItems /> : <Link to="/">Aun no ha agregado items, Vuelva al Shop</Link>}
        </div>
    )
}

export default Cart
