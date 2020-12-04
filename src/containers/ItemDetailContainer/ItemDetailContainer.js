import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';
import { getFirestore } from '../../firebase';
const db = getFirestore();
const fireData = db.collection('productos');


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setLoading(true)
        fireData.doc(id).get()
            .then(element => {
                setProduct({...element.data(),id})
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
