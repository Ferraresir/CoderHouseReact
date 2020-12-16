import React,{useState,useEffect} from 'react';
import './navbar.scss';
import Carticon from '../carticon/Carticon';
import { NavLink } from 'react-router-dom'
import Logo from '../../imagenes/logo_small.png'
import {FiUser} from 'react-icons/fi'


function NavBar() {
    const [checked, setChecked] = useState(false)
    const handleCheck=()=>{
        setChecked(!checked)
    }
    useEffect(() => {
        console.log(checked);
    }, [checked])

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
                        <li onClick={()=> handleCheck()}><NavLink to="/MLA3697">Auriculares</NavLink></li>
                        <li onClick={()=> handleCheck()}><NavLink to="/MLA1714">Mouses</NavLink></li>
                        <li onClick={()=> handleCheck()}><NavLink to="/MLA418448">Teclados</NavLink></li>
                        <li onClick={()=> handleCheck()}><NavLink to="/MLA8618">Parlantes</NavLink></li>
                    </ul>
                </li>
                <li><FiUser size={21}/></li>
                <li onClick={()=> handleCheck()} id='cart'><NavLink to="/checkout"><Carticon/></NavLink></li>
            </ul>
        </nav>
    )
}
export default NavBar
