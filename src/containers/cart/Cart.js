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
                        <img src={data.thumbnail} alt="" />
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


    return (
        <div className='small-container cart-page'>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {context.Total === 0 ? <Link to="/">No Tiene Items, Vuelva a comprar</Link> : <MostrarCart />}
                </tbody>
            </table>
            <div className="total">
                <table>
                    <tbody>
                        <tr>
                            <td>Envio</td>
                            <td>Gratis</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{context.Total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart
