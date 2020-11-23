import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import img from '../../imagenes/hips.png'
import './home.scss';

const getProducts = () => {
    const serverData = new Promise(resolve => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA3697&limit=8')
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
    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((response) => {
                return (response);
            })
            .then((response) => {
                setProducts(response);
                setLoading(false)
            })
    }, []);


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
