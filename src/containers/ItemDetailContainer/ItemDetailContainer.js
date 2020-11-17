import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([]);
    console.log(id);
    useEffect(() => {
        fetch('https://api.mercadolibre.com/items/'+id)
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
