import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import img from '../../imagenes/hips.png';
import './home.scss';
import { getFirestore } from '../../firebase';

const db = getFirestore();
const fireData = db.collection('productos');



//'https://api.mercadolibre.com/sites/MLA/search?category=MLA3697&limit=8'
//
const getProducts = async (type) => {
    const serverData = new Promise(resolve => {
        // fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${type || 'MLA430630&limit=12'}&limit=8`)
        //    .then(response => response.json())
        //    .then(mlData => {
        //        resolve(mlData.results)
        //   })
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
    const { type } = useParams('')
    useEffect(() => {
        setLoading(true)
        getProducts(type)
            .then((response) => {
                console.log(response);
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
