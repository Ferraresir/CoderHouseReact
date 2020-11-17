import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import img from '../../imagenes/hips.png'
import './home.scss';

const getProducts = () => {
    const serverData = new Promise(resolve => {
        {/* const product = [
                { title: "Auriculares Bluethoth Xiami", price: 4000, thumbnail:"https://d26lpennugtm8s.cloudfront.net/stores/892/141/products/airdots-xiaomi-10241-faab2e8a355fefdcd515838571829242-1024-1024.jpg" },
                { title: "Auriculares Phillips", price: 13299, thumbnail:"https://images.philips.com/is/image/PhilipsConsumer/TAPH802BK_00-IMS-es_AR?wid=420&hei=360&$jpglarge$" },
                { title: "Auriculares Sony", price: 4002, thumbnail:"https://d26lpennugtm8s.cloudfront.net/stores/453/714/products/510w4-38391d029a49d4538315835224011357-1024-1024.jpg" },
                { title: "Auriculares Xsoul", price: 5000, thumbnail:"https://d26lpennugtm8s.cloudfront.net/stores/078/394/products/xh1501-78ebba3528a55265cb15940476890254-1024-1024.jpg"  },
                { title: "Auriculares Trust", price: 5000, thumbnail:"https://ledvideojuegosycomputacion.com.ar/2503-medium_default/auriculares-gamer-trust-gtx-322c-camuflado-azul.jpg" },
                { title: "Auriculares HyperX", price: 5000, thumbnail:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auriculares-hyperx-cloud-ii-red-0.jpg" },
                { title: "Auriculares Sony Sense", price: 5000,  thumbnail:"https://falabella.scene7.com/is/image/FalabellaAR/3023070_1?wid=800&hei=800&qlt=70" },
                { title: "Auriculares Sony ", price: 5000, thumbnail:"https://arsonyb2c.vteximg.com.br/arquivos/ids/339222-1000-1000/5d02da5df552836db894cead8a68f5f3.jpg?v=637323377056430000"  }];
            */}
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
    },[]);

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
            <ItemList products={products} />
        </>
    )
}

export default Home
