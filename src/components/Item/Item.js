import React from 'react';
import './item.scss';
import {Link} from 'react-router-dom'

const Item = ({id, price, img, title }) => {
    return (
        <Link to={'/item/'+id}>
        <div className="producto">
            <img src={img} alt="" />
            <div className="info">
                <span className="precio"><b>${price}</b></span>
                <span className="title">{title}</span>
                <span className="envio">Envio gratis</span>
            </div>

        </div>
        </Link>
    )
}


export default Item