import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import img from '../../imagenes/hips.png';
import { getFirestore } from '../../firebase';
import './home.scss';

const getProducts = (cat, show) => {
    const db = getFirestore();
    let fireData = db.collection('productos').limit(8)
    if (cat) fireData = fireData.where("category_id", "==", `${cat}`)
    const serverData = new Promise(resolve => {
        fireData.get()
            .then(response => response.docs)
            .then(data => {
                const dataarr = data.map(doc => {
                    const item = doc.data()
                    const id = doc.id
                    return ({ id, ...item })
                })
                resolve(dataarr)
            })
    })
    return (serverData);
}


const Home = ({ gretting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { cat } = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts(cat)
            .then((response) => {
                return (response);
            })
            .then((response) => {
                setProducts(response);
                setLoading(false)
            })
    }, [cat]);


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
            {loading ? <p>Cargando...</p> : <ItemList products={products}/>}


        </>
    )
}

export default Home
