import React,{useState,useEffect} from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://api.mercadolibre.com/items/MLA881951817')
        .then(response => response.json())
        .then(mlItem =>{
            setProduct(mlItem)
        })
    }, [])
    return (
            <ItemDetail data={product}/>
    )
}

export default ItemDetailContainer
