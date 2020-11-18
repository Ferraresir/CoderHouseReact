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
    const [products, setProducts] = useState()
    useEffect(() => {
        getProducts()
            .then((response) => {
                return (response);
            })
            .then((response) => {
                setProducts(response);
            })
    }, []);

    const MostrarList = () => {
        if (!products) {
            return <p>Cargando...</p>
        }
        return <ItemList products={products} />
    }

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
        <MostrarList />
    </>
)
}

export default Home
