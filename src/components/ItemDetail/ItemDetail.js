import React, { useState } from 'react';
import ItemCount from '../../components/itemCount/itemCount';
import './ItemDetail.scss'

const ItemDetail = ({ data }) => {
    const [count, setCount] = useState(1)

    const onAdd = (counter) => {
        setCount(counter)
    }

    const handleBtn = () => {
        console.log("Esta comprando " + count + " de " + data.id);
    }

    return (
        <div className='itemdetail'>
            <div className="img itm2">
                <img src={data.pictures[0].url} alt="" />
            </div>
            <div className="itemdata itm2">
                <h3>{data.title.substr(0,60)}...</h3>
                <p>Precio: {data.price}</p>
                <p>Stock:  {data.available_quantity} - Vendidos:{data.sold_quantity}</p>
                <p>{data.warranty}</p>
                <div className="compra">
                    <ItemCount initialValue={1} max={10} min={1} onAdd={onAdd} />
                    <button onClick={handleBtn}>Comprar {count}</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
