import React from 'react'
import Item from '../Item/Item';
import './itemList.scss'


const ItemList = ({ products}) => {
    const MostrarProductos = () => {
        if (!products) {
            return <p>Cargando...</p>
        }
        const list = products.map((e, index) => {
            return <Item key={index} title={e.title} stock={e.available_quantity} price={e.price} img={e.thumbnail}/>
        })
        return list;
    }

   return (
        <div className="items-row">
            <MostrarProductos/>
        </div>
    )
}

export default ItemList
