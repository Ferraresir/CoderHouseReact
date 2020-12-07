import React, { useState, useContext } from 'react';
import ItemCount from '../../components/itemCount/itemCount';
import './ItemDetail.scss';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({ data }) => {
    const context = useContext(CartContext)
    const [count, setCount] = useState(1)
    const [animation, setAnimation] = useState(0)

    const onAdd = (counter) => {
        setCount(counter)
    }

    const handleBtn = () => {
        context.cambiarData({ data: data, amount: count, price: data.price * count })
    }

    return (
        <div className='itemdetail'>
            <div className="img itm2">
                <img src={data.image} alt="" onAnimationEnd={() => setAnimation(0)} animation={animation} />
            </div>
            <div className="itemdata itm2">
                <h3>{data.name}</h3>
                <p>Precio: {data.price}</p>
                <p>Stock:  {data.stock}</p>
                <p>{data.warranty}</p>
                <div className="compra">
                    <ItemCount initialValue={1} max={10} min={1} onAdd={onAdd} />
                    <button onClick={()=>{handleBtn(); setAnimation(1)}}>Comprar {count}</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
