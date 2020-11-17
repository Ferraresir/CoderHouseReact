import React from 'react';
import './navbar.scss';
import Carticon from '../carticon/Carticon';
import {NavLink} from 'react-router-dom'


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
            <h1>CODERMARKET</h1>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/">Nosotros</NavLink></li>
                <li><NavLink to="/">Productos</NavLink></li>
                <li id='cart'><NavLink to="/"><Carticon/></NavLink></li>
            </ul>
        </nav>
    )
}
export default NavBar
