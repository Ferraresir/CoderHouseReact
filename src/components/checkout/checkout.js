import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CustomerForm } from "../customer-form/customerform";
import { CartContext } from "../../context/cartContext";
import { saveOrder } from "../../backend/firebase/orders";
import {Link} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore'
import "./checkout.scss";

const Checkout = () => {
  const context = useContext(CartContext);
  const history = useHistory();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orden, setOrden] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (context.Total === 0) {
      history.push("/");
    }
  }, [history]);

  const pushOrder = (cliente) => {
    const order = {
      cliente,
      total: context.Total,
      items: context.Data,
      estado: "Generado",
      fecha: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    setLoading(true);
    saveOrder(order)
      .then((response) => {
        setMensaje("Compra realizada exitosamente!");
        setOrden(response);
        setStep(2);
        context.deleteAll();
      })
      .catch((error) => {
        setMensaje(
          "Ocurrió un error procesando su pedido, intente nuevamente mas tarde"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading</p>;
  }
  if (step === 1) {
    return (
      <div>
        <CustomerForm onSuccess={pushOrder} />
      </div>
    );
  } else {
    return (
      <div className="checkout-container">
        <h1 className="checkout-title">{mensaje}</h1>
        {orden === "" ? (
          ""
        ) : (
            <div className="checkout-pedido">
              Codigo de Pedido:{" "}
              <span className="checkout-codigo">{orden}</span>
              <br/>
              <button><Link to='/'>Volver</Link></button>
            </div>
          )}
      </div>
    );
  }
};

export default Checkout