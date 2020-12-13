import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import { getData } from "../../backend/firebase/products";
import {Link} from 'react-router-dom'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setLoading(true);
    getData(id).then((element) => {
      setProduct({ ...element, id });
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : product.name === undefined ? (
        <div className='noitem'>
          <p >No se encontro el producto que busca, vuelva al catalogo</p><br/>
          <Link to='/'><button>Volver Al Catalogo</button></Link>
        </div>
      ) : (
        <ItemDetail data={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
