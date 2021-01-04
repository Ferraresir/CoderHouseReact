import React, { useState, useEffect } from "react";
import ItemList from "../../components/item-list/ItemList";
import img from "../../imagenes/hips.png";
import { useParams } from "react-router-dom";
import { getProducts } from "../../backend/firebase/products";
import "./home.scss";

const Home = ({ gretting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('name');
  const { cat } = useParams();
  
  const MostrarSort = () => {
    return (
      <>
          <label htmlFor="sort">Ordenar Por: </label>
        <select onChange={(e) => setSort(e.target.value)}  defaultValue={sort} name="sort" id="sort">
          <option value="name">
            Nombre
          </option>
          <option value="price">
            Precio
          </option>
        </select>
      </>
    );
  };
  useEffect(() => {
    setLoading(true);
    getProducts(cat).then((response) => {
     response.sort((a, b) => a.name > b.name ? 1 : -1)
     if (sort === "price") response.sort((a, b) => a.price - b.price)
      setProducts(response);
      setLoading(false);
    });
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
      <br />
      {cat && <MostrarSort />}
      {loading ? <p>Cargando...</p> : <ItemList products={products} />}
    </>
  );
};

export default Home;
