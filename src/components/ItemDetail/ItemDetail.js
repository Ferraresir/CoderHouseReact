import React, { useState } from 'react';
import ItemCount from '../../components/itemCount/itemCount';
import './ItemDetail.scss'



const ItemDetail = ({ data }) => {
    const [count, setCount] = useState()

    const onAdd = (counter) => {
        setCount(counter)
    }

    const handleBtn = () => {
        console.log("Esta comprando " + count + " de " + data.id);
    }

    return (
        <div className='itemdetail'>
            <div className="img itm2">
                <img src={data.thumbnail} alt="" />
            </div>
            <div className="itemdata itm2">
                <h3>{data.title}</h3>
                <p>Precio: {data.price}</p>
                <p>Stock:  {data.available_quantity} - Vendidos:{data.sold_quantity}</p>
                <p>{data.warranty}</p>
                <div className="compra">
                    <ItemCount id="chori" initialValue={1} max={10} min={1} onAdd={onAdd} />
                    <button onClick={handleBtn}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail