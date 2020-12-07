import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import img from '../../imagenes/hips.png';
import { getProducts } from '../../backend/firebase/products';
import './home.scss';

const Home = ({ gretting }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState();
    const { cat } = useParams('name');

    const MostrarSort = () => {
        return (<>
            <label htmlFor="sort">Ordenar Por: </label>
            <select name="sort" id="sort">
                <option onClick={(e) => setSort(e.target.value)} value='name'>Nombre</option>
                <option onClick={(e) => setSort(e.target.value)} value='price'>Precio</option>
            </select>
        </>
        )
    }
    useEffect(() => {
        setLoading(true)
        getProducts(cat)
            .then((response) => {
               response.sort((a, b) => a.name > b.name)
               if (sort === 'price') response.sort((a, b) => a.price - b.price)
                setProducts(response);
                setLoading(false)

            })
    }, [cat, sort]);


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
            {cat ? <MostrarSort /> : ''}
            {loading ? <p>Cargando...</p> : <ItemList products={products} />}


        </>
    )
}

export default Home
