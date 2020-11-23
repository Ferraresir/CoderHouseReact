import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import img from '../../imagenes/hips.png'
import './home.scss';


//'https://api.mercadolibre.com/sites/MLA/search?category=MLA3697&limit=8'
//
const getProducts = (type) => {
    const serverData = new Promise(resolve => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${type || 'MLA8618'}&limit=8`)
            .then(response => response.json())
            .then(mlData => {
                resolve(mlData.results)
            })
    })
    return (serverData);
}


const Home = ({ gretting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const {type} = useParams('')
    useEffect(() => {
        setLoading(true)
        getProducts(type)
            .then((response) => {
                return (response);
            })
            .then((response) => {
                setProducts(response);
                setLoading(false)
            })
    }, [type]);


    return (
        <>
            <div className="row">
                <div className="gretting w2">
                    <h1>{gretting}</h1>
                    <br />
                    <br />
                </div>
                <div className="w2">
                    <img src={img} alt="" />
                </div>
            </div>
            {loading ? <p>Cargando...</p> : <ItemList products={products} />}


        </>
    )
}

export default Home
