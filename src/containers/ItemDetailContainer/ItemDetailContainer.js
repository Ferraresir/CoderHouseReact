import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/item-detail/ItemDetail";
import { useParams } from "react-router-dom";
import { getData } from "../../backend/firebase/products";
import {Link} from 'react-router-dom'
import "./ItemDetailContainer.scss";

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
