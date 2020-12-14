import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';
import {saveOrder} from '../../backend/firebase/orders'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './cart.scss';


const Cart = () => {
    const user = {name:'Ramiro Ferraresi',
                  email:'ramiro_ferraresi@hotmail.com',
                  phone:'1560427876'}
    const envio = 400
    const context = useContext(CartContext);
    
    const handleDel1 = (props) => {
        context.deleteData(props)
    }

    const handleDelAll=()=>{
        context.deleteAll()
    }


    const handleCompra = () =>{
        const order = {
            buyer:{...user},
            items:[...context.Data],
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            Total: context.Total > 10000 ? context.Total : context.Total + envio}
       saveOrder(order)
      .then(response =>{
            alert('Su Numero de orden es '+{response}+ ' le recomendamos guardarla para seguir su progreso')
        })
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
                        <p onClick={() => handleDel1({ id: index, amount: amount, price: data.price })}>Quitar</p>
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
                            <td>{context.Total > 10000 ? <span>Gratis</span> : <span>${envio}</span>}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td><b>{context.Total > 10000 ? context.Total : context.Total + envio}</b></td>
                        </tr>
                        <tr>
                            <td><br/><button onClick={handleDelAll} className='btnborrar'>Borrar Carrito</button></td>
                            <td><br/><button onClick={handleCompra}>Realizar Compra</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    }

    return (
        <div className='small-container cart-page'>
            {context.Count > 0 ? <WithItems /> : <div><p>No tiene items en el carrito</p><br /><Link to="/"><button>Volver Al Catalogo</button></Link></div>}
        </div>
    )
}

export default Cart
