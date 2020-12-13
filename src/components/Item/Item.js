import React from "react";
import "./item.scss";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to={"/item/" + product.id}>
      <div className="producto">
        <img src={product.image} alt="" />
        <div className="info">
          <span className="precio">
            <b>${product.price}</b>
          </span>
          <span className="title">{product.name.substr(0, 80)}...</span>
          <span
            className="envio"
            style={
              product.stock > 0
                ? { backgroundColor: "#45a29e" }
                : { backgroundColor: "#eda7a9" }
            }
          >
            {product.stock > 0
              ? "Entrega Inmediata"
              : "No hay Stock en este momento"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Item;
