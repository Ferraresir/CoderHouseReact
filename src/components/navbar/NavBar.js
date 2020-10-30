import React from 'react';
import './navbar.scss';
import Carticon from '../carticon/Carticon';


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
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li id='cart'><a href="#"><Carticon/></a></li>
            </ul>
        </nav>
    )
}
export default NavBar
