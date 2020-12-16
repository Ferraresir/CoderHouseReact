import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';
import {saveOrder} from '../../backend/firebase/orders'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './cart.scss';


const Cart = () => {
    const envio = 400
    const context = useContext(CartContext);
    const [formData, setFormData] = useState();

    const mostrar =()=>{
        const modal = document.getElementById('modal')
        modal.style.display=('none' ? 'block' : 'none')
    }

 const handleSubmit = (e) =>{
     e.preventDefault();
     const inputs = e.target.elements;
     let inputValues = {};
     [...inputs].forEach((input)=>{
         inputValues = {...inputValues,[input.name]:input.value,};
     })
     inputValues.email === inputValues.email2 ? setFormData(inputValues) : alert('Los Email no coinciden')
     mostrar()
    }

 const Modal =()=>{
     return(
     <div id='modal'>
        <div className='userimput'>
            <p>Debe completar tus datos para generar la compra</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="">Nombre Completo</label>
            <input  name='name'  required type="text" />
            <label htmlFor="">Email</label>
            <input   name='email'  required type="email"/>
            <label htmlFor="">Repetir Email</label>
            <input  name='email2' required type="email" />
            <label htmlFor="">Telefono</label>
            <input  name='phone'  required type="number" />
            <input type='submit' value='Guardar Datos'/>
            </form>
        </div>
    </div>
     )
 }   
    const handleDel1 = (props) => {
        context.deleteData(props)
    }

    const handleDelAll=()=>{
        context.deleteAll()
    }

    const handleCompra = () =>{
        if(formData){
        const order = {
            buyer:{name:formData.name , email:formData.email, phone:formData.phone},
            items:[...context.Data],
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            Total: context.Total > 10000 ? context.Total : context.Total + envio}
                saveOrder(order)
                .then(response =>{
                context.deleteAll()   
                alert('Su codigo de orden es '+ response)})
        }else{mostrar()}
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
            <Modal/>
        </div>
    )
}

export default Cart
