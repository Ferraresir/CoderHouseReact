import React,{useState,useEffect} from 'react';
import './navbar.scss';
import Carticon from '../cart-icon/Carticon';
import { NavLink } from 'react-router-dom'
import Logo from '../../imagenes/logo_small.png'
import {getCategories} from '../../backend/firebase/products'


function NavBar() {
    const [checked, setChecked] = useState(false)
    const [categories, setCategories] = useState([])
    const handleCheck=()=>{
        setChecked(!checked)
    }
    useEffect(() => {
        getCategories()
        .then((response)=> setCategories(response.sort((a, b) => a.name > b.name ? 1 : -1)))
    }, [])

    const CategoriMenu=()=>{
       const cats = categories.map((categories,index)=>{
           return <li key={index}><NavLink to={`/${categories.url}`}>{categories.name}</NavLink></li>
       })
       return cats
    }


    return (
        <nav>
            <input onChange={() =>handleCheck()} checked={checked} type="checkbox" id="res-menu" />
            <label  htmlFor="res-menu">
                <div id='burger'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </label>
            <NavLink to="/">
                <img id='logo' src={Logo} alt=""/>
            </NavLink>
            <ul>
                <li onClick={()=> handleCheck()} ><NavLink to="/">Inicio</NavLink></li>
                <li onClick={()=> handleCheck()}><NavLink to="/">Nosotros</NavLink></li>
                <li className="withsub">Productos
                    <ul className="submenu">
                        <CategoriMenu/>
                    </ul>
                </li>
                <li onClick={()=> handleCheck()} id='cart'><NavLink to="/cart"><Carticon/></NavLink></li>
            </ul>
        </nav>
    )
}
export default NavBar
