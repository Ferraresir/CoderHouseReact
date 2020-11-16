import React, { useState } from 'react';
import ItemCount from '../../components/itemCount/itemCount';
import './ItemDetail.scss'



const ItemDetail = ({ data }) => {

    const onAdd = (counter) => {
        console.log("Esta comprando " + counter + " de " + data.id);
    }

    return (
        <div className='itemdetail'>
            <div className="img itm2">
                <img src="https://http2.mlstatic.com/D_698056-MLA40809199286_022020-O.jpg" alt="" />
            </div>
            <div className="itemdata itm2">
                <h3>{data.title}</h3>
                <p>Precio: {data.price}</p>
                <p>Stock:  {data.available_quantity} - Vendidos:{data.sold_quantity}</p>
                <p>{data.warranty}</p>
                <ItemCount id="chori" initialValue={1} max={10} min={1} onAdd={onAdd}/>                        
            </div>
        </div>
    )
}

export default ItemDetail
