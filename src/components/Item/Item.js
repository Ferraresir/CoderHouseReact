import React from 'react';
import './item.scss'

const Item = ({ price, img, title }) => {
    return (
        <div className="producto">
            <img src={img} alt="" />
            <div className="info">
                <span className="precio"><b>${price}</b></span>
                <span className="title">{title}</span>
                <span className="envio">Envio gratis</span>
            </div>

        </div>
    )
}


export default Item