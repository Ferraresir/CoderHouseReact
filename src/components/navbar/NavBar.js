import React from 'react';
import './navbar.scss';
import Carticon from '../carticon/Carticon';
import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <nav>
            <input type="checkbox" id="res-menu" />
            <label htmlFor="res-menu">
                <div id='burger'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </label>
            <NavLink to="/">
                <h1>CODERMARKET</h1>
            </NavLink>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/">Nosotros</NavLink></li>
                <li className="withsub"><NavLink to="/">Productos</NavLink>
                    <ul className="submenu">
                        <li><NavLink to="/">Auriculares</NavLink></li>
                        <li><NavLink to="/">Mouses</NavLink></li>
                        <li><NavLink to="/">Teclados</NavLink></li>
                        <li><NavLink to="/">Parlantes</NavLink></li>
                    </ul>
                </li>
                <li id='cart'><NavLink to="/checkout"><Carticon /></NavLink></li>
            </ul>
        </nav>
    )
}
export default NavBar
