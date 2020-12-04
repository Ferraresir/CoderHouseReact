import React from 'react';
import './item.scss';
import { Link } from 'react-router-dom'


const Item = ({ product }) => {
    return (
        <Link to={'/item/' + product.id}>
            <div className="producto">
                <img src={product.image} alt="" />
                <div className="info">
                    <span className="precio"><b>${product.price}</b></span>
                    <span className="title">{product.name.substr(0,80)}...</span>
                    <span className="envio">Envio gratis</span>
                </div>

            </div>
        </Link>
    )
}


export default Item