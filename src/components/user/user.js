import React,{useContext,useEffect} from 'react'
import './user.scss'
import { UserContext } from '../../context/userContext';
import {getOrders} from '../../backend/firebase/orders'

const User = () => {
    const email = 'ramiro_ferraresi@hotmail.com'
    useEffect(() => {
        getOrders(email)
    }, [])
    const close =()=>{
        const doc=document.getElementById('modal')
        doc.style.display='none'
    }
    const context = useContext(UserContext)
    return (
        <div id='modal'>
            <div id='user'>
            <div className='w1'>
                <h3>{context.user}</h3>
                <ul>
                    <li>Mis Datos</li>
                    <li>Ordenes</li>
                </ul>
                <button>Desloguear</button>
            </div>
            <div className='w3'>
            <p>Ramalama</p>
                <p>ramiro-ferraresi@hotmail.com</p>
                <button className='close' onClick={close}>X</button>
            </div>
        </div>
        </div>
    )
}

export default User
