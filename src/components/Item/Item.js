import React from 'react';
import './item.scss';
import { Link } from 'react-router-dom'


const Item = ({ product }) => {
    return (
        <Link to={'/item/' + product.id}>
            <div className="producto">
                <img src={product.thumbnail} alt="" />
                <div className="info">
                    <span className="precio"><b>${product.price}</b></span>
                    <span className="title">{product.title.substr(0,80)}...</span>
                    <span className="envio">Envio gratis</span>
                </div>

            </div>
        </Link>
    )
}


export default Item