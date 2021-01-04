import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import {FiTrash} from 'react-icons/fi'
import './cart-item.scss'

const Cartitem = ({ data, amount, index }) => {
    const context = useContext(CartContext)

    const handleDel1 = (props) => {
        context.deleteData(props)
    }


    return (
        <div key={index} className='cart-info'>
            <div>
                <img src={data.image} alt='' className='cartimg'/>
            </div>
            <div className='cartdescrip'>
                <div>{data.name}</div>
                <div>
                <p>Precio: ${data.price}</p>
                <p>Cantidad: {amount}</p>
                <p>Subtotal: {data.price * amount}</p>
                <p onClick={() => handleDel1({ id: index, amount: amount, price: data.price })}><FiTrash/></p>
                </div>
            </div>
        </div>
    )
}

export default Cartitem
