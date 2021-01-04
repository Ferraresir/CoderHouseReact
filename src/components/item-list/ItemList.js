import React from 'react'
import Item from '../Item/Item';
import './itemList.scss'


const ItemList = ({ products}) => {
    const MostrarProductos = () => {
        const list = products.map((products,index) => {
            return <Item key={index} product={products}/>
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
