import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';


const ItemDetailContainer = () => {

    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('https://api.mercadolibre.com/items/' + id)
            .then(response => response.json())
            .then(mlItem => {
                setProduct(mlItem)
                setLoading(false)
            })
    }, [id])

    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail data={product} />}
        </div>
    )
}

export default ItemDetailContainer
