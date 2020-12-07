import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';
import { getData } from '../../backend/firebase/products'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setLoading(true)
        getData(id)
            .then(element => {
                setProduct({...element, id })
                setLoading(false)

            })
    }, [id]);

    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail data={product} />}
        </div>
    )
}

export default ItemDetailContainer
